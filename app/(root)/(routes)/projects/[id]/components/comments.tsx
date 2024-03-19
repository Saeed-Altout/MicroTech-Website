"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heading } from "@/components/heading";
import { Heart, ReplyAll, User } from "lucide-react";
import { BiChat } from "react-icons/bi";

const formSchema = z.object({
  comment: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const Comments = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const newLocal = "Share with us your comment 😊🚀";
  return (
    <>
      <Heading
        title={newLocal}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        className="mx-auto w-fit text-center mb-20"
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 max-w-3xl mx-auto text-center"
        >
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-2xl capitalize font-normal">
                  Add a new comment
                </FormLabel>
                <FormControl>
                  <Textarea rows={4} {...field} />
                </FormControl>
                <FormDescription>
                  your comment will show for public.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="sm">
            Send your comment
          </Button>
        </form>
      </Form>

      <div className="mt-20">
        <h3 className="text-3xl">Last Comments</h3>
        <div className="border rounded-md mt-10 p-8 space-y-5">
          <div className="bg-primary-foreground py-3 px-4 rounded-md">
            <h4 className="text-muted-foreground flex items-center gap-2">
              <span className="bg-background p-2 rounded-full">
                <User className="h-4 w-4" />
              </span>
              @saeedaltout
            </h4>
            <p className="py-2 px-10">
              I love this company 😊😘, i enjoy with them.
            </p>
            <div className="flex items-center justify-end gap-4 mt-5">
              <Button variant="ghost" size="sm">
                2
                <Heart className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="ghost" size="sm">
                0
                <BiChat className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="ghost" size="sm">
                Reply <ReplyAll className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          <div className="bg-primary-foreground py-3 px-4 rounded-md">
            <h4 className="text-muted-foreground flex items-center gap-2">
              <span className="bg-background p-2 rounded-full">
                <User className="h-4 w-4" />
              </span>
              @jonedoe
            </h4>
            <p className="py-2 px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur eum blanditiis rerum sint officia. Unde!
            </p>
            <div className="flex items-center justify-end gap-4 mt-5">
              <Button variant="ghost" size="sm">
                38
                <Heart className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="ghost" size="sm">
                12
                <BiChat className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="ghost" size="sm">
                Reply <ReplyAll className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          <div className="bg-primary-foreground py-3 px-4 rounded-md">
            <h4 className="text-muted-foreground flex items-center gap-2">
              <span className="bg-background p-2 rounded-full">
                <User className="h-4 w-4" />
              </span>
              @google
            </h4>
            <p className="py-2 px-10">
              cupiditate saepe officiis nam molestias laborum eaque dolore
              aperiam ad sequi fugit 😶 reprehenderit ipsa hic, expedita
              voluptatum, provident enim atque ipsum corporis iste, inventore id
              in nobis? Aliquam, explicabo? 🔐🔑
            </p>
            <div className="flex items-center justify-end gap-4 mt-5">
              <Button variant="ghost" size="sm">
                2
                <Heart className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="ghost" size="sm">
                1
                <BiChat className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="ghost" size="sm">
                Reply <ReplyAll className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
