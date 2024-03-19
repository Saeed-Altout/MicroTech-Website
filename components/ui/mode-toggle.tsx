"use client";

import * as React from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="border rounded-md overflow-hidden">
      <Button
        onClick={() => setTheme("system")}
        variant="ghost"
        size="icon"
        className="text-muted-foreground rounded-none"
      >
        <span className="sr-only">System</span>
        <Laptop className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => setTheme("light")}
        variant="ghost"
        size="icon"
        className="text-muted-foreground rounded-none"
      >
        <span className="sr-only">Sun</span>
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => setTheme("dark")}
        variant="ghost"
        size="icon"
        className="text-muted-foreground rounded-none"
      >
        <span className="sr-only">Moon</span>
        <Moon className="h-4 w-4" />
      </Button>
    </div>
  );
}
