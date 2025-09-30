import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import WeCareSection from "@/components/WeCareSection";
import Contact from "@/components/Contact";
import Buildingblock from "@/components/Buildingblock";

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Buildingblock />
      <Content />
      
      {/* Gradient Section Starts */}
      <div className="bg-gradient-to-b from-[#E5903D] via-[#FAF6C6] to-[#0a260a] 
                bg-[length:100%_100%] bg-no-repeat">
        <WeCareSection />
      </div>
      {/* Gradient Section Ends */}

      <Contact />
      <Footer />
    </div>
  );
}
