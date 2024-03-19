import { create } from "zustand";

interface UseOrderModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useOrderModal = create<UseOrderModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
