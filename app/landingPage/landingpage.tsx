// import Navbar1 from "@/components/Navbar1";
// import HeroSection from "@/components/HeroSection";
// import Content from "@/components/Content";
// import Footer from "@/components/Footer";
// import WeCareSection from "@/components/WeCareSection";
// import Contact from "@/components/Contact";
// import Buildingblock from "@/components/Buildingblock";

// export default function Page() {
//   return (
//     <div className="overflow-x-hidden">
//       <Navbar1 />
//       <HeroSection />
//       <Buildingblock />
//       <Content />

//       {/* Gradient Section Starts */}
//       <div className="bg-gradient-to-b from-[#E5903D] via-[#FAF6C6]/80 to-[#FAF6C6]/80 
//                 bg-[length:100%_100%] bg-no-repeat">
//         <WeCareSection />
//       </div>
//       {/* Gradient Section Ends */}
//       <div className="bg-gradient-to-b from-[#FAF6C6]/80  via-[#0a260a]/80 to-[#0a260a] 
//                  bg-no-repeat">
//         <Contact />
//       </div>

//       <Footer />
//     </div>
//   );
// }


import Navbar from "@/components/Navbar1";
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

