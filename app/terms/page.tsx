import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Terms of Use — NCDC",
  description:
    "Terms of use for the North Central Development Commission website.",
};

const SECTIONS = [
  {
    title: "Content",
    body: "Content is provided for public information. While we work to keep it accurate and current, statutory documents (such as the Establishment Act) are authoritative in their gazetted form. Entries marked “Sample” are illustrative demonstrations, not records of actual projects.",
  },
  {
    title: "Use of materials",
    body: "Official documents and news content may be reproduced with attribution to the Commission, except where third-party rights are indicated.",
  },
  {
    title: "Misrepresentation",
    body: "Impersonating the Commission — including fraudulent recruitment or tender notices — is a criminal offence. Verify all notices against this website and report suspicious activity via the contact page.",
  },
  {
    title: "Liability",
    body: "The Commission is not liable for losses arising from reliance on content of external sites linked from this website.",
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Legal" title="Terms" titleMuted="of Use." />
      <PageSection>
        <div className="max-w-2xl space-y-8 text-muted-foreground leading-relaxed">
          <p>
            By using this website you accept these terms. The site is published
            by the North Central Development Commission, an agency of the
            Federal Republic of Nigeria.
          </p>
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-2xl font-display text-foreground mb-3">
                {s.title}
              </h2>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </PageShell>
  );
}
