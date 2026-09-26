import { WorldMetadata } from "@/lib/types";

export const WORLDS: WorldMetadata[] = [
  {
    id: "code",
    number: "01",
    label: "CODE",
    verb: "I BUILD",
    tagline: "Building tools, breaking things, and figuring out system architecture along the way.",
    route: "/code",
    accentColor: "#389de4",
    accentBorder: "rgba(56, 157, 228, 0.3)",
    atmosphereClass: "atmosphere-code",
    summary:
      "Full-stack projects, AI experiments, and practical software built out of curiosity.",
    prevWorld: { label: "HOME", route: "/", number: "00" },
    nextWorld: { label: "FRAME", route: "/frame", number: "02" },
  },
  {
    id: "frame",
    number: "02",
    label: "FRAME",
    verb: "I CAPTURE",
    tagline: "Moments lived, places noticed, scenes captured, things worth keeping.",
    route: "/frame",
    accentColor: "#e5a93b",
    accentBorder: "rgba(229, 169, 59, 0.3)",
    atmosphereClass: "atmosphere-frame",
    summary:
      "A personal collection of travels, quiet mornings, and natural light noticed along the journey.",
    prevWorld: { label: "CODE", route: "/code", number: "01" },
    nextWorld: { label: "SCREEN", route: "/screen", number: "03" },
  },
  {
    id: "screen",
    number: "03",
    label: "SCREEN",
    verb: "I EXPERIENCE",
    tagline: "The stories that shaped my imagination — Tony Stark's workshop, cosmic sci-fi, and Kannada cinema.",
    route: "/screen",
    accentColor: "#c084fc",
    accentBorder: "rgba(192, 132, 252, 0.3)",
    atmosphereClass: "atmosphere-screen",
    summary:
      "A personal theatre honoring characters that reached the heart, worldbuilding, and cinema that inspires.",
    prevWorld: { label: "FRAME", route: "/frame", number: "02" },
    nextWorld: { label: "ABOUT", route: "/about", number: "04" },
  },
  {
    id: "about",
    number: "04",
    label: "ABOUT",
    verb: "THE PERSON",
    tagline: "Engineering student in Bengaluru, native Shikaripura, learning and building every day.",
    route: "/about",
    accentColor: "#389de4",
    accentBorder: "rgba(56, 157, 228, 0.3)",
    atmosphereClass: "atmosphere-about",
    summary:
      "Who I am, where I come from, what I study at RRCE (Class of '27), and what I enjoy outside code.",
    prevWorld: { label: "SCREEN", route: "/screen", number: "03" },
    nextWorld: { label: "HOME", route: "/", number: "00" },
  },
];

export function getWorldById(id: string): WorldMetadata | undefined {
  return WORLDS.find((w) => w.id === id);
}
