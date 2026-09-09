"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PATRONS, PROGRAMME_LEADERSHIP, type Leader } from "@/lib/content";

const patrons = PATRONS.filter((l) => l.verified);
const coordinators = PROGRAMME_LEADERSHIP.filter((l) => l.verified);

function initials(name: string) {
  return (
    name
      .replace(
        /^(Vice President|President|Barr\.|Dr\.|Prof\.|Sen\.|Engr\.|Amb\.|Princess|Chief|Alhaji)\s+/i,
        ""
      )
      .split(" ")
      .filter((w) => /^[A-Z]/.test(w))
      .slice(0, 2)
      .map((w) => w[0])
      .join("") || "RH"
  );
}

function LeaderCard({
  leader,
  index,
  isVisible,
}: {
  leader: Leader;
  index: number;
  isVisible: boolean;
}) {
  return (
    <Link
      href="/about/leadership"
      className={`group relative text-left p-6 lg:p-8 border border-border bg-white hover:border-primary hover:bg-white transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 75}ms` : "0ms" }}
    >
      <div className="w-14 h-14 flex items-center justify-center bg-secondary text-primary font-display text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {initials(leader.name)}
      </div>
      <h3 className="text-xl lg:text-2xl font-display text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
        {leader.name}
      </h3>
      <p className="text-sm text-muted-foreground font-medium mb-4">
        {leader.role}
      </p>
      <span className="text-xs font-mono text-primary uppercase tracking-wider">
        {leader.represents}
      </span>
    </Link>
  );
}

export function LeadershipSection() {
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

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-secondary overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="relative mb-16 lg:mb-20">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-8">
              <span className="w-12 h-px bg-primary" />
              Leadership
            </span>
          </div>

          <h2
            className={`text-6xl md:text-7xl lg:text-8xl font-display tracking-tight leading-[0.85] text-foreground transition-all duration-1000 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
          >
            <span className="block">Under the Renewed Hope Agenda.</span>
            <span className="block text-muted-foreground">
              Delivered at ward level.
            </span>
          </h2>

          <p
            className={`mt-6 max-w-2xl text-lg text-muted-foreground transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            The programme takes its name and policy direction from the Renewed
            Hope Agenda of the Federal Government, and works alongside the
            national leadership of the All Progressives Congress.
          </p>
        </div>

        {/* National leadership */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-primary">
            <span className="w-8 h-px bg-primary" />
            The Presidency &amp; APC National Leadership
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {patrons.map((leader, index) => (
            <LeaderCard
              key={leader.slug}
              leader={leader}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground max-w-3xl">
          Offices held as of the party&apos;s national convention in March 2026.
          Listing an office here records the leadership under whose agenda the
          programme operates; it is not a claim of individual endorsement.
        </p>

        {/* Programme leadership */}
        <div className="mt-16 lg:mt-20 mb-6">
          <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-primary">
            <span className="w-8 h-px bg-primary" />
            Programme Coordination
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {coordinators.map((leader, index) => (
            <LeaderCard
              key={leader.slug}
              leader={leader}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Link */}
        <div
          className={`mt-10 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            href="/about/leadership"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            Meet the full leadership
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
