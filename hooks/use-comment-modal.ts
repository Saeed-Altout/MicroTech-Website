import { create } from "zustand";

interface UseCommentModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCommentModal = create<UseCommentModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
