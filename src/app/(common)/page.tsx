import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Hero />
        <Services />
      </div>
      <Testimonials />
    </div>
  );
}
