import { features } from "@/constant";

import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { FeatureCard } from "@/components/card/feature-card";

export const AboutSection = () => {
  return (
    <Section id="about">
      <Heading
        title="Who is MicroTech ?"
        description="MicroTech is a leading software company specializing in web and app development, as well as UI/UX design."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
        {features?.map(({ title, description, icon }, index: React.Key) => (
          <FeatureCard
            key={index}
            title={title}
            icon={icon}
            description={description}
          />
        ))}
      </div>
    </Section>
  );
};
