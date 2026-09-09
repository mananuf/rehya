import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { ResourceLibrary } from "@/components/site/resource-library";

export const metadata: Metadata = {
  title: "Resources & Documents",
  description:
    "The RHYE document library — the programme charter, structure framework, code of conduct, policies and reports.",
};

export default function ResourcesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Resources"
        title="The public"
        titleMuted="record."
        lead="The programme's official documents — from the operating charter to the code of conduct and state inauguration reports — published as they are released."
      />
      <PageSection>
        <ResourceLibrary />
      </PageSection>
    </PageShell>
  );
}
