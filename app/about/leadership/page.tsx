import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { PATRONS, PROGRAMME_LEADERSHIP, type Leader } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "The national leadership under whose agenda the Renewed Hope Youth Engagement operates, and the coordinators who run the programme.",
};

function initials(name: string) {
  return (
    name
      .replace(
        /^(Vice President|President|Barr\.|Dr\.|Prof\.|Sen\.|Engr\.|Amb\.|Princess|Chief|Alhaji)\s+/i,
        ""
      )
      .split(" ")
      .filter((w) => /^[A-Z]/.test(w))
      .slice(0, 2)
      .map((w) => w[0])
      .join("") || "RH"
  );
}

function LeaderRow({ p }: { p: Leader }) {
  return (
    <article
      id={p.slug}
      className="scroll-mt-32 border border-border bg-white p-6 lg:p-10 grid gap-6 sm:grid-cols-[auto_1fr] hover:border-primary transition-colors duration-300"
    >
      <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-secondary text-primary font-display text-2xl shrink-0">
        {initials(p.name)}
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h2 className="text-2xl lg:text-3xl font-display text-foreground">
            {p.name}
          </h2>
          <span className="text-[10px] font-mono uppercase tracking-wider text-primary bg-secondary px-2.5 py-1 rounded-full">
            {p.represents}
          </span>
          {!p.verified && (
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-dashed border-border px-2.5 py-1 rounded-full">
              Profile pending
            </span>
          )}
        </div>
        <p className="text-sm font-medium text-primary mb-4">{p.role}</p>
        <p className="text-muted-foreground leading-relaxed max-w-3xl text-[0.95rem]">
          {p.bio}
        </p>
      </div>
    </article>
  );
}

export default function LeadershipPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Leadership"
        title="The agenda above."
        titleMuted="The coordinators on the ground."
        lead="The Renewed Hope Youth Engagement takes its name and policy direction from the Renewed Hope Agenda of the Federal Government, and works alongside the national leadership of the All Progressives Congress. Its own structure is run by a National Coordinator and the state coordinating units beneath him."
      />

      <PageSection>
        <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-8">
          <span className="w-12 h-px bg-primary" />
          The Presidency &amp; APC National Leadership
        </span>
        <div className="space-y-4 lg:space-y-6">
          {PATRONS.map((p) => (
            <LeaderRow key={p.slug} p={p} />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground max-w-3xl">
          Party offices are listed as held following the All Progressives
          Congress national convention in Abuja in March 2026. Recording an
          office here identifies the national leadership under whose agenda the
          programme operates. It is not a claim that any individual named has
          personally endorsed this programme, and nothing on this page should be
          read as a statement made by them.
        </p>
      </PageSection>

      <PageSection muted>
        <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-8">
          <span className="w-12 h-px bg-primary" />
          Programme Coordination
        </span>
        <div className="space-y-4 lg:space-y-6">
          {PROGRAMME_LEADERSHIP.map((p) => (
            <LeaderRow key={p.slug} p={p} />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground max-w-3xl">
          Coordinator profiles are published as appointments are confirmed and
          state coordinating units are inaugurated. Positions marked{" "}
          <em>profile pending</em> are part of the programme&apos;s published
          structure but have no confirmed name on this website yet — treat any
          claim to hold one of them with caution until it appears here.
        </p>
      </PageSection>
    </PageShell>
  );
}
