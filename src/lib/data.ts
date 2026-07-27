export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const PROMISES = [
  "20+ Years Technical Expertise",
  "Custom Automation Engineering",
  "End-to-End Turnkey Execution",
  "Pan-India Service & Support",
];

export const STATS = [
  { value: "20+", label: "Years of Engineering" },
  { value: "500+", label: "Machines Deployed" },
  { value: "99.8%", label: "Operating Uptime" },
  { value: "150+", label: "Enterprise Clients" },
];

export const IMAGES = {
  hero: "/images/hero.png",
  about: "/images/about.png",
  lab: "/images/lab.png",
  factory: "/images/about.png",
  machine1: "/images/hero.png",
  machine2: "/images/lab.png",
  machine3: "/images/about.png",
};

export const CORE_VALUES = [
  { k: "01", title: "Engineering Precision", body: "Tolerances calculated down to the micrometer. Every machine is calibrated for consistent high-volume operation without degradation." },
  { k: "02", title: "Uncompromising Reliability", body: "Designed for continuous 24/7 industrial environments with high-durability components and low maintenance overhead." },
  { k: "03", title: "Customer Centricity", body: "Turnkey engineering custom-built around your specific production goals, floor space constraints, and wire specifications." },
  { k: "04", title: "Intelligent Automation", body: "Integrating smart sensors, automated indexing, and PLC controllers for seamless production tracking and safety." },
  { k: "05", title: "Sustainability & Safety", body: "Energy-efficient motor drives, reduced material waste during stripping/cutting, and ergonomically protected work stations." },
  { k: "06", title: "Continuous Innovation", body: "Constantly refining blade geometries, crimping forces, and software algorithms to keep pace with EV and automotive standards." },
];

export const WHY = [
  { title: "20+ Years Industry Leadership", body: "Trusted by tier-1 automotive, appliance, and defense equipment manufacturers across India." },
  { title: "In-House R&D & Fabrication", body: "From CAD blueprint to CNC milling and assembly, all critical components are manufactured under one roof." },
  { title: "Customized Machinery Solutions", body: "We adapt feed systems, crimp dies, and cycle speeds to match exact client production requirements." },
  { title: "Rigorous Quality Assurance", body: "Every machine undergoes a 72-hour stress test and crimp force analysis prior to dispatch." },
  { title: "Comprehensive Training & Onboarding", body: "On-site installation, operator safety training, and maintenance certification provided standard." },
  { title: "Rapid Spare & Service Network", body: "Express delivery on blades, dies, and wear parts with nationwide field service engineers." },
];

export const PRODUCTS = [
  {
    id: "wire-cutting-stripping",
    category: "Processing",
    tag: "Flagship Line",
    title: "Automatic Wire Cutting & Stripping Machine",
    specs: "0.1mm² to 16mm² wire range | Up to 8,000 pcs/hr | Touchscreen HMI",
    body: "High-speed multi-step wire processing machines capable of precision cutting, double-ended stripping, and multi-core cable indexing.",
    img: IMAGES.machine1,
    features: [
      "Micro-stepper motor driven feed mechanism",
      "Precision tool steel blades with titanium nitride coating",
      "Memory storage for 100+ wire program recipes",
      "Automatic wire end detection & knot sensor",
    ],
  },
  {
    id: "terminal-crimping-press",
    category: "Crimping",
    tag: "High Precision",
    title: "Terminal Crimping & Applicator Press",
    specs: "2.0 Ton to 5.0 Ton force | Micro-adjustable stroke | Integrated Crimp Force Monitor",
    body: "Heavy-duty semi-automatic and automatic crimping presses equipped with micro-adjustable applicators and crimp force monitors.",
    img: IMAGES.machine2,
    features: [
      "Ultra-rigid cast iron frame prevents deflection under load",
      "OTP style quick-change applicator clamping system",
      "Real-time crimp height & force waveform analysis",
      "Low noise servo drive operation",
    ],
  },
  {
    id: "wire-harness-testing-bench",
    category: "Testing",
    tag: "Quality Control",
    title: "Wire Harness Continuity & Hi-Pot Testing Bench",
    specs: "Up to 512 test points | DC 1000V Insulation test | Pass/Fail Label printer",
    body: "Comprehensive electrical continuity, insulation resistance, and connector latch verification test benches with digital reporting.",
    img: IMAGES.machine3,
    features: [
      "Guided LED point location indicator",
      "Modular test fixture boards for quick product changeovers",
      "Automated test result logging & barcode generation",
      "Integrated pneumatic connector lock checking",
    ],
  },
  {
    id: "tape-bundling-wrapping",
    category: "Taping",
    tag: "Automation",
    title: "Automated Tape Bundling & Tube Insertion Machine",
    specs: "Overlap width 0-100% | Speed up to 1500 RPM | Programmable spot distance",
    body: "Automated spot taping, spiral wire wrapping, and corrugated conduit insertion machinery built for speed and uniform tension.",
    img: IMAGES.hero,
    features: [
      "Constant tape tension control sensor",
      "Suited for PVC, cloth, and felt insulation tapes",
      "Hands-free foot pedal or optical sensor trigger",
      "Compact tabletop or stand-alone chassis options",
    ],
  },
  {
    id: "cable-pre-feeder",
    category: "Peripherals",
    tag: "Accessory",
    title: "Motorized Wire & Cable Pre-Feeder Unit",
    specs: "Max reel weight 100kg | Variable speed synchronization | Tension accumulator",
    body: "De-reeling accumulator system designed to eliminate wire tension during high-speed cutting & stripping operations.",
    img: IMAGES.lab,
    features: [
      "Smooth dancer arm acceleration control",
      "Reversible reel rotation for easy loading",
      "Compatible with wire drums, spools, and loose coils",
      "Emergency stop link with main processing machine",
    ],
  },
  {
    id: "crimping-applicators",
    category: "Tooling",
    tag: "Custom Dies",
    title: "Precision Terminal Crimping Applicators & Dies",
    specs: "Side-feed & Rear-feed options | Wire range 0.08 - 6.0mm² | SKD11 Steel",
    body: "Custom designed and CNC machined crimp applicators engineered for zero-burr terminal crimping on any terminal geometry.",
    img: IMAGES.about,
    features: [
      "High accuracy dial adjustments for crimp height",
      "Hardened tool steel anvil & punch blades",
      "Universally adaptable to major crimp press brands",
      "Individual serial number traceably etched",
    ],
  },
];

export const OTHER_CAPABILITIES = [
  "Custom Crimping Applicators & Dies",
  "Wire Feeding & Pre-Feeder Units",
  "Pneumatic Cable Strippers",
  "Ultrasonic Metal Welding Fixtures",
  "Custom Assembly Conveyors",
  "Pull Force Testing Instruments",
];

export const INDUSTRIES = [
  {
    id: "automotive-ev",
    name: "Automotive & Electric Vehicles",
    tag: "Highest Volume Segment",
    body: "Engine harnesses, EV battery pack interconnects, sensor wiring assemblies, and high-voltage power cables.",
    highlights: ["High-voltage EV orange cable stripping", "Ultrasonic copper terminal welding", "Automated seal loading & crimping"],
  },
  {
    id: "consumer-appliances",
    name: "Consumer Electronics & Appliances",
    tag: "High Efficiency",
    body: "Internal wiring looms for refrigerators, washing machines, HVAC units, and smart home devices.",
    highlights: ["Multi-core ribbon wire processing", "Insulation displacement connectors (IDC)", "High-speed IDC multi-pole crimping"],
  },
  {
    id: "industrial-automation",
    name: "Industrial Machinery & Automation",
    tag: "Heavy Duty",
    body: "Heavy duty control panel wiring, CNC machine cables, and robotic arm articulated harnesses.",
    highlights: ["Shielded twisted pair cable stripping", "Heavy wire terminal crimping up to 50mm²", "Ferrule crimping systems"],
  },
  {
    id: "telecom-data",
    name: "Telecommunications & Data Infrastructure",
    tag: "Micro Precision",
    body: "Precision ribbon cables, fiber routing assemblies, and server rack patch wiring harnesses.",
    highlights: ["Micro-coaxial cable preparation", "High-density connector pin crimping", "Precision optical inspection"],
  },
  {
    id: "defense-aerospace",
    name: "Defense & Aerospace",
    tag: "Mil-Spec Certified",
    body: "Mil-spec ruggedized harness assemblies built for extreme temperature, vibration, and EMI shielding.",
    highlights: ["Teflon & Kapton wire stripping", "Quadrax & High-speed data contact crimping", "Environmental seal testing"],
  },
];

export const PROCESS = [
  { n: "01", t: "Needs Analysis & Wire Spec Audit", d: "Understanding wire gauges, insulation materials, terminal types, and production volume targets." },
  { n: "02", t: "Custom Engineering & CAD Design", d: "Designing machine kinematics, blade profiles, die tooling, and PLC control logic." },
  { n: "03", t: "Precision Fabrication & Machining", d: "CNC milling, wire-cut EDM, and heat treatment of high-grade tool steel components." },
  { n: "04", t: "Electrical & PLC Integration", d: "Wiring safety circuits, drive controllers, and intuitive human-machine interface (HMI) screens." },
  { n: "05", t: "Calibration & Crimp Force Validation", d: "Micro-section analysis, pull force testing, and process capability (Cpk) verification." },
  { n: "06", t: "72-Hour Endurance Run", d: "Continuous stress testing under maximum operating speed to ensure zero heat or mechanical drift." },
  { n: "07", t: "On-Site Installation & Training", d: "Delivery, leveling, calibration on your factory floor, and operator safety training." },
  { n: "08", t: "Life-Cycle Support & Spare Parts", d: "Regular preventive maintenance, firmware updates, and rapid spare die delivery." },
];

export const PHILOSOPHY_3P = [
  { p: "People", body: "Skilled engineers, toolmakers, and automation specialists dedicated to solving complex manufacturing challenges." },
  { p: "Process", body: "ISO-aligned manufacturing workflows ensuring zero-defect tolerances from raw steel to final machine assembly." },
  { p: "Performance", body: "Machines built for long operational life, low cycle times, and minimal planned maintenance downtime." },
];

export const ETHOS = [
  { title: "Zero Defect Manufacturing", body: "Built-in optical and electrical sensors instantly halt operation if wire feeding or crimp depth deviates from tolerance." },
  { title: "Modular Upgradability", body: "Machine architectures designed so applicators, blades, and software functions can expand as your product line grows." },
  { title: "Energy Efficient Drives", body: "High-torque servo motors consume power only during active cycles, reducing factory energy costs." },
  { title: "Ergonomic & Safe Operation", body: "Transparent poly-carbonate safety interlocks, emergency stops, and low-noise pneumatic mufflers." },
];

export const CONTACT = {
  email: "sales@kdengineersindia.com",
  phone: "+91 98100 00000",
  address: "Plot No. 42, Industrial Area, Sector 57, Gurugram, Haryana - 122001, India",
};
