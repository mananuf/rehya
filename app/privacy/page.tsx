import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — NCDC",
  description:
    "How the North Central Development Commission handles personal data on this website, in line with the Nigeria Data Protection Act 2023.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Legal" title="Privacy" titleMuted="Policy." />
      <PageSection>
        <div className="max-w-2xl space-y-8 text-muted-foreground leading-relaxed">
          <p>
            This policy explains how the North Central Development Commission
            (&ldquo;the Commission&rdquo;) handles personal data collected
            through this website, in line with the Nigeria Data Protection Act
            2023 (NDPA).
          </p>
          <div>
            <h2 className="text-2xl font-display text-foreground mb-3">What we collect</h2>
            <p>
              Information you submit through our forms — enquiries, citizen
              project reports, the talent register — and standard technical
              logs (IP address, browser type) needed to keep the site secure.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-display text-foreground mb-3">How we use it</h2>
            <ul className="space-y-2">
              {[
                "To respond to enquiries and process reports",
                "To administer recruitment and vendor engagement",
                "To protect the website and its users",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We do not sell personal data, and we do not share it outside
              government except where the law requires.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-display text-foreground mb-3">Anonymous reporting</h2>
            <p>
              Citizen project reports may be submitted without contact details.
              Where contact details are provided, they are visible only to the
              monitoring &amp; evaluation team handling the report.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-display text-foreground mb-3">Your rights</h2>
            <p>
              Under the NDPA you may request access to, correction of, or
              deletion of your personal data. Contact the Commission&apos;s
              data protection desk via the contact page.
            </p>
          </div>
          <p className="text-sm italic">
            Prototype notice: this demonstration site does not transmit or
            store form submissions.
          </p>
        </div>
      </PageSection>
    </PageShell>
  );
}
