"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import axios, { AxiosRequestConfig } from "axios";
import { Eye, Heart, MessageCircle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { onError } from "@/lib/error";
import { useSession } from "@/providers/session-provider";
import { useApi } from "@/providers/api-provider";

export interface ProjectCardProps {
  id: string;
  cover: string;
  category: string;
  title: string;
  description?: string;
  likes: number;
  comments: number;
}

export const ProjectCard = ({
  id,
  title,
  description,
  cover,
  category,
  likes = 0,
  comments = 0,
}: ProjectCardProps) => {
  const { config, baseUrl } = useApi();
  const router = useRouter();
  const onLikes = async () => {
    try {
      const res = await axios.post(
        `${baseUrl}/${process.env.NEXT_PUBLIC_LIKE_PROJECT}`,
        {
          project_id: id,
        },
        config
      );
      toast.success(res.data.message);
      router.refresh();
    } catch (error) {
      const message = onError(error);
      toast.error(message);
    }
  };

  return (
    <>
      <Card className="overflow-hidden group">
        <div className="relative">
          <div className="absolute opacity-0 group-hover:opacity-100 transition-all flex justify-center items-center gap-x-4 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <Button
              size="icon"
              variant="ghost"
              onClick={onLikes}
              className="text-background rounded-full border hover:animate-zoom"
            >
              <span className="sr-only">Heart</span>
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-background rounded-full border hover:animate-zoom"
            >
              <span className="sr-only">Heart</span>
              <Eye className="h-5 w-5" />
            </Button>
          </div>
          <Link href={`/projects/${id}`}>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-all  top-0 left-0 bg-neutral-950/10 w-full h-full z-10"></div>
            <Image alt={title} src={cover} width={1000} height={1000} />
          </Link>
        </div>

        <CardHeader className="pt-4 pb-1">
          <CardTitle className="flex justify-between items-center text-xl">
            {title}
            {category && (
              <span className="text-xs font-medium bg-secondary dark:bg-primary-foreground px-2 py-1 rounded-md">
                {category}
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-end items-center gap-x-5">
          <span className="flex items-center gap-x-1 text-xs text-muted-foreground">
            {likes}
            <Heart className="h-4 w-4 ml-2" />
          </span>
          <div className="flex items-center gap-x-1 text-xs text-muted-foreground">
            {comments}
            <MessageCircle className="h-4 w-4 ml-2 " />
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
