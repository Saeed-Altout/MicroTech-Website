"use client";

import * as z from "zod";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";

import { onError } from "@/lib/error";
import { useCommentModal } from "@/hooks/use-comment-modal";
import { useApi } from "@/providers/api-provider";

export const formSchema = z.object({
  comment: z.string(),
});

export const FormComment = ({ id }: { id: string }) => {
  const router = useRouter();
  const commentModal = useCommentModal();

  const { config, baseUrl } = useApi();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_COMMENT_PROJECT}`,
        {
          project_id: id,
          comment: values.comment,
        },
        config
      );

      toast.success("Thank you for comment.");
      commentModal.onClose();
      form.reset();
      router.refresh();
    } catch (error) {
      const message = onError(error);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  rows={2}
                  disabled={isLoading}
                  placeholder="What you say . . ."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                your comment will show for public.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-center items-center">
          <Button disabled={isLoading} type="submit" className="w-[200px]">
            Send {isLoading && <Spinner className="text-background ml-2" />}
          </Button>
        </div>
      </form>
    </Form>
  );
};
