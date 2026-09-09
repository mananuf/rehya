import type { MetadataRoute } from "next";
import { SITE_URL as BASE } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
