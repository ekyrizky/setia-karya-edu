import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { ProgramsSection } from "@/components/sections/programs";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactInfoSection } from "@/components/sections/contact-info";
import { getHomepageData } from "@/lib/homepage-data";

export default async function Home() {
  const {
    profile,
    statistics,
    programs,
    testimonials,
    quickInfo,
    features,
    contact,
    address,
    operationalHours,
  } = await getHomepageData();
  return (
    <>
      <HeroSection
        profile={profile}
        quickInfo={quickInfo}
        statistics={statistics}
      />
      <FeaturesSection features={features} />
      <ProgramsSection programs={programs} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactInfoSection contact={contact} address={address} operationalHours={operationalHours} />
    </>
  );
}
