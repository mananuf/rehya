import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { ResourceLibrary } from "@/components/site/resource-library";

export const metadata: Metadata = {
  title: "Resources & Documents — NCDC",
  description:
    "The NCDC document library — the Establishment Act, budgets, strategy documents, policies and reports.",
};

export default function ResourcesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Resources"
        title="The public"
        titleMuted="record."
        lead="The Commission's official documents — from the founding Act to budgets, strategy and reports — published as they are released."
      />
      <PageSection>
        <ResourceLibrary />
      </PageSection>
    </PageShell>
  );
}
