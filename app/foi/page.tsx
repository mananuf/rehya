import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Information Requests",
  description:
    "How to request information about the structure, activities and coordinators of the Renewed Hope Youth Engagement.",
};

const STEPS = [
  {
    number: "01",
    title: "Write your request",
    body: "Describe what you want to know as specifically as you can — the activity, the state or local government, the period, the position. You do not need to give a reason.",
  },
  {
    number: "02",
    title: "Send it to the information desk",
    body: "By email with “INFORMATION REQUEST” in the subject, or by letter to the National Secretariat in Abuja, addressed to the Information Desk.",
  },
  {
    number: "03",
    title: "Get a response",
    body: "The programme aims to respond within seven working days. Where a request has to be routed to a state coordinating unit, you will be told who it went to.",
  },
];

export default function FoiPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Information Requests"
        title="Ask us anything"
        titleMuted="on record."
        lead="RHYE is not a public institution under the Freedom of Information Act 2011, so a statutory FOI request does not apply to it. It answers questions about itself anyway — its structure, its activities and who holds which position. Here is how to ask."
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
            Information Desk
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Information Desk
            <br />
            {SITE.hq.address}
            <br />
            {SITE.email} — subject line: <strong className="text-foreground">INFORMATION REQUEST</strong>
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Check the Resources library and the Charter first — what you want
            may already be published there.
          </p>
        </div>
      </PageSection>
    </PageShell>
  );
}
