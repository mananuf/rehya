import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { StaticForm } from "@/components/site/static-form";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers and volunteering with the Renewed Hope Youth Engagement — open roles and the national volunteer register.",
};

export default function CareersPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Careers &amp; Volunteering"
        title="Organise your ward."
        titleMuted="Or your state."
        lead="Roles and volunteer positions are published here first — and only here. The programme never charges an application fee, never charges for a coordinating position, and never recruits through agents."
      />
      <PageSection>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="border border-dashed border-border bg-white p-10 lg:p-16 text-center">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                Current openings
              </span>
              <h2 className="mt-3 text-3xl font-display text-foreground">
No open positions right now
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                Coordinating positions open as state units are inaugurated.
                Join the volunteer register and you&apos;ll be notified when a
                role opens in your state.
              </p>
              <p className="mt-8 text-xs text-primary bg-secondary p-4 leading-relaxed max-w-md mx-auto">
                <strong>Beware of fraud:</strong> RHYE charges nothing for any
                application, appointment or coordinating position, and has
                authorised no third party to recruit on its behalf. Report anyone
                demanding payment via the Report page.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-border bg-secondary/50 p-6 lg:p-10">
              <h2 className="text-2xl font-display text-foreground mb-1">
Volunteer register
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                Tell us who you are and where you are.
              </p>
              <StaticForm
                fields={[
                  { name: "name", label: "Full name", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  {
                    name: "field",
                    label: "Where you can help",
                    type: "select",
                    required: true,
                    placeholder: "Select an area…",
                    options: [
                      "Ward mobilisation",
                      "Civic education & voter awareness",
                      "Peace advocacy & fact-checking",
                      "Digital skills training",
                      "Agriculture & agripreneurship",
                      "Enterprise & employment linkage",
                      "Young women's participation",
                      "Accessibility & inclusion",
                      "Communications & media",
                    ],
                  },
                ]}
                submitLabel="Join the register"
                successTitle="You're on the register."
                successBody="We'll notify you when a role opens in your state. We will never ask you for a fee."
                footnote="Prototype notice: this demonstration form does not transmit data."
              />
            </div>
          </div>
        </div>
      </PageSection>
    </PageShell>
  );
}
