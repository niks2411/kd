import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions | KD Engineers India Pvt. Ltd.",
  description: "Terms and conditions for KD Engineers India Pvt. Ltd. website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0A0A0A]">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <h1 className="font-display text-3xl sm:text-4xl font-medium tracking-tight mb-8">
            Terms &amp; Conditions
          </h1>

          <div className="prose prose-sm max-w-none text-[#525252] font-light leading-relaxed space-y-6">
            <p>
              These terms and conditions govern your use of the KD Engineers India Pvt. Ltd. website and services. By accessing this website, you agree to be bound by these terms.
            </p>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">Website Usage</h2>
            <p>
              This website is provided for informational purposes about KD Engineers&apos; products, services, and capabilities. The content is intended for businesses and professionals in the wiring harness manufacturing industry.
            </p>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">Product Information</h2>
            <p>
              Product specifications, images, and descriptions on this website are provided for general reference purposes. Actual machine configurations, specifications, and capabilities may vary based on your specific requirements. Contact KD Engineers for confirmed technical specifications and quotations.
            </p>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, product designs, and proprietary information, is the property of KD Engineers India Pvt. Ltd. and is protected by applicable intellectual property laws. Unauthorized reproduction, distribution, or use of this content is prohibited.
            </p>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">Enquiries &amp; Quotations</h2>
            <p>
              Enquiries submitted through this website do not constitute a binding contract. Quotations, pricing, and delivery terms are subject to formal confirmation by KD Engineers&apos; commercial team.
            </p>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">Limitation of Liability</h2>
            <p>
              KD Engineers India Pvt. Ltd. shall not be held liable for any direct, indirect, or consequential damages arising from the use of this website or reliance on information provided herein. All product and service agreements are governed by separate commercial contracts.
            </p>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">External Links</h2>
            <p>
              This website may contain links to third-party websites, including YouTube and LinkedIn. KD Engineers is not responsible for the content or privacy practices of external websites.
            </p>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">Governing Law</h2>
            <p>
              These terms and conditions are governed by the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of courts in Faridabad, Haryana, India.
            </p>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">Contact</h2>
            <p>
              If you have any questions about these terms, please contact us:
            </p>
            <p>
              <strong className="text-[#0A0A0A]">KD Engineers India Pvt. Ltd.</strong><br />
              Email: <a href="mailto:info@kdengineers.in" className="text-[#fd0000] hover:underline">info@kdengineers.in</a><br />
              Phone: +91 9953336623
            </p>

            <p className="text-xs text-[#9CA3AF] mt-10">
              Last updated: September 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
