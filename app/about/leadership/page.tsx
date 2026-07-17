import type { Metadata } from "next";
import { PageShell, PageHeader, PageSection } from "@/components/site/page-shell";
import { LEADERSHIP } from "@/lib/content";

export const metadata: Metadata = {
  title: "Board & Management — NCDC",
  description:
    "The Governing Board and management of the North Central Development Commission.",
};

function initials(name: string) {
  return (
    name
      .replace(/^(Barr\.|Dr\.|Princess|Engr\.|Sen\.|Prof\.)\s+/i, "")
      .split(" ")
      .filter((w) => /^[A-Z]/.test(w))
      .slice(0, 2)
      .map((w) => w[0])
      .join("") || "NC"
  );
}

export default function LeadershipPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Board & Management"
        title="Representing the region."
        titleMuted="Answerable to Nigerians."
        lead="Nominated by the President, confirmed by the Senate in June 2025, and inaugurated on 28 August 2025 — the Commission's 19-member Governing Board draws from every state of the zone and the wider federation, as the Establishment Act requires."
      />

      <PageSection>
        <div className="space-y-4 lg:space-y-6">
          {LEADERSHIP.map((p) => (
            <article
              key={p.slug}
              id={p.slug}
              className="border border-border bg-white p-6 lg:p-10 grid gap-6 sm:grid-cols-[auto_1fr] hover:border-primary transition-colors duration-300"
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
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground max-w-2xl">
          Board composition follows Part II of the NCDC (Establishment) Act,
          2024. Full profiles of all 19 members will be published as official
          portraits and biographies are released.
        </p>
      </PageSection>
    </PageShell>
  );
}
