import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Partners & Suppliers",
  description:
    "How organisations partner with the Renewed Hope Youth Engagement or supply services to its activities, and the standards expected of both.",
};

const PRINCIPLES = [
  {
    number: "01",
    title: "Open Invitation",
    body: "Opportunities to supply or partner are advertised on this page. Nothing is awarded on the basis of a relationship that was never advertised.",
  },
  {
    number: "02",
    title: "Value for Money",
    body: "The programme runs on contributed and sponsored resources. Selection balances cost, quality and delivery capability, and is documented.",
  },
  {
    number: "03",
    title: "No Middlemen",
    body: "The programme charges no fee to bid, to partner, or to be listed as a supplier, and authorises no agent to collect one. Verify every notice against this page.",
  },
];

export default function ProcurementPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Partners &amp; Suppliers"
        title="Open invitations."
        titleMuted="Open process."
        lead="Organisations that want to partner with the programme, sponsor an activity, or supply services to one, start here. RHYE is not a public institution and runs no statutory tender process — but what it does award, it advertises."
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
Open opportunities
          </span>
          <h2 className="mt-3 text-3xl font-display text-foreground">
Nothing is currently advertised
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            Partnership and supply opportunities will be published on this page
            as activities are scheduled. Prospective partners and suppliers can
            register interest via the{" "}
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
