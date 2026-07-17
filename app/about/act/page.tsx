import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "The Establishment Act — NCDC",
  description:
    "The North Central Development Commission (Establishment) Act, 2024 — summary and full PDF download.",
};

const ACT_POINTS = [
  {
    number: "01",
    title: "Establishment & Coverage",
    body: "Establishes the Commission for the North Central states — Benue, Kogi, Kwara, Nasarawa, Niger and Plateau — with functions extending to the region's development challenges.",
  },
  {
    number: "02",
    title: "Core Mandate",
    body: "Coordinate the resettlement, rehabilitation, reintegration and reconstruction of infrastructure for victims of insecurity; tackle poverty, illiteracy and ecological challenges.",
  },
  {
    number: "03",
    title: "Funds & Management",
    body: "Empowers the Commission to receive and manage funds from the Federal Government and international donors for reconstruction and development in the zone.",
  },
  {
    number: "04",
    title: "Oversight of Third Parties",
    body: "Mandates the Commission to assess and report on projects carried out in the zone by mineral and mining companies, oil and gas companies, NGOs and other bodies.",
  },
  {
    number: "05",
    title: "Governance",
    body: "Provides for a Governing Board — Chairman, Managing Director, Executive Directors and members representing the states and geopolitical zones — subject to Senate confirmation.",
  },
  {
    number: "06",
    title: "Accountability",
    body: "Subjects the Commission to appropriation, audit and reporting requirements, aligning its funding with the Constitution's Consolidated Revenue Fund provisions (as amended).",
  },
];

export default function ActPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="The Founding Statute"
        title="The NCDC (Establishment)"
        titleMuted="Act, 2024."
        lead="Signed into law in 2024, the Act is the Commission's constitution — its mandate, governance and accountability framework. Read the summary below or download the full document."
      />

      <PageSection>
        <a
          href="/documents/ncdc-establishment-act-2024.pdf"
          download
          className="inline-flex items-center gap-3 rounded-full bg-primary text-white px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download the Act (PDF, 19 pages)
        </a>
        <p className="mt-3 text-xs text-muted-foreground">
          Official gazette copy. Source: Policy and Legal Advocacy Centre
          (placng.org).
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {ACT_POINTS.map((p) => (
            <div
              key={p.number}
              className="border border-border bg-white p-6 lg:p-8 hover:border-primary transition-colors duration-300"
            >
              <span className="text-sm font-mono text-primary font-medium block mb-3">
                {p.number}
              </span>
              <h3 className="text-xl lg:text-2xl font-display text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground max-w-2xl">
          This summary is provided for convenience only; the PDF is the
          authoritative text. The National Assembly has since passed amendments
          aligning the Commission&apos;s funding sources with constitutional
          requirements.
        </p>
      </PageSection>
    </PageShell>
  );
}
