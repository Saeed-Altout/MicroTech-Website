"use client";

import { useState } from "react";
import { fillter } from "@/constant";
import { Button } from "@/components/ui/button";

export const Filter = () => {
  const [categoryActive, setCategoryActive] = useState("all");

  return (
    <div className="flex flex-center justify-start flex-wrap mt-12 gap-2 md:gap-5">
      {fillter?.map((category, key) => (
        <Button
          key={key}
          className="capitalize text-xs md:text-sm"
          size="sm"
          onClick={() => setCategoryActive(category)}
          variant={category == categoryActive ? "default" : "outline"}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
