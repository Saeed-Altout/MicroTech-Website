"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import axios, { AxiosRequestConfig } from "axios";
import { toast } from "sonner";
import { BsHeartFill } from "react-icons/bs";
import { Eye, Heart, MessageCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { auth } from "@/actions/auth";
import { onError } from "@/lib/error";

export interface ProjectCardProps {
  id: string;
  cover: string;
  title: string;
  description?: string;
  likes: number;
}

export const ProjectCard = ({
  id,
  title,
  description,
  cover,
  likes,
}: ProjectCardProps) => {
  const [token, setToken] = useState<string>("");
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();

  const onLikes = async () => {
    if (!token) {
      router.push("/auth/login");
      return null;
    }

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_LIKE_PROJECT}`,
        {
          project_id: id,
        },
        config
      );
      toast.success(`Success, you like project ${title}`);
    } catch (error) {
      const message = onError(error);
      toast.error(message);
    }
  };

  const getUser = async () => {
    startTransition(() => {
      auth().then((data) => {
        setToken(data?.token?.value || "");
      });
    });
  };

  useEffect(() => {
    getUser();
  }, [token]);

  return (
    <Card className="overflow-hidden group">
      <Link href={`/projects/${id}`} className="relative">
        <Image alt={title} src={cover} width={1000} height={1000} />
        <div className="opacity-0 group-hover:opacity-100 transition-all absolute flex justify-center items-center gap-10 top-0 left-0 bg-neutral-950/30 w-full h-full">
          <Button
            disabled={isLoading}
            size="icon"
            variant="ghost"
            className="text-background rounded-full border hover:scale-125 transition-all hover:rotate-[360deg]"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button
            disabled={isLoading}
            size="icon"
            variant="ghost"
            className="text-background rounded-full border hover:scale-125 transition-all hover:rotate-[360deg]"
          >
            <Eye className="h-5 w-5" />
          </Button>
        </div>
      </Link>
      <CardHeader className="pt-4 pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm">{description}</p>
        <div className="flex justify-end items-center">
          <Button
            disabled={isLoading}
            size="sm"
            variant="ghost"
            onClick={onLikes}
          >
            {likes}
            <BsHeartFill className="h-4 w-4 ml-2 text-red-500" />
          </Button>
          <Button disabled={isLoading} size="sm" variant="ghost">
            0
            <MessageCircle className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
