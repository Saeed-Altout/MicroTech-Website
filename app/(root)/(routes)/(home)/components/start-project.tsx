"use client";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { OrderModal } from "@/components/modals/order-modal";
import { useOrderModal } from "@/hooks/use-order-modal";

export const StartProjectSection = () => {
  const orderModal = useOrderModal();
  return (
    <Section
      id="start-project"
      container={false}
      className="bg-secondary dark:bg-primary-foreground space-y-5"
    >
      <div className="flex flex-col gap-2 text-center lg:max-w-6xl mx-auto container">
        <h3 className="text-2xl md:text-3xl">
          Embark on an exciting journey of creativity and accomplishment with us
        </h3>
        <p>
          Combining the power of design, engineering, and project management to
          create transformative digital experiences. They invite you to join
          them on their journey and discover how they can help bring your
          digital ideas to life.
        </p>
        <div className="bg-background px-8 py-3 rounded-md flex items-center justify-center flex-wrap gap-5 w-fit mx-auto">
          <OrderModal />
          <p className="text-sm">Let&apos;s start your project now!</p>
          <Button onClick={() => orderModal.onOpen()}>
            Start project now <ArrowUpRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </Section>
  );
};
