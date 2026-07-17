import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { PROJECTS, STATES, STATE_IMAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "States & FCT",
  description:
    "The six states and the Federal Capital Territory where the North Central Development Commission works.",
};

export default function StatesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Where We Work"
        title="Six states."
        titleMuted="Plus the capital."
        lead="Each state page carries the Commission's activities, projects and liaison office for that state."
      />
      <PageSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {STATES.map((s) => {
            const count = PROJECTS.filter((p) => p.state === s.slug).length;
            return (
              <Link
                key={s.slug}
                href={`/states/${s.slug}`}
                className="group flex flex-col border border-border bg-white overflow-hidden hover:border-primary transition-colors duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={STATE_IMAGES[s.slug]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {s.isHq && (
                    <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider bg-primary text-white px-2.5 py-1 rounded-full">
                      HQ ★
                    </span>
                  )}
                </div>
                <div className="flex flex-col flex-1 p-6 lg:p-8">
                  <h2 className="text-2xl font-display text-foreground group-hover:text-primary transition-colors duration-300">
                    {s.name}
                  </h2>
                  <span className="mt-1 text-[10px] font-mono uppercase tracking-wider text-primary">
                    {s.epithet}
                  </span>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {s.summary}
                  </p>
                  <p className="mt-auto pt-4 text-xs font-mono text-muted-foreground">
                    {s.capital} · {s.lgas} LGAs · {count} project
                    {count === 1 ? "" : "s"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </PageSection>
    </PageShell>
  );
}
