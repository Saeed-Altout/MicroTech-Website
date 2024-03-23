"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Key } from "react";
import { toast } from "sonner";
import { Heart } from "lucide-react";
import { BiChat } from "react-icons/bi";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { onError } from "@/lib/error";
import { useApi } from "@/providers/api-provider";
import { useCommentModal } from "@/hooks/use-comment-modal";

interface HeaderProps {
  id: string;
  title: string;
  functionality: string;
  description: string;
  technologies: any[];
  tools: any[];
  likes: number;
  comments: any[];
  hrefLive: string;
}

export const Header = ({
  id,
  title,
  functionality,
  description,
  technologies,
  tools,
  likes,
  comments,
  hrefLive,
}: HeaderProps) => {
  const router = useRouter();
  const { baseUrl, config } = useApi();
  const commentModal = useCommentModal();
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
    <div className="pt-20 pb-10 border-b">
      <div className="container space-y-5">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            {title}
          </h1>
          <p>{functionality}</p>
          <p className="pt-2 max-w-xl">{description}</p>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-y-16 gap-x-5">
          <div className="flex justify-start items-center gap-4">
            {technologies.map((item: any, index: Key) => (
              <Image
                key={index}
                alt={item.name}
                src={item.icon_url}
                width={27}
                height={27}
              />
            ))}
            {tools.map((item: any, index: Key) => (
              <Image
                key={index}
                alt={item.name}
                src={item.icon_url}
                width={27}
                height={27}
              />
            ))}
          </div>
          <div className="flex items-center justify-end gap-4 ml-auto">
            <Button onClick={onLikes} variant="outline" size="sm">
              {likes}
              <Heart className="h-4 w-4 ml-2" />
            </Button>
            <Button variant="outline" size="sm" onClick={commentModal.onOpen}>
              {comments.length}
              <BiChat className="h-4 w-4 ml-2" />
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href={hrefLive} target="_blank">
                Preview
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
