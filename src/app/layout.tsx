import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "KD Engineers India Pvt. Ltd. | Wire Harness Processing & Automation",
  description:
    "Leading manufacturer of advanced wire harness processing machinery, automatic terminal crimping presses, testing benches, and industrial automation solutions in India.",
  keywords: [
    "Wire Harness Machines",
    "Terminal Crimping Press",
    "Wire Stripping Machine",
    "Industrial Automation India",
    "KD Engineers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grain antialiased bg-[#F9FAFB] text-[#0A0A0A]">
        <SmoothScroll>
          {children}
          <Toaster position="bottom-right" />
        </SmoothScroll>
      </body>
    </html>
  );
}
