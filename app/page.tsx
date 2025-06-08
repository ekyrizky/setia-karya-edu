import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { ProgramsSection } from "@/components/sections/programs";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactInfoSection } from "@/components/sections/contact-info";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProgramsSection />
      <TestimonialsSection />
      <ContactInfoSection />
    </>
  );
}
