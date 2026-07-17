import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us — NCDC",
  description:
    "Who we are: the North Central Development Commission's mandate, mission, vision and establishment under the NCDC Act, 2024.",
};

const VALUES = [
  {
    number: "01",
    title: "Verified Delivery",
    body: "Every project we report is one we can show — on the ground, with evidence.",
  },
  {
    number: "02",
    title: "Community First",
    body: "Interventions begin with the communities they serve, from planning to handover.",
  },
  {
    number: "03",
    title: "Prudence",
    body: "Public funds managed with discipline, audited openly, accounted for fully.",
  },
  {
    number: "04",
    title: "Partnership",
    body: "We complement states, LGAs, federal ministries and development partners — never duplicate them.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About the Commission"
        title="Born of an Act."
        titleMuted="Built for a region."
        lead="The North Central Development Commission is a Federal Government agency established by the North Central Development Commission (Establishment) Act, 2024."
      />

      <PageSection>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Nigeria&apos;s North Central zone — Benue, Kogi, Kwara, Nasarawa,
              Niger and Plateau States, together with the Federal Capital
              Territory — is the country&apos;s food basket, its mineral belt
              and its geographic heart. It is also a region carrying deep
              scars: communities displaced by banditry and farmer-herder
              conflict, infrastructure worn down by neglect, and ecological
              pressures along the Niger–Benue river system.
            </p>
            <p>
              The Commission exists to change that trajectory. Our founding Act
              charges us to coordinate the resettlement, rehabilitation,
              reintegration and reconstruction of communities affected by
              insecurity; to tackle poverty, illiteracy and ecological
              challenges; and to harness the region&apos;s vast agricultural
              and mineral resources for inclusive growth.
            </p>
            <p>
              We are headquartered in {SITE.hq.city}, {SITE.hq.state}, and work
              through liaison offices across the member states and the FCT — in
              partnership with state governments, traditional institutions,
              federal ministries and development partners.
            </p>

            <figure className="border-l-2 border-primary pl-6 py-2 mt-10">
              <blockquote className="text-2xl lg:text-3xl font-display text-foreground leading-snug">
                “{SITE.presidentQuote.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {SITE.presidentQuote.author}
                </span>
                <br />
                {SITE.presidentQuote.note}
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="border border-border bg-white p-8">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-4">
                <span className="w-8 h-px bg-primary" />
                Our Mission
              </span>
              <p className="text-muted-foreground leading-relaxed">
                To deliver verified, community-centred development across the
                North Central region — rebuilding what was lost, and building
                what comes next.
              </p>
            </div>
            <div className="border border-border bg-white p-8">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-4">
                <span className="w-8 h-px bg-primary" />
                Our Vision
              </span>
              <p className="text-muted-foreground leading-relaxed">
                A peaceful, prosperous North Central — the food basket, the
                mineral belt and the connective heart of Nigeria.
              </p>
            </div>
            <div className="bg-foreground text-white p-8">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-[#2FA45B] mb-4">
                <span className="w-8 h-px bg-[#2FA45B]" />
                The Act
              </span>
              <p className="text-white/70 leading-relaxed text-sm mb-6">
                Read the Commission&apos;s founding statute — the NCDC
                (Establishment) Act, 2024.
              </p>
              <Link
                href="/about/act"
                className="inline-flex items-center gap-2 text-[#2FA45B] font-medium hover:gap-3 transition-all duration-300"
              >
                View &amp; download
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection muted>
        <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-8">
          <span className="w-12 h-px bg-primary" />
          Our Values
        </span>
        <h2 className="text-4xl md:text-6xl font-display tracking-tight leading-[0.9] text-foreground mb-12">
          How we work.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {VALUES.map((v) => (
            <div
              key={v.number}
              className="border border-border bg-white p-6 lg:p-8 hover:border-primary transition-colors duration-300"
            >
              <span className="text-sm font-mono text-primary font-medium block mb-3">
                {v.number}
              </span>
              <h3 className="text-xl lg:text-2xl font-display text-foreground mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/about/leadership"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-8 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Board &amp; Management
          </Link>
          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white text-foreground px-8 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            What We Do
          </Link>
        </div>
      </PageSection>
    </PageShell>
  );
}
