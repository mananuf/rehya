import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { StaticForm } from "@/components/site/static-form";
import { STATES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Report a Project",
  description:
    "Citizen project reporting — flag abandoned works, quality concerns or misconduct on any project in the North Central region, anonymously if you prefer.",
};

const STEPS = [
  {
    number: "01",
    title: "Tell us where",
    body: "The state, LGA and community — and the project name if you know it.",
  },
  {
    number: "02",
    title: "Tell us what",
    body: "Abandoned site, slow progress, poor materials, safety hazard, or suspected misconduct.",
  },
  {
    number: "03",
    title: "We verify",
    body: "Reports are triaged by our M&E team and checked against field inspections. You can remain anonymous.",
  },
];

export default function ReportPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Citizen Reporting"
        title="You see it."
        titleMuted="We act on it."
        lead="Development only works when communities can hold it to account. Use this form to flag an abandoned project, poor-quality work, or misconduct — anonymously if you prefer. Every report reaches the Commission's monitoring & evaluation team."
      />
      <PageSection>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5 space-y-4">
            {STEPS.map((s) => (
              <div key={s.number} className="border border-border bg-white p-6 lg:p-8">
                <span className="text-sm font-mono text-primary font-medium block mb-3">
                  {s.number}
                </span>
                <h2 className="text-xl lg:text-2xl font-display text-foreground mb-2">
                  {s.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-7">
            <div className="border border-border bg-secondary/50 p-6 lg:p-10">
              <StaticForm
                fields={[
                  {
                    name: "state",
                    label: "State",
                    type: "select",
                    required: true,
                    placeholder: "Select a state…",
                    options: STATES.map((s) => s.name),
                  },
                  {
                    name: "community",
                    label: "LGA / Community",
                    type: "text",
                    required: true,
                    placeholder: "e.g. Guma LGA, Daudu",
                  },
                  {
                    name: "project",
                    label: "Project name",
                    type: "text",
                    placeholder: "If known",
                  },
                  {
                    name: "details",
                    label: "What did you observe?",
                    type: "textarea",
                    required: true,
                    placeholder:
                      "Describe what you saw — dates, conditions, anything that helps us verify.",
                  },
                  {
                    name: "contact",
                    label: "Your phone or email",
                    type: "text",
                    placeholder: "Leave blank to remain anonymous",
                  },
                ]}
                submitLabel="Submit report"
                successTitle="Report received. Thank you."
                successBody="Your report has been logged for the Commission's monitoring & evaluation team. If you provided contact details, we may reach out to verify — your identity is never shared."
                footnote="Prototype notice: this demonstration form does not transmit data. In production, reports are encrypted and routed to the M&E directorate."
              />
            </div>
          </div>
        </div>
      </PageSection>
    </PageShell>
  );
}
