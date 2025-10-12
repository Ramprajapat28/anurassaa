import Navbar1 from "@/components/Navbar1";
import HeroSection from "@/components/HeroSection";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import WeCareSection from "@/components/WeCareSection";
import Contact from "@/components/Contact";
import Buildingblock from "@/components/Buildingblock";

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      <Navbar1 />
      <HeroSection />

      <Buildingblock />

      <Content />

      {/* Gradient Section Ends */}
      <div
        className="bg-gradient-to-b
    from-[#C8E2B2] from-0%
    to-[#FEFAEF] to-100%
    bg-[length:100%_100%]
    bg-no-repeat"
      >
        <WeCareSection />
      </div>


      <Contact />

      <Footer />
      {/* <div className="bg-gradient-to-b from-[#FAF6C6]/80  via-[#0a260a]/80 via-[#0a260a]/80  to-[#0a260a] 
                 bg-no-repeat">
        <Contact />
      </div> */}

    </div>
  );
}
