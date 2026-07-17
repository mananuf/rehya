import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Procurement & Tenders — NCDC",
  description:
    "NCDC procurement — open tenders, our procurement principles under the Public Procurement Act 2007, and how to become a vendor.",
};

const PRINCIPLES = [
  {
    number: "01",
    title: "Open Competition",
    body: "Tenders are advertised publicly — on this page and in national dailies — in line with the Public Procurement Act 2007.",
  },
  {
    number: "02",
    title: "Value for Money",
    body: "Evaluation balances cost, quality and delivery capability, documented at every step.",
  },
  {
    number: "03",
    title: "No Middlemen",
    body: "The Commission never charges bid-collection fees through agents. Verify every notice against this page.",
  },
];

export default function ProcurementPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Procurement"
        title="Open tenders."
        titleMuted="Open process."
        lead="Every contract the Commission awards begins here — advertised openly, evaluated on record, and published when awarded."
      />
      <PageSection>
        <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
          {PRINCIPLES.map((p) => (
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

        <div className="mt-6 border border-dashed border-border bg-white p-10 lg:p-16 text-center">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
            Active tenders
          </span>
          <h2 className="mt-3 text-3xl font-display text-foreground">
            No tenders are currently advertised
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            Procurement notices for the 2026 capital programme will be
            published on this page as packages are approved. Prospective
            vendors can register interest via the{" "}
            <Link href="/contact" className="text-primary underline underline-offset-4">
              contact page
            </Link>
            .
          </p>
        </div>
      </PageSection>
    </PageShell>
  );
}
