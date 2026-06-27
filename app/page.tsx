import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import BusinessDivision from "@/components/home/BusinessDivision";
import Services from "@/components/home/Services";
import WhyChoose from "@/components/home/WhyChoose";
import Clients from "@/components/home/Clients";
import Testimonials from "@/components/home/Testimonials";
import Stats from "@/components/home/Stats";

export default function Home() {
  return (
  <>
  <Navbar />
  <Hero />
  <About />
  <BusinessDivision />
  <Services />
  <WhyChoose />
  <Clients />
  <Testimonials />
  <Stats />
</>
  );
}