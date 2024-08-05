import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Features />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
