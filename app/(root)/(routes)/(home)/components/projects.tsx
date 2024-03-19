import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/section";
import { Projects } from "@/components/projects";
import { Button } from "@/components/ui/button";

import { Heading } from "@/components/heading";

import { getProjectsHome } from "@/data";

export const ProjectsSection = async () => {
  const projects = await getProjectsHome();

  return (
    <Section id="projects">
      <Heading
        title="Projects"
        description=" At MicroTech, we specialize in turning visions into captivating digital realities. From the initial spark of an idea to the final product, we take a holistic approach, ensuring that every aspect aligns seamlessly to deliver a cohesive and impactful result."
      />
      <Projects data={projects} />
      <div className="w-fit mx-auto py-20">
        <Button asChild>
          <Link href="/projects">
            See more projects <ArrowUpRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </Section>
  );
};
