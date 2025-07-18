import { HeroSection } from "../../components/HeroSection";
import { IndustriesSection } from "../../components/IndustriesSection";
import { ProjectsSection } from "../../components/ProjectsSection";
import { SolutionsSection } from "../../components/SolutionsSection";
import { CertificationsSection } from "../../components/CertificationsSection";
import { TestimonialsSection } from "../../components/TestimonialsSection";
import { CTASection } from "../../components/CTASection";
import ClientLogo from "@/components/ClientLogo";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ClientLogo/>
      <IndustriesSection />
      <ProjectsSection />
      <SolutionsSection />
      <CertificationsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
