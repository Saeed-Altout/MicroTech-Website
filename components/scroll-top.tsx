"use client";

import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";

export const ScrollTop = () => {
  const scrolled = useScrollTop();

  return (
    <>
      {scrolled && (
        <Button
          size="icon"
          className="rounded-full fixed bottom-6 right-6 z-[999]"
          onClick={() => window.scrollTo(0, 0)}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};
