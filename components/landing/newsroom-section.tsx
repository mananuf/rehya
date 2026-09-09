"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { NEWS } from "@/lib/news-data";
import { formatDate } from "@/lib/content";

const articles = NEWS.slice(0, 4);

export function NewsroomSection() {
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
      id="newsroom"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
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
              Newsroom
            </span>
          </div>

          <h2
            className={`text-6xl md:text-7xl lg:text-8xl font-display tracking-tight leading-[0.85] text-foreground transition-all duration-1000 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
          >
            <span className="block">The latest</span>
            <span className="block text-muted-foreground">
              from the programme.
            </span>
          </h2>
        </div>

        {/* Articles list */}
        <div className="border-t border-border">
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/newsroom/${article.slug}`}
              className={`group grid md:grid-cols-12 gap-2 md:gap-8 py-8 border-b border-border items-baseline transition-all duration-700 hover:bg-secondary/50 md:px-4 md:-mx-4 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 75}ms` : "0ms" }}
            >
              <div className="md:col-span-3 flex items-center gap-3">
                <span className="text-xs font-mono text-muted-foreground">
                  {formatDate(article.date)}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-primary bg-secondary px-2 py-0.5 rounded-full">
                  {article.tag}
                </span>
              </div>
              <div className="md:col-span-8">
                <h3 className="text-xl lg:text-2xl font-display text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2 max-w-2xl">
                  {article.excerpt}
                </p>
              </div>
              <div className="hidden md:flex md:col-span-1 justify-end">
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Link */}
        <div
          className={`mt-10 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            href="/newsroom"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            All news &amp; announcements
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
