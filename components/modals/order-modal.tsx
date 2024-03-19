import { Modal } from "@/components/ui/modal";
import { FormContact } from "@/components/form-contact";
import { useOrderModal } from "@/hooks/use-order-modal";

export const OrderModal = () => {
  const orderModal = useOrderModal();

  return (
    <Modal
      title="Add order."
      description="Add a new order to convert your ideas 😉 to real project."
      isOpen={orderModal.isOpen}
      onClose={orderModal.onClose}
    >
      <FormContact />
    </Modal>
  );
};
