"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";

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

const statesData: StateData[] = [
  {
    id: "benue",
    name: "Benue",
    coords: [7.34, 8.77],
    epithet: "Food Basket of the Nation",
    activities: [
      "Resettlement of displaced farming communities",
      "Agro-industrial clusters development",
      "Agricultural value chains strengthening",
    ],
  },
  {
    id: "kogi",
    name: "Kogi",
    coords: [7.8, 6.74],
    epithet: "The Confluence State",
    activities: [
      "Flood resilience infrastructure",
      "Community mining cooperatives",
      "River management programs",
    ],
  },
  {
    id: "kwara",
    name: "Kwara",
    coords: [8.5, 4.55],
    epithet: "State of Harmony",
    activities: [
      "Youth innovation hubs",
      "Agribusiness incubation centers",
      "Community development projects",
    ],
  },
  {
    id: "nasarawa",
    name: "Nasarawa",
    coords: [8.49, 8.52],
    epithet: "Home of Solid Minerals",
    activities: [
      "National HQ coordination (Lafia)",
      "Responsible mining partnerships",
      "Mineral value chain development",
    ],
    isHQ: true,
  },
  {
    id: "niger",
    name: "Niger",
    coords: [9.93, 6.55],
    epithet: "The Power State",
    activities: [
      "Rehabilitation of conflict-affected communities",
      "Dam-community irrigation projects",
      "Economic recovery programs",
    ],
  },
  {
    id: "plateau",
    name: "Plateau",
    coords: [9.92, 8.9],
    epithet: "Home of Peace and Tourism",
    activities: [
      "Post-conflict reconstruction",
      "Highland agriculture value chains",
      "Tourism infrastructure development",
    ],
  },
  {
    id: "fct",
    name: "FCT",
    coords: [9.06, 7.49],
    epithet: "Centre of Unity",
    activities: [
      "Satellite-town coordination",
      "Regional integration initiatives",
      "Federal partnership programs",
    ],
  },
];

export function WhereWeWorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedState, setSelectedState] = useState<StateData>(statesData[0]);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
            <span className="block">One region.</span>
            <span className="block text-muted-foreground">Seven front lines of development.</span>
          </h2>

          <p className={`mt-6 max-w-2xl text-lg text-muted-foreground transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            Rotate the globe — or let it turn — to explore the six states and the Federal Capital Territory where the Commission works.
          </p>
        </div>

        {/* Main Layout */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          {/* Left: Globe */}
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-lg">
              <GlobeComponent 
                states={statesData}
                selectedStateId={selectedState.id}
                onStateSelect={setSelectedState}
                inView={inView}
              />
              {/* Halo effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

          {/* Right: State Selector & Info Card */}
          <div className="flex flex-col justify-center">
            {/* State Pills */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {statesData.map((state) => (
                  <button
                    key={state.id}
                    onClick={() => setSelectedState(state)}
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
                {selectedState.isHQ && <span className="ml-2 text-primary">★ HQ</span>}
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
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
              >
                Explore {selectedState.name}
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 lg:mt-20 pt-16 lg:pt-20 border-t border-border flex flex-wrap gap-8 lg:gap-16">
          {[
            { value: "7 Locations", label: "Across Nigeria" },
            { value: "121 LGAs", label: "Local Governments" },
            { value: "20M+ People", label: "Direct Reach" },
            { value: "₦140bn", label: "2026 Budget" },
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
