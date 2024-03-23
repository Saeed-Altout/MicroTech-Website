import Image from "next/image";

import { Key } from "react";

import {
  BsCheckCircleFill,
  BsEye,
  BsFacebook,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Comments } from "./comments";

interface BodyProps {
  id: string;
  about: string;
  images: any[];
  advantages: any[];
  links: any[];
  comments: any[];
}

export const Body = ({
  id,
  about,
  advantages,
  images,
  links,
  comments,
}: BodyProps) => {
  return (
    <div className="container py-10 space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-3xl font-semibold">About</h3>
          <p>{about}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-semibold">Features</h3>
          {advantages.map((item: any, index: Key) => (
            <div key={index} className="flex items-center justify-start">
              <BsCheckCircleFill className="h-4 w-4 mr-2 text-green-500" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-3xl font-semibold">Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {images?.map((image: any, index: Key) => (
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
      </div>

      <div className="py-20 w-full mx-auto" id="comments">
        <Comments id={id} comments={comments} />
      </div>

      <div className="flex flex-wrap gap-4">
        {links.map((item: any, index: Key) => (
          <Button key={index} variant="outline" size="sm" asChild>
            <Link href={item.link}>
              {item.platform === "Github" && (
                <span className="flex items-center">
                  Github
                  <BsGithub className="h-4 w-4 ml-2" />
                </span>
              )}
              {item.platform === "Instgram" && (
                <span className="flex items-center">
                  Instagram
                  <BsInstagram className="h-4 w-4 ml-2" />
                </span>
              )}
              {item.platform === "Other" && (
                <span className="flex items-center">
                  Live
                  <BsEye className="h-4 w-4 ml-2" />
                </span>
              )}

              {item.platform === "Facebook" && (
                <span className="flex items-center">
                  Facebook
                  <BsFacebook className="h-4 w-4 ml-2" />
                </span>
              )}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
