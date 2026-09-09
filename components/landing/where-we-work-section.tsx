"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { STATES } from "@/lib/content";

const GlobeComponent = dynamic(
  () => import("@/components/landing/globe-component"),
  { ssr: false, loading: () => <div className="bg-muted rounded-lg h-full min-h-[500px]" /> }
);

interface StateData {
  id: string;
  name: string;
  coords: [number, number];
  epithet: string;
  activities: string[];
  isHQ?: boolean;
}

/** All 37 coordinating units — 36 states plus the FCT — from the shared dataset. */
const statesData: StateData[] = STATES.map((s) => ({
  id: s.slug,
  name: s.name,
  coords: [s.lat, s.lng],
  epithet: s.epithet,
  activities: s.activities,
  ...(s.isHq ? { isHQ: true } : {}),
}));

export function WhereWeWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedState, setSelectedState] = useState<StateData>(statesData[0]);
  const [inView, setInView] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-cycle through the states every 5s until the user interacts
  useEffect(() => {
    if (hasInteracted || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setSelectedState((current) => {
        const idx = statesData.findIndex((s) => s.id === current.id);
        return statesData[(idx + 1) % statesData.length];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [hasInteracted, inView]);

  return (
    <section
      id="states"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="relative mb-16 lg:mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-8">
              <span className="w-12 h-px bg-primary" />
              Where We Work
            </span>
          </div>

          <h2 className={`text-6xl md:text-7xl lg:text-8xl font-display tracking-tight leading-[0.85] text-foreground transition-all duration-1000 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}>
            <span className="block">One country.</span>
            <span className="block text-muted-foreground">37 coordinating units.</span>
          </h2>

          <p className={`mt-6 max-w-2xl text-lg text-muted-foreground transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            Rotate the globe — or let it turn — to explore the 36 states and the Federal Capital Territory where the programme has a coordinating unit.
          </p>
        </div>

        {/* Main Layout */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          {/* Left: Globe */}
          <div className="flex items-center justify-center min-w-0">
            <div className="relative w-full aspect-square max-w-lg overflow-hidden">
              <GlobeComponent 
                states={statesData}
                selectedStateId={selectedState.id}
                onStateSelect={(state) => {
                  setHasInteracted(true);
                  setSelectedState(state);
                }}
                onInteract={() => setHasInteracted(true)}
              />
              {/* Halo effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

          {/* Right: State Selector & Info Card */}
          <div className="flex flex-col justify-center min-w-0">
            {/* State Pills */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {statesData.map((state) => (
                  <button
                    key={state.id}
                    onClick={() => {
                      setHasInteracted(true);
                      setSelectedState(state);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 ${
                      selectedState.id === state.id
                        ? "bg-primary text-white shadow-lg"
                        : "bg-muted text-foreground hover:bg-secondary border border-border"
                    }`}
                  >
                    {state.name}
                    {state.isHQ && <span className="ml-1">★</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-white border border-border rounded-lg p-8 shadow-sm transition-all duration-300">
              {/* Epithet Label */}
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-secondary rounded-full">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-xs font-mono text-primary font-medium">{selectedState.epithet}</span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-display text-foreground mb-6">
                {selectedState.name}
                {selectedState.isHQ && (
                  <span className="ml-2 text-primary">★ National Secretariat</span>
                )}
              </h3>

              {/* Activities */}
              <ul className="space-y-3 mb-8">
                {selectedState.activities.map((activity, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                href={`/states/${selectedState.id}`}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
              >
                Explore {selectedState.name}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 lg:mt-20 pt-16 lg:pt-20 border-t border-border flex flex-wrap gap-8 lg:gap-16">
          {[
            { value: "37 Units", label: "States + FCT" },
            { value: "774 LGAs", label: "Local Governments" },
            { value: "8,809 Wards", label: "Registration Areas" },
            { value: "6 Zones", label: "Geopolitical Zones" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl lg:text-3xl font-display text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-mono mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
