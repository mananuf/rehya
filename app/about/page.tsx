import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Who we are: the mandate, mission and national structure of the Renewed Hope Youth Engagement, a youth mobilisation platform under the Renewed Hope Agenda.",
};

const VALUES = [
  {
    number: "01",
    title: "Participation",
    body: "Young Nigerians as contributors to development, not an audience for it.",
  },
  {
    number: "02",
    title: "Non-Violence",
    body: "No hate speech, no intimidation, no misinformation — in any state, at any point in the cycle.",
  },
  {
    number: "03",
    title: "Free to Join",
    body: "No fee for membership, registration or any position. Anyone who asks for money is a fraud.",
  },
  {
    number: "04",
    title: "Complement, Not Duplicate",
    body: "We signpost young people to the federal and state schemes that already exist — we don't replace them.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About the Programme"
        title="A generation organised."
        titleMuted="Ward by ward."
        lead="The Renewed Hope Youth Engagement is a national youth mobilisation and civic-engagement platform operating under the Renewed Hope Agenda."
      />

      <PageSection>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Nigeria is a young country. The majority of its people are under
              thirty, and yet the distance between that majority and the rooms
              where decisions are made has stayed stubbornly wide. Young people
              are consulted late, mobilised at election time, and told to wait
              in between.
            </p>
            <p>
              The Renewed Hope Youth Engagement exists to close that distance.
              Its purpose is to organise young Nigerians into governance and the
              political process — at ward, local government, state and national
              level — so that they arrive as participants rather than as an
              audience. Alongside that runs a standing charge on conduct: take
              part actively, and reject political violence, hate speech,
              intimidation and misinformation without qualification.
            </p>
            <p>
              The programme runs from a National Secretariat in{" "}
              {SITE.hq.city} through coordinators in each of the six
              geopolitical zones, state coordinating units inaugurated in all 36
              state capitals and the Federal Capital Territory, and mobilisers
              at local government and ward level — 774 LGAs and 8,809 wards.
            </p>

            <figure className="border-l-2 border-primary pl-6 py-2 mt-10">
              <blockquote className="text-2xl lg:text-3xl font-display text-foreground leading-snug">
                &ldquo;{SITE.mandateQuote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {SITE.mandateQuote.author}
                </span>
                <br />
                {SITE.mandateQuote.note}
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
                To organise, train and equip young Nigerians to take part in
                governance in their own communities — and to hold themselves to
                a standard of conduct worth following.
              </p>
            </div>
            <div className="border border-border bg-white p-8">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-4">
                <span className="w-8 h-px bg-primary" />
                Our Vision
              </span>
              <p className="text-muted-foreground leading-relaxed">
                A Nigeria where the country&apos;s young majority is also its
                governing majority — present in every ward, in every decision
                that concerns them.
              </p>
            </div>
            <div className="border border-border bg-white p-8">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-4">
                <span className="w-8 h-px bg-primary" />
                What We Are Not
              </span>
              <p className="text-muted-foreground leading-relaxed">
                Not a government agency, not a statutory body, and not a
                replacement for the Federal Ministry of Youth Development. We
                have no regulatory powers and disburse no public funds.
              </p>
            </div>
            <div className="bg-foreground text-white p-8">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-[#2FA45B] mb-4">
                <span className="w-8 h-px bg-[#2FA45B]" />
                The Charter
              </span>
              <p className="text-white/70 leading-relaxed text-sm mb-6">
                The programme&apos;s operating charter — mandate, structure and
                the conduct required of every coordinator.
              </p>
              <Link
                href="/about/charter"
                className="inline-flex items-center gap-2 text-[#2FA45B] font-medium hover:gap-3 transition-all duration-300"
              >
                Read the charter
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
            Leadership
          </Link>
          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white text-foreground px-8 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Our Pillars
          </Link>
        </div>
      </PageSection>
    </PageShell>
  );
}
