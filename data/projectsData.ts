import { PortfolioProject } from "@/lib/types";

export const FALLBACK_PROJECTS: PortfolioProject[] = [
  {
    id: "01",
    title: "HEALTHHUB",
    tagline: "Full-Stack Clinical Booking & Administration System",
    description:
      "A complete doctor appointment booking platform built on the MERN stack with administrative dashboards, multi-role authentication, and clinical scheduling workflows.",
    story:
      "Built because I wanted to understand how multi-actor workflows actually work in the real world — where doctors, patients, and clinic administrators have completely different permissions, data models, and views.",
    learned:
      "Handling token authentication across three separate applications (Patient UI, Doctor Dashboard, Admin Panel), managing slot collision when two people book the same doctor at once, and structuring Express middleware cleanly.",
    architecture: [
      "Frontend: Patient booking client with calendar slot picker and profile manager",
      "Admin Portal: Clinic verification dashboard for doctor onboarding and slot approvals",
      "Backend: Express.js REST API with JWT auth and MongoDB aggregation pipelines",
      "Storage: Cloudinary asset uploads for medical receipts and practitioner credentials",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    topics: ["portfolio", "healthcare", "fullstack", "mern"],
    github: "https://github.com/VishwasSK15/HealthHub-frontend",
    githubRepos: [
      { label: "PATIENT FRONTEND", url: "https://github.com/VishwasSK15/HealthHub-frontend" },
      { label: "ADMIN CONSOLE", url: "https://github.com/VishwasSK15/HealthHub-admin" },
      { label: "REST BACKEND", url: "https://github.com/VishwasSK15/HealthHub-backend" },
    ],
    live: null,
    stars: 0,
    forks: 0,
    language: "JavaScript",
    image: "/images/projects/healthhub.png",
    updatedAt: "2025-02-15T00:00:00Z",
    createdAt: "2024-09-10T00:00:00Z",
  },
  {
    id: "02",
    title: "AI-RESUME-ANALYZER",
    tagline: "Intelligent Resume Scoring & ATS Keyword Benchmarker",
    description:
      "Intelligent resume screening and scoring engine leveraging LLM analysis, keyword extraction, and ATS compatibility benchmarking to deliver actionable applicant feedback.",
    story:
      "As a student applying for internships, I kept wondering what happens to a PDF once it enters an ATS. I built this tool to parse resume sections, extract skills, compare them against target job descriptions, and highlight semantic gaps.",
    learned:
      "Prompt engineering for consistent JSON outputs from LLMs, handling messy PDF parsing edge cases (tables, two-column layouts), and optimizing FastAPI latency for multi-step text analysis.",
    architecture: [
      "Parser Engine: PDF and DOCX text extraction pipeline with layout normalizer",
      "LLM Evaluation: Gemini API integration for structured scoring against target role criteria",
      "Gap Analysis: Cosine similarity and keyword overlap benchmark for missing skills",
      "Interface: React + Tailwind UI with interactive score breakups and improvement recommendations",
    ],
    technologies: ["Python", "FastAPI", "React", "Gemini API", "Tailwind CSS"],
    topics: ["portfolio", "ai", "llm", "resume-parser"],
    github: "https://github.com/VishwasSK15/AI-Resume-Analyzer",
    live: null,
    stars: 0,
    forks: 0,
    language: "Python",
    image: "/images/projects/ai-resume-analyzer.png",
    updatedAt: "2025-01-20T00:00:00Z",
    createdAt: "2024-11-05T00:00:00Z",
  },
  {
    id: "03",
    title: "PRIVATEDOC-AI",
    tagline: "Privacy-First Local Document Question-Answering",
    description:
      "Privacy-first local document question-answering architecture that parses sensitive files entirely client/on-premise without unencrypted third-party cloud data leakage.",
    story:
      "I was fascinated by RAG architectures, but hated that uploading personal notes or private documents usually meant shipping them to external third-party servers. I wanted to see if I could build a secure local document assistant.",
    learned:
      "Vector embeddings, chunking strategies for long documents (overlap vs precision), client-side vector search mechanics, and prompt grounding to prevent hallucinations.",
    architecture: [
      "Chunking Pipeline: Recursive character chunking preserving heading and paragraph context",
      "Vector Store: Local embeddings indexing with fast in-memory similarity lookup",
      "Retrieval Pipeline: Top-k context window injector with provenance citation tracking",
      "Interface: Clean Next.js workspace for drag-and-drop document querying with verifiable source quotes",
    ],
    technologies: ["TypeScript", "Next.js", "LangChain", "Vector Store"],
    topics: ["portfolio", "rag", "privacy", "document-ai"],
    github: "https://github.com/VishwasSK15/privatedoc-ai",
    live: null,
    stars: 0,
    forks: 0,
    language: "TypeScript",
    image: "/images/projects/privatedoc-ai.png",
    updatedAt: "2025-01-10T00:00:00Z",
    createdAt: "2024-12-01T00:00:00Z",
  },
];
