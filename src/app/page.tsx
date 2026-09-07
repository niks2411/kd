import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { EditorialMarquee } from "@/components/sections/EditorialMarquee";
import { About } from "@/components/sections/About";
import { Values } from "@/components/sections/Values";
import { Products } from "@/components/sections/Products";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { ReelsShowcase } from "@/components/sections/ReelsShowcase";
import { Industries } from "@/components/sections/Industries";
import { Ethos } from "@/components/sections/Ethos";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Navbar />
      <main>
        <Hero />
        <EditorialMarquee />
        <ReelsShowcase />
        <About />
        <VideoShowcase />
        <Ethos />
        <Values />
        <Products />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
