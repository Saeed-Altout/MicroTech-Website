import { services } from "@/constant";

import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { ServiceCard } from "@/components/card/service-card";

export const ServicesSection = () => {
  return (
    <Section
      id="services"
      container={false}
      className="bg-secondary dark:bg-primary-foreground"
    >
      <div className="container">
        <Heading
          title="Services"
          description="Unleash the potential of your business with MicroTech Solutions. As a new entrant, we bring fresh energy and a unique perspective to the world of digital design and development."
          className="flex justify-center items-center flex-col lg:max-w-3xl text-center mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {services.map(({ icon, title, descraption }, index: React.Key) => (
            <ServiceCard
              key={index}
              image={icon}
              title={title}
              description={descraption}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
