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
  summary: string;
  activities: string[];
  office: string;
  isHq?: boolean;
};

export type Leader = {
  slug: string;
  name: string;
  role: string;
  represents: string;
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

export type ProjectStatus = "planned" | "procurement" | "ongoing" | "completed";

export type Project = {
  slug: string;
  name: string;
  state: string;
  sector: string;
  status: ProjectStatus;
  budget: string;
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
  "procurement",
  "ongoing",
  "completed",
];

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  planned: "Planned",
  procurement: "Procurement",
  ongoing: "Ongoing",
  completed: "Completed",
};

/** State slug → local image, for state pages/cards. */
export const STATE_IMAGES: Record<string, string> = {
  benue: "/images/farmland.jpg",
  kogi: "/images/confluence.jpg",
  kwara: "/images/vegetable-farm.jpg",
  nasarawa: "/images/market.jpg",
  niger: "/images/kainji.jpg",
  plateau: "/images/hero-plateau.jpg",
  fct: "/images/zuma.jpg",
};

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
