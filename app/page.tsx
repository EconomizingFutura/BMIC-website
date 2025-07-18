"use client";

import { useState } from "react";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import { HomePage } from "./Home/page";
import { AboutPage } from "./About/page";
import { ServicesPage } from "./Services/page";
import { PharmaIndustryPage } from "./Industries/page";
import { ProjectsPage } from "./Projects/page";
import { BlogPage } from "./Blog/page";
import { ContactPage } from "./Contact/page";
import Head from "next/head";
import "../globals.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "about" | "services" | "pharma" | "projects" | "blog" | "contact"
  >("home");

  const navigateToAbout = () => {
    setCurrentPage("about");
    window.scrollTo(0, 0);
  };

  const navigateToServices = () => {
    setCurrentPage("services");
    window.scrollTo(0, 0);
  };

  const navigateToPharma = () => {
    setCurrentPage("pharma");
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

  if (currentPage === "about") {
    return (
      <div className="min-h-screen">
        <Header
          onNavigateToHome={navigateToHome}
          onNavigateToAbout={() => {}}
          onNavigateToServices={navigateToServices}
          onNavigateToPharma={navigateToPharma}
          onNavigateToProjects={navigateToProjects}
          onNavigateToBlog={navigateToBlog}
          onNavigateToContact={navigateToContact}
        />
        <AboutPage onBackToHome={navigateToHome} />
        <Footer />
      </div>
    );
  }

  if (currentPage === "services") {
    return (
      <div className="min-h-screen">
        <Header
          onNavigateToHome={navigateToHome}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={() => {}}
          onNavigateToPharma={navigateToPharma}
          onNavigateToProjects={navigateToProjects}
          onNavigateToBlog={navigateToBlog}
          onNavigateToContact={navigateToContact}
        />
        <ServicesPage onBackToHome={navigateToHome} />
        <Footer />
      </div>
    );
  }

  if (currentPage === "pharma") {
    return (
      <div className="min-h-screen">
        <Header
          onNavigateToHome={navigateToHome}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToPharma={() => {}}
          onNavigateToProjects={navigateToProjects}
          onNavigateToBlog={navigateToBlog}
          onNavigateToContact={navigateToContact}
        />
        <PharmaIndustryPage onBackToHome={navigateToHome} />
        <Footer />
      </div>
    );
  }

  if (currentPage === "projects") {
    return (
      <div className="min-h-screen">
        <Header
          onNavigateToHome={navigateToHome}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToPharma={navigateToPharma}
          onNavigateToProjects={() => {}}
          onNavigateToBlog={navigateToBlog}
          onNavigateToContact={navigateToContact}
        />
        <ProjectsPage onBackToHome={navigateToHome} />
        <Footer />
      </div>
    );
  }

  if (currentPage === "blog") {
    return (
      <div className="min-h-screen">
        <Header
          onNavigateToHome={navigateToHome}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToPharma={navigateToPharma}
          onNavigateToProjects={navigateToProjects}
          onNavigateToBlog={() => {}}
          onNavigateToContact={navigateToContact}
        />
        <BlogPage onBackToHome={navigateToHome} />
        <Footer />
      </div>
    );
  }

  if (currentPage === "contact") {
    return (
      <div className="min-h-screen">
        <Header
          onNavigateToHome={navigateToHome}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServices={navigateToServices}
          onNavigateToPharma={navigateToPharma}
          onNavigateToProjects={navigateToProjects}
          onNavigateToBlog={navigateToBlog}
          onNavigateToContact={() => {}}
        />
        <ContactPage onBackToHome={navigateToHome} />
        <Footer />
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
        <Header
          onNavigateToAbout={navigateToAbout}
          onNavigateToHome={navigateToHome}
          onNavigateToServices={navigateToServices}
          onNavigateToPharma={navigateToPharma}
          onNavigateToProjects={navigateToProjects}
          onNavigateToBlog={navigateToBlog}
          onNavigateToContact={navigateToContact}
        />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}
