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
    id: "cut",
    category: "Cut",
    tag: "High Speed",
    title: "Automatic Precision Wire Cutting Machine",
    specs: "0.1mm² to 25mm² wire range | 10,000 pcs/hr | Micro-stepper feed",
    body: "Dedicated high-speed automatic wire and tubing cutting machine designed for extreme length precision and clean zero-burr cutting across multi-strand copper, Teflon, and PVC cables.",
    img: IMAGES.machine1,
    features: [
      "Micro-stepper motor driven high-speed wire feed",
      "Tungsten carbide cutter blades for ultra-long lifespan",
      "Programmable length setting from 0.1mm to 99,999mm",
      "Automatic end-of-wire optical sensor halt",
    ],
  },
  {
    id: "cut-strip",
    category: "Cut&Strip",
    tag: "Flagship Line",
    title: "Automatic Wire Cut & Strip Machine",
    specs: "0.1mm² to 16mm² wire range | 8,000 pcs/hr | Touchscreen HMI",
    body: "Multi-functional automatic wire processing machine capable of precision cutting, double-ended stripping, and multi-step stripping for automotive and appliance wiring looms.",
    img: IMAGES.machine1,
    features: [
      "Titanium nitride coated tool steel stripping blades",
      "Memory storage for 100+ wire program recipes",
      "Pneumatic jacket stripper for multi-core cables",
      "Automatic wire knot and feeding error detection",
    ],
  },
  {
    id: "strip-twist",
    category: "Strip,Twist",
    tag: "Multi-Wire",
    title: "Wire Stripping & Twisting Machine",
    specs: "AWG 32 - AWG 14 wire range | 4,500 pcs/hr | Synchronized Twister",
    body: "Pneumatic and electric wire stripping and strand twisting machine designed to strip single or multi-core copper wire ends and tight-twist loose strands ready for soldering or crimping.",
    img: IMAGES.lab,
    features: [
      "Adjustable twisting speed and rotation direction",
      "V-blade stripping geometry prevents strand damage",
      "Compact benchtop design for high-density assembly lines",
      "Foot pedal or optical sensor cycle activation",
    ],
  },
  {
    id: "labeling-machine",
    category: "Labeling Machine",
    tag: "Identification",
    title: "Automated Wire & Cable Labeling Machine",
    specs: "Outer diameter 1.5mm - 12mm | Wrap-around & Flag labels | 3,200 pcs/hr",
    body: "High-precision automatic cable labeling machine engineered for wrap-around self-laminating vinyl labels and flag labels on wire harnesses, patch cords, and industrial cables.",
    img: IMAGES.hero,
    features: [
      "Bubble-free smooth wrap-around label application",
      "Compatible with barcode, QR code, and thermal print labels",
      "Adjustable label tension and position alignment",
      "Microprocessor control with digital batch counter",
    ],
  },
  {
    id: "cable-solder-weld",
    category: "Cable Solder& Weld",
    tag: "Ultrasonic",
    title: "Ultrasonic Cable Welding & Solder Machine",
    specs: "20kHz frequency | 0.5mm² - 35mm² copper splice | Real-time energy monitor",
    body: "High-frequency ultrasonic metal welding machine engineered for solid copper-to-copper wire splicing, brass terminal welding, and automated tin-dip soldering.",
    img: IMAGES.lab,
    features: [
      "Zero-solder solid-state metallurgical bond",
      "Real-time weld height & power limit checking",
      "Titanium sonotrode horn for long operating life",
      "Automated tinning pot with constant temperature control",
    ],
  },
  {
    id: "prefeeding-deposit",
    category: "Prefeeding& Deposit",
    tag: "Peripherals",
    title: "Motorized Cable Pre-Feeding & Accumulator System",
    specs: "Max reel weight 150kg | Synchronized dancer arm | Variable speed 0-180 RPM",
    body: "Heavy-duty motorized cable dereeling and tension-free accumulator system designed to feed heavy wire spools smoothly into high-speed cutting & stripping machinery.",
    img: IMAGES.lab,
    features: [
      "Dancer arm acceleration synchronization prevents wire stretching",
      "Reversible reel spindle for rapid spool changeovers",
      "Emergency stop link connected to main processing machine",
      "Compatible with spools, loose coils, and barrel drums",
    ],
  },
  {
    id: "heat-shrinkage",
    category: "Heat Shrinkage",
    tag: "Thermal Processing",
    title: "Heat Shrink Tubing Processing Machine",
    specs: "Shrink length 5mm - 100mm | Temp range 50°C - 500°C | IR Heating",
    body: "Infrared thermal heat shrink tube processing machine engineered for uniform 360-degree heat distribution on wire splices, ring terminals, and cable joint insulation.",
    img: IMAGES.hero,
    features: [
      "Infrared quartz heating tubes for instant thermal transfer",
      "Adjustable conveyor speed and heating duration",
      "Digital PID temperature controller ±1°C accuracy",
      "Cooling fan module for rapid post-shrink stabilization",
    ],
  },
  {
    id: "copper-belt-press",
    category: "Copper Belt Press",
    tag: "Splice Machine",
    title: "Continuous Copper Belt Splice Press",
    specs: "1.5 Ton to 3.0 Ton force | Continuous copper strip feed | 2,800 splices/hr",
    body: "Automatic continuous copper belt crimping press designed to join resistance wires, neon lamps, LED leads, and wire harness splices without solder or pre-formed terminals.",
    img: IMAGES.machine2,
    features: [
      "Continuous copper ribbon feeding eliminates pre-made terminal cost",
      "Clean zero-burr crimp connection with gas-tight seal",
      "Ultra-low noise motor drive for quiet operation",
      "Integrated stroke counter and crimp depth dial",
    ],
  },
  {
    id: "printing-marking",
    category: "Printing Marking",
    tag: "Laser & Inkjet",
    title: "Inkjet & Laser Wire Printing Marking System",
    specs: "Print speed up to 600m/min | Non-contact UV/Laser | Micro-font 0.8mm",
    body: "Non-contact high-speed inkjet and UV laser wire marking machine engineered for clear, durable part numbering, barcodes, and circuit branding directly on wire insulation.",
    img: IMAGES.machine3,
    features: [
      "Instant dry UV-curable ink or permanent UV laser etching",
      "Compatible with PVC, Teflon, XLPE, and silicone wire insulation",
      "Automated text synchronization with wire cutting machine",
      "Maintenance-free sealed laser tube technology",
    ],
  },
  {
    id: "solar-cable-line",
    category: "Solar Cable Line",
    tag: "Photovoltaic",
    title: "Photovoltaic Solar Cable Processing Line",
    specs: "Cable size 2.5mm² - 16mm² PV wire | MC4 connector crimp | 1,500 lines/hr",
    body: "Fully automatic specialized production line for cutting, double-layer PV jacket stripping, MC4 solar terminal crimping, and electrical continuity testing of solar panel cables.",
    img: IMAGES.machine1,
    features: [
      "Double-blade rotary stripping for tough outer PV insulation",
      "Heavy-duty 4-indent MC4 solar contact crimping press",
      "Online crimp force monitor with automatic rejection gate",
      "Integrated barcode printing for PV harness traceability",
    ],
  },
  {
    id: "crimp",
    category: "Crimp",
    tag: "High Precision",
    title: "Terminal Crimping & Servo Applicator Press",
    specs: "2.0 Ton to 5.0 Ton force | Micro-adjustable stroke | Crimp Force Monitor",
    body: "Heavy-duty semi-automatic and automatic crimping presses equipped with micro-adjustable applicators and crimp force waveform monitoring for automotive terminals.",
    img: IMAGES.machine2,
    features: [
      "Ultra-rigid cast iron frame prevents deflection under 5-ton load",
      "OTP style quick-change applicator clamping system",
      "Real-time crimp height & force waveform analysis",
      "Low-noise servo drive motor operation",
    ],
  },
  {
    id: "shield-process",
    category: "Shield Process",
    tag: "EV Cable",
    title: "Shielded Cable Braid Folding & Processing System",
    specs: "Cable OD 3mm - 25mm | Braid brushing & folding | 1,200 cables/hr",
    body: "Automated processing machine for high-voltage EV orange cables and shielded cables, performing precision outer jacket stripping, braid brushing, folding, and foil cutting.",
    img: IMAGES.about,
    features: [
      "360-degree rotary braid brushing and combing module",
      "Uniform braid folding back over inner insulator layer",
      "Precision aluminum foil trimming without conductor nicking",
      "Pneumatic clamping fixtures for heavy-duty EV cables",
    ],
  },
  {
    id: "cut-strip-terminate-solder",
    category: "Cut Strip Terminate",
    tag: "Fully Automatic",
    title: "Integrated Cut Strip Terminate & Soldering Line",
    specs: "Double-ended crimp & solder | 5,000 pcs/hr | Servo 4-axis control",
    body: "Full turnkey automated wire harness production center capable of simultaneous cutting, double-end stripping, seal loading, terminal crimping, and tin-dip soldering.",
    img: IMAGES.machine1,
    features: [
      "Multi-station servo indexing transfer mechanism",
      "Automatic waterproof rubber seal loading module",
      "Integrated crimp force monitoring and vision inspection",
      "Single operator touchscreen controller interface",
    ],
  },
  {
    id: "wind-nylon-tying",
    category: "Wind & Nylon Tying",
    tag: "Harness Binding",
    title: "Automatic Cable Winding & Nylon Cable Tying Machine",
    specs: "Coil OD 50mm - 250mm | Tie cycle 0.8 sec | Bulk tie feeder",
    body: "Automated cable coiling and nylon cable tie binding machine built to wind wire harnesses into neat circular coils and bundle them with self-locking nylon ties.",
    img: IMAGES.hero,
    features: [
      "Programmable coiling speed and inner diameter adjustment",
      "Vibratory bowl feeder for automatic bulk nylon tie loading",
      "Consistent adjustable tie tensioning and flush tail cut",
      "Hands-free foot pedal or sensor cycle trigger",
    ],
  },
  {
    id: "tape-bundling",
    category: "Tape Bundling",
    tag: "Automation",
    title: "Automated Wire Harness Tape Bundling Machine",
    specs: "Overlap width 0-100% | Speed up to 1500 RPM | Programmable spot distance",
    body: "Automated spot taping, spiral wire wrapping, and corrugated conduit insertion machinery built for speed, uniform tension, and ergonomic wire harness binding.",
    img: IMAGES.hero,
    features: [
      "Constant tape tension control sensor prevents wire crushing",
      "Suited for PVC, cloth, felt, and aluminum insulation tapes",
      "Hands-free foot pedal or optical sensor trigger",
      "Compact tabletop or stand-alone chassis options",
    ],
  },
  {
    id: "plug-production",
    category: "Plug Production",
    tag: "Connector Assembly",
    title: "Connector Plug & Grommet Assembly Line",
    specs: "Up to 3,600 plugs/hr | Auto pin insertion | Continuity check",
    body: "Automated assembly machinery for multi-pin connector plugs, rubber grommets, and terminal housing insertion, featuring 100% optical pin location checking.",
    img: IMAGES.lab,
    features: [
      "Vibratory bowl feeding for connector housings and rubber seals",
      "Automated terminal insertion verification with tactile sensors",
      "Online pull-back test ensuring terminal latch engagement",
      "Automatic rejection gate for defective pin assemblies",
    ],
  },
  {
    id: "pvc-injection",
    category: "PVC Injection",
    tag: "Low Pressure",
    title: "Low Pressure PVC Grommet Injection Molding Machine",
    specs: "Clamping force 15 Ton | Shot weight 10g - 150g | Dual station slide",
    body: "Vertical low-pressure PVC and polyamide hot-melt injection molding machine designed for strain relief grommets, waterproof connector potting, and cable strain reliefs.",
    img: IMAGES.machine2,
    features: [
      "Low pressure molding prevents internal wire & component damage",
      "Dual sliding table for continuous operator loading/unloading",
      "PID multi-zone barrel heating with digital temperature control",
      "Light curtain safety barrier for operator protection",
    ],
  },
  {
    id: "tape-dispenser",
    category: "Tape Dispenser",
    tag: "Benchtop Tool",
    title: "Precision Automatic Tape Dispenser Unit",
    specs: "Tape width 6mm - 60mm | Cut length 5mm - 999mm | Dual reel mode",
    body: "Heavy-duty benchtop automatic tape cutter and dispenser capable of feeding and cutting adhesive, non-adhesive, Kapton, and filament tapes to exact preset lengths.",
    img: IMAGES.hero,
    features: [
      "Microcomputer control with LED digital length display",
      "Dual tape reel mode feeds two tapes simultaneously",
      "Memory storage for 6 different cut length presets",
      "Auto-feed sensor presents fresh tape upon removal",
    ],
  },
  {
    id: "wire-harness-tester",
    category: "Wire Harness Tester",
    tag: "Quality Control",
    title: "Wire Harness Continuity & Hi-Pot Testing Bench",
    specs: "Up to 512 test points | DC 1000V Insulation test | Pass/Fail printer",
    body: "Comprehensive electrical continuity, insulation resistance, short circuit, and connector latch verification test benches with digital reporting and barcode label printing.",
    img: IMAGES.machine3,
    features: [
      "Guided LED point location indicator for rapid wiring audit",
      "Modular test fixture boards for quick product changeovers",
      "Automated test result logging & barcode label generation",
      "Integrated pneumatic connector lock checking",
    ],
  },
  {
    id: "moulds-accessory",
    category: "Moulds&Accessory",
    tag: "Custom Dies",
    title: "Custom Terminal Crimping Applicators & SKD11 Dies",
    specs: "Side-feed & Rear-feed options | Wire range 0.08 - 6.0mm² | SKD11 Steel",
    body: "Custom designed and CNC machined crimp applicators and SKD11 tool steel dies engineered for zero-burr terminal crimping on any terminal geometry.",
    img: IMAGES.about,
    features: [
      "High accuracy dial adjustments for crimp height down to 0.01mm",
      "Hardened tool steel anvil & punch blades vacuum heat treated",
      "Universally adaptable to major crimp press brands (Komax, Jam, OTP)",
      "Individual serial number traceably laser-etched",
    ],
  },
];

export const PRODUCT_DROPDOWN_MENU = {
  title: "New Product",
  col1: [
    { label: "Cut", href: "/products/cut" },
    {
      label: "Cut&Strip",
      href: "/products/cut-strip",
      subItems: [
        { label: "Automatic Wire Cut & Strip Machine", href: "/products/cut-strip" },
        { label: "High-Speed Micro-Wire Cut & Strip", href: "/products/cut-strip" },
        { label: "Multi-Core Shielded Cable Cut & Strip", href: "/products/cut-strip" },
      ],
    },
    {
      label: "Strip,Twist",
      href: "/products/strip-twist",
      subItems: [
        { label: "Single-Wire Stripper & Twister", href: "/products/strip-twist" },
        { label: "Multi-Wire Pneumatic Stripper & Twister", href: "/products/strip-twist" },
      ],
    },
    { label: "Labeling Machine", href: "/products/labeling-machine" },
    { label: "Cable Solder& Weld Machine", href: "/products/cable-solder-weld" },
    { label: "Prefeeding& Deposit System", href: "/products/prefeeding-deposit" },
    { label: "Heat Shrinkage", href: "/products/heat-shrinkage" },
    { label: "Copper Belt Press", href: "/products/copper-belt-press" },
    { label: "Printing Marking", href: "/products/printing-marking" },
    { label: "Solar Cable Line", href: "/products/solar-cable-line" },
  ],
  col2: [
    {
      label: "Crimp",
      href: "/products/crimp",
      subItems: [
        { label: "Automatic Terminal Crimping Press", href: "/products/crimp" },
        { label: "Semi-Automatic Crimp Machine", href: "/products/crimp" },
        { label: "Servo Crimping Machine", href: "/products/crimp" },
        { label: "Crimp Force Monitor System", href: "/products/crimp" },
      ],
    },
    { label: "Shield Process", href: "/products/shield-process" },
    {
      label: "Cut Strip Terminate& Solder",
      href: "/products/cut-strip-terminate-solder",
      subItems: [
        { label: "Automatic Cut-Strip-Terminate Line", href: "/products/cut-strip-terminate-solder" },
        { label: "Auto Soldering & Tinning Machine", href: "/products/cut-strip-terminate-solder" },
      ],
    },
    { label: "Wind & Nylon Tying", href: "/products/wind-nylon-tying" },
    { label: "Tape Bundling", href: "/products/tape-bundling" },
    { label: "Plug Production", href: "/products/plug-production" },
    { label: "PVC Injection", href: "/products/pvc-injection" },
    { label: "Tape Dispenser", href: "/products/tape-dispenser" },
    { label: "Wire Harness Tester & Assembly Table", href: "/products/wire-harness-tester" },
    { label: "Moulds&Accessory", href: "/products/moulds-accessory" },
  ],
};

export const FEATURED_HERO_PRODUCTS = [
  {
    title: "Cut & Strip Series",
    model: "KD-9500 Ultra",
    tag: "High Speed",
    img: IMAGES.machine1,
    specs: "0.1–16mm² | 8,500 pcs/hr",
    href: "/products/wire-cutting-stripping",
  },
  {
    title: "Servo Crimp Press",
    model: "KD-CP50 Servo",
    tag: "Micro Precision",
    img: IMAGES.machine2,
    specs: "5.0 Ton | CFM Waveform",
    href: "/products/terminal-crimping-press",
  },
  {
    title: "Harness Test Bench",
    model: "KD-T512 Continuity",
    tag: "Quality Audit",
    img: IMAGES.machine3,
    specs: "512 Points | DC 1000V",
    href: "/products/wire-harness-testing-bench",
  },
  {
    title: "Automated Tape Bundling",
    model: "KD-TB150 Wrap",
    tag: "EV Harness",
    img: IMAGES.hero,
    specs: "1500 RPM | Programmable",
    href: "/products/tape-bundling-wrapping",
  },
];

export const TECHNICAL_NEWS = [
  {
    date: "Aug 2026",
    title: "Next-Gen EV Orange High-Voltage Cable Stripping Technology Released",
    href: "/about",
  },
  {
    date: "Jul 2026",
    title: "KD Engineers Expands Pan-India Service & Calibration Network",
    href: "/about",
  },
  {
    date: "Jun 2026",
    title: "Understanding Crimp Force Monitoring (CFM) for Automotive Quality Assurance",
    href: "/about",
  },
  {
    date: "May 2026",
    title: "Optimizing Wire Feeding Accumulators for Ultra-Fine Wire Harnesses",
    href: "/about",
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


