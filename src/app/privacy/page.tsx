import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | KD Engineers India Pvt. Ltd.",
  description: "Privacy policy for KD Engineers India Pvt. Ltd. website and services.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0A0A0A]">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <h1 className="font-display text-3xl sm:text-4xl font-medium tracking-tight mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-sm max-w-none text-[#525252] font-light leading-relaxed space-y-6">
            <p>
              KD Engineers India Pvt. Ltd. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting personal information you share with us through this website.
            </p>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">Information We Collect</h2>
            <p>
              When you submit an enquiry through our contact form or request a quote, we collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and company name</li>
              <li>Email address and phone number</li>
              <li>Country</li>
              <li>Product or machine of interest</li>
              <li>Your requirement or message</li>
            </ul>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">How We Use Your Information</h2>
            <p>
              We use the information you provide solely for the purpose of:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responding to your enquiry or quote request</li>
              <li>Providing technical consultation and product information</li>
              <li>Following up on your requirement with our engineering team</li>
              <li>Sending relevant product updates if you have opted in</li>
            </ul>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">Data Retention</h2>
            <p>
              We retain your enquiry data for as long as necessary to fulfill your request and maintain our business relationship. You may request deletion of your data at any time by contacting us.
            </p>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or share your personal information with third parties. Your data is used exclusively by KD Engineers for the purposes described above.
            </p>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">Cookies</h2>
            <p>
              This website may use essential cookies for basic functionality. We do not use tracking cookies or third-party advertising cookies.
            </p>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete personal information we hold about you. To exercise these rights, please contact us at{" "}
              <a href="mailto:info@kdengineers.in" className="text-[#fd0000] hover:underline">info@kdengineers.in</a>.
            </p>

            <h2 className="font-display text-xl font-medium text-[#0A0A0A] mt-8">Contact</h2>
            <p>
              If you have any questions about this privacy policy, please contact us:
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
