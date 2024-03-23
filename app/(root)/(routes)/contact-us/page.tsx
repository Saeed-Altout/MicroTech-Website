import { Metadata } from "next";

import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { FormContact } from "@/components/form-contact";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactUsPage() {
  return (
    <Section className="py-20 space-y-20" container={true}>
      <div className="py-10 space-y-10 max-w-5xl mx-auto">
        <Heading
          title="Contact with our team now"
          description="Corporis eaque autem molestias blanditiis sequi eius rerum! Laboriosam asperiores porro nostrum maxime voluptatum, dolor, nulla nemo repellat nobis delectus deserunt dolorum!"
          className="text-center mx-auto max-w-5xl"
        />
        <FormContact />
      </div>
      <div>
        <Heading
          title="FAQS"
          description="Corporis eaque autem molestias blanditiis sequi eius rerum! Laboriosam asperiores porro nostrum maxime voluptatum, dolor, nulla nemo repellat nobis delectus deserunt dolorum!"
          className="text-center mx-auto max-w-5xl"
        />
        <Accordion
          type="single"
          collapsible
          className="mt-20 max-w-4xl mx-auto"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>sit amet consectetur.</AccordionTrigger>
            <AccordionContent>
              Yes. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Tempore, voluptatibus officia blanditiis vitae ex quidem non
              distinctio quisquam corporis ad.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              ccessible Lorem ipsum dolor sit.?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Tenetur eaque blanditiis
              alias?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>ipsum. it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Tenetur eaque blanditiis
              alias?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is it Lorem ipsum dolor sit.</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Tenetur eaque blanditiis
              alias?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}
