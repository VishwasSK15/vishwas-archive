import { z } from "zod";
import { PortfolioProject } from "./types";
import { FALLBACK_PROJECTS } from "@/data/projectsData";

const GitHubRepoSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable().optional(),
  html_url: z.string(),
  homepage: z.string().nullable().optional(),
  language: z.string().nullable().optional(),
  topics: z.array(z.string()).optional().default([]),
  stargazers_count: z.number().optional().default(0),
  forks_count: z.number().optional().default(0),
  updated_at: z.string(),
  created_at: z.string(),
  fork: z.boolean().optional().default(false),
});

const GitHubReposArraySchema = z.array(GitHubRepoSchema);

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Vishwas-Archive-Portfolio",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      "https://api.github.com/users/VishwasSK15/repos?sort=updated&per_page=100",
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return FALLBACK_PROJECTS;
    }

    const rawData = await res.json();
    const parseResult = GitHubReposArraySchema.safeParse(rawData);

    if (!parseResult.success) {
      return FALLBACK_PROJECTS;
    }

    const repos = parseResult.data;

    // Map and consolidate live stats into the 3 canonical projects
    return FALLBACK_PROJECTS.map((baseProj) => {
      if (baseProj.id === "01") {
        // HealthHub - sum across healthhub repos
        const hhRepos = repos.filter((r) => r.name.toLowerCase().includes("healthhub"));
        if (hhRepos.length > 0) {
          const totalStars = hhRepos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
          const totalForks = hhRepos.reduce((acc, r) => acc + (r.forks_count || 0), 0);
          const latestUpdate = hhRepos.reduce(
            (latest, r) => (new Date(r.updated_at) > new Date(latest) ? r.updated_at : latest),
            baseProj.updatedAt
          );
          return {
            ...baseProj,
            stars: totalStars,
            forks: totalForks,
            updatedAt: latestUpdate,
          };
        }
      } else if (baseProj.id === "02") {
        // AI Resume Analyzer
        const matched = repos.find((r) => r.name.toLowerCase().includes("resume"));
        if (matched) {
          return {
            ...baseProj,
            stars: matched.stargazers_count || 0,
            forks: matched.forks_count || 0,
            updatedAt: matched.updated_at,
          };
        }
      } else if (baseProj.id === "03") {
        // PrivateDoc AI
        const matched = repos.find(
          (r) => r.name.toLowerCase().includes("doc") || r.name.toLowerCase().includes("private")
        );
        if (matched) {
          return {
            ...baseProj,
            stars: matched.stargazers_count || 0,
            forks: matched.forks_count || 0,
            updatedAt: matched.updated_at,
          };
        }
      }
      return baseProj;
    });
  } catch (error) {
    console.warn("Error fetching projects from GitHub API, using fallback data:", error);
    return FALLBACK_PROJECTS;
  }
}
