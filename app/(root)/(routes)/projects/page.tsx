import { Filter } from "@/components/filter";
import { Section } from "@/components/section";
import { Projects } from "@/components/projects";
import { Heading } from "@/components/heading";
import axios from "axios";
export default async function ProjectsPage() {
  // const res = await axios.get("http://127.0.0.1:8000/user/get_projects");
  // const projects = await res.data.data;
  return (
    <Section id="projects">
      <Heading
        title="Projects"
        description=" At MicroTech, we specialize in turning visions into captivating digital realities. From the initial spark of an idea to the final product, we take a holistic approach, ensuring that every aspect aligns seamlessly to deliver a cohesive and impactful result."
      />
      <Filter />
      <Projects data={[]} />
    </Section>
  );
}
