import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { StaticForm } from "@/components/site/static-form";
import { SITE, STATES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Renewed Hope Youth Engagement — National Secretariat in Abuja, and coordinating units in all 36 states and the FCT.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Talk to"
        titleMuted="the programme."
        lead="Enquiries, partnerships, media requests, or a route to the coordinating unit in your state — we respond to every message."
      />
      <PageSection>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-foreground text-white p-8">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-[#2FA45B] mb-4">
                <span className="w-8 h-px bg-[#2FA45B]" />
National Secretariat
              </span>
              <p className="text-xl font-display">{SITE.hq.address}</p>
              <p className="mt-4 text-sm text-white/70">
                {SITE.email}
                <br />
                {SITE.phone}
              </p>
            </div>
            <div className="border border-border bg-white p-8">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-4">
                <span className="w-8 h-px bg-primary" />
                Media
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For press enquiries and interview requests, write to the
                communications desk via {SITE.email} with
                &ldquo;MEDIA&rdquo; in the subject line.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="border border-border bg-secondary/50 p-6 lg:p-10">
              <StaticForm
                fields={[
                  { name: "name", label: "Full name", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  {
                    name: "subject",
                    label: "Subject",
                    type: "select",
                    required: true,
                    placeholder: "What is this about?",
                    options: [
                      "General enquiry",
                      "Joining the programme",
                      "Partnership / sponsor",
                      "Media request",
                      "Supplier / vendor",
                      "Reach my state coordinating unit",
                      "Other",
                    ],
                  },
                  { name: "message", label: "Message", type: "textarea", required: true },
                ]}
                submitLabel="Send message"
                successTitle="Message sent. Thank you."
                successBody="Your enquiry has been received. The National Secretariat will respond, or route you to the coordinating unit for your state."
                footnote="Prototype notice: this demonstration form does not transmit data."
              />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection muted>
        <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-8">
          <span className="w-12 h-px bg-primary" />
Coordinating Units
        </span>
        <h2 className="text-4xl md:text-6xl font-display tracking-tight leading-[0.9] text-foreground mb-12">
Across the federation.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {STATES.map((s) => (
            <div key={s.slug} className="border border-border bg-white p-6">
              <p className="font-display text-lg text-foreground">{s.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.office}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </PageShell>
  );
}
