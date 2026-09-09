import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "The Programme Charter",
  description:
    "The operating charter of the Renewed Hope Youth Engagement — mandate, structure from National Secretariat to ward level, and the conduct required of every coordinator.",
};

const CHARTER_POINTS = [
  {
    number: "01",
    title: "Purpose",
    body: "To mobilise young Nigerians into governance and the political process, so that they become active contributors to development rather than mere beneficiaries of it.",
  },
  {
    number: "02",
    title: "Coverage",
    body: "National. Coordinating units in all 36 states and the Federal Capital Territory, reaching down through 774 local government areas to 8,809 wards.",
  },
  {
    number: "03",
    title: "Structure",
    body: "A National Secretariat in Abuja; coordinators for each of the six geopolitical zones; a state coordinating unit inaugurated in each state capital; local government and ward mobilisers beneath them.",
  },
  {
    number: "04",
    title: "Conduct",
    body: "Active participation, and an unqualified rejection of political violence, hate speech, intimidation and the spread of misinformation. This charge is read at every state inauguration.",
  },
  {
    number: "05",
    title: "No Fees, Ever",
    body: "Participation is free at every level. The programme charges nothing for membership, registration, appointment to any coordinating position, or attendance at any activity. Anyone demanding payment is acting fraudulently.",
  },
  {
    number: "06",
    title: "Inclusion",
    body: "Young women and young persons with disabilities hold coordinating positions at every level of the structure, not only supporting roles, and programme activities are required to be accessible.",
  },
  {
    number: "07",
    title: "Complement, Not Duplicate",
    body: "Where federal or state schemes already exist — student financing, skills training, credit — the programme signposts young people to them and helps them apply. It does not administer those schemes or handle applicants' funds.",
  },
  {
    number: "08",
    title: "Accountability",
    body: "Coordinators answer to the young people they organise. Misconduct, impersonation and demands for payment in the programme's name are reported through this website and acted on by the National Secretariat.",
  },
];

export default function CharterPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="The Operating Charter"
        title="What the programme is."
        titleMuted="And what it is not."
        lead="The Renewed Hope Youth Engagement is a youth mobilisation and civic-engagement platform operating under the Renewed Hope Agenda. It is not a statutory body, it has no regulatory powers, and it disburses no public funds. This charter sets out what it does, how it is organised, and the conduct required of everyone who acts in its name."
      />

      <PageSection>
        <div className="border-l-2 border-primary pl-6 py-2 max-w-3xl">
          <p className="text-2xl lg:text-3xl font-display text-foreground leading-snug">
            &ldquo;Young people must become active contributors to development,
            rather than being mere beneficiaries.&rdquo;
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              Programme mandate
            </span>
            <br />
            As stated at state committee inaugurations across the federation
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {CHARTER_POINTS.map((p) => (
            <div
              key={p.number}
              className="border border-border bg-white p-6 lg:p-8 hover:border-primary transition-colors duration-300"
            >
              <span className="text-sm font-mono text-primary font-medium block mb-3">
                {p.number}
              </span>
              <h2 className="text-xl lg:text-2xl font-display text-foreground mb-2">
                {p.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-8 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            The Eight Pillars
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            href="/about/leadership"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white text-foreground px-8 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Leadership
          </Link>
        </div>

        <p className="mt-10 text-sm text-muted-foreground max-w-2xl">
          A signed charter document will be published here once released by the
          National Secretariat. Until then this page is the authoritative summary
          on this website.
        </p>
      </PageSection>
    </PageShell>
  );
}
