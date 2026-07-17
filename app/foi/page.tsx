import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Freedom of Information",
  description:
    "How to make a Freedom of Information request to the North Central Development Commission under the FOI Act 2011.",
};

const STEPS = [
  {
    number: "01",
    title: "Write your request",
    body: "Describe the records you seek as specifically as you can — project, period, document type. No reason is required by law.",
  },
  {
    number: "02",
    title: "Send it to the FOI desk",
    body: "By email (with “FOI REQUEST” in the subject) or by letter to the Commission's headquarters in Lafia, addressed to the FOI Desk Officer.",
  },
  {
    number: "03",
    title: "Get a response within 7 days",
    body: "The FOI Act 2011 requires a response within seven days of receipt. Where records are transferred or extended timelines apply, you will be notified in writing.",
  },
];

export default function FoiPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Freedom of Information"
        title="Ask us anything"
        titleMuted="on record."
        lead="Under the Freedom of Information Act 2011, every Nigerian has the right to request public records held by the Commission. Here's how."
      />
      <PageSection>
        <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
          {STEPS.map((s) => (
            <div
              key={s.number}
              className="border border-border bg-white p-6 lg:p-8 hover:border-primary transition-colors duration-300"
            >
              <span className="text-sm font-mono text-primary font-medium block mb-3">
                {s.number}
              </span>
              <h3 className="text-xl lg:text-2xl font-display text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border border-border bg-white p-8 lg:p-10 max-w-xl">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-4">
            <span className="w-8 h-px bg-primary" />
            FOI Desk
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            FOI Desk Officer
            <br />
            {SITE.hq.address}
            <br />
            {SITE.email} — subject line: <strong className="text-foreground">FOI REQUEST</strong>
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            The Commission publishes proactively — check the Resources library
            before filing; the record you want may already be public.
          </p>
        </div>
      </PageSection>
    </PageShell>
  );
}
