"use client";
import { HeroSection } from "../../components/HeroSection";
import { IndustriesSection } from "../../components/IndustriesSection";
import { ProjectsSection } from "../../components/ProjectsSection";
import { CertificationsSection } from "../../components/CertificationsSection";
import { TestimonialsSection } from "../../components/TestimonialsSection";
import ClientLogo from "@/components/ClientLogo";
import OurSolutionsServices from "@/components/OurSolutionsServices";
// import { BlogsSection } from "@/components/BlogsSection";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const onNavigateToProjects = () => router.push("/projects");
  const onNavigateToInsulation = () => router.push("/insulation");
  const onNavigateToColdStorage = () => router.push("/cold-storage-solutions");
  const onNavigateToDucting = () => router.push("/ducting-solutions");
  const onNavigateToSound = () => router.push("/sound-proofing-solutions");
  // const onNavigateToBlog = () => router.push("/blog");

  return (
    <main>
      <HeroSection />
      <ClientLogo />
      <IndustriesSection />
      <ProjectsSection onNavigateToProjects={onNavigateToProjects} />
      {/* <BlogsSection onNavigateToBlog={onNavigateToBlog} /> */}
      <OurSolutionsServices
        onNavigateToColdStorage={onNavigateToColdStorage}
        onNavigateToDucting={onNavigateToDucting}
        onNavigateToInsulation={onNavigateToInsulation}
        onNavigateToSound={onNavigateToSound}
      />
      <CertificationsSection />
      <TestimonialsSection />
    </main>
  );
}
