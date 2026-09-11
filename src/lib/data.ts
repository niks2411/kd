export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export const PROMISES = [
  "25+ Years Technical Expertise",
  "Custom Automation Engineering",
  "End-to-End Turnkey Execution",
  "Pan-India Service & Support",
];

export const STATS = [
  { value: "25+", label: "Years of Engineering" },
  { value: "1000+", label: "Machines Deployed" },
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
  { title: "25+ Years Industry Leadership", body: "Trusted by tier-1 automotive, appliance, and defense equipment manufacturers across India." },
  { title: "In-House R&D & Fabrication", body: "From CAD blueprint to CNC milling and assembly, all critical components are manufactured under one roof." },
  { title: "Customized Machinery Solutions", body: "We adapt feed systems, crimp dies, and cycle speeds to match exact client production requirements." },
  { title: "Rigorous Quality Assurance", body: "Every machine undergoes a 72-hour stress test and crimp force analysis prior to dispatch." },
  { title: "Comprehensive Training & Onboarding", body: "On-site installation, operator safety training, and maintenance certification provided standard." },
  { title: "Rapid Spare & Service Network", body: "Express delivery on blades, dies, and wear parts with nationwide field service engineers." },
];

export interface ProductCategoryInfo {
  slug: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  bannerImage: string;
  metrics: { value: string; label: string }[];
}

export const PRODUCT_CATEGORIES: Record<string, ProductCategoryInfo> = {
  testing: {
    slug: "testing",
    title: "Testing & Quality Equipment",
    tagline: "100% Quality Compliance & Defect Detection",
    badge: "Testing & Quality Assurance",
    description: "Precision wire harness continuity testing boards, high-voltage insulation resistance test benches, connector lock verification systems, and digital pull testers designed to guarantee zero electrical or mechanical defects prior to shipment.",
    bannerImage: "/images/about.png",
    metrics: [
      { value: "512+", label: "Max Test Points" },
      { value: "DC 1000V", label: "Hi-Pot Rating" },
      { value: "10ms", label: "Scan Speed" },
      { value: "100%", label: "Traceability" },
    ],
  },
  assembly: {
    slug: "assembly",
    title: "Harness Assembly Aids",
    tagline: "Digitized Workstations & Guided Routing Fixtures",
    badge: "Assembly Automation & Fixtures",
    description: "Intelligent assembly workstations, LED-guided routing boards, digitized wiring systems (DWS), automated tape wrapping, and motorized conveyor lines engineered for repeatable, error-proof manufacturing.",
    bannerImage: "/images/lab.png",
    metrics: [
      { value: "LED", label: "Optical Guidance" },
      { value: "1500 RPM", label: "Tape Wrapping" },
      { value: "0.8s", label: "Tying Cycle" },
      { value: "Zero", label: "Routing Errors" },
    ],
  },
  crimping: {
    slug: "crimping",
    title: "Terminal Crimping Solutions",
    tagline: "Zero-Defect Crimp Connections & Tooling",
    badge: "High-Precision Terminal Crimping",
    description: "Fully automatic dual-end cutting, stripping, seal loading, and servo crimping centers, continuous copper belt splice presses, and custom SKD11 applicators equipped with inline Crimp Force Monitoring (CFM).",
    bannerImage: "/images/hot_crimp_press.jpg",
    metrics: [
      { value: "5.0 Ton", label: "Servo Force" },
      { value: "±0.005mm", label: "Crimp Accuracy" },
      { value: "5,000/hr", label: "Cycle Speed" },
      { value: "Inline CFA", label: "Quality Audit" },
    ],
  },
  processing: {
    slug: "processing",
    title: "Wiring Harness Processing Machines",
    tagline: "High-Speed Precision Cutting, Stripping & Preparation",
    badge: "Wire Cutting & Processing",
    description: "Automated precision wire cutting and stripping machinery, wire strand twisting, ultrasonic metal welding, automated cable labeling, and motorized pre-feeders engineered for high throughput and material efficiency.",
    bannerImage: "/images/hot_cut_strip.jpg",
    metrics: [
      { value: "10,000/hr", label: "Cut & Strip Speed" },
      { value: "0.1–35mm²", label: "Wire Range" },
      { value: "0.001mm", label: "Feed Accuracy" },
      { value: "100+", label: "Stored Recipes" },
    ],
  },
};

export const PRODUCTS = [
  // 1. TESTING & QUALITY EQUIPMENT (10 Products from Machine Mapping)
  {
    id: "wiring-harness-testing-bench",
    categoryGroup: "testing",
    category: "Testing & Quality Equipment",
    tag: "Flagship Testing",
    title: "Wiring Harness Testing Bench",
    specs: "Up to 1024 test points | DC 1000V / AC 750V | Pass/Fail Label Printer",
    body: "Comprehensive electrical harness testing and validation solution with guided point location, insulation resistance, continuity verification, and real-time barcode traceability.",
    img: "/images/products/wiring-harness-testing-bench/1.png",
    images: ["/images/products/wiring-harness-testing-bench/1.png", "/images/products/wiring-harness-testing-bench/2.png", "/images/products/wiring-harness-testing-bench/3.png"],
    features: [
      "Guided LED point location indicator for rapid wiring audit",
      "Modular test fixture boards for quick product changeovers",
      "Automated test result logging & barcode label generation",
      "Integrated pneumatic connector lock checking",
    ],
  },
  {
    id: "high-voltage-testing-bench",
    categoryGroup: "testing",
    category: "Testing & Quality Equipment",
    tag: "HV Safety",
    title: "High Voltage Testing Bench",
    specs: "DC 1500V / AC 1000V Hi-Pot | Insulation Resistance up to 10GΩ | Interlock Guard",
    body: "Configurable high-voltage electrical safety and insulation testing bench engineered for electric vehicle harnesses, battery pack cables, and high-power industrial wiring.",
    img: "/images/products/high-voltage-testing-bench/1.png",
    images: ["/images/products/high-voltage-testing-bench/1.png", "/images/products/high-voltage-testing-bench/2.png"],
    features: [
      "Micro-second breakdown voltage detection and arc suppression",
      "Automated safety interlock light curtain and operator foot-pedal control",
      "Configurable ramp voltage, dwell time, and leakage current thresholds",
      "Ethernet / USB CSV audit report export for ISO/IATF compliance",
    ],
  },
  {
    id: "low-voltage-testing-bench",
    categoryGroup: "testing",
    category: "Testing & Quality Equipment",
    tag: "LV Continuity",
    title: "Low Voltage Testing Bench",
    specs: "Low-voltage continuity & short-circuit | Scan speed 10ms | 512 Channels",
    body: "High-speed low-voltage harness continuity, fault detection, and functional testing bench designed for automotive cockpit, lighting, and sensor harnesses.",
    img: "/images/products/low-voltage-testing-bench/1.png",
    images: ["/images/products/low-voltage-testing-bench/1.png"],
    features: [
      "Millisecond multi-channel continuity and cross-wire detection",
      "Resistance threshold measurement with programmable tolerance levels",
      "Audio-visual buzzer indicator for instantaneous operator feedback",
      "Compact ergonomic desktop or standing test station frame",
    ],
  },
  {
    id: "fuse-box-testing-module",
    categoryGroup: "testing",
    category: "Testing & Quality Equipment",
    tag: "Power Distribution",
    title: "Fuse Box Testing Module",
    specs: "Multi-relay & fuse audit | Voltage drop & current draw | Automotive PDU",
    body: "Electrical verification module for automotive fuse-boxes, power distribution units (PDU), and junction assemblies with relay switching and component presence detection.",
    img: "/images/products/fuse-box-testing-module/1.png",
    images: ["/images/products/fuse-box-testing-module/1.png"],
    features: [
      "Automated relay activation and contact resistance measurement",
      "Optical/tactile fuse value and orientation verification",
      "Universal quick-docking connector block for diverse fuse box geometries",
      "Integrated PLC diagnostic controller with test cycle logging",
    ],
  },
  {
    id: "pushback-testing-module",
    categoryGroup: "testing",
    category: "Testing & Quality Equipment",
    tag: "Terminal Retention",
    title: "Pushback Module",
    specs: "Terminal retention force audit | 0.5N – 50N probe force | TPA Lock check",
    body: "Terminal retention and connector-lock verification module ensuring all crimped terminals are fully seated, latched, and locked within the housing.",
    img: "/images/products/pushback-testing-module/1.png",
    images: ["/images/products/pushback-testing-module/1.png", "/images/products/pushback-testing-module/2.png"],
    features: [
      "Spring-loaded secondary lock (TPA/CPA) detection switches",
      "Calibrated pushback test pins verify primary terminal latch engagement",
      "Modular quick-change block design for multi-pin connector styles",
      "Integrated pass/fail LED indicator directly on each connector nest",
    ],
  },
  {
    id: "pneumatic-testing-module",
    categoryGroup: "testing",
    category: "Testing & Quality Equipment",
    tag: "Pressure & Leak",
    title: "Pneumatic Testing Module",
    specs: "Pressure & Vacuum leak test | Differential decay 0.1 Pa | 0.05 – 1.0 MPa",
    body: "Pressure, vacuum, and leak-testing modules engineered for waterproof sealed harness connectors, grommet overmolds, and sensor housings.",
    img: "/images/products/pneumatic-testing-module/1.png",
    images: ["/images/products/pneumatic-testing-module/1.png", "/images/products/pneumatic-testing-module/2.png", "/images/products/pneumatic-testing-module/3.png"],
    features: [
      "High-sensitivity differential pressure decay sensing for micro-leak detection",
      "Pneumatically actuated silicone sealing seals mating interfaces securely",
      "Automated pass/fail clamping and lock-out of defective assemblies",
      "Digital pressure curve display with programmable test cycle recipes",
    ],
  },
  {
    id: "vision-camera-inspection-system",
    categoryGroup: "testing",
    category: "Testing & Quality Equipment",
    tag: "Optical AI",
    title: "Vision Camera Inspection System",
    specs: "5MP/12MP High-Res Industrial Camera | Color & Pinout AI | 0.2s Audit Time",
    body: "Automated visual inspection system for error-proof harness assembly, wire sequence color matching, terminal insertion verification, and 100% traceability.",
    img: "/images/products/vision-camera-inspection-system/1.png",
    images: ["/images/products/vision-camera-inspection-system/1.png"],
    features: [
      "AI-driven multi-conductor color sequence and pinout verification",
      "Optical character recognition (OCR) for wire label and barcode validation",
      "Connector lock orientation and terminal height inspection",
      "Instant pass/fail overlay display with image archival for quality audit",
    ],
  },
  {
    id: "kde-s200-cross-section-analyzer",
    categoryGroup: "testing",
    category: "Testing & Quality Equipment",
    tag: "Crimp Laboratory",
    title: "Cross Section Analyzer — KDE-S200",
    specs: "High-magnification optical zoom | Automated cutting & polishing | Crimp height & width software",
    body: "Precision crimp cross-section preparation, high-resolution imaging, and automated measurement station for terminal crimp quality certification according to DIN/USCAR standards.",
    img: "/images/products/kde-s200-cross-section-analyzer/1.png",
    images: ["/images/products/kde-s200-cross-section-analyzer/1.png"],
    features: [
      "Integrated cutting and electrolytic polishing module within one compact housing",
      "Multi-angle polarized LED illumination for crystal-clear copper strand boundary view",
      "Automated measurement of crimp height, width, compression ratio, and burr width",
      "One-click PDF inspection certificate generation with annotated micrographs",
    ],
  },
  {
    id: "kde-930cg-tensile-pull-tester",
    categoryGroup: "testing",
    category: "Testing & Quality Equipment",
    tag: "Tension Pull",
    title: "Tensile Pull Tester — KDE-930CG",
    specs: "0 – 1000 N force range | Motorized constant speed | ±0.5% F.S. accuracy",
    body: "Motorized digital pull-force tester for terminal crimp retention and wire connection pull-off strength validation with real-time digital peak-hold and SPC curve analysis.",
    img: "/images/products/kde-930cg-tensile-pull-tester/1.png",
    images: ["/images/products/kde-930cg-tensile-pull-tester/1.png"],
    features: [
      "Constant-speed motorized linear pulling eliminates human operator inconsistency",
      "Multi-slot quick-clamp fixture accommodates wire gauges from AWG 30 to AWG 8",
      "Real-time force curve graphing with peak force holding memory",
      "Direct RS232 / USB export for statistical quality process control",
    ],
  },
  {
    id: "horizontal-pull-testers",
    categoryGroup: "testing",
    category: "Testing & Quality Equipment",
    tag: "Benchtop Pull",
    title: "Horizontal Pull Testers",
    specs: "0 – 500 N / 1000 N | Horizontal bench-top pull | Digital LCD Display",
    body: "Bench-top horizontal pull-force testing instrument for terminals, connectors, wire harness joints, and crimp splice retention compliance.",
    img: "/images/products/horizontal-pull-testers/1.png",
    images: ["/images/products/horizontal-pull-testers/1.png"],
    features: [
      "Low-profile horizontal testing bed for comfortable high-speed quality checks",
      "Digital load cell with N, kgf, and lbf unit conversions",
      "Adjustable pulling stroke with automatic return after sample break",
      "Built-in thermal micro-printer for immediate batch report generation",
    ],
  },

  // 2. HARNESS ASSEMBLY AIDS (3 Products)
  {
    id: "digitization-assembly-wiring-system",
    categoryGroup: "assembly",
    category: "Harness Assembly Aids",
    tag: "Smart Guidance",
    title: "Digitization Assembly Wiring System (DWS)",
    specs: "Interactive display board | Multi-operator tracking | CAD Import",
    body: "Intelligent digital wiring system projecting real-time animated wire routing instructions, connector pinouts, and step-by-step pick-to-light guidance to eliminate assembly errors.",
    img: "/images/products/digitization-assembly-wiring-system/1.png",
    images: ["/images/products/digitization-assembly-wiring-system/1.png", "/images/products/digitization-assembly-wiring-system/2.png"],
    features: [
      "Direct import of harness drawing CAD blueprints and wiring schematics",
      "Pick-to-light parts bin integration for zero wrong-part insertion",
      "Real-time takt time tracking and operator efficiency analytics",
      "Barcode scanned assembly stage verification gate",
    ],
  },
  {
    id: "assembly-board-led-guided",
    categoryGroup: "assembly",
    category: "Harness Assembly Aids",
    tag: "Visual Route",
    title: "Assembly Board with LED Guided",
    specs: "Multi-color LED routing path | Modular grid frame | Tilt adjustable",
    body: "Ergonomic industrial assembly layout board with embedded multicolor routing LEDs that dynamically illuminate each wire's path, branch points, and bundle wrapping zones.",
    img: "/images/products/assembly-board-led-guided/1.png",
    images: ["/images/products/assembly-board-led-guided/1.png", "/images/products/assembly-board-led-guided/2.png"],
    features: [
      "High-brightness RGB LEDs illuminate active wire circuit in real time",
      "Ergonomic pneumatic height and angle tilt adjustment",
      "Rugged scratch-resistant anodized aluminum grid surface",
      "Compatible with quick-clamp harness routing forks and holders",
    ],
  },
  {
    id: "assembly-conveyor",
    categoryGroup: "assembly",
    category: "Harness Assembly Aids",
    tag: "Linear Flow",
    title: "Assembly Conveyor",
    specs: "Variable speed 0.5–15 m/min | Modular pallet carrier | PLC Sync",
    body: "Heavy-duty modular pallet and revolving board conveyor systems engineered for progressive continuous flow harness assembly lines in high-volume production plants.",
    img: "/images/products/assembly-conveyor/1.png",
    images: ["/images/products/assembly-conveyor/1.png", "/images/products/assembly-conveyor/2.png", "/images/products/assembly-conveyor/3.png"],
    features: [
      "Synchronized indexed or continuous smooth belt drive motion",
      "Integrated emergency stop pull cords along the entire line length",
      "Overhead LED illumination and pneumatic tool suspension rail",
      "Custom pallet sizes suited for small looms or 12-meter truck harnesses",
    ],
  },

  // 3. TERMINAL CRIMPING SOLUTIONS (3 Products from Machine Mapping)
  {
    id: "kde-3-0",
    categoryGroup: "crimping",
    category: "Terminal Crimping Solutions",
    tag: "Flagship Automation",
    title: "KDE-3.0 Fully Automatic Cutting, Stripping, Crimping & Seal Insertion Machine",
    specs: "Both-end crimp & seal | 4,500 pcs/hr | Integrated CFA Waveform Monitor",
    body: "High-speed flagship automatic wire processing center capable of simultaneous cutting, double-ended stripping, waterproof seal loading, and micro-precision terminal crimping.",
    img: "/images/hot_crimp_press.jpg",
    features: [
      "Dual 20kN servo presses with inline Crimp Force Analyzer",
      "Automatic waterproof rubber seal bowl feeding and optical seating check",
      "High-torque 4-axis Japanese servo drive kinematics",
      "12.1-inch color touchscreen with multi-language HMI",
    ],
  },
  {
    id: "automatic-circuit-insertion-machine",
    categoryGroup: "crimping",
    category: "Terminal Crimping Solutions",
    tag: "Circuit Insertion",
    title: "Fully Automatic Cutting, Stripping, Crimping & Circuit Insertion Machine",
    specs: "Simultaneous cut, strip, crimp & housing insert | 3,800 pcs/hr | Vision Inspection",
    body: "Automated high-throughput wire processing system executing precision cutting, stripping, terminal crimping, and direct automated insertion into connector circuit housings.",
    img: "/images/hot_crimp_press.jpg",
    features: [
      "Automated terminal insertion with tactile depth detection",
      "100% terminal pull-back retention verification",
      "Integrated multi-position connector housing indexer",
      "High-resolution vision sensor checking terminal latch orientation",
    ],
  },
  {
    id: "wire-seal-inserting-machine",
    categoryGroup: "crimping",
    category: "Terminal Crimping Solutions",
    tag: "Seal Insertion",
    title: "Wire Seal Inserting Machine",
    specs: "Cycle time 0.45s | Seal OD 3.0mm – 8.0mm | High-speed vibratory feeder",
    body: "Dedicated high-speed automatic waterproof rubber seal loading machine with precise optical position sensing, seal orientation detection, and zero-damage sleeve feeding.",
    img: "/images/hot_crimp_press.jpg",
    features: [
      "Vibratory bowl feeder for continuous automatic seal feeding",
      "Fiber-optic sensor checks seal presence, direction, and seating depth",
      "Micro-stepper driven seal insertion needle prevents wire insulation tearing",
      "Quick-change tooling kits for multiple rubber seal geometries",
    ],
  },

  // 4. WIRING HARNESS PROCESSING MACHINES (10 Products from Machine Mapping)
  {
    id: "automatic-wire-twisting-machine",
    categoryGroup: "processing",
    category: "Wiring Harness Processing Machines",
    tag: "Strand Twisting",
    title: "Fully Automatic Wire Twisting Machine",
    specs: "0.08mm² – 6.0mm² wire range | 5,000 pcs/hr | Reversible Twist Direction",
    body: "Automatic multi-core and single-strand wire twisting machine designed for uniform strand tightening, ready for high-reliability soldering, tinning, or terminal crimping.",
    img: "/images/hot_strip_twist.jpg",
    features: [
      "Programmable rotation speed, twist direction, and turns count",
      "V-blade clamping mechanism protects delicate copper conductors",
      "Compact benchtop chassis optimized for cellular harness lines",
      "Digital batch counter with auto-stop feature",
    ],
  },
  {
    id: "5-wire-twisting-tinning-machine",
    categoryGroup: "processing",
    category: "Wiring Harness Processing Machines",
    tag: "Multi-Wire Tinning",
    title: "5-Wire Cutting, Stripping, Both-Side Twisting & Tinning Machine",
    specs: "5 Wires Simultaneously | 0.05 – 2.5mm² | Precision Solder Pot PID ±1°C",
    body: "High-yield simultaneous 5-line automatic cutting, double-end stripping, two-sided strand twisting, and automated dip tinning station engineered for maximum throughput.",
    img: "/images/hot_strip_twist.jpg",
    features: [
      "5-line synchronized wire feed and ultra-fast cutting block",
      "Double-ended rotary twisting before immersion tinning",
      "Constant temperature solder bath with automatic dross scraper",
      "Programmable tinning immersion depth and dwell duration",
    ],
  },
  {
    id: "kde-g5001s",
    categoryGroup: "processing",
    category: "Wiring Harness Processing Machines",
    tag: "HV Rotary Strip",
    title: "KDE-G5001S High-Voltage Cable Intelligent Rotary Stripping Machine",
    specs: "Cable OD up to 35mm | 4-Blade Rotary Head | Multi-Layer EV Stripping",
    body: "Advanced intelligent rotary blade stripping station engineered specifically for EV high-voltage cables, shielded multi-layer cables, and tough cross-linked polyolefin insulation.",
    img: "/images/hot_cut_strip.jpg",
    features: [
      "4-blade concentric rotary cutting head with micro-stepper depth control",
      "Programmable multi-layer stripping (outer jacket, shield, inner core)",
      "Non-contact laser centering mechanism avoids inner copper conductor scratching",
      "Stores 200+ EV high-voltage cable processing programs",
    ],
  },
  {
    id: "kde-9850",
    categoryGroup: "processing",
    category: "Wiring Harness Processing Machines",
    tag: "Coaxial Specialist",
    title: "KDE-9850 Coaxial Cable Cutting & Stripping Machine",
    specs: "Cable OD 0.8mm – 15mm | Up to 9 Stripping Layers | 0.01mm Precision",
    body: "Multi-layer programmable coaxial and triaxial cable processing machine capable of precision stripping up to 9 distinct insulation layers, braided shields, and dielectric cores.",
    img: "/images/hot_cut_strip.jpg",
    features: [
      "Ultra-precision rotary blade disk with tungsten carbide cutters",
      "Programmable multi-step stripping sequence for RF, RG, and semi-rigid cables",
      "Centering guide dies prevent cable deflection during high-speed rotation",
      "Touchscreen graphical recipe interface for quick RF connector setups",
    ],
  },
  {
    id: "kde-300-sqmm",
    categoryGroup: "processing",
    category: "Wiring Harness Processing Machines",
    tag: "Heavy-Duty Cable",
    title: "KDE-300 SQMM Large Cable Cutting & Stripping Machine",
    specs: "Wire Range 10mm² – 300mm² | Feed Speed 60m/min | Hydraulic/Servo Cut",
    body: "Heavy-duty powerhouse wire processing machine designed for large cross-section battery cables, energy storage wiring, power distribution cables, and high-gauge industrial lines.",
    img: "/images/hot_cut_strip.jpg",
    features: [
      "Heavy-duty 8-wheel belt feeding system with adjustable hydraulic pressure",
      "Dual heavy-duty hardened tool steel guillotine shear blades",
      "High-power servo drive delivers immense cutting torque without stalling",
      "Automatic mid-strip and window-strip capabilities for ground taps",
    ],
  },
  {
    id: "hv-coaxial-shielded-stripping",
    categoryGroup: "processing",
    category: "Wiring Harness Processing Machines",
    tag: "EV Shielded Cable",
    title: "HV Coaxial & Shielded Cable Stripping Machine",
    specs: "Cable OD 3mm – 25mm | Braid Brushing & Foil Cutting | 1,200 pcs/hr",
    body: "Specialized production system for electric vehicle powertrain shielded cables, performing precision outer jacket peeling, copper braid brushing/folding, and aluminum foil trimming.",
    img: "/images/about.png",
    features: [
      "Integrated 360-degree motorized braid brushing and combing unit",
      "Automatic foil trimming ring without damaging dielectric core",
      "Pneumatic clamping block ensures concentric rotation and straight cuts",
      "Suited for automotive Ethernet, EV battery, and inverter cable harnesses",
    ],
  },
  {
    id: "hv-cable-stripping-machine",
    categoryGroup: "processing",
    category: "Wiring Harness Processing Machines",
    tag: "HV Power Cable",
    title: "HV Cable Stripping Machine",
    specs: "Wire range 6mm² – 120mm² | Rotary Cut + Linear Pull | 0.01mm Feed",
    body: "Precision high-voltage cable stripping unit designed for automotive EV power cables, charging station harnesses, and high-amperage industrial power lines.",
    img: "/images/hot_cut_strip.jpg",
    features: [
      "Rotary cutting knife head combined with pneumatic linear pulling grip",
      "Clean burr-free stripping of tough XLPE and silicone rubber insulation",
      "Digital touch control panel with programmable stripping parameters",
      "Safety interlock enclosure with emergency stop safety circuit",
    ],
  },
  {
    id: "kde-100a",
    categoryGroup: "processing",
    category: "Wiring Harness Processing Machines",
    tag: "Thermal Cutting",
    title: "KDE-100A Automatic Heating Sleeve Cutting Machine",
    specs: "Max width 100mm | Hot knife temp up to 450°C | Clean Sealed Edges",
    body: "Automatic heated knife cutting machine designed to cut braided sleeving, nylon webbing, elastic bands, and Velcro with instant thermal edge sealing to prevent fraying.",
    img: "/images/hero.png",
    features: [
      "Electric heating blade seals braided sleeve ends cleanly without loose threads",
      "Microcomputer length setting with precision stepper feed roller",
      "Digital PID temperature regulator ensures consistent cut-edge sealing",
      "Automatic shut-off upon end-of-material detection",
    ],
  },
  {
    id: "kde-m100",
    categoryGroup: "processing",
    category: "Wiring Harness Processing Machines",
    tag: "Tubing & Sleeve Cut",
    title: "KDE-M100 Automatic Sleeve Cutting Machine",
    specs: "Cut width 0.1 – 100mm | Length 0.1 – 99,999mm | Cold Blade Shear",
    body: "High-speed cold-blade automatic cutting machine engineered for PVC tubing, Teflon sleeves, heat shrink tubes, insulation fiberglass pipes, and small flat cables.",
    img: "/images/hero.png",
    features: [
      "Heavy-duty SKD11 alloy shear blade for crisp, clean square cuts",
      "High-speed stepper motor with feed speed up to 100 cuts/min",
      "Batch counter and programmable pause intervals for operator bundling",
      "Compact benchtop design with intuitive digital display",
    ],
  },
  {
    id: "kde-80h",
    categoryGroup: "processing",
    category: "Wiring Harness Processing Machines",
    tag: "Heat Shrink Oven",
    title: "KDE-80H Automatic Heat Shrinking Machine",
    specs: "Conveyor speed 0–15m/min | 360° IR Heating | Temp 50°C – 400°C",
    body: "Continuous infrared thermal conveyor oven built for rapid, 360-degree uniform heat shrinking of tubing over wire splices, ring lugs, multi-pin connectors, and harness branches.",
    img: "/images/hero.png",
    features: [
      "Quartz infrared heating tubes provide instant, uniform circumferential heat",
      "Digital PID temperature controller with ±1°C accuracy",
      "Teflon mesh conveyor belt with adjustable variable speed drive",
      "Post-heat cooling fan zone prevents wire sticking and speeds handling",
    ],
  },
];

export const PRODUCT_DROPDOWN_MENU = {
  overline: "PRODUCT PORTFOLIO",
  heading: "Equipment for each stage of harness production.",
  browseLink: { label: "Browse all products →", href: "/products" },
  categories: [
    {
      title: "Testing & Quality Equipment",
      href: "/products?cat=testing",
      items: [
        { label: "Wiring Harness Testing Bench", href: "/products/wiring-harness-testing-bench" },
        { label: "High Voltage Testing Bench", href: "/products/high-voltage-testing-bench" },
        { label: "Low Voltage Testing Bench", href: "/products/low-voltage-testing-bench" },
        { label: "Fuse Box Testing Module", href: "/products/fuse-box-testing-module" },
        { label: "Pushback Module", href: "/products/pushback-testing-module" },
        { label: "Pneumatic Testing Module", href: "/products/pneumatic-testing-module" },
        { label: "Vision Camera Inspection System", href: "/products/vision-camera-inspection-system" },
        { label: "Cross Section Analyzer — KDE-S200", href: "/products/kde-s200-cross-section-analyzer" },
        { label: "Tensile Pull Tester — KDE-930CG", href: "/products/kde-930cg-tensile-pull-tester" },
        { label: "Horizontal Pull Testers", href: "/products/horizontal-pull-testers" },
      ],
    },
    {
      title: "Harness Assembly Aids",
      href: "/products?cat=assembly",
      items: [
        { label: "Digitization Assembly Wiring System (DWS)", href: "/products/digitization-assembly-wiring-system" },
        { label: "Assembly Board with LED Guided", href: "/products/assembly-board-led-guided" },
        { label: "Assembly Conveyor", href: "/products/assembly-conveyor" },
      ],
    },
    {
      title: "Terminal Crimping Solutions",
      href: "/products?cat=crimping",
      items: [
        { label: "KDE-3.0 Fully Automatic Cutting, Stripping, Crimping & Seal Insertion Machine", href: "/products/kde-3-0" },
        { label: "Fully Automatic Cutting, Stripping, Crimping & Circuit Insertion Machine", href: "/products/automatic-circuit-insertion-machine" },
        { label: "Wire Seal Inserting Machine", href: "/products/wire-seal-inserting-machine" },
      ],
    },
    {
      title: "Wiring Harness Processing Machines",
      href: "/products?cat=processing",
      items: [
        { label: "Fully Automatic Wire Twisting Machine", href: "/products/automatic-wire-twisting-machine" },
        { label: "5-Wire Cutting, Stripping, Both-Side Twisting & Tinning Machine", href: "/products/5-wire-twisting-tinning-machine" },
        { label: "KDE-G5001S High-Voltage Cable Intelligent Rotary Stripping Machine", href: "/products/kde-g5001s" },
        { label: "KDE-9850 Coaxial Cable Cutting & Stripping Machine", href: "/products/kde-9850" },
        { label: "KDE-300 SQMM Large Cable Cutting & Stripping Machine", href: "/products/kde-300-sqmm" },
        { label: "HV Coaxial & Shielded Cable Stripping Machine", href: "/products/hv-coaxial-shielded-stripping" },
        { label: "HV Cable Stripping Machine", href: "/products/hv-cable-stripping-machine" },
        { label: "KDE-100A Automatic Heating Sleeve Cutting Machine", href: "/products/kde-100a" },
        { label: "KDE-M100 Automatic Sleeve Cutting Machine", href: "/products/kde-m100" },
        { label: "KDE-80H Automatic Heat Shrinking Machine", href: "/products/kde-80h" },
      ],
    },
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
  emails: [
    "info@kdengineers.in",
    "sales3@kdengineers.in",
    "kdengrs@gmail.com",
  ],
  email: "info@kdengineers.in",
  phones: [
    "+91 99533-36623",
    "+91 9350962939",
  ],
  phone: "+91 99533-36623",
  units: [
    {
      name: "UNIT I",
      address: "Plot No. 56A, Gali No. 6, Krishna Colony, Industrial Area, Sector 25, Faridabad – 121004 (Hr.) INDIA",
    },
    {
      name: "UNIT II",
      address: "Plot No. A-7/2/F-8, Industrial Area, Phase IV, MIDC Chakan Tal Khed, Nighoje, Pune – 410501",
    },
  ],
  address: "UNIT I: Faridabad, Haryana | UNIT II: Pune, Maharashtra",
  socials: {
    youtube: "https://www.youtube.com/@Kd_engineers",
    linkedin: "https://www.linkedin.com/company/kd-engineers/posts/?feedView=all",
  },
};


