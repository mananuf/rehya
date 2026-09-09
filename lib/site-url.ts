/**
 * Absolute base URL for canonical links, Open Graph images, robots and sitemap.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL — set this once the real domain is live.
 *  2. VERCEL_PROJECT_PRODUCTION_URL — the project's stable production domain,
 *     so production builds are self-consistent with no configuration.
 *  3. VERCEL_URL — the per-deployment URL, which keeps preview deployments
 *     pointing at themselves rather than at production.
 *  4. localhost, for local development.
 *
 * The placeholder domain is deliberately absent: emitting canonical tags and a
 * sitemap for a domain nobody owns is worse than emitting the deployment's own.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;

  const deployment = process.env.VERCEL_URL;
  if (deployment) return `https://${deployment}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();
