import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { EditorialMarquee } from "@/components/sections/EditorialMarquee";
import { About } from "@/components/sections/About";
import { Values } from "@/components/sections/Values";
import { Products } from "@/components/sections/Products";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { Ethos } from "@/components/sections/Ethos";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />
      <main>
        <Hero />
        <EditorialMarquee />
        <About />
        <Values />
        <Products />
        <Industries />
        <Process />
        <Ethos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
