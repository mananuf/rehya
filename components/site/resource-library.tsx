"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Download, ChevronRight } from "lucide-react";
import { RESOURCES, formatDate } from "@/lib/content";

export function ResourceLibrary() {
  const categories = useMemo(
    () => [...new Set(RESOURCES.map((r) => r.category))],
    []
  );
  const [category, setCategory] = useState("");

  const filtered = category
    ? RESOURCES.filter((r) => r.category === category)
    : RESOURCES;

  return (
    <div>
      <div role="tablist" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {["", ...categories].map((c) => (
          <button
            key={c || "all"}
            role="tab"
            aria-selected={category === c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
              category === c
                ? "bg-primary text-white"
                : "bg-muted text-foreground hover:bg-secondary border border-border"
            }`}
          >
            {c || "All"}
          </button>
        ))}
      </div>

      <ul className="mt-8 space-y-4">
        {filtered.map((r) => {
          const inner = (
            <div className="border border-border bg-white p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 hover:border-primary transition-colors duration-300">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary bg-secondary px-2.5 py-1 rounded-full">
                    {r.category}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {formatDate(r.date)}
                  </span>
                  {r.pending && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-dashed border-border px-2.5 py-1 rounded-full">
                      Publication pending
                    </span>
                  )}
                </div>
                <h2 className="text-xl lg:text-2xl font-display text-foreground">
                  {r.title}
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {r.description}
                </p>
              </div>
              {r.file && (
                <span className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3 text-sm font-medium">
                  {r.isPage ? (
                    <>
                      Open <ChevronRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" /> Download
                    </>
                  )}
                </span>
              )}
            </div>
          );

          return (
            <li key={r.title}>
              {r.file ? (
                r.isPage ? (
                  <Link href={r.file}>{inner}</Link>
                ) : (
                  <a href={r.file} download>
                    {inner}
                  </a>
                )
              ) : (
                inner
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
