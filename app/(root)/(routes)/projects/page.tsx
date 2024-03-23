import { Section } from "@/components/section";
import { Heading } from "@/components/heading";

import { ProjectsClient } from "./components/client";

export default async function ProjectsPage() {
  return (
    <Section id="projects">
      <Heading
        title="Projects"
        description=" At MicroTech, we specialize in turning visions into captivating digital realities. From the initial spark of an idea to the final product, we take a holistic approach, ensuring that every aspect aligns seamlessly to deliver a cohesive and impactful result."
      />
      <ProjectsClient />
    </Section>
  );
}
