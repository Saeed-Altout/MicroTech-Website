"use client";

import * as z from "zod";
import { Modal } from "@/components/ui/modal";
import { FormComment } from "../form-comment";
import { useCommentModal } from "@/hooks/use-comment-modal";

export const formSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  message: z.string(),
});

export const CommentModal = ({ id }: { id: string }) => {
  const commentModal = useCommentModal();

  return (
    <Modal
      title="Add comment"
      description="Add a new comment if like the project. 😊"
      isOpen={commentModal.isOpen}
      onClose={commentModal.onClose}
    >
      <FormComment id={id} />
    </Modal>
  );
};
