import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import { HomePage } from "./home/page";
import { AboutPage } from "./about_temp/page";
import { ServicesPage } from "./Services/page";
// import { PharmaIndustryPage } from "./Industries/page";
import { ProjectsPage } from "./Projects/page";
import { BlogPage } from "./blog_temp/page";
import { ContactPage } from "./Contact/page";
import { SoundProofingSolutionPage } from "./SouldProofingSolutions/page";
import { PharmaIndustryPage } from "./Pharma/page";
import { InsulationServicePage } from "./Insulation/page";
import { FoodIndustryPage } from "./FoodBeverage/page";
import { DuctingSolutionsPage } from "./DuctingSolutions/page";
import { ColdStorageSolutionsPage } from "./cold-storage-solutions-temp/page";
import { ColdChainIndustriesPage } from "./cold-chain-logistics-temp/page";
import Head from "next/head";
import "../globals.css";
import { CTASection } from "@/components/CTASection";

export default function App() {
  return (
    <>
      <HomePage />
      <InsulationServicePage />
      <ColdChainIndustriesPage />
      <ColdStorageSolutionsPage />
      <SoundProofingSolutionPage />
      <DuctingSolutionsPage />
      <FoodIndustryPage />
      <AboutPage />
      <ServicesPage />
      <PharmaIndustryPage />
      <ProjectsPage />
      <BlogPage />
      <ContactPage />
      <HomePage />
    </>
  );

  return (
    <>
      <Head>
        <title>BMIC</title>
        <meta name="description" content="test" />
        <link rel="canonical" href="https://economizingfutura.com/" />
      </Head>
      <div className="min-h-screen"></div>
    </>
  );
}
