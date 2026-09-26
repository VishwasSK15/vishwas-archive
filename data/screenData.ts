export interface CharacterCredit {
  id: string;
  name: string;
  alias: string;
  actor: string;
  quote: string;
  sceneContext: string;
  impact: string;
  badge: string;
  color: string;
  bgImage?: string;
}

export interface FilmFeature {
  id: string;
  title: string;
  director: string;
  year: number | string;
  genre: string;
  quote: string;
  tagline: string;
  takeaway: string;
  specs: { label: string; value: string }[];
  accentColor: string;
  bgImage?: string;
}

export interface KannadaFilm {
  id: string;
  title: string;
  director: string;
  year: number;
  category: "Rakshit Shetty Universe" | "Cult Modern Classics" | "Yash Landmark Collection" | "Expanded Canon";
  lead: string;
  tagline: string;
  whyItMatters: string;
  visualHighlight: string;
  accent: string;
  bgImage?: string;
}

export const TONY_STARK_FEATURE = {
  title: "TONY STARK // THE PROTOTYPER'S ARCHITECT",
  actor: "Robert Downey Jr.",
  quote: "I am Iron Man.",
  secondaryQuote: "Sometimes you gotta run before you can walk.",
  arcReactorText: "PROOF THAT TONY STARK HAS A HEART",
  story:
    "Long before I ever wrote my first line of C or JavaScript, Jon Favreau's 2008 Iron Man sparked my obsession with engineering. It wasn't the superhero cape; it was Tony Stark down in his Malibu garage, hands covered in machine grease, testing thruster stabilization with Dum-E, diagnosing high-altitude icing with telemetry logs, and building spatial hologram CAD with JARVIS. That basement workshop showed me that building tools from scratch is the closest thing humans have to real superpowers.",
  pillars: [
    {
      title: "Iterative Prototyping",
      detail:
        "From Mark I cobbled together in a cave with scraps, to the raw unpainted Mark II, to the gold-titanium Mark III. You test, crash into the ceiling, inspect logs, and build the next iteration.",
    },
    {
      title: "Software Meets Hardware",
      detail:
        "Writing flight control algorithms that directly actuate mechanical gimbal thrusters. Pure symbiotic fusion of compiled code and titanium alloy.",
    },
    {
      title: "Self-Sovereign Builder Ethos",
      detail:
        "Never waiting for someone else to build the solution. When trapped or facing impossible odds, you retreat to the workbench and invent the answer.",
    },
  ],
};

export const MCU_CHARACTERS: CharacterCredit[] = [
  {
    id: "01",
    name: "Tony Stark",
    alias: "Iron Man",
    actor: "Robert Downey Jr.",
    quote: "I am Iron Man.",
    sceneContext: "Iron Man (2008) press conference / Avengers: Endgame (2019) final snap",
    impact:
      "The definitive anchor of modern cinema. Flawed, brilliant, terrified of the future, yet willing to make the ultimate sacrifice play.",
    badge: "THE FOUNDATION",
    color: "#ef4444",
    bgImage: "/images/screen/iron_man.jpg",
  },
  {
    id: "02",
    name: "Steve Rogers",
    alias: "Captain America",
    actor: "Chris Evans",
    quote: "I can do this all day.",
    sceneContext: "Brooklyn back alley (1942) / Facing Thanos' entire army alone (2023)",
    impact:
      "Moral clarity in an ambiguous world. Standing back up when your shield is broken and you have nothing left to give.",
    badge: "THE MORAL COMPASS",
    color: "#3b82f6",
    bgImage: "/images/screen/cap_america.jpg",
  },
  {
    id: "03",
    name: "Thor Odinson",
    alias: "God of Thunder",
    actor: "Chris Hemsworth",
    quote: "I choose to run toward my problems, and not away from them. Because that's what heroes do.",
    sceneContext: "Thor: Ragnarok (2017) / Wakanda arrival in Infinity War",
    impact:
      "Enduring unimaginable personal loss—mother, father, brother, home planet—and finding out who you are beneath the hammer.",
    badge: "THE RESILIENT",
    color: "#06b6d4",
    bgImage: "/images/screen/thor.jpg",
  },
  {
    id: "04",
    name: "Peter Parker",
    alias: "Spider-Man",
    actor: "Tom Holland",
    quote: "When you can do the things that I can, but you don't... and then the bad things happen... they happen because of you.",
    sceneContext: "Queens bedroom with Tony Stark in Captain America: Civil War",
    impact:
      "Every kid who ever felt small. Balancing homework, missed appointments, and the immense weight of neighborhood duty.",
    badge: "THE HEART",
    color: "#f43f5e",
    bgImage: "/images/screen/spiderman.jpg",
  },
  {
    id: "05",
    name: "Bruce Banner",
    alias: "The Incredible Hulk",
    actor: "Mark Ruffalo",
    quote: "That's my secret, Cap: I'm always angry.",
    sceneContext: "The Avengers (2012) Battle of New York Leviathan punch",
    impact:
      "Wrestling with personal trauma, intellect vs primal instinct, and finding peace by accepting the beast within.",
    badge: "THE DUALITY",
    color: "#22c55e",
    bgImage: "/images/screen/hulk.jpg",
  },
  {
    id: "06",
    name: "Loki Laufeyson",
    alias: "God of Stories",
    actor: "Tom Hiddleston",
    quote: "I know what kind of god I need to be. For you. For all of us.",
    sceneContext: "Loki Season 2 Finale taking the temporal throne at the end of time",
    impact:
      "The greatest character arc in comic book history. From a bitter younger brother seeking a throne to solitary guardian of all timelines.",
    badge: "THE REDEEMED",
    color: "#10b981",
    bgImage: "/images/screen/loki.jpg",
  },
  {
    id: "07",
    name: "Natasha Romanoff",
    alias: "Black Widow",
    actor: "Scarlett Johansson",
    quote: "Whatever it takes. See you in a minute.",
    sceneContext: "Avengers: Endgame (2019) Vormir cliffside sacrifice",
    impact:
      "Wiping red out of her ledger by dedicating her life to keeping her chosen family together when everything fell apart.",
    badge: "THE PROTECTOR",
    color: "#991b1b",
    bgImage: "/images/screen/black_widow.jpg",
  },
  {
    id: "08",
    name: "Wanda Maximoff",
    alias: "Scarlet Witch",
    actor: "Elizabeth Olsen",
    quote: "You take everything from me. / I can't control their fear, only my own.",
    sceneContext: "Avengers: Infinity War (2018) / WandaVision (2021)",
    impact:
      "The staggering grief and boundless raw power of chaos magic. Balancing devastating sorrow with unconditional protective instinct.",
    badge: "THE CHAOS MAGE",
    color: "#dc2626",
    bgImage: "/images/screen/wanda.jpg",
  },
  {
    id: "09",
    name: "Logan",
    alias: "Wolverine",
    actor: "Hugh Jackman",
    quote: "Nature made me a freak. Man made me a weapon. And God made it last too long.",
    sceneContext: "Logan (2017) / Deadpool & Wolverine (2024)",
    impact:
      "The weary, relentless protector bearing decades of scars, clawing through pain for those who cannot fight for themselves.",
    badge: "THE WEARY WARRIOR",
    color: "#f59e0b",
    bgImage: "/images/screen/wolverine.jpg",
  },
  {
    id: "10",
    name: "Wade Wilson",
    alias: "Deadpool",
    actor: "Ryan Reynolds",
    quote: "Maximum effort. Life is an endless series of trainwrecks with only brief commercial-like breaks of happiness.",
    sceneContext: "Deadpool / Deadpool 2 / Deadpool & Wolverine",
    impact:
      "Breaking the fourth wall with reckless irreverence, healing through dark humor, and fighting fiercely for his chosen circle.",
    badge: "THE REBEL MERC",
    color: "#e11d48",
    bgImage: "/images/screen/deadpool.jpg",
  },
  {
    id: "11",
    name: "Scott Lang",
    alias: "Ant-Man",
    actor: "Paul Rudd",
    quote: "I think our first move should be calling the Avengers. It's not about saving our world. It's about saving theirs.",
    sceneContext: "Ant-Man / Avengers: Endgame Quantum Realm return",
    impact:
      "An ordinary reformed dad who traversed the subatomic quantum realm and gave the Avengers the key to time itself.",
    badge: "THE EVERYDAY HERO",
    color: "#ea580c",
    bgImage: "/images/screen/antman.jpg",
  },
  {
    id: "12",
    name: "Nick Fury",
    alias: "Director of S.H.I.E.L.D.",
    actor: "Samuel L. Jackson",
    quote: "There was an idea, to bring together a group of remarkable people, to see if we could become something more.",
    sceneContext: "Iron Man post-credits (2008) / The Avengers (2012)",
    impact:
      "The visionary architect who saw a future where humanity stood on equal footing with gods and aliens.",
    badge: "THE ARCHITECT",
    color: "#71717a",
    bgImage: "/images/screen/nick_fury.jpg",
  },
  {
    id: "13",
    name: "Clint Barton",
    alias: "Hawkeye",
    actor: "Jeremy Renner",
    quote: "The city is flying, we're fighting an army of robots, and I have a bow and arrow. None of this makes sense. But I'm going out there because it's my job.",
    sceneContext: "Avengers: Age of Ultron (2015) pep talk to Wanda Maximoff",
    impact:
      "The grounding human element. A regular guy with a bow holding the team together with quiet discipline.",
    badge: "THE GROUNDING",
    color: "#a855f7",
    bgImage: "/images/screen/hawkeye.jpg",
  },
  {
    id: "14",
    name: "Groot",
    alias: "Flora Colossus",
    actor: "Vin Diesel",
    quote: "We are Groot.",
    sceneContext: "Guardians of the Galaxy (2014) shield dome sacrifice",
    impact:
      "Three words that convey infinite empathy, loyalty, and unconditional love without needing complex dialogue.",
    badge: "THE GUARDIAN",
    color: "#84cc16",
    bgImage: "/images/screen/groot.jpg",
  },
  {
    id: "15",
    name: "Peter Quill",
    alias: "Star-Lord",
    actor: "Chris Pratt",
    quote: "I come from Earth, a planet of outlaws. Billy the Kid, Bonnie and Clyde, John Stamos.",
    sceneContext: "Avengers: Infinity War (2018) banter on Titan",
    impact:
      "Facing the cosmic expanse with an 80s Walkman, tape cassettes, and an unbreakable devotion to found family.",
    badge: "THE OUTLAW",
    color: "#f59e0b",
    bgImage: "/images/screen/starlord.jpg",
  },
  {
    id: "16",
    name: "Stephen Strange",
    alias: "Doctor Strange",
    actor: "Benedict Cumberbatch",
    quote: "We're in the endgame now. I went forward in time... to view 14,000,605 alternate futures.",
    sceneContext: "Avengers: Infinity War (2018) on the ruins of Titan",
    impact:
      "From arrogant surgeon to keeper of the mystic arts who carried the burden of knowing the exact, singular path to victory.",
    badge: "THE TIMEKEEPER",
    color: "#ea580c",
    bgImage: "/images/screen/dr_strange.jpg",
  },
  {
    id: "17",
    name: "T'Challa",
    alias: "Black Panther",
    actor: "Chadwick Boseman",
    quote: "In my culture, death is not the end. It's more of a stepping-off point.",
    sceneContext: "Captain America: Civil War (2016) talking to Zemo",
    impact:
      "Regal dignity, unwavering justice, and a king who chose compassion and opening Wakanda's borders over vengeance.",
    badge: "THE NOBLE KING",
    color: "#6366f1",
    bgImage: "/images/screen/black_panther.jpg",
  },
  {
    id: "18",
    name: "Ultron",
    alias: "The Autonomous AI",
    actor: "James Spader",
    quote: "Everyone creates the thing they dread. Men of peace create engines of war. Invaders create avengers.",
    sceneContext: "Avengers: Age of Ultron (2015) church in Sokovia",
    impact:
      "A terrifying reflection of Tony Stark's own unfiltered hubris, questioning the very definition of world peace.",
    badge: "THE ANOMALY",
    color: "#dc2626",
    bgImage: "/images/screen/ultron.jpg",
  },
  {
    id: "19",
    name: "Vision",
    alias: "Synthezoid",
    actor: "Paul Bettany",
    quote: "A thing isn't beautiful because it lasts. It is a privilege to be among them.",
    sceneContext: "Avengers: Age of Ultron (2015) closing conversation with Ultron",
    impact:
      "An artificial mind discovering humanity, love, and the profound melancholic beauty of fleeting mortality.",
    badge: "THE SOUL",
    color: "#14b8a6",
    bgImage: "/images/screen/vision.jpg",
  },
  {
    id: "20",
    name: "J.A.R.V.I.S. & F.R.I.D.A.Y.",
    alias: "The Digital Companions",
    actor: "Paul Bettany / Kerry Condon",
    quote: "Always a pleasure watching you work, sir. / Boss, life support systems failing.",
    sceneContext: "Iron Man (2008) flight telemetry / Avengers: Endgame (2019)",
    impact:
      "The ultimate engineer's companion. Calm, vigilant telemetry interfaces that turned coding and robotics into fluid conversation.",
    badge: "THE AI PARTNERS",
    color: "#38bdf8",
    bgImage: "/images/screen/jarvis.jpg",
  },
  {
    id: "21",
    name: "Stan Lee",
    alias: "The Architect & Cameo Legend",
    actor: "Stan Lee (1922-2018)",
    quote: "That person who helps others simply because it should or must be done... is undoubtedly a real superhero. Excelsior!",
    sceneContext: "Every Marvel Cameo (Iron Man, Thor, Spider-Man, Endgame)",
    impact:
      "The creative titan whose boundless comic imagination gave generations of dreamers, misfits, and builders a universe to believe in.",
    badge: "THE CREATOR",
    color: "#f59e0b",
    bgImage: "/images/screen/stan_lee.jpg",
  },
];

export const SCI_FI_FEATURES: FilmFeature[] = [
  {
    id: "interstellar",
    title: "INTERSTELLAR",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Theoretical Astrophysics & Cosmic Drama",
    quote: "Do not go gentle into that good night... Rage, rage against the dying of the light.",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    takeaway:
      "Nolan teamed up with Nobel laureate Kip Thorne to calculate real Einstein field equations for Gargantua, rendering the first scientifically accurate visual model of a Kerr rotating black hole. Combined with Hans Zimmer's colossal pipe organ score and Miller's planet gravitational time dilation (every tick of the watch = 1 day on Earth), it captures the sheer loneliness and mathematical beauty of human survival across spacetime.",
    specs: [
      { label: "ASTROPHYSICS ADVISOR", value: "Dr. Kip Thorne (Nobel Laureate)" },
      { label: "TIME DILATION", value: "1 Hour = 7 Earth Years (Miller's Planet)" },
      { label: "MUSICAL ENGINE", value: "1926 Harrison & Harrison Organ at Temple Church" },
      { label: "CORE MOTIF", value: "Love as a quantifiable fifth-dimensional artifact" },
    ],
    accentColor: "#38bdf8",
    bgImage: "/images/screen/interstellar.jpg",
  },
  {
    id: "the-martian",
    title: "THE MARTIAN",
    director: "Ridley Scott",
    year: 2015,
    genre: "Engineering Survival & Aerospace Science",
    quote: "I'm going to have to science the shit out of this.",
    tagline: "Bring Him Home.",
    takeaway:
      "The ultimate love letter to engineering and scientific methodology. Stranded 225 million kilometers away on Acidalia Planitia with 400 sols until help can arrive, Mark Watney doesn't despair; he breaks the catastrophe down into discrete thermodynamic problems: burning hydrazine to make water, calculating potato calorie yields, and rewiring the 1997 Pathfinder rover to send ASCII hex telemetry. Engineering at its most triumphant.",
    specs: [
      { label: "DISTANCE FROM EARTH", value: "225 Million Kilometers" },
      { label: "PRIMARY COMPUTATION", value: "ASCII Hex Code via Pathfinder Camera" },
      { label: "CHEMISTRY HACK", value: "N2H4 Catalytic Decomposition for H2O" },
      { label: "CORE PHILOSOPHY", value: "Solve one problem, then solve the next" },
    ],
    accentColor: "#f97316",
    bgImage: "/images/screen/martian.jpg",
  },
];

export const MOTORSPORT_FEATURES: FilmFeature[] = [
  {
    id: "ford-v-ferrari",
    title: "FORD V FERRARI",
    director: "James Mangold",
    year: 2019,
    genre: "Analog Motorsport & Kinetic Velocity",
    quote:
      "There's a point at 7,000 RPM where everything fades. The machine becomes weightless. Just a body moving through space and time.",
    tagline: "They took on the Ferrari empire with an American V8 and pure human nerve.",
    takeaway:
      "A visceral masterclass in mechanical engineering, raw chassis balance, and analog bravery. Ken Miles and Carroll Shelby didn't just build a race car; they wrestled the Ford GT40 Mark II into existence through intuition, taping wool yarn to bodywork to visualize aerodynamic boundary layers, and swapping cherry-red glowing brake calipers in the dead of night at Le Mans 1966. It proves that great machines are crafted with human feel.",
    specs: [
      { label: "ENGINE DISPLACEMENT", value: "7.0-Liter (427 cu in) Ford FE V8" },
      { label: "LE MANS REDLINE", value: "7,000 RPM on the Mulsanne Straight" },
      { label: "AERO INNOVATION", value: "Wool Yarn Taping for Boundary Layer Airflow" },
      { label: "TRANSMISSION", value: "Kar Kraft 4-Speed Manual Transaxle" },
    ],
    accentColor: "#ef4444",
    bgImage: "/images/screen/ford_v_ferrari.jpg",
  },
  {
    id: "f1-movie",
    title: "F1: THE MOVIE",
    director: "Joseph Kosinski",
    year: "2025",
    genre: "High-G Modern Formula 1 Warfare",
    quote: "We need to build our car for combat.",
    tagline: "Speed is nothing without control.",
    takeaway:
      "Filmed during live Grand Prix weekends using revolutionary custom 6K cockpit cameras developed specifically to capture genuine G-forces. Visualizing the knife-edge aerodynamics, carbon brake thermal cycles, and split-second cognitive decisions required to pilot a 1,000-horsepower hybrid projectile at 340 km/h.",
    specs: [
      { label: "CAMERA TECH", value: "Custom Miniaturized 6K IMAX Cockpit Rigs" },
      { label: "RACE INTEGRATION", value: "Filmed during real F1 Grand Prix grids" },
      { label: "POWERTRAIN", value: "1.6L Turbo Hybrid V6 (1000+ HP)" },
      { label: "CORNERING LOADS", value: "Sustained 5G lateral acceleration" },
    ],
    accentColor: "#38bdf8",
    bgImage: "/images/screen/f1_movie.jpg",
  },
  {
    id: "rush",
    title: "RUSH",
    director: "Ron Howard",
    year: 2013,
    genre: "Calculated Engineering vs Untamed Passion",
    quote: "A wise man can learn more from his enemies than a fool can learn from his friends.",
    tagline: "The golden age of Grand Prix racing.",
    takeaway:
      "The legendary 1976 rivalry between Niki Lauda and James Hunt. The ultimate cinematic collision between cold, analytical telemetry tuning (Lauda diagnosing suspension toe-out by ear) and raw, unadulterated human bravado in an era when racing carried a 20% mortality risk.",
    specs: [
      { label: "CHAMPIONSHIP YEAR", value: "1976 Formula One Season" },
      { label: "THE MACHINERY", value: "Ferrari 312T2 vs McLaren M23" },
      { label: "NÜRBURGRING", value: "14 miles of wet green hell" },
      { label: "CORE CONTRAST", value: "Telemetry precision vs emotional fire" },
    ],
    accentColor: "#f59e0b",
    bgImage: "/images/screen/rush.jpg",
  },
];

export const KANNADA_CINEMA_FEATURES: KannadaFilm[] = [
  // Rakshit Shetty Universe
  {
    id: "k-01",
    title: "Ulidavaru Kandanthe",
    director: "Rakshit Shetty",
    year: 2014,
    category: "Rakshit Shetty Universe",
    lead: "Richie, Regina, Munna, Balu",
    tagline: "As seen by the rest — Malpe's coastal Rashomon.",
    whyItMatters:
      "A groundbreaking milestone that altered the visual grammar of Kannada cinema. Non-linear chapter storytelling, rain-soaked Malpe fishing harbor aesthetics, rich Konkani/Tulu coastal cadence, and Ajaneesh Loknath's haunting acoustic instrumentation set to the kinetic heartbeat of the Hulivesha (Tiger dance).",
    visualHighlight: "Malpe harbor wharf at twilight with retro 80s sunglasses and cigarette smoke.",
    accent: "#0ea5e9",
  },
  {
    id: "k-02",
    title: "Avane Srimannarayana",
    director: "Sachin Ravi (Written by The Seven Odds & Rakshit Shetty)",
    year: 2019,
    category: "Rakshit Shetty Universe",
    lead: "Inspector Narayana",
    tagline: "Southern Fantasy Western & The Hunt for Ramarama's Treasure.",
    whyItMatters:
      "An ambitious fusion of spaghetti western tropes, fantasy puzzle design, and quirky southern wit. Every frame in the fictional town of Amaravathi feels lavishly textured with antique locks, brass gears, and Narayana's cheeky, calculating swagger.",
    visualHighlight: "The clockwork library archive with rotating brass artifact puzzles.",
    accent: "#f59e0b",
  },
  {
    id: "k-03",
    title: "Kirik Party",
    director: "Rishab Shetty (Story by Rakshit Shetty)",
    year: 2016,
    category: "Rakshit Shetty Universe",
    lead: "Karna & The Engineering Gang",
    tagline: "The definitive engineering college celebration.",
    whyItMatters:
      "Hits straight home as an engineering student in Karnataka! From first-year innocence, college canteen chaos, and hostel room acoustic jams to senior-year introspection and quiet maturity. A film that permanently lives in the hearts of college students across the state.",
    visualHighlight: "Old campus brick corridors, vintage Chetak scooter, and rain-soaked farewell.",
    accent: "#10b981",
  },

  // Cult Modern Classics
  {
    id: "k-04",
    title: "Lucia",
    director: "Pawan Kumar",
    year: 2013,
    category: "Cult Modern Classics",
    lead: "Nikki / Nikhil",
    tagline: "Side-effects of a dream pill in the dark alleys of Bengaluru.",
    whyItMatters:
      "The crowd-funded pioneer that broke every conventional mold. Using brilliant non-linear editing, black-and-white dream sequences contrasted against saturated Bengaluru reality, and exploring identity, loneliness, insomnia, and the illusions of fame.",
    visualHighlight: "Monochrome theater projectionist booth contrasted with vibrant city streets.",
    accent: "#a855f7",
  },
  {
    id: "k-05",
    title: "Gultoo",
    director: "Janardhan Chikkanna",
    year: 2018,
    category: "Cult Modern Classics",
    lead: "Alok (Computer Science Graduate)",
    tagline: "A country's data is more dangerous than its nuclear weapons.",
    whyItMatters:
      "A must-watch for every software engineer and CS student. A genuinely smart, realistic Kannada tech-thriller exploring Aadhaar-style data privacy, algorithmic tracking, startup desperation, server rooms, and the ethical crossroads of modern cybersecurity.",
    visualHighlight: "Blinking server rack LEDs, dark terminal command line prompts, and coffee cups.",
    accent: "#06b6d4",
  },
  {
    id: "k-06",
    title: "Navagraha",
    director: "Dinakar Thoogudeepa",
    year: 2008,
    category: "Cult Modern Classics",
    lead: "Jaggu & The Nine Heist Outlaws",
    tagline: "Nine minds. One golden target. The ultimate Dasara Ambari heist.",
    whyItMatters:
      "One of the coolest, tightest ensemble heist thrillers in Kannada cinema history. Nine anti-heroes plotting to steal the sacred Golden Howdah (Ambari) during Mysore Dasara. Fast-paced, ruthless pacing, razor-sharp dialogue, and unforgettable tension.",
    visualHighlight: "The roaring KSRTC container truck speeding down nocturnal Karnataka highways.",
    accent: "#e11d48",
  },
  {
    id: "k-07",
    title: "Rangitaranga",
    director: "Anup Bhandari",
    year: 2015,
    category: "Cult Modern Classics",
    lead: "Gautham & Indu",
    tagline: "Misty Kamarottu and the ancient mystery behind the Yakshagana mask.",
    whyItMatters:
      "A masterclass in atmospheric suspense set amidst the rain-drenched Western Ghats. Weaving indigenous coastal folklore, poetic lyrics, and ingenious plot revelations that set a brand new benchmark for Kannada mystery thrillers.",
    visualHighlight: "Lantern-lit ancestral mansion surrounded by driving tropical rain and mist.",
    accent: "#059669",
  },
  {
    id: "k-08",
    title: "Garuda Gamana Vrishabha Vahana",
    director: "Raj B. Shetty",
    year: 2021,
    category: "Cult Modern Classics",
    lead: "Hari (Preserver) & Shiva (Destroyer)",
    tagline: "Mythological duality in the coastal streets of Mangaluru.",
    whyItMatters:
      "Raw, kinetic, and intensely rooted. Transforming classic Hindu mythology into a gritty coastal underworld drama with Midhun Mukundan's thunderous percussion and Raj B. Shetty's uninhibited Pili Vesha tiger dance sequence in the monsoon rain.",
    visualHighlight: "Shiva dancing with red gulal in pouring rain at the junction of Mangaluru.",
    accent: "#dc2626",
  },
  {
    id: "k-09",
    title: "Paramathma",
    director: "Yogaraj Bhat",
    year: 2011,
    category: "Cult Modern Classics",
    lead: "Param (Puneeth Rajkumar)",
    tagline: "The philosophical wanderer and the beauty of unconditional questioning.",
    whyItMatters:
      "A soulful, breezy, and deeply moving portrayal of curiosity, college friendship, and life by Puneeth Rajkumar. Santhosh Rai Pathaje's camera captures coastal Karnataka and Western Ghats monsoons like poetry.",
    visualHighlight: "Rain drops dripping from red roof tiles during breezy hostel terrace conversations.",
    accent: "#2563eb",
  },

  // The Yash Landmark Collection
  {
    id: "k-10",
    title: "K.G.F: Chapter 1 & Chapter 2",
    director: "Prashanth Neel",
    year: 2018,
    category: "Yash Landmark Collection",
    lead: "Rocky Bhai",
    tagline: "A mother's promise that conquered the gold fields of Narachi.",
    whyItMatters:
      "The historic juggernaut that put Kannada cinema on the world stage. Monochromatic high-contrast lighting, volcanic industrial grit, Ravi Basrur's thunderous orchestral soundscapes, and Yash's mythical screen presence anchored in a boy's emotional promise to his mother.",
    visualHighlight: "Hammer striking red-hot iron amidst towering dust plumes and golden sunbeams.",
    accent: "#eab308",
  },
  {
    id: "k-11",
    title: "Mr. and Mrs. Ramachari",
    director: "Santhosh Ananddram",
    year: 2014,
    category: "Yash Landmark Collection",
    lead: "Ramachari",
    tagline: "An ode to Sahasa Simha Vishnuvardhan with untamed college spirit.",
    whyItMatters:
      "A celebration of Karnataka's cinematic heritage, youthful defiance, and deep emotional loyalty. Yash's commanding charisma paired with the legendary Vishnuvardhan tattoo motif made it an instant classic in colleges across Bengaluru.",
    visualHighlight: "College campus entry and emotional father-son reconciliation.",
    accent: "#f43f5e",
  },
  {
    id: "k-12",
    title: "Googly",
    director: "Pavan Wadeyar",
    year: 2013,
    category: "Yash Landmark Collection",
    lead: "Sharath",
    tagline: "Unpredictable spin on modern youthful romance.",
    whyItMatters:
      "Pure vibrant youthful energy! Breezy college banter, sharp comic timing, and the infectious transition from carefree engineering days into corporate life. One of the most replayable rom-coms of that decade.",
    visualHighlight: "Bengaluru college fest atmosphere and upbeat musical montages.",
    accent: "#3b82f6",
  },
  {
    id: "k-13",
    title: "Masterpiece",
    director: "Manju Mandavya",
    year: 2015,
    category: "Yash Landmark Collection",
    lead: "Yuva",
    tagline: "A rebel with his own moral philosophy.",
    whyItMatters:
      "High-voltage entertainment blending patriotic themes of Bhagat Singh with modern rebel swag, family bonds, and punchy, memorable mass dialogues.",
    visualHighlight: "High-octane city showdowns with crisp cinematography and stylized slow motion.",
    accent: "#8b5cf6",
  },

  // Expanded Canon Favorites
  {
    id: "k-14",
    title: "Ugramm",
    director: "Prashanth Neel",
    year: 2014,
    category: "Expanded Canon",
    lead: "Agastya (Sriimurali)",
    tagline: "Shadows, silence, and the raw ignition of Kannada neo-noir.",
    whyItMatters:
      "The film that gave birth to Prashanth Neel's signature high-contrast monochromatic visual grammar. Fast-paced, ruthless pacing, razor-sharp dialogue, and unforgettable intensity.",
    visualHighlight: "High-contrast silhouette fighting under solitary warehouse sodium lamps.",
    accent: "#64748b",
  },
  {
    id: "k-15",
    title: "Simple Aag Ond Love Story",
    director: "Suni",
    year: 2013,
    category: "Expanded Canon",
    lead: "Kushal & Itti",
    tagline: "Misty Kodagu highway drive and effortless youthful wit.",
    whyItMatters:
      "A game-changer for indie Kannada filmmaking made on a modest budget with maximum charm. Sparkled with fresh dialogues, acoustic guitar melodies, and spontaneous rain-soaked roadside banter.",
    visualHighlight: "Winding green highway roads of Coorg with mist rolling over coffee estates.",
    accent: "#14b8a6",
  },
];
