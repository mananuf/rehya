import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { StaticForm } from "@/components/site/static-form";
import { STATES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Report an Issue",
  description:
    "Report anyone demanding money in the programme's name, misconduct by a coordinator, or impersonation of RHYE — anonymously if you prefer.",
};

const STEPS = [
  {
    number: "01",
    title: "Tell us where",
    body: "The state, the local government area and the community — and the activity or position involved, if you know it.",
  },
  {
    number: "02",
    title: "Tell us what",
    body: "A demand for payment, someone claiming a position they do not hold, misconduct by a coordinator, or conduct that breaches the peace and non-violence charge.",
  },
  {
    number: "03",
    title: "We act",
    body: "Reports are triaged at the National Secretariat and checked with the relevant state coordinating unit. You can remain anonymous.",
  },
];

export default function ReportPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Report an Issue"
        title="You see it."
        titleMuted="We act on it."
        lead="Participation in this programme is free, at every level. If someone demands money in its name, claims a position they do not hold, or breaches the charge against violence and hate speech, report it here — anonymously if you prefer. Every report reaches the National Secretariat."
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
                    placeholder: "e.g. Jos North LGA, Nassarawa Gwong",
                  },
                  {
                    name: "activity",
                    label: "Activity or position involved",
                    type: "text",
                    placeholder: "If known — e.g. ward coordinator, training event",
                  },
                  {
                    name: "details",
                    label: "What did you observe?",
                    type: "textarea",
                    required: true,
                    placeholder:
                      "Describe what happened — dates, names or positions claimed, amounts demanded, anything that helps us verify.",
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
                successBody="Your report has been logged for the National Secretariat. If you provided contact details, we may reach out to verify — your identity is never shared with the person reported."
                footnote="Prototype notice: this demonstration form does not transmit data. In production, reports are encrypted and routed to the National Secretariat."
              />
            </div>
          </div>
        </div>
      </PageSection>
    </PageShell>
  );
}
