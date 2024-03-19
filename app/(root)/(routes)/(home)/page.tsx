import type { Metadata } from "next";

import {
  AboutSection,
  ContactUsSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  StartProjectSection,
} from "./components";

export const metadata: Metadata = {
  title: "MicroTech - Home",
  description: "At MicroTech, we're dedicated to transforming your ideas.",
};

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <StartProjectSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactUsSection />
    </>
  );
}
