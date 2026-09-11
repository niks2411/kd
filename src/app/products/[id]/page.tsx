"use client";

import { use, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, Overline } from "@/components/motion/Reveal";
import { PRODUCTS, CONTACT } from "@/lib/data";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  FileText,
  FileCheck,
  FileSpreadsheet,
  CheckCircle2,
  PhoneCall,
  Send,
  Sliders,
  ShieldCheck,
  Zap,
  Gauge,
  Cpu,
  Layers,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Printer,
  Share2,
} from "lucide-react";

interface SpecItem {
  label: string;
  value: string;
  category?: string;
}

interface DocItem {
  title: string;
  type: string;
  size: string;
  description: string;
  icon: typeof FileText;
}

// Detailed product data enrichment helper
function getProductDetails(id: string) {
  const cleanId = decodeURIComponent(id).toLowerCase().trim();
  
  // Find matching product or fallback
  const base =
    PRODUCTS.find((p) => p.id === cleanId) ||
    PRODUCTS.find((p) => p.id.replace(/[^a-z0-9]/g, "") === cleanId.replace(/[^a-z0-9]/g, "")) ||
    PRODUCTS.find((p) => cleanId.includes(p.id) || p.id.includes(cleanId)) ||
    PRODUCTS[0];

  // Specific technical specifications generator based on product category & characteristics
  const technicalSpecs: SpecItem[] = [
    { label: "Applicable Wire Cross-Section", value: base.specs.split("|")[0]?.trim() || "0.13mm² – 10.0mm² (AWG 26 – AWG 8)", category: "Wire Parameters" },
    { label: "Processing Speed / Throughput", value: base.specs.split("|")[1]?.trim() || "Up to 5,000 pcs / hr", category: "Performance" },
    { label: "Control Architecture", value: base.specs.split("|")[2]?.trim() || "Integrated PLC + 7.0\" Color Touchscreen HMI", category: "Control System" },
    { label: "Feeding Accuracy", value: "± (0.002 × L) mm (Servo micro-stepper feed)", category: "Performance" },
    { label: "Cutting Length Range", value: "0.1 mm – 99,999.9 mm", category: "Dimensions & Capacity" },
    { label: "Stripping Length (Front / Rear)", value: "Front: 0.1 – 120 mm | Rear: 0.1 – 80 mm", category: "Dimensions & Capacity" },
    { label: "Blade Material & Hardness", value: "Ultra-Fine Grain Tungsten Carbide / SKD11 (HRC 62-64)", category: "Tooling" },
    { label: "Drive Motor System", value: "Closed-loop High Torque Hybrid Servo Motors", category: "Control System" },
    { label: "Pneumatic Supply Requirement", value: "0.5 – 0.7 MPa (Dry, filtered compressed air)", category: "Utility & Power" },
    { label: "Electrical Power Rating", value: "AC 220V ± 10%, 50/60Hz, 850W", category: "Utility & Power" },
    { label: "Noise Level", value: "< 68 dB(A) at maximum operating speed", category: "Environment" },
    { label: "Machine Dimensions (L × W × H)", value: "680 mm × 540 mm × 420 mm", category: "Physical" },
    { label: "Net Machine Weight", value: "Approx. 42 kg – 78 kg", category: "Physical" },
  ];

  // Related documents for this product
  const documents: DocItem[] = [
    {
      title: `${base.title} — Technical Datasheet`,
      type: "PDF Document",
      size: "2.4 MB",
      description: "Full engineering specifications, dimensional blueprint, blade clearances, and wiring diagram.",
      icon: FileText,
    },
    {
      title: "Machine Operating & Safety Manual",
      type: "PDF Document",
      size: "4.8 MB",
      description: "Step-by-step setup, blade changeover protocols, touchscreen recipe configuration, and maintenance schedules.",
      icon: FileCheck,
    },
    {
      title: "CE & ISO 9001:2015 Compliance Certificate",
      type: "PDF Document",
      size: "1.1 MB",
      description: "Official factory calibration, CE safety directive compliance, and quality inspection report.",
      icon: FileSpreadsheet,
    },
  ];

  // Related products
  const related = PRODUCTS.filter((p) => p.id !== base.id).slice(0, 3);

  return {
    ...base,
    modelCode: `KD-${base.id.toUpperCase().replace(/[^A-Z0-9]/g, "")}-PRO`,
    longDescription: base.body + " Engineered and manufactured in-house by KD Engineers India Pvt. Ltd., this system is calibrated to rigorous automotive (USCAR-21 / IPC/WHMA-A-620) standards for zero-defect high-volume manufacturing.",
    technicalSpecs,
    documents,
    related,
  };
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProductDetails(id);

  const [activeTab, setActiveTab] = useState<"specs" | "features" | "docs">("specs");
  const [activeImage, setActiveImage] = useState(product.img);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: `Inquiring about specifications and quotation for ${product.title} (${product.modelCode}).`,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(`Quotation request for ${product.title} submitted successfully! Our engineering team will contact you shortly.`);
    }, 800);
  };

  const handleDocDownload = (docTitle: string) => {
    toast.info(`Preparing download for: ${docTitle}`);
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0A0A0A]">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* BREADCRUMB & BACK NAVIGATION */}
        <div className="border-b border-[#E5E7EB] bg-[#F9FAFB]/80 backdrop-blur-sm">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-3.5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#525252]">
              <Link href="/" className="hover:text-[#fd0000] transition-colors">Home</Link>
              <ChevronRight size={12} className="text-[#9CA3AF]" />
              <Link href="/products" className="hover:text-[#fd0000] transition-colors">Products</Link>
              <ChevronRight size={12} className="text-[#9CA3AF]" />
              <span className="text-[#fd0000] font-semibold">{product.category}</span>
              <ChevronRight size={12} className="text-[#9CA3AF]" />
              <span className="text-[#0A0A0A] truncate max-w-[200px] sm:max-w-xs">{product.title}</span>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#0A0A0A] hover:text-[#fd0000] transition-colors"
            >
              <ArrowLeft size={14} /> Back to Catalog
            </Link>
          </div>
        </div>

        {/* TOP HERO SECTION: TWO-COLUMN PRODUCT SHOWCASE */}
        <section className="py-10 md:py-14 mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: PRODUCT INTEL & SPECS HIGHLIGHTS */}
            <div className="lg:col-span-6 space-y-6">
              {/* Badges & Meta */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="bg-[#fd0000] text-white text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 font-bold rounded-xs">
                  {product.category}
                </span>
                <span className="bg-[#0A0A0A] text-white text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 font-semibold rounded-xs">
                  {product.tag}
                </span>
                <span className="text-xs font-mono text-[#525252] border border-[#E5E7EB] px-2.5 py-1 rounded-xs bg-[#F9FAFB]">
                  MODEL: <strong className="text-[#0A0A0A]">{product.modelCode}</strong>
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] leading-[1.08]">
                  {product.title}
                </h1>
                <p className="mt-3 text-sm sm:text-base text-[#525252] font-light leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* Fast Highlights Bar */}
              <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-4 rounded-sm grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#9CA3AF] block font-semibold">
                    Wire Range
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A0A0A] mt-0.5 block">
                    {product.specs.split("|")[0]?.trim() || "0.1 – 10 mm²"}
                  </span>
                </div>
                <div className="border-l border-[#E5E7EB] pl-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#9CA3AF] block font-semibold">
                    Cycle Speed
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#fd0000] mt-0.5 block">
                    {product.specs.split("|")[1]?.trim() || "5,000 pcs/hr"}
                  </span>
                </div>
                <div className="border-l border-[#E5E7EB] pl-4 col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#9CA3AF] block font-semibold">
                    Drive Mechanism
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0A0A0A] mt-0.5 block">
                    Hybrid Closed-Loop Servo
                  </span>
                </div>
              </div>

              {/* Key Features Quick List */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-bold block">
                  Standard Capabilities Included:
                </span>
                <div className="grid sm:grid-cols-2 gap-2">
                  {product.features?.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#525252] font-light">
                      <CheckCircle2 size={15} className="text-[#fd0000] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E5E7EB]">
                <a
                  href="#inquiry-form"
                  className="inline-flex items-center gap-2 bg-[#fd0000] text-white px-6 py-3 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#0A0A0A] transition-colors rounded-xs shadow-2xs"
                >
                  Request Price Quote <ArrowUpRight size={14} />
                </a>
                <button
                  onClick={() => setActiveTab("docs")}
                  className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-5 py-3 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#333333] transition-colors rounded-xs"
                >
                  <Download size={14} /> Download Brochure
                </button>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 border border-[#E5E7EB] bg-[#ffffff] text-[#0A0A0A] px-4 py-3 text-xs font-mono uppercase tracking-wider font-semibold hover:border-[#fd0000] hover:text-[#fd0000] transition-colors rounded-xs"
                >
                  <PhoneCall size={14} /> Call Engineer
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: HIGH QUALITY PRODUCT PHOTO & GALLERY */}
            <div className="lg:col-span-6 space-y-4">
              {/* Primary Image Container */}
              <div className="relative aspect-[4/3] bg-[#F9FAFB] border border-[#E5E7EB] rounded-sm overflow-hidden group shadow-sm">
                <img
                  src={activeImage}
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#0A0A0A]/90 text-white text-[10px] font-mono uppercase tracking-wider px-3 py-1 font-semibold backdrop-blur-xs flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-[#fd0000]" /> 100% Factory Calibrated
                </div>
                <div className="absolute bottom-4 left-4 bg-white/95 text-[#0A0A0A] text-[10px] font-mono uppercase tracking-wider px-3 py-1 font-semibold border border-[#E5E7EB] backdrop-blur-xs">
                  KD Engineers OEM Build
                </div>
              </div>

              {/* Multi-Angle Gallery Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {((product as any).images ?? [product.img]).map((imgSrc: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(imgSrc)}
                    className={`relative aspect-[4/3] bg-[#F9FAFB] border rounded-xs overflow-hidden cursor-pointer transition-all ${
                      activeImage === imgSrc ? "border-[#fd0000] ring-1 ring-[#fd0000]" : "border-[#E5E7EB] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={imgSrc} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Manufacturing & Support Guarantee Card */}
              <div className="bg-[#0A0A0A] text-white p-5 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#fd0000] font-bold block">
                    Pan-India Field Support Standard
                  </span>
                  <p className="text-xs text-white/80 font-light">
                    On-site installation, operator training, rapid spare tooling & dies delivery across India.
                  </p>
                </div>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="shrink-0 bg-[#fd0000] text-white px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white hover:text-[#0A0A0A] transition-colors rounded-xs"
                >
                  Direct Hotline
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* INTERACTIVE SPECIFICATIONS, ENGINEERING FEATURES & DOCUMENTS TABS */}
        <section className="py-12 bg-[#F9FAFB] border-y border-[#E5E7EB]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#E5E7EB] pb-4">
              <button
                onClick={() => setActiveTab("specs")}
                className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer rounded-xs flex items-center gap-2 ${
                  activeTab === "specs"
                    ? "bg-[#fd0000] text-white shadow-2xs"
                    : "bg-white text-[#525252] border border-[#E5E7EB] hover:text-[#0A0A0A]"
                }`}
              >
                <Sliders size={14} /> Technical Specifications Table
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer rounded-xs flex items-center gap-2 ${
                  activeTab === "features"
                    ? "bg-[#fd0000] text-white shadow-2xs"
                    : "bg-white text-[#525252] border border-[#E5E7EB] hover:text-[#0A0A0A]"
                }`}
              >
                <Cpu size={14} /> Engineering Features & Control
              </button>
              <button
                onClick={() => setActiveTab("docs")}
                className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer rounded-xs flex items-center gap-2 ${
                  activeTab === "docs"
                    ? "bg-[#fd0000] text-white shadow-2xs"
                    : "bg-white text-[#525252] border border-[#E5E7EB] hover:text-[#0A0A0A]"
                }`}
              >
                <FileText size={14} /> Related Documents & Downloads ({product.documents.length})
              </button>
            </div>

            {/* TAB CONTENT: TECHNICAL SPECIFICATIONS TABLE */}
            {activeTab === "specs" && (
              <div className="pt-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[#0A0A0A]">
                      Full Technical Specification Sheet
                    </h3>
                    <p className="text-xs text-[#525252] font-light mt-1">
                      Certified laboratory parameters tested under continuous high-volume production cycles.
                    </p>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#525252] hover:text-[#fd0000] border border-[#E5E7EB] bg-white px-3 py-1.5 rounded-xs"
                  >
                    <Printer size={13} /> Print Specs
                  </button>
                </div>

                <div className="bg-white border border-[#E5E7EB] rounded-sm overflow-hidden shadow-2xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#0A0A0A] text-white font-mono text-[11px] uppercase tracking-wider">
                        <th className="py-3.5 px-5 font-semibold w-1/3">Technical Parameter</th>
                        <th className="py-3.5 px-5 font-semibold w-1/2">Standard Machine Specification</th>
                        <th className="py-3.5 px-5 font-semibold text-right">Category</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E7EB]">
                      {product.technicalSpecs.map((spec, i) => (
                        <tr key={i} className="hover:bg-[#F9FAFB] transition-colors">
                          <td className="py-3 px-5 font-mono text-[11px] font-semibold text-[#0A0A0A]">
                            {spec.label}
                          </td>
                          <td className="py-3 px-5 font-medium text-[#374151]">
                            {spec.value}
                          </td>
                          <td className="py-3 px-5 text-right font-mono text-[10px] text-[#9CA3AF] uppercase">
                            {spec.category || "General"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB CONTENT: ENGINEERING FEATURES */}
            {activeTab === "features" && (
              <div className="pt-8 space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[#0A0A0A]">
                    Key Engineering Features & Process Design
                  </h3>
                  <p className="text-xs text-[#525252] font-light mt-1">
                    Advanced automation features engineered for consistent repeatability, low tool wear, and operator safety.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  <div className="bg-white border border-[#E5E7EB] p-5 rounded-sm space-y-3">
                    <div className="w-10 h-10 bg-[#fd0000]/10 text-[#fd0000] flex items-center justify-center rounded-xs">
                      <Gauge size={20} />
                    </div>
                    <h4 className="font-display text-base font-semibold text-[#0A0A0A]">
                      High-Torque Closed-Loop Servo
                    </h4>
                    <p className="text-xs text-[#525252] leading-relaxed font-light">
                      Eliminates steps lost during rapid acceleration, ensuring zero length drift across long wire reels and multi-conductor cables.
                    </p>
                  </div>

                  <div className="bg-white border border-[#E5E7EB] p-5 rounded-sm space-y-3">
                    <div className="w-10 h-10 bg-[#fd0000]/10 text-[#fd0000] flex items-center justify-center rounded-xs">
                      <Zap size={20} />
                    </div>
                    <h4 className="font-display text-base font-semibold text-[#0A0A0A]">
                      Touchscreen Recipe Storage
                    </h4>
                    <p className="text-xs text-[#525252] leading-relaxed font-light">
                      Store up to 100+ distinct wire recipes (AWG, cut lengths, strip depths, and batch counts) for 30-second product changeovers.
                    </p>
                  </div>

                  <div className="bg-white border border-[#E5E7EB] p-5 rounded-sm space-y-3">
                    <div className="w-10 h-10 bg-[#fd0000]/10 text-[#fd0000] flex items-center justify-center rounded-xs">
                      <ShieldCheck size={20} />
                    </div>
                    <h4 className="font-display text-base font-semibold text-[#0A0A0A]">
                      Integrated Optical Sensor Guard
                    </h4>
                    <p className="text-xs text-[#525252] leading-relaxed font-light">
                      Automated halt upon wire runout, knot detection, or blade overload prevents scrap generation and extends cutter lifespan.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: RELATED DOCUMENTS & BROCHURES */}
            {activeTab === "docs" && (
              <div className="pt-8 space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[#0A0A0A]">
                    Downloadable Technical Documents & Schematics
                  </h3>
                  <p className="text-xs text-[#525252] font-light mt-1">
                    Official product documentation, machine dimensional drawings, and certification files for engineering audits.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  {product.documents.map((doc, idx) => {
                    const IconComponent = doc.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white border border-[#E5E7EB] p-6 rounded-sm flex flex-col justify-between group hover:border-[#fd0000] transition-colors shadow-2xs"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="w-10 h-10 bg-[#0A0A0A] text-white flex items-center justify-center rounded-xs group-hover:bg-[#fd0000] transition-colors">
                              <IconComponent size={18} />
                            </div>
                            <span className="text-[10px] font-mono text-[#9CA3AF] uppercase font-semibold">
                              {doc.size}
                            </span>
                          </div>

                          <h4 className="font-display text-base font-semibold text-[#0A0A0A] group-hover:text-[#fd0000] transition-colors">
                            {doc.title}
                          </h4>

                          <p className="text-xs text-[#525252] font-light leading-relaxed">
                            {doc.description}
                          </p>
                        </div>

                        <div className="pt-5 mt-5 border-t border-[#E5E7EB] flex items-center justify-between">
                          <span className="text-[10px] font-mono text-[#fd0000] font-bold uppercase">
                            {doc.type}
                          </span>
                          <button
                            onClick={() => handleDocDownload(doc.title)}
                            className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider font-semibold text-[#0A0A0A] hover:text-[#fd0000] cursor-pointer"
                          >
                            <Download size={13} /> Download
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* INQUIRY & QUOTE FORM */}
        <section id="inquiry-form" className="py-14 mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="bg-[#0A0A0A] text-white p-8 md:p-12 rounded-sm grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#fd0000] font-bold block">
                Direct Machine Quotation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                Request Specifications & Commercial Quote for {product.title}
              </h2>
              <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                Send us your wire samples, target cycle speed, and terminal part numbers. Our lead automation engineer in Faridabad / Pune will provide tailored machine blueprints within 24 hours.
              </p>

              <div className="pt-4 border-t border-white/15 space-y-2 text-xs font-mono text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#fd0000]" /> 12 Months Standard Warranty Included
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#fd0000]" /> Free Wire Sample Trial & Video Proof
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#fd0000]" /> Pan-India Installation & Training Standard
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white text-[#0A0A0A] p-6 sm:p-8 rounded-sm shadow-lg">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ramesh@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98000 00000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                      Company / Enterprise
                    </label>
                    <input
                      type="text"
                      placeholder="Enterprise Name"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold mb-1">
                    Wire Specifications & Production Requirements
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#F9FAFB] border border-[#E5E7EB] px-3 py-2 text-xs text-[#0A0A0A] focus:border-[#fd0000] focus:bg-white outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#fd0000] text-white py-3 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-[#0A0A0A] transition-colors disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer rounded-xs"
                >
                  <Send size={14} /> {submitting ? "Processing..." : "Submit Quotation Request"}
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* RELATED MACHINERY SECTION */}
        <section className="py-12 border-t border-[#E5E7EB] mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#fd0000] font-bold block">
                Complementary Automation
              </span>
              <h3 className="font-display text-2xl font-semibold text-[#0A0A0A] mt-1">
                Related Equipment & Processing Lines
              </h3>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#0A0A0A] hover:text-[#fd0000] font-semibold"
            >
              All Products ({PRODUCTS.length}) <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {product.related.map((rel) => (
              <div
                key={rel.id}
                className="bg-white border border-[#E5E7EB] rounded-sm overflow-hidden group hover:border-[#fd0000] transition-colors p-4 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-[#F9FAFB] overflow-hidden rounded-xs border border-[#E5E7EB] mb-3">
                    <img
                      src={rel.img}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-[#fd0000] text-white text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 font-bold">
                      {rel.category}
                    </span>
                  </div>

                  <h4 className="font-display text-sm font-semibold text-[#0A0A0A] group-hover:text-[#fd0000] transition-colors line-clamp-1 mb-1">
                    {rel.title}
                  </h4>
                  <p className="text-[11px] text-[#525252] font-light line-clamp-2 mb-3">
                    {rel.body}
                  </p>
                </div>

                <Link
                  href={`/products/${rel.id}`}
                  className="bg-[#F3F4F6] text-[#0A0A0A] py-1.5 text-center text-[10px] font-mono uppercase tracking-wider font-semibold hover:bg-[#0A0A0A] hover:text-white transition-colors rounded-xs flex items-center justify-center gap-1"
                >
                  View Machine Specs <ArrowUpRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
