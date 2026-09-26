import { DriveEntry } from "@/lib/types";

export const DRIVE_ENTRIES: DriveEntry[] = [
  {
    id: "01",
    title: "CHASSIS KINEMATICS & AERODYNAMIC VECTOR",
    subtitle: "Precision Steering Geometry & Mechanical Feedback",
    specCode: "SPEC // AERO-CH-01",
    parameters: [
      { label: "FRONT SUSPENSION", value: "Double Wishbone with Active Camber" },
      { label: "STEERING RATIO", value: "11.8:1 Variable Electric Rack" },
      { label: "LATERAL G-FORCE", value: "1.45G Peak Adhesion Threshold" },
      { label: "WEIGHT DISTRIBUTION", value: "48:52 Front-to-Rear Neutral" },
      { label: "TORSIONAL RIGIDITY", value: "40,000 Nm/deg Carbon-Steel Monocoque" },
    ],
    narrative:
      "Modern driving often hides mechanical feedback behind digital buffers. True engineering purity is visceral: the tactile sensation through the steering column when the front tires bite into turn-in, the millisecond yaw transition as weight transfers across the dampers, and the aero balance pinning the rear axle at speed.",
    quote:
      "A machine is not just a tool for transportation; it is an instrument of kinetic translation between road surface and human instinct.",
  },
  {
    id: "02",
    title: "THE WESTERN GHATS TOPOGRAPHY",
    subtitle: "Agumbe & Charmadi Ghat Mountain Corridors",
    specCode: "SECTOR // WG-GHAT-14",
    parameters: [
      { label: "CIRCUIT ROUTE", value: "Someshwara → Agumbe Rain Forest Pass" },
      { label: "ELEVATION CHANGE", value: "+645m over 14 Contiguous Hairpins" },
      { label: "AMBIENT CONDITIONS", value: "Dense Mist, Rain-Slicked Basalt Asphalt" },
      { label: "BRAKE THERMAL LOAD", value: "Carbon-Ceramic Calipers @ 580°C" },
      { label: "TRANSMISSION CADENCE", value: "2nd & 3rd Gear Heel-and-Toe Rhythm" },
    ],
    narrative:
      "Carving through Karnataka's Western Ghats is an exercise in dynamic equilibrium. Fourteenth-century mountain rainforests flanking tight reverse-camber hairpins. Every apex demands clean brake trail, deliberate throttle metering to preserve traction on wet asphalt, and an acute ear for engine harmonics echoing off cliff faces.",
    quote:
      "In the mountains, straightaways are just pauses between mathematical problems waiting to be solved with throttle and steering angle.",
  },
  {
    id: "03",
    title: "POWERTRAIN PURITY & 7,000 RPM CADENCE",
    subtitle: "Naturally Aspirated Volumetric Efficiency",
    specCode: "PROPULSION // NA-ICE-7K",
    parameters: [
      { label: "ASPIRATION TYPE", value: "Naturally Aspirated High-Revving V8" },
      { label: "REDLINE FREQUENCY", value: "7,200 RPM Peak Harmonic Pitch" },
      { label: "THROTTLE LATENCY", value: "< 35ms Direct Mechanical Response" },
      { label: "DIFFERENTIAL TYPE", value: "Mechanical Multi-Plate Limited-Slip (45% Lock)" },
      { label: "EXHAUST TUNING", value: "Equal-Length Inconel Headers (Cross-Plane)" },
    ],
    narrative:
      "Linear throttle response is an irreplaceable dialogue. When an internal combustion engine breathes without forced induction lag, power delivery correlates directly to right-foot modulation. The engine note is not synthetic acoustic amplification—it is high-velocity gas acoustics and mechanical metal at peak operating frequency.",
    quote:
      "There's a point at 7,000 RPM where everything fades: the machine becomes weightless, and all that's left is a body moving through space and time.",
  },
];

export const TELEMETRY_METRICS = [
  { label: "PEAK DOWNFORCE", value: "860 KG @ 285 KM/H", detail: "Ground effect underfloor Venturi tunnels" },
  { label: "DECELERATION", value: "-1.8G PEAK", detail: "6-piston monobloc calipers on 410mm rotors" },
  { label: "SHIFT TIMING", value: "80 MILLISECONDS", detail: "Dual-clutch seamless engagement" },
  { label: "WEIGHT / POWER", value: "2.18 KG / HP", detail: "Lightweight chassis optimization" },
];
