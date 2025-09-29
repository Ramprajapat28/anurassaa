import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import Content from "@/components/Content"
import Footer from "@/components/Footer"
import WeCareSection from "@/components/WeCareSection"
import Contact from "@/components/Contact"

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Content />
      <WeCareSection />
      <Contact />
      <Footer />
    </div>
  )
}
