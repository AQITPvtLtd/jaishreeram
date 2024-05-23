import About from "@/components/homepage/about/About";
import Detail from "@/components/homepage/detail/Detail";
import Services from "@/components/homepage/services/services";
import Slider from "@/components/homepage/slider/Slider";
import Testimonials from "@/components/homepage/testimonials/Testimonials";
import WhyChooseUs from "@/components/homepage/whychooseus/WhyChooseUs";
import Contact from "./contactus/Contact";

export default function Home() {
  return (
    <div>
      <Slider />
      <Detail />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Testimonials />
    </div>
  );
}
