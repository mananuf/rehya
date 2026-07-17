import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Image Credits",
  description:
    "Photography credits for imagery used on the NCDC website, licensed via Wikimedia Commons.",
};

const CREDITS = [
  { credit: "“Beautiful formations in Jos Nigeria”, Wikimedia Commons", license: "CC BY 4.0" },
  { credit: "NASA / ISS072-E-95268 — the Niger–Benue confluence at Lokoja, via Wikimedia Commons", license: "Public domain" },
  { credit: "“Road construction, Kafanchan”, Wikimedia Commons", license: "CC BY-SA 4.0" },
  { credit: "“Farmland in Konshisha LGA, Benue State”, Wikimedia Commons", license: "CC BY 4.0" },
  { credit: "“Benue Yams our heritage”, Wikimedia Commons", license: "CC BY-SA 4.0" },
  { credit: "“Banana Market Women at work”, Wikimedia Commons", license: "CC BY-SA 4.0" },
  { credit: "“Introducing digital classroom”, Wikimedia Commons", license: "CC BY-SA 4.0" },
  { credit: "“Zuma Rock in the dry season”, Wikimedia Commons", license: "CC BY-SA 4.0" },
  { credit: "“The City of Jos Plateau State”, Wikimedia Commons", license: "CC BY 4.0" },
  { credit: "“River Niger at Kainji Dam Niger State”, Wikimedia Commons", license: "CC BY-SA 4.0" },
  { credit: "“River Niger at Lokoja”, Wikimedia Commons", license: "CC BY-SA 4.0" },
  { credit: "“A vegetable farm”, Wikimedia Commons", license: "CC BY-SA 4.0" },
];

export default function CreditsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title="Image"
        titleMuted="credits."
        lead="Photography on this prototype is sourced from Wikimedia Commons under the licenses listed below. Production imagery will be replaced with the Commission's own commissioned photography."
      />
      <PageSection>
        <ul className="border border-border bg-white divide-y divide-border">
          {CREDITS.map((c) => (
            <li
              key={c.credit}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 px-6 lg:px-8 py-5"
            >
              <span className="text-sm text-muted-foreground">{c.credit}</span>
              <span className="shrink-0 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {c.license}
              </span>
            </li>
          ))}
        </ul>
      </PageSection>
    </PageShell>
  );
}
