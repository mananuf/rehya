import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { ProjectExplorer } from "@/components/site/project-explorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore NCDC projects across the North Central region — filter by state, focus area and status.",
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ sector?: string; state?: string }>;
}) {
  const { sector, state } = await searchParams;

  return (
    <PageShell>
      <PageHeader
        eyebrow="Project Explorer"
        title="Every project."
        titleMuted="On the record."
        lead="Filter the Commission's project book by state, focus area and status. As delivery scales, this page will carry live, field-verified progress for every intervention."
      />
      <PageSection>
        <ProjectExplorer initialSector={sector ?? ""} initialState={state ?? ""} />
        <p className="mt-10 text-xs text-muted-foreground leading-relaxed">
          Entries marked{" "}
          <span className="font-mono uppercase border border-dashed border-border px-2 py-0.5 rounded-full">
            Sample
          </span>{" "}
          are illustrative prototypes shown for demonstration while the
          Commission&apos;s verified project data is onboarded.
        </p>
      </PageSection>
    </PageShell>
  );
}
