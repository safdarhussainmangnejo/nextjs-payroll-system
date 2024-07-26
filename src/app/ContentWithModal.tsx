import MentorEvaluationModal from "@/components/Modals/MentorEvaluationModel";
import { useModal } from "./ModalContext";
import { DocumentCategoryEnum } from "@/utils/Constants";
import InputTutorEvaluationModal from "@/components/Modals/InputTutorEvaluationModal";
import StudentAccountnModal from "@/components/Modals/StudentAccountModal";

const ContentWithModal= () => {
  const { showModal, currentModal } = useModal();
  // const { isModalOpen, closeModal, documentType } = useModal();
  // Add console.log to check the state
  console.log("Modal open:", showModal);
  
  // if (!isModalOpen) return null;  // If this condition is always true, your modal won't show
  if (!showModal) return null;  // If this condition is always true, your modal won't show

  return (
    <>
    {/* <button onClick={() => showModal('mentorEvaluation')}>Open Mentor Evaluation</button>
      <button onClick={() => showModal('studentFeedback')}>Open Student Feedback</button> */}
      {currentModal === 'mentorEvaluation' && <MentorEvaluationModal />}
      {currentModal === 'inputTutorEvaluation' && <InputTutorEvaluationModal />}
      {currentModal === 'addStudentAccount' && <StudentAccountnModal />}
    {/* {documentType === DocumentCategoryEnum.EvaluasTutor ? 
      (<InputTutorEvaluationModal isOpen={isModalOpen} onRequestClose={closeModal}/>)
      :
      (<MentorEvaluationModal isOpen={isModalOpen} onRequestClose={closeModal} />)
    } */}
    </>
    
  );
}
export default ContentWithModal;
