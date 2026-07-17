"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/content";

const faqs = FAQS.slice(0, 6);

export function QuestionsSection() {
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
      id="questions"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Header */}
          <div className="lg:col-span-5">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-8">
                <span className="w-12 h-px bg-primary" />
                Questions
              </span>
            </div>

            <h2
              className={`text-6xl md:text-7xl font-display tracking-tight leading-[0.85] text-foreground transition-all duration-1000 delay-100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
            >
              <span className="block">Answers,</span>
              <span className="block text-muted-foreground">up front.</span>
            </h2>

            <p
              className={`mt-6 max-w-sm text-lg text-muted-foreground transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              New commission, clear answers. If yours isn&apos;t here,{" "}
              <Link
                href="/contact"
                className="text-primary underline underline-offset-4 font-medium"
              >
                contact us
              </Link>{" "}
              — we respond to every enquiry.
            </p>
          </div>

          {/* Right: Accordion */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="border border-border bg-white"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.q}
                  value={`item-${index}`}
                  className="px-6 lg:px-8"
                >
                  <AccordionTrigger className="text-left font-display text-lg text-foreground hover:text-primary hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-[0.95rem] pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
