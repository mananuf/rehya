import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { StaticForm } from "@/components/site/static-form";

export const metadata: Metadata = {
  title: "Careers — NCDC",
  description:
    "Careers at the North Central Development Commission — current vacancies and the regional talent register.",
};

export default function CareersPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Careers"
        title="Build the region."
        titleMuted="Build your career."
        lead="The Commission recruits openly and on merit. Vacancies are published here first — and only here. We never charge application fees, and we never recruit through agents."
      />
      <PageSection>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="border border-dashed border-border bg-white p-10 lg:p-16 text-center">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                Current vacancies
              </span>
              <h2 className="mt-3 text-3xl font-display text-foreground">
                No open positions right now
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                As a young commission we recruit in phases. Join the talent
                register and you&apos;ll be notified the moment a matching role
                opens.
              </p>
              <p className="mt-8 text-xs text-primary bg-secondary p-4 leading-relaxed max-w-md mx-auto">
                <strong>Beware of fraud:</strong> NCDC does not charge for
                applications and has not authorised any third party to recruit
                on its behalf. Report suspicious offers via our contact page.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-border bg-secondary/50 p-6 lg:p-10">
              <h2 className="text-2xl font-display text-foreground mb-1">
                Talent register
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                Tell us who you are and what you do.
              </p>
              <StaticForm
                fields={[
                  { name: "name", label: "Full name", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  {
                    name: "field",
                    label: "Professional field",
                    type: "select",
                    required: true,
                    placeholder: "Select your field…",
                    options: [
                      "Engineering & Infrastructure",
                      "Agriculture & Environment",
                      "Monitoring & Evaluation",
                      "Finance & Audit",
                      "ICT & Data",
                      "Health & Education",
                      "Administration & Legal",
                      "Communications",
                    ],
                  },
                ]}
                submitLabel="Join the register"
                successTitle="You're on the register."
                successBody="We'll notify you when a role matching your field is advertised."
                footnote="Prototype notice: this demonstration form does not transmit data."
              />
            </div>
          </div>
        </div>
      </PageSection>
    </PageShell>
  );
}
