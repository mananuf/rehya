"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  PROJECTS,
  STATES,
  FOCUS_AREAS,
  PROJECT_STATUSES,
  STATUS_LABELS,
  type ProjectStatus,
} from "@/lib/content";

function FilterGroup({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-3">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onChange("")}
          aria-pressed={value === ""}
          className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
            value === ""
              ? "bg-primary text-white"
              : "bg-muted text-foreground hover:bg-secondary border border-border"
          }`}
        >
          All
        </button>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value === value ? "" : o.value)}
            aria-pressed={value === o.value}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
              value === o.value
                ? "bg-primary text-white"
                : "bg-muted text-foreground hover:bg-secondary border border-border"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

const STATUS_STYLES: Record<ProjectStatus, string> = {
  planned: "bg-muted text-muted-foreground",
  recruiting: "bg-amber-100 text-amber-800",
  running: "bg-secondary text-primary",
  completed: "bg-primary text-white",
};

export function ProjectExplorer({
  initialSector = "",
  initialState = "",
}: {
  initialSector?: string;
  initialState?: string;
}) {
  const [state, setState] = useState(initialState);
  const [sector, setSector] = useState(initialSector);
  const [status, setStatus] = useState("");

  const filtered = useMemo(
    () =>
      PROJECTS.filter(
        (p) =>
          (!state || p.state === state) &&
          (!sector || p.sector === sector) &&
          (!status || p.status === status)
      ),
    [state, sector, status]
  );

  const stateName = (slug: string) =>
    STATES.find((s) => s.slug === slug)?.name ?? slug;
  const sectorName = (slug: string) =>
    FOCUS_AREAS.find((f) => f.slug === slug)?.name ?? slug;

  return (
    <div>
      {/* Filters */}
      <div className="border border-border bg-white p-6 lg:p-8 grid gap-8 lg:grid-cols-3">
        <FilterGroup
          label="State"
          value={state}
          onChange={setState}
          options={STATES.map((s) => ({
            value: s.slug,
            label: s.slug === "fct" ? "FCT" : s.name,
          }))}
        />
        <FilterGroup
          label="Pillar"
          value={sector}
          onChange={setSector}
          options={FOCUS_AREAS.map((f) => ({ value: f.slug, label: f.name }))}
        />
        <FilterGroup
          label="Status"
          value={status}
          onChange={setStatus}
          options={PROJECT_STATUSES.map((s) => ({
            value: s,
            label: STATUS_LABELS[s],
          }))}
        />
      </div>

      <p aria-live="polite" className="mt-8 text-xs font-mono text-muted-foreground">
        {filtered.length} programme{filtered.length === 1 ? "" : "s"}
        {state || sector || status ? " match your filters" : " on record"}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group flex flex-col border border-border bg-white p-6 lg:p-8 hover:border-primary transition-colors duration-300"
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full ${STATUS_STYLES[p.status]}`}
                >
                  {STATUS_LABELS[p.status]}
                </span>
                {p.sample && (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-dashed border-border px-2.5 py-1 rounded-full">
                    Sample
                  </span>
                )}
              </div>
              <h3 className="text-xl font-display text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                {p.name}
              </h3>
              <p className="mt-1 text-xs font-mono text-muted-foreground">
                {stateName(p.state)} · {p.lga} LGA · {sectorName(p.sector)}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {p.summary}
              </p>
              <div className="mt-auto pt-6">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono text-muted-foreground">
                    {p.reach}
                  </span>
                  <span className="font-medium text-foreground">
                    {p.progress}%
                  </span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={p.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${p.name} progress`}
                  className="h-1 bg-muted overflow-hidden"
                >
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-4 border border-dashed border-border bg-white p-16 text-center">
          <p className="text-xl font-display text-foreground">
            No programmes match those filters.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try clearing a filter — or check back as the programme book grows
            with each state coordinating unit.
          </p>
        </div>
      )}
    </div>
  );
}
