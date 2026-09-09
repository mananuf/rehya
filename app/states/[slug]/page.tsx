import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import {
  PROJECTS,
  STATES,
  stateImage,
  STATUS_LABELS,
  getState,
} from "@/lib/content";

export function generateStaticParams() {
  return STATES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const state = getState(slug);
  if (!state) return {};
  return {
    title: `${state.name} — ${state.epithet}`,
    description: state.summary,
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const state = getState(slug);
  if (!state) notFound();

  const projects = PROJECTS.filter((p) => p.state === slug);

  return (
    <PageShell>
      <PageHeader
        eyebrow={state.epithet}
        title={state.name}
        lead={state.summary}
      />

      <PageSection>
        <div className="relative aspect-[21/9] overflow-hidden border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={stateImage(state.slug)}
            alt={`${state.name} state`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-8 lg:gap-16">
          {[
            { value: state.capital, label: "Capital" },
            { value: String(state.lgas), label: "LGAs" },
            { value: String(projects.length), label: "Programmes" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl lg:text-3xl font-display text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-mono mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection muted>
        <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-8">
          <span className="w-12 h-px bg-primary" />
Our Work Here
        </span>
        <h2 className="text-4xl md:text-6xl font-display tracking-tight leading-[0.9] text-foreground mb-12">
What the programme is doing here.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {state.activities.map((a, i) => (
            <div
              key={a}
              className="border border-border bg-white p-6 lg:p-8 hover:border-primary transition-colors duration-300"
            >
              <span className="text-sm font-mono text-primary font-medium block mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {projects.length > 0 && (
        <PageSection>
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-8">
            <span className="w-12 h-px bg-primary" />
            Programmes
          </span>
          <h2 className="text-4xl md:text-6xl font-display tracking-tight leading-[0.9] text-foreground mb-12">
            Programmes in {state.slug === "fct" ? "the FCT" : state.name}.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group flex flex-col border border-border bg-white p-6 lg:p-8 hover:border-primary transition-colors duration-300"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-primary bg-secondary self-start px-2.5 py-1 rounded-full mb-4">
                  {STATUS_LABELS[p.status]}
                </span>
                <h3 className="text-xl font-display text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {p.summary}
                </p>
                <span className="mt-auto pt-4 text-xs font-mono text-muted-foreground">
                  {p.reach} · {p.progress}%
                </span>
              </Link>
            ))}
          </div>
        </PageSection>
      )}

      <PageSection muted>
        <div className="border border-border bg-white p-8 lg:p-10 max-w-lg">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-4">
            <span className="w-8 h-px bg-primary" />
            Contact
          </span>
          <p className="text-xl font-display text-foreground">{state.office}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            General enquiries are routed through the National Secretariat in
            Abuja.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 text-sm"
          >
Contact the programme
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </PageSection>
    </PageShell>
  );
}
