"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface GalleryProps extends React.HTMLAttributes<HTMLElement> {
  images: any[];
  carousel?: boolean;
}

export const Gallery = ({
  images,
  carousel = false,
  className,
}: GalleryProps) => {
  return (
    <>
      {carousel ? (
        <div className={cn("max-w-[80%] mx-auto", className)}>
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 6000,
              }),
            ]}
          >
            <CarouselContent>
              {images?.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={image?.image_url}
                    alt="image"
                    width={1000}
                    height={1000}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {images?.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-md">
              <Image
                src={image?.image_url}
                alt="image"
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
