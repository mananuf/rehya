"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, FileText, FolderOpen, Flag } from "lucide-react";

const items = [
  {
    icon: FileText,
    title: "The Programme Charter",
    description:
      "How the programme is organised, what it does, and the conduct required of every coordinator.",
    cta: "Read the charter",
    href: "/about/charter",
  },
  {
    icon: FolderOpen,
    title: "Documents & Guides",
    description:
      "The structure framework, code of conduct, pillar guide and state inauguration reports.",
    cta: "Open the library",
    href: "/resources",
  },
  {
    icon: Flag,
    title: "Report an Issue",
    description:
      "Someone demanding money in the programme's name? Misconduct by a coordinator? Tell us — anonymously if you prefer.",
    cta: "Send a report",
    href: "/report",
  },
];

export function TransparencySection() {
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
      id="resources"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-white overflow-hidden noise-overlay"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="relative mb-16 lg:mb-20">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-[#2FA45B] mb-8">
              <span className="w-12 h-px bg-[#2FA45B]" />
              Accountability
            </span>
          </div>

          <h2
            className={`text-6xl md:text-7xl lg:text-8xl font-display tracking-tight leading-[0.85] text-white transition-all duration-1000 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
          >
            <span className="block">Public trust.</span>
            <span className="block text-white/40">Public record.</span>
          </h2>

          <p
            className={`mt-6 max-w-2xl text-lg text-white/60 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
The programme asks young Nigerians for their time and their trust. What it is,
            how it is structured, and how it conducts itself belong on the public
            record — here.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {items.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative p-6 lg:p-8 border border-white/10 bg-white/[0.03] hover:border-[#2FA45B]/60 hover:bg-white/[0.06] transition-all duration-300 flex flex-col ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 75}ms` : "0ms" }}
            >
              <item.icon className="w-8 h-8 text-[#2FA45B] stroke-[1.5] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl lg:text-2xl font-display text-white mb-3 group-hover:text-[#2FA45B] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-8">
                {item.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#2FA45B]">
                {item.cta}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
