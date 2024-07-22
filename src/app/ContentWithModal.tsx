import MentorEvaluationModal from "@/components/MentorEvaluation/MentorEvaluationModel";
import { useModal } from "./ModalContext";

const ContentWithModal= () => {
  const { isModalOpen, closeModal } = useModal();
  // Add console.log to check the state
  console.log("Modal open:", isModalOpen);
  
  if (!isModalOpen) return null;  // If this condition is always true, your modal won't show

  return (
    <MentorEvaluationModal isOpen={isModalOpen} onRequestClose={closeModal} />
  );
}
export default ContentWithModal;
