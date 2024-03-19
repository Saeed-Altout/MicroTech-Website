import { create } from "zustand";

interface UseMenuProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const useMenu = create<UseMenuProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
