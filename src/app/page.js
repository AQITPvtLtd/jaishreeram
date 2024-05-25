import About from "@/components/homepage/about/About";
import Services from "@/components/homepage/services/services";
import Slider from "@/components/homepage/slider/Slider";
import WhyChooseUs from "@/components/homepage/whychooseus/WhyChooseUs";
import Contact from "./contactus/Contact";
import Vision from "@/components/homepage/vision&mission/Vision";

export default function Home() {
  return (
    <div>
      <Slider />
      <About />
      <Services />
      <WhyChooseUs />
      <Vision />
      <Contact />
     
    </div>
  );
}
