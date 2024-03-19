"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { BiChat } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { Button } from "@/components/ui/button";

interface HeadingProps {
  title: string;
  functionality: string;
  technologies: any[];
  tools: any[];
  description: string;
}

export const Heading = ({
  title,
  functionality,
  technologies,
  tools,
  description,
}: HeadingProps) => {
  return (
    <div className="relative pb-10 pt-40 border-b dark:border-none dark:bg-[url('/cover4.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="absolute w-full h-full top-0 left-0 bg-background/50 -z-0 hidden dark:block"></div>
      <div className="container mx-auto relative">
        <div className="space-y-1">
          <div className="relative w-fit">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
              {title}
            </h1>
            <BsFillCheckCircleFill className="h-6 w-6 absolute top-0 -right-10 text-green-500" />
          </div>
          <p className="">{functionality}</p>
          <p className="pt-2 max-w-xl">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-10">
          <div className="flex justify-start items-center gap-5">
            {technologies.map((item, index) => (
              <div key={index}>
                <Image
                  alt={item.name}
                  src={item.icon_url}
                  width={30}
                  height={30}
                />
              </div>
            ))}
            {tools.map((item, index) => (
              <div key={index}>
                <Image
                  alt={item.name}
                  src={item.icon_url}
                  width={30}
                  height={30}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end gap-4">
            <Button variant="outline" size="sm">
              24
              <Heart className="h-4 w-4 ml-2" />
            </Button>
            <Button variant="outline" size="sm">
              8
              <BiChat className="h-4 w-4 ml-2" />
            </Button>
            <Button variant="outline" size="sm">
              Preview
            </Button>
            <Button size="sm">Add to cart 30$</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
