"use client";

import { useEffect, useRef, useState } from "react";

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
  inView: boolean;
}

export default function GlobeComponent({
  states,
  selectedStateId,
  onStateSelect,
  inView,
}: GlobeComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const autoRotateTimeoutRef = useRef<NodeJS.Timeout>();
  const autoRotateIntervalRef = useRef<NodeJS.Timeout>();
  const [hasInteracted, setHasInteracted] = useState(false);
  const prefersReducedMotion = typeof window !== "undefined" 
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  useEffect(() => {
    if (!containerRef.current) return;

    // Dynamic import of globe.gl to avoid SSR issues
    import("globe.gl").then((GlobeGL) => {
      const Globe = GlobeGL.default;

      // Initialize globe with earth texture
      const globe = new Globe()
        .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
        .backgroundColor("#0a0a0a")
        .showAtmosphere(true)
        .atmosphereAltitude(0.18)
        .atmosphereColor("#1B5E2E");

      // Add pins for each state
      globe
        .htmlElementsData(
          states.map((state) => ({
            lat: state.coords[0],
            lng: state.coords[1],
            id: state.id,
            isSelected: state.id === selectedStateId,
            isHQ: state.isHQ,
          }))
        )
        .htmlElement((d: any) => {
          const el = document.createElement("div");
          el.className = "globe-pin";
          el.style.width = d.isHQ ? "16px" : "12px";
          el.style.height = d.isHQ ? "16px" : "12px";
          el.style.borderRadius = "50%";
          el.style.border = "2px solid white";
          el.style.cursor = "pointer";
          el.style.transition = "all 0.3s ease";
          el.style.pointerEvents = "auto";

          if (d.isSelected) {
            el.style.backgroundColor = "#1B5E2E";
            el.style.boxShadow = "0 0 12px rgba(27, 94, 46, 0.8)";
            el.style.width = d.isHQ ? "18px" : "14px";
            el.style.height = d.isHQ ? "18px" : "14px";
          } else {
            el.style.backgroundColor = "#1B5E2E";
            el.style.boxShadow = "0 0 6px rgba(27, 94, 46, 0.6)";
          }

          el.addEventListener("click", () => {
            const state = states.find((s) => s.id === d.id);
            if (state) {
              onStateSelect(state);
              setHasInteracted(true);
              if (autoRotateTimeoutRef.current) {
                clearTimeout(autoRotateTimeoutRef.current);
              }
              if (autoRotateIntervalRef.current) {
                clearInterval(autoRotateIntervalRef.current);
              }
              globeRef.current?.pointOfView(
                { lat: d.lat, lng: d.lng, altitude: 1.2 },
                1200
              );
            }
          });

          return el;
        });

      // Get the DOM element
      const domElement = globe.domElement?.() || (globe as any)._container;
      
      if (domElement && containerRef.current) {
        containerRef.current.appendChild(domElement);
        globeRef.current = globe;

        // Set initial point of view
        globe.pointOfView({ lat: 9.1, lng: 7.5, altitude: 1.9 });

        // Configure controls
        const controls = globe.controls();
        if (controls) {
          controls.enableZoom = false;
          controls.autoRotate = !prefersReducedMotion && !hasInteracted;
          controls.autoRotateSpeed = 0.5;
        }

        // Auto-cycle through states
        if (!prefersReducedMotion && !hasInteracted) {
          let stateIndex = 0;

          const cycleStates = () => {
            if (!hasInteracted && states[stateIndex]) {
              onStateSelect(states[stateIndex]);
              const nextState = states[stateIndex];
              globeRef.current?.pointOfView(
                { lat: nextState.coords[0], lng: nextState.coords[1], altitude: 1.2 },
                1200
              );
              stateIndex = (stateIndex + 1) % states.length;
            }
          };

          autoRotateTimeoutRef.current = setTimeout(() => {
            cycleStates();
            autoRotateIntervalRef.current = setInterval(cycleStates, 5000);
          }, 2000);
        }

        // Handle user interaction
        const handleInteraction = () => {
          if (!hasInteracted) {
            setHasInteracted(true);
            if (globeRef.current?.controls()) {
              globeRef.current.controls().autoRotate = false;
            }
            if (autoRotateTimeoutRef.current) {
              clearTimeout(autoRotateTimeoutRef.current);
            }
            if (autoRotateIntervalRef.current) {
              clearInterval(autoRotateIntervalRef.current);
            }
          }
        };

        const canvas = domElement.querySelector("canvas");
        if (canvas) {
          canvas.addEventListener("mousedown", handleInteraction);
          canvas.addEventListener("touchstart", handleInteraction);
        }

        // Handle resize
        const handleResize = () => {
          if (containerRef.current && globeRef.current) {
            globeRef.current.width(containerRef.current.clientWidth);
            globeRef.current.height(containerRef.current.clientHeight);
          }
        };

        window.addEventListener("resize", handleResize);

        // Return cleanup function
        return () => {
          window.removeEventListener("resize", handleResize);
          if (canvas) {
            canvas.removeEventListener("mousedown", handleInteraction);
            canvas.removeEventListener("touchstart", handleInteraction);
          }
          if (autoRotateTimeoutRef.current) {
            clearTimeout(autoRotateTimeoutRef.current);
          }
          if (autoRotateIntervalRef.current) {
            clearInterval(autoRotateIntervalRef.current);
          }
          if (containerRef.current && domElement && domElement.parentNode === containerRef.current) {
            try {
              containerRef.current.removeChild(domElement);
            } catch (e) {
              // Already removed
            }
          }
        };
      }
    });
  }, [states, selectedStateId, onStateSelect, prefersReducedMotion, hasInteracted]);

  return <div ref={containerRef} className="w-full h-full" />;
}
