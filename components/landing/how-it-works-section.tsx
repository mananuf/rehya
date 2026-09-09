"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Vote, 
  Handshake, 
  Users, 
  Laptop, 
  GraduationCap, 
  Sprout, 
  Briefcase, 
  HeartHandshake 
} from "lucide-react";

const focusAreas = [
  { number: "01", title: "Civic Engagement", subtitle: "& Governance", icon: Vote },
  { number: "02", title: "Peace", subtitle: "& Non-Violence", icon: Handshake },
  { number: "03", title: "Leadership", subtitle: "& Capacity Building", icon: Users },
  { number: "04", title: "Digital Skills", subtitle: "& Innovation", icon: Laptop },
  { number: "05", title: "Education", subtitle: "& Student Support", icon: GraduationCap },
  { number: "06", title: "Agriculture", subtitle: "& Agripreneurship", icon: Sprout },
  { number: "07", title: "Enterprise", subtitle: "& Employment", icon: Briefcase },
  { number: "08", title: "Inclusion", subtitle: "Young Women & PWDs", icon: HeartHandshake },
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
              Our Pillars
            </span>
          </div>
          
          <h2 className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.85] text-foreground transition-all duration-1000 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}>
            <span className="block">Eight pillars</span>
            <span className="block text-muted-foreground">of engagement.</span>
          </h2>
          <p className={`mt-6 max-w-2xl text-lg text-muted-foreground transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
Every activity the programme runs falls under one of eight pillars — from civic engagement and peace to skills, agriculture, enterprise and inclusion.
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
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <area.icon className="w-8 h-8 text-primary stroke-[1.5]" />
              </div>

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
