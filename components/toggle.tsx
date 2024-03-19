"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useMenu } from "@/hooks/use-menu";

export const Toggle = () => {
  const menu = useMenu();

  return (
    <Button
      size="icon"
      variant="outline"
      className="md:hidden"
      onClick={() => {
        menu.isOpen ? menu.onClose() : menu.onOpen();
      }}
    >
      <span className="sr-only">Menu</span>
      <Menu className="h-4 w-4" />
    </Button>
  );
};
