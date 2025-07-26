import { HeroSection } from "../../components/HeroSection";
import { IndustriesSection } from "../../components/IndustriesSection";
import { ProjectsSection } from "../../components/ProjectsSection";
import { CertificationsSection } from "../../components/CertificationsSection";
import { TestimonialsSection } from "../../components/TestimonialsSection";
import { CTASection } from "../../components/CTASection";
import ClientLogo from "@/components/ClientLogo";
import OurSolutionsServices from "@/components/OurSolutionsServices";
import { BlogsSection } from "@/components/BlogsSection";

type HeaderProps = {
  onNavigateToPharma: () => void;
  onNavigateToProjects: () => void;
  onNavigateToContact: () => void;
  onNavigateToInsulation: () => void;
  onNavigateToColdStorage: () => void;
  onNavigateToDucting: () => void;
  onNavigateToSound: () => void;
  onNavigateToFood: () => void;
  onNavigateToColdChain: () => void;
  onNavigateToBlog: () => void;
};

export function HomePage({
  onNavigateToProjects,
  onNavigateToInsulation,
  onNavigateToColdStorage,
  onNavigateToDucting,
  onNavigateToSound,
  onNavigateToBlog,
}: HeaderProps) {
  return (
    <main>
      <HeroSection />
      <ClientLogo />
      <IndustriesSection />
      <ProjectsSection onNavigateToProjects={onNavigateToProjects} />
      <BlogsSection onNavigateToBlog={onNavigateToBlog} />
      <OurSolutionsServices
        onNavigateToColdStorage={onNavigateToColdStorage}
        onNavigateToDucting={onNavigateToDucting}
        onNavigateToInsulation={onNavigateToInsulation}
        onNavigateToSound={onNavigateToSound}
      />
      <CertificationsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
