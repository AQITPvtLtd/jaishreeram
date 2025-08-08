import About from "@/components/homepage/about/About";
import Services from "@/components/homepage/services/Services";
import Slider from "@/components/homepage/slider/Slider";
import WhyChooseUs from "@/components/homepage/whychooseus/WhyChooseUs";
import Contact from "./contactus/Contact";
import Vision from "@/components/homepage/vision&mission/Vision";

export const metadata = {
  title: "JSR Pvt Ltd | Multi-Sector Experts in Finance, Legal & Marketing Services",
  description:
    "JSR Pvt Ltd is a leading multi operational firm in New Delhi, offering trusted solutions in stock markets, legal help, digital solutions, insurance, and real estate.",
  keywords: [
    "multi operational firm in new delhi",
    "stock market services",
    "legal consultants new delhi",
    "property listings",
    "health insurance new delhi",
    "stock market updates",
    "investment planning",
    "jsr pvt ltd",
    "legal experts",
    "real estate consultants",
  ],
};

export default function Home() {
  return (
    <div>
      <Slider />
      <Services />
      <About />
      <WhyChooseUs />
      <Vision />
      <Contact />
    </div>
  );
}
