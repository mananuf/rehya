import type { MetadataRoute } from "next";
import { PROJECTS, STATES } from "@/lib/content";
import { NEWS } from "@/lib/news-data";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ncdc.gov.ng";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/about/leadership",
    "/about/act",
    "/what-we-do",
    "/projects",
    "/states",
    "/newsroom",
    "/resources",
    "/report",
    "/careers",
    "/procurement",
    "/foi",
    "/contact",
    "/privacy",
    "/terms",
    "/credits",
  ].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  return [
    ...staticRoutes,
    ...STATES.map((s) => ({
      url: `${BASE}/states/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...PROJECTS.map((p) => ({
      url: `${BASE}/projects/${p.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    ...NEWS.map((n) => ({
      url: `${BASE}/newsroom/${n.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
