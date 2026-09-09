import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import {
  PROJECTS,
  STATUS_LABELS,
  getFocusArea,
  getProject,
  getState,
} from "@/lib/content";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.name}`, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const state = getState(project.state);
  const sector = getFocusArea(project.sector);

  const facts = [
    { label: "Status", value: STATUS_LABELS[project.status] },
    { label: "Reach", value: project.reach },
    { label: "Progress", value: `${project.progress}%` },
    { label: "Pillar", value: sector?.name ?? project.sector, href: `/what-we-do#${project.sector}` },
    { label: "State", value: state?.name ?? project.state, href: `/states/${project.state}` },
    { label: "LGA", value: project.lga },
  ];

  return (
    <PageShell>
      <PageHeader
        eyebrow={`${state?.name ?? ""} · ${project.lga} LGA`}
        title={project.name}
        lead={project.summary}
      />

      <PageSection>
        {project.sample && (
          <p className="mb-8 inline-flex text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-dashed border-border px-3 py-1.5 rounded-full">
            Sample — for demonstration
          </p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {facts.map((f) => (
            <div key={f.label} className="border border-border bg-white p-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-2">
                {f.label}
              </span>
              {f.href ? (
                <Link
                  href={f.href}
                  className="text-xl font-display text-primary hover:underline"
                >
                  {f.value}
                </Link>
              ) : (
                <span className="text-xl font-display text-foreground">
                  {f.value}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 border border-border bg-white p-6 lg:p-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              Delivery progress
            </span>
            <span className="text-2xl font-display text-foreground">
              {project.progress}%
            </span>
          </div>
          <div
            role="progressbar"
            aria-valuenow={project.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-1.5 bg-muted overflow-hidden"
          >
            <div
              className="h-full bg-primary"
              style={{ width: `${project.progress}%` }}
            />
          </div>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Field-verified progress reporting — photos, GPS-stamped inspections
            and milestone evidence — will be published here as the
            Commission&apos;s project assurance system comes online.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white text-foreground px-8 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            All projects
          </Link>
          <Link
            href="/report"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-8 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Report an issue with this project
          </Link>
        </div>
      </PageSection>
    </PageShell>
  );
}
