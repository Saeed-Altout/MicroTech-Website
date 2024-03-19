import { Section } from "@/components/section";
import { FormContact } from "@/components/form-contact";
import { Heading } from "@/components/heading";

export const ContactUsSection = () => {
  return (
    <Section id="contact-us">
      <Heading
        title="Contact Us"
        description="Let's turn your vision into reality. Get in touch with us today and let the digital transformation begin!"
        className="flex justify-center items-center flex-col lg:max-w-3xl text-center mx-auto"
      />
      <div className="mt-10 max-w-5xl mx-auto">
        <FormContact />
      </div>
    </Section>
  );
};
