import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { FOCUS_AREAS, PROJECTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Pillars",
  description:
    "The programme's eight pillars — civic engagement, peace, leadership, digital skills, education, agriculture, enterprise and inclusion.",
};

export default function WhatWeDoPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Our Pillars"
        title="Eight pillars."
        titleMuted="One mission."
        lead="Every activity the programme runs falls under one of eight pillars, so that work is comparable across all 37 coordinating units."
      />

      <PageSection>
        <div className="space-y-4 lg:space-y-6">
          {FOCUS_AREAS.map((area, i) => {
            const count = PROJECTS.filter((p) => p.sector === area.slug).length;
            return (
              <article
                key={area.slug}
                id={area.slug}
                className="scroll-mt-32 border border-border bg-white p-6 lg:p-10 grid lg:grid-cols-12 gap-8 hover:border-primary transition-colors duration-300"
              >
                <div className="lg:col-span-7">
                  <span className="text-sm font-mono text-primary font-medium block mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-display text-foreground mb-3">
                    {area.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                  {count > 0 && (
                    <Link
                      href={`/projects?sector=${area.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 text-sm"
                    >
                      {count} project{count > 1 ? "s" : ""} in this area
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
                <div className="lg:col-span-5 bg-secondary p-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary block mb-4">
                    Programmes
                  </span>
                  <ul className="space-y-3">
                    {area.programmes.map((pr) => (
                      <li
                        key={pr}
                        className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {pr}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </PageSection>
    </PageShell>
  );
}
