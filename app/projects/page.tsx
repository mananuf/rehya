import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { ProjectExplorer } from "@/components/site/project-explorer";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Explore RHYE programme lines across all 36 states and the FCT — filter by state, pillar and status.",
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
        eyebrow="Programme Explorer"
        title="Every programme."
        titleMuted="On the record."
        lead="Filter the programme book by state, pillar and status. As coordinating units are inaugurated, this page will carry verified progress for every programme line they run."
      />
      <PageSection>
        <ProjectExplorer initialSector={sector ?? ""} initialState={state ?? ""} />
        <p className="mt-10 text-xs text-muted-foreground leading-relaxed">
          Entries marked{" "}
          <span className="font-mono uppercase border border-dashed border-border px-2 py-0.5 rounded-full">
            Sample
          </span>{" "}
          are illustrative placeholders shown for demonstration while verified
          programme data is onboarded from the state coordinating units.
        </p>
      </PageSection>
    </PageShell>
  );
}
