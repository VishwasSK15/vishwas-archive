export interface AboutPortrait {
  id: string;
  image: string;
  caption: string;
  location: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const ABOUT_PORTRAITS: AboutPortrait[] = [
  {
    id: "01",
    image: "/images/about/portrait-glasses.jpg",
    caption: "Working on code and college projects",
    location: "Bengaluru",
    year: "2025",
  },
  {
    id: "02",
    image: "/images/about/portrait-tea-estate.jpg",
    caption: "Misty highlands of the Western Ghats tea country",
    location: "Western Ghats, Karnataka",
    year: "2024",
  },
  {
    id: "03",
    image: "/images/about/portrait-canon.jpg",
    caption: "Observing light, shadows, and natural perspective across Karnataka",
    location: "Karnataka",
    year: "2024",
  },
  {
    id: "04",
    image: "/images/about/portrait-casual.jpg",
    caption: "Casual moments on campus and weekends",
    location: "Bengaluru",
    year: "2024",
  },
  {
    id: "05",
    image: "/images/about/portrait-cafe.jpg",
    caption: "Candid chats between designing, building, and classes",
    location: "Bengaluru",
    year: "2024",
  },
  {
    id: "06",
    image: "/images/about/portrait-formal.jpg",
    caption: "College presentations and formal events",
    location: "Bengaluru",
    year: "2025",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "CORE ENGINEERING & LANGUAGES",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "C++", "SQL", "HTML5 / CSS3"],
  },
  {
    title: "FRAMEWORKS & RUNTIMES",
    skills: ["Next.js (App Router)", "React 19", "Node.js", "Express.js", "FastAPI", "Tailwind CSS v4"],
  },
  {
    title: "DATA & SYSTEM DESIGN",
    skills: ["MongoDB", "REST APIs", "Vector Stores / RAG", "PostgreSQL", "Git / GitHub Actions"],
  },
  {
    title: "CREATIVE & EDITING TOOLS",
    skills: [
      "CapCut",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Adobe Lightroom",
      "Visual Framing & Composition",
    ],
  },
];

export const ABOUT_NARRATIVE = {
  name: "Vishwas S K",
  role: "Engineering Student & Builder",
  roots: "Native of Shikaripura, Shivamogga District, Karnataka",
  education: "Rajarajeswari College of Engineering (RRCE), Bengaluru · Class of '27",
  philosophy:
    "I believe code, visual composition, and mechanical curiosity are all parts of the same journey: figuring out how things work, and building something useful along the way.",
  bioParagraphs: [
    "I'm an engineering student in my twenties, originally from Shikaripura in Shivamogga district, Karnataka, now living and studying in Bengaluru at Rajarajeswari College of Engineering (RRCE, Class of '27). I'm intensely curious about how things work under the hood—from full-stack web platforms and AI experiments to hardware and mechanical design.",
    "Most of my days are spent building things: writing full-stack applications with React, Node.js, Express, and MongoDB, exploring privacy-first local AI architectures, or diagnosing edge cases when parsing PDFs and multi-role authentications. I don't claim to know everything; I'm figuring things out step by step by actually writing code, breaking things, and learning from the errors.",
    "Outside of terminal windows, I enjoy capturing moments and waterfalls across Karnataka, editing video stories with Premiere Pro and CapCut, grading photos in Photoshop and Lightroom, and losing track of time dissecting hard sci-fi films, Formula 1 telemetry, and Kannada cinema.",
  ],
  connectLinks: [
    { label: "GITHUB", url: "https://github.com/VishwasSK15", handle: "@VishwasSK15" },
    { label: "LEETCODE", url: "https://leetcode.com/u/vishwassk15/", handle: "vishwassk15" },
    { label: "INSTAGRAM", url: "https://www.instagram.com/vishu_._15/", handle: "vishu_._15" },
    { label: "LINKEDIN", url: "https://www.linkedin.com/in/vishwas-sk/", handle: "vishwas-sk" },
    { label: "EMAIL", url: "mailto:vishwasskshikaripura@gmail.com", handle: "vishwasskshikaripura@gmail.com" },
  ],
};
