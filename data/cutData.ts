import { CutProject } from "@/lib/types";

export interface ColorGradeBreakdown {
  stage: string;
  parameter: string;
  adjustment: string;
  objective: string;
}

export const MAIN_CUT_PROJECT: CutProject = {
  id: "01",
  title: "RIPARIAN SUNSET: RAW TO CINEMATIC CHROMA",
  description:
    "A full color transformation transforming a flat, overcast natural capture into a rich, golden-hour twilight composition through precise tonal curve manipulation and chromatic split-toning.",
  beforeImage: "/images/cut/lake-natural-raw.jpg",
  afterImage: "/images/cut/lake-sunset-grade.jpg",
  beforeLabel: "RAW / NATURAL CAPTURE",
  afterLabel: "CINEMATIC COLOR GRADE",
  breakdown: [
    "Exposure Compensation & Highlight Recovery: Pulling back overblown horizon values while lifting shadow textures by +1.4 EV.",
    "Chromatic Split-Toning: Infusing golden amber into the sky highlights while anchoring the water ripples with deep cyan-teal.",
    "Midtone Contrast S-Curve: Deepening lake reflections and establishing visual hierarchy toward the setting sun.",
    "Atmospheric Depth: Graduated density filter to ground the foreground shoreline and concentrate viewer focus on the horizon.",
  ],
};

export const COLOR_GRADE_STAGES: ColorGradeBreakdown[] = [
  {
    stage: "01 / BALANCE",
    parameter: "Exposure / White Balance",
    adjustment: "Temp: +850K | Tint: -4 | Exp: -0.3 EV",
    objective: "Neutralize sensor tint and shift baseline kelvin toward late-afternoon natural ambient warmth.",
  },
  {
    stage: "02 / TONAL DYNAMICS",
    parameter: "Custom S-Curve & Shadow Lift",
    adjustment: "Highlights: -28 | Shadows: +42 | Blacks: -12",
    objective: "Retain micro-detail in the water foam without blowing out radiant solar glow at the horizon.",
  },
  {
    stage: "03 / COLOR MATRIX",
    parameter: "Split-Toning & Color Wheels",
    adjustment: "Lift: Teal 195° | Gamma: Neutral | Gain: Gold 42°",
    objective: "Create chromatic color separation between sky ambient temperature and cold water reflections.",
  },
  {
    stage: "04 / FINISHING",
    parameter: "Graduated Mask & Film Grain",
    adjustment: "Subtle 35mm grain pass (8%) | Edge Vignette (-0.4)",
    objective: "Introduce tactile analog texture and draw the viewer's gaze toward the center of perspective.",
  },
];

export const CUT_DISCIPLINES = [
  {
    title: "PACING & CADENCE",
    subtitle: "Rhythmic Video Editing",
    description:
      "Editing is musical timing. Cutting on motion vectors, breath pauses, and acoustic accents to maintain forward momentum without visual fatigue.",
    tags: ["Premiere Pro", "Vector Cutting", "Rhythm"],
  },
  {
    title: "COLOR ARCHITECTURE",
    subtitle: "Look Development & LUT Engineering",
    description:
      "Crafting intentional visual palettes that establish narrative emotion. Transforming raw log profiles into rich, cinematic 10-bit color spaces.",
    tags: ["DaVinci Resolve", "Color Science", "ACES / Rec.709"],
  },
  {
    title: "LIGHTING COMPOSITION",
    subtitle: "Spatial Lighting & 3D Volume",
    description:
      "Experimenting with high-contrast orbital light sources, chiaroscuro rims, and volumetric geometry to elevate flat digital frames into physical spaces.",
    tags: ["Visual Direction", "Spatial Light", "Art Direction"],
    image: "/images/cut/saturn-orb-lighting.jpg",
  },
];
