"use client";

import { useState } from "react";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import { HomePage } from "./Home/page";
import { AboutPage } from "./About/page";
import { ServicesPage } from "./Services/page";
// import { PharmaIndustryPage } from "./Industries/page";
import { ProjectsPage } from "./Projects/page";
import { BlogPage } from "./Blog/page";
import { ContactPage } from "./Contact/page";
import { SoundProofingSolutionPage } from "./SouldProofingSolutions/page";
import { PharmaIndustryPage } from "./Pharma/page";
import { InsulationServicePage } from "./Insulation/page";
import { FoodIndustryPage } from "./FoodBeverage/page";
import { DuctingSolutionsPage } from "./DuctingSolutions/page";
import { ColdStorageSolutionsPage } from "./ColdStorageSolutions/page";
import { ColdChainIndustriesPage } from "./ColdChainLogistics/page";
import Head from "next/head";
import "../globals.css";
import { CTASection } from "@/components/CTASection";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    | "home"
    | "about"
    | "services"
    | "industry"
    | "projects"
    | "blog"
    | "contact"
    | "insulation"
    | "coldstorage"
    | "ducting"
    | "soundproofing"
    | "pharma"
    | "food"
    | "coldChain"
  >("home");
  const navigateToInsulation = () => {
    setCurrentPage("insulation");
    window.scrollTo(0, 0);
  };
  const navigateToColdStorage = () => {
    setCurrentPage("coldstorage");
    window.scrollTo(0, 0);
  };

  const navigateToDucting = () => {
    setCurrentPage("ducting");
    window.scrollTo(0, 0);
  };

  const navigateToSound = () => {
    setCurrentPage("soundproofing");
    window.scrollTo(0, 0);
  };

  const navigateToFood = () => {
    setCurrentPage("food");
    window.scrollTo(0, 0);
  };

  const navigateToColdChain = () => {
    setCurrentPage("coldChain");
    window.scrollTo(0, 0);
  };

  const navigateToAbout = () => {
    setCurrentPage("about");
    window.scrollTo(0, 0);
  };

  const navigateToServices = () => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  };

  const navigateToPharma = () => {
    setCurrentPage("industry");
    window.scrollTo(0, 0);
  };

  const navigateToProjects = () => {
    setCurrentPage("projects");
    window.scrollTo(0, 0);
  };

  const navigateToBlog = () => {
    setCurrentPage("blog");
    window.scrollTo(0, 0);
  };

  const navigateToContact = () => {
    setCurrentPage("contact");
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage("home");
    window.scrollTo(0, 0);
  };

  const navObject = {
    onNavigateToAbout: navigateToAbout,
    onNavigateToHome: navigateToHome,
    onNavigateToServices: navigateToServices,
    onNavigateToPharma: navigateToPharma,
    onNavigateToProjects: navigateToProjects,
    onNavigateToBlog: navigateToBlog,
    onNavigateToContact: navigateToContact,
    onNavigateToInsulation: navigateToInsulation,
    onNavigateToColdStorage: navigateToColdStorage,
    onNavigateToDucting: navigateToDucting,
    onNavigateToSound: navigateToSound,
    onNavigateToFood: navigateToFood,
    onNavigateToColdChain: navigateToColdChain,
  };

  if (currentPage == "insulation") {
    return (
      <div className="min-h-screen">
        <Header {...navObject} currentPage={"services"} />
        <InsulationServicePage onBackToHome={navigateToHome} />
        <CTASection />
        <Footer {...navObject} onNavigateToBlog={navigateToBlog} />
      </div>
    );
  }

  if (currentPage == "coldChain") {
    return (
      <div className="min-h-screen">
        <Header {...navObject} currentPage={"industry"} />
        <ColdChainIndustriesPage onBackToHome={navigateToHome} />
        <CTASection />
        <Footer {...navObject} onNavigateToBlog={navigateToBlog} />
      </div>
    );
  }

  if (currentPage == "coldstorage") {
    return (
      <div className="min-h-screen">
        <Header {...navObject} currentPage={"services"} />
        <ColdStorageSolutionsPage onBackToHome={navigateToHome} />
        <CTASection />
        <Footer {...navObject} onNavigateToBlog={navigateToBlog} />
      </div>
    );
  }

  if (currentPage == "soundproofing") {
    return (
      <div className="min-h-screen">
        <Header {...navObject} currentPage={"services"} />
        <SoundProofingSolutionPage onBackToHome={navigateToHome} />
        <CTASection />
        <Footer {...navObject} onNavigateToBlog={navigateToBlog} />
      </div>
    );
  }

  if (currentPage === "ducting") {
    return (
      <div className="min-h-screen">
        <Header {...navObject} currentPage={"services"} />

        <DuctingSolutionsPage onBackToHome={navigateToHome} />
        <CTASection />
        <Footer {...navObject} onNavigateToBlog={navigateToBlog} />
      </div>
    );
  }

  if (currentPage == "food") {
    return (
      <div className="min-h-screen">
        <Header {...navObject} currentPage={"industry"} />
        <FoodIndustryPage onBackToHome={navigateToHome} />
        <CTASection />
        <Footer {...navObject} onNavigateToBlog={navigateToBlog} />
      </div>
    );
  }

  if (currentPage === "about") {
    return (
      <div className="min-h-screen">
        <Header {...navObject} currentPage={currentPage} />
        <AboutPage onBackToHome={navigateToHome} />
        <CTASection />
        <Footer {...navObject} onNavigateToBlog={navigateToBlog} />
      </div>
    );
  }

  if (currentPage === "services") {
    return (
      <div className="min-h-screen">
        <Header {...navObject} currentPage={currentPage} />
        <ServicesPage onBackToHome={navigateToHome} />
        <CTASection />
        <Footer {...navObject} onNavigateToBlog={navigateToBlog} />
      </div>
    );
  }

  if (currentPage === "industry") {
    return (
      <div className="min-h-screen">
        <Header {...navObject} currentPage={"industry"} />
        <PharmaIndustryPage onBackToHome={navigateToHome} />
        <CTASection />
        <Footer {...navObject} onNavigateToBlog={navigateToBlog} />
      </div>
    );
  }

  if (currentPage === "projects") {
    return (
      <div className="min-h-screen">
        <Header {...navObject} currentPage={currentPage} />
        <ProjectsPage onBackToHome={navigateToHome} />
        <CTASection />
        <Footer {...navObject} onNavigateToBlog={navigateToBlog} />
      </div>
    );
  }

  if (currentPage === "blog") {
    return (
      <div className="min-h-screen">
        <Header {...navObject} currentPage={currentPage} />
        <BlogPage onBackToHome={navigateToHome} />
        <CTASection />
        <Footer {...navObject} onNavigateToBlog={navigateToBlog} />
      </div>
    );
  }

  if (currentPage === "contact") {
    return (
      <div className="min-h-screen">
        <Header {...navObject} currentPage={currentPage} />
        <ContactPage onBackToHome={navigateToHome} />
        <Footer {...navObject} onNavigateToBlog={navigateToBlog} />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>BMIC</title>
        <meta name="description" content="test" />
        <link rel="canonical" href="https://economizingfutura.com/" />
      </Head>
      <div className="min-h-screen">
        <Header {...navObject} currentPage={currentPage} />
        <HomePage />
        <Footer {...navObject} onNavigateToBlog={navigateToBlog} />
      </div>
    </>
  );
}
