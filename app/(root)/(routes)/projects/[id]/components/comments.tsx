import { User } from "lucide-react";

import { Heading } from "@/components/heading";
import { FormComment } from "@/components/form-comment";

export const Comments = ({ id, comments }: { id: string; comments: any[] }) => {
  return (
    <>
      <Heading
        title="Share with us your comment 😊🚀"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        className="mx-auto w-fit text-center mb-20"
      />

      <div className="my-20 columns-1 md:columns-2 lg:columns-3 space-y-5">
        {comments.map((item, index) => (
          <div key={index} className="border rounded-md p-2 overflow-hidden">
            <h4 className="flex items-center">
              <span className="bg-background p-2 rounded-full">
                <User className="h-4 w-4" />
              </span>
              {item.user.user_name}
            </h4>
            <p className="pl-8 text-sm text-muted-foreground">{item.comment}</p>
          </div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold text-center pb-4 ">
          Add a new Comment 
        </h3>
        <FormComment id={id} />
      </div>
    </>
  );
};
