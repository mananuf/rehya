"use client";

import { useEffect, useRef } from "react";

interface StateData {
  id: string;
  name: string;
  coords: [number, number];
  epithet: string;
  activities: string[];
  isHQ?: boolean;
}

interface GlobeComponentProps {
  states: StateData[];
  selectedStateId: string;
  onStateSelect: (state: StateData) => void;
  /** Called on first drag/click of the globe, so the parent can pause auto-cycling. */
  onInteract?: () => void;
}

type PinDatum = {
  lat: number;
  lng: number;
  id: string;
  name: string;
  isHQ?: boolean;
};

/**
 * Brand globe: dark sphere + green hex-dot landmass on a transparent
 * background, pins for the 7 NCDC locations. The globe.gl instance is
 * created exactly once; selection changes only update pins + camera.
 */
export default function GlobeComponent({
  states,
  selectedStateId,
  onStateSelect,
  onInteract,
}: GlobeComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const selectedRef = useRef(selectedStateId);
  const callbacksRef = useRef({ onStateSelect, onInteract });
  callbacksRef.current = { onStateSelect, onInteract };

  // ---------- one-time init ----------
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;
    let cleanupFns: (() => void)[] = [];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    Promise.all([
      import("globe.gl"),
      import("topojson-client"),
      // world-atlas ships plain JSON TopoJSON files
      import("world-atlas/countries-110m.json"),
    ]).then(([GlobeGL, topojson, worldAtlas]) => {
      if (disposed || !containerRef.current) return;

      const Globe = GlobeGL.default;
      const world = (worldAtlas as any).default ?? worldAtlas;
      const land = (topojson.feature(
        world,
        world.objects.countries
      ) as any).features.filter(
        // North Korea's 110m polygon is degenerate for h3-js polygonToCells
        // (throws code 1) — drop that single feature; imperceptible at
        // hex resolution 3.
        (f: any) => f.id !== "408"
      );

      const globe = new Globe(container)
        .width(container.clientWidth)
        .height(container.clientHeight)
        .backgroundColor("rgba(0,0,0,0)")
        .showAtmosphere(true)
        .atmosphereColor("#1B5E2E")
        .atmosphereAltitude(0.18)
        // green hex-dot landmass, no earth texture
        .globeImageUrl(null as any)
        .hexPolygonsData(land)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.72)
        .hexPolygonAltitude(0.006)
        .hexPolygonColor(() => "rgba(47, 164, 91, 0.55)");

      // dark brand sphere
      const globeMaterial = globe.globeMaterial() as any;
      globeMaterial.color.set("#0c1810");
      globeMaterial.emissive?.set?.("#0a0f0b");
      globeMaterial.emissiveIntensity = 0.05;

      // pins (HTML markers)
      globe
        .htmlElementsData(
          states.map<PinDatum>((s) => ({
            lat: s.coords[0],
            lng: s.coords[1],
            id: s.id,
            name: s.name,
            isHQ: s.isHQ,
          }))
        )
        .htmlAltitude(0.02)
        .htmlElement((d: any) => {
          const pin = d as PinDatum;
          const el = document.createElement("button");
          el.type = "button";
          el.dataset.stateId = pin.id;
          el.setAttribute("aria-label", `View ${pin.name}`);
          el.style.cssText =
            "background:none;border:none;padding:0;cursor:pointer;pointer-events:auto;transform:translate(-50%,-50%);";
          el.innerHTML = `
            <span style="display:flex;flex-direction:column;align-items:center;gap:5px;">
              <span data-dot style="
                display:block;border-radius:9999px;
                border:2px solid rgba(255,255,255,0.9);
                transition:all .3s ease;
              "></span>
              <span data-label style="
                font-family:var(--font-jetbrains),monospace;font-size:10px;
                letter-spacing:.12em;text-transform:uppercase;color:#fff;
                background:rgba(10,15,11,.85);border:1px solid rgba(47,164,91,.5);
                padding:2px 8px;border-radius:9999px;white-space:nowrap;
                transition:opacity .3s ease;
              ">${pin.name}${pin.isHQ ? " ★" : ""}</span>
            </span>`;
          el.addEventListener("click", () => {
            const state = states.find((s) => s.id === pin.id);
            if (state) {
              callbacksRef.current.onInteract?.();
              callbacksRef.current.onStateSelect(state);
            }
          });
          stylePin(el, pin, pin.id === selectedRef.current);
          return el;
        });

      globe.pointOfView({ lat: 9.1, lng: 7.5, altitude: 1.9 }, 0);

      const controls = globe.controls();
      controls.enableZoom = false;
      controls.autoRotate = !prefersReducedMotion;
      controls.autoRotateSpeed = 0.5;

      // pause auto-rotate on user drag
      const handleInteraction = () => {
        controls.autoRotate = false;
        callbacksRef.current.onInteract?.();
      };
      const canvas = container.querySelector("canvas");
      canvas?.addEventListener("pointerdown", handleInteraction);
      cleanupFns.push(() =>
        canvas?.removeEventListener("pointerdown", handleInteraction)
      );

      // responsive sizing
      const ro = new ResizeObserver(() => {
        if (!containerRef.current) return;
        globe.width(containerRef.current.clientWidth);
        globe.height(containerRef.current.clientHeight);
      });
      ro.observe(container);
      cleanupFns.push(() => ro.disconnect());

      globeRef.current = globe;
      // apply current selection styling once ready
      updatePinStyles(container, selectedRef.current);
    });

    return () => {
      disposed = true;
      cleanupFns.forEach((fn) => fn());
      if (globeRef.current) {
        globeRef.current._destructor?.();
        globeRef.current = null;
      }
      if (container) container.innerHTML = "";
    };
    // init exactly once — selection changes are handled below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---------- selection updates (no re-init) ----------
  useEffect(() => {
    selectedRef.current = selectedStateId;
    const container = containerRef.current;
    if (container) updatePinStyles(container, selectedStateId);

    const globe = globeRef.current;
    const state = states.find((s) => s.id === selectedStateId);
    if (globe && state) {
      globe.pointOfView(
        { lat: state.coords[0], lng: state.coords[1], altitude: 1.6 },
        1200
      );
    }
  }, [selectedStateId, states]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-hidden [&_canvas]:!outline-none [&_canvas]:max-w-full [&_canvas]:max-h-full"
      role="img"
      aria-label="Rotating globe showing NCDC locations across the North Central region"
    />
  );
}

/* ---------- pin styling helpers ---------- */

function stylePin(el: HTMLElement, pin: PinDatum, selected: boolean) {
  const dot = el.querySelector<HTMLElement>("[data-dot]");
  const label = el.querySelector<HTMLElement>("[data-label]");
  if (!dot || !label) return;
  const base = pin.isHQ ? 16 : 12;
  const size = selected ? base + 4 : base;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  dot.style.backgroundColor = selected ? "#2FA45B" : "#1B5E2E";
  dot.style.boxShadow = selected
    ? "0 0 18px 4px rgba(47, 164, 91, 0.75)"
    : "0 0 8px 2px rgba(27, 94, 46, 0.5)";
  label.style.opacity = selected ? "1" : "0";
}

function updatePinStyles(container: HTMLElement, selectedId: string) {
  container
    .querySelectorAll<HTMLElement>("[data-state-id]")
    .forEach((el) => {
      const id = el.dataset.stateId!;
      const dot = el.querySelector<HTMLElement>("[data-dot]");
      if (!dot) return;
      const isHQ = el.getAttribute("aria-label")?.includes("Nasarawa");
      stylePin(
        el,
        { id, name: "", lat: 0, lng: 0, isHQ: !!isHQ },
        id === selectedId
      );
    });
}
