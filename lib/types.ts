export type WorldId = "code" | "frame" | "screen" | "about";

export interface WorldMetadata {
  id: WorldId;
  number: string;
  label: string;
  verb: string;
  tagline: string;
  route: string;
  accentColor: string;
  accentBorder: string;
  atmosphereClass: string;
  summary: string;
  prevWorld: { label: string; route: string; number: string };
  nextWorld: { label: string; route: string; number: string };
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  story?: string;
  learned?: string;
  architecture?: string[];
  technologies: string[];
  topics: string[];
  github: string;
  githubRepos?: { label: string; url: string }[];
  live: string | null;
  stars: number;
  forks: number;
  language: string | null;
  image?: string;
  updatedAt: string;
  createdAt: string;
}

export interface FramePhoto {
  src: string;
  filename: string;
  width: number;
  height: number;
  aspectRatio: number;
  orientation: "landscape" | "portrait" | "square" | "wide";
  alt: string;
  // Optional legacy fields for backward compatibility
  id?: string;
  title?: string;
  location?: string;
  camera?: string;
  image?: string;
  aspect?: "landscape" | "portrait" | "wide";
  story?: string;
  tag?: string;
}

export interface CutProject {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  breakdown: string[];
}

export interface DriveEntry {
  id: string;
  title: string;
  subtitle: string;
  specCode: string;
  parameters: { label: string; value: string }[];
  narrative: string;
  quote: string;
}

export interface FilmCategory {
  id: string;
  title: string;
  subtitle: string;
  anchorWorks: string[];
  narrative: string;
  cinematicNotes: string[];
}
