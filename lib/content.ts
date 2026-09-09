import site from "./data/site.json";
import states from "./data/states.json";
import leadership from "./data/leadership.json";
import focusAreas from "./data/focus-areas.json";
import projects from "./data/projects.json";
import resources from "./data/resources.json";
import faqs from "./data/faqs.json";

export type StateInfo = {
  slug: string;
  name: string;
  epithet: string;
  capital: string;
  lgas: number;
  lat: number;
  lng: number;
  zone: string;
  summary: string;
  activities: string[];
  office: string;
  /** True where a coordinating unit has been publicly inaugurated. */
  inaugurated: boolean;
  /** ISO date of the inauguration, where one was published. */
  inauguratedOn: string | null;
  isHq?: boolean;
};

/**
 * "patron" — offices under whose agenda the programme operates (the Presidency
 * and the APC national leadership). "programme" — RHYE's own coordinators.
 */
export type LeaderTier = "patron" | "programme";

export type Leader = {
  slug: string;
  name: string;
  role: string;
  represents: string;
  tier: LeaderTier;
  verified: boolean;
  bio: string;
};

export type FocusArea = {
  slug: string;
  name: string;
  short: string;
  description: string;
  programmes: string[];
};

export type ProjectStatus =
  | "planned"
  | "recruiting"
  | "running"
  | "completed";

export type Project = {
  slug: string;
  name: string;
  state: string;
  sector: string;
  status: ProjectStatus;
  /** Participants, coordinators or units the programme line reaches. */
  reach: string;
  progress: number;
  lga: string;
  summary: string;
  sample: boolean;
};

export type Resource = {
  title: string;
  category: string;
  description: string;
  file: string | null;
  date: string;
  external: boolean;
  pending?: boolean;
  isPage?: boolean;
};

export type Faq = { q: string; a: string };

export const SITE = site;
export const STATES = states as StateInfo[];
export const LEADERSHIP = leadership as Leader[];
export const FOCUS_AREAS = focusAreas as FocusArea[];
export const PROJECTS = projects as Project[];
export const RESOURCES = resources as Resource[];
export const FAQS = faqs as Faq[];

export const getState = (slug: string) => STATES.find((s) => s.slug === slug);
export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);
export const getFocusArea = (slug: string) =>
  FOCUS_AREAS.find((f) => f.slug === slug);

export const PROJECT_STATUSES: ProjectStatus[] = [
  "planned",
  "recruiting",
  "running",
  "completed",
];

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  planned: "Planned",
  recruiting: "Recruiting",
  running: "Running",
  completed: "Completed",
};

export const PATRONS = LEADERSHIP.filter((l) => l.tier === "patron");
export const PROGRAMME_LEADERSHIP = LEADERSHIP.filter(
  (l) => l.tier === "programme"
);

/**
 * State slug → local image. The programme covers all 37 coordinating units but
 * the library only holds a handful of photographs, so states without one of
 * their own fall back to a stable pick from the shared pool — stable so the
 * same state always shows the same picture between renders.
 */
const STATE_IMAGE_OVERRIDES: Record<string, string> = {
  benue: "/images/farmland.jpg",
  kogi: "/images/confluence.jpg",
  kwara: "/images/vegetable-farm.jpg",
  nasarawa: "/images/market.jpg",
  niger: "/images/kainji.jpg",
  plateau: "/images/hero-plateau.jpg",
  fct: "/images/zuma.jpg",
};

const STATE_IMAGE_POOL = [
  "/images/classroom.jpg",
  "/images/market.jpg",
  "/images/jos-city.jpg",
  "/images/farmland.jpg",
  "/images/yams.jpg",
  "/images/engineers.jpg",
  "/images/road-construction.jpg",
  "/images/vegetable-farm.jpg",
];

/**
 * Assign pool images by position rather than by hashing the slug, so the
 * fallbacks cycle evenly and two states listed next to each other never draw
 * the same photograph.
 */
const STATE_IMAGE_FALLBACKS = new Map<string, string>(
  STATES.filter((s) => !STATE_IMAGE_OVERRIDES[s.slug]).map((s, i) => [
    s.slug,
    STATE_IMAGE_POOL[i % STATE_IMAGE_POOL.length],
  ])
);

export function stateImage(slug: string) {
  return (
    STATE_IMAGE_OVERRIDES[slug] ??
    STATE_IMAGE_FALLBACKS.get(slug) ??
    STATE_IMAGE_POOL[0]
  );
}

/** @deprecated prefer {@link stateImage} — covers every state, not just seven. */
export const STATE_IMAGES = STATE_IMAGE_OVERRIDES;

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
