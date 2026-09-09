import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the Renewed Hope Youth Engagement website.",
};

const SECTIONS = [
  {
    title: "Content",
    body: "Content is provided for public information. While we work to keep it accurate and current, entries marked “Sample” are illustrative demonstrations, not records of activities that have taken place. Where this site names a public office holder, it records the office held and nothing more.",
  },
  {
    title: "Use of materials",
    body: "Documents and news content published here may be reproduced with attribution to the programme, except where third-party rights are indicated.",
  },
  {
    title: "Misrepresentation",
    body: "Impersonating the programme — including fraudulent appointment notices, recruitment offers, or demands for payment in its name — is a criminal offence. Participation is free at every level. Verify all notices against this website and report suspicious activity via the Report page.",
  },
  {
    title: "Liability",
    body: "The programme is not liable for losses arising from reliance on content of external sites linked from this website.",
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
            by the Renewed Hope Youth Engagement, a national youth
            mobilisation platform operating under the Renewed Hope Agenda. It is
            not a government agency.
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
