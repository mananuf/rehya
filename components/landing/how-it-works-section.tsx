"use client";

import { useEffect, useRef, useState } from "react";

const focusAreas = [
  { number: "01", title: "Infrastructure", subtitle: "& Connectivity", icon: "🛣️" },
  { number: "02", title: "Agriculture", subtitle: "& Food Security", icon: "🌾" },
  { number: "03", title: "Peace, Security", subtitle: "& Rehabilitation", icon: "🕊️" },
  { number: "04", title: "Health", subtitle: "Systems", icon: "🏥" },
  { number: "05", title: "Education", subtitle: "& Human Capital", icon: "📚" },
  { number: "06", title: "Solid Minerals", subtitle: "Development", icon: "⛏️" },
  { number: "07", title: "Ecology", subtitle: "& Erosion Control", icon: "🌱" },
  { number: "08", title: "Youth, Women", subtitle: "& Innovation", icon: "💡" },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // No auto-rotation needed

  return (
    <section
      id="focus-areas"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="relative mb-16 lg:mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-8">
              <span className="w-12 h-px bg-primary" />
              Our Focus Areas
            </span>
          </div>
          
          <h2 className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.85] text-foreground transition-all duration-1000 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}>
            <span className="block">Eight pillars</span>
            <span className="block text-muted-foreground">of development.</span>
          </h2>
          <p className={`mt-6 max-w-2xl text-lg text-muted-foreground transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            We focus on comprehensive development across infrastructure, agriculture, security, health, education, minerals, ecology, and youth empowerment.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={area.number}
              className={`relative text-left p-6 lg:p-8 border border-border bg-white hover:border-primary hover:bg-secondary transition-all duration-300 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 50}ms` : "0ms" }}
            >
              {/* Icon */}
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{area.icon}</div>

              {/* Number */}
              <span className="text-sm font-mono text-primary font-medium block mb-3">
                {area.number}
              </span>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-display text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {area.title}
              </h3>
              <span className="text-sm text-muted-foreground font-medium block">
                {area.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
