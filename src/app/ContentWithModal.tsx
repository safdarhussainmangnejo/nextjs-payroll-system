import MentorEvaluationModal from "@/components/Modals/MentorEvaluationModel";
import { useModal } from "./ModalContext";
import InputTutorEvaluationModal from "@/components/Modals/InputTutorEvaluationModal";
import StudentAccountnModal from "@/components/Modals/StudentAccountModal";
import AddTutorModal from "@/components/Modals/AddTutorModal";
import AddMentorModal from "@/components/Modals/AddMentorModal";
import InputDatabaseTutorMentorModal from "@/components/Modals/InputDatabaseTutorMentorModal.";

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
      {currentModal === 'addTutor' && <AddMentorModal />}
      {currentModal === 'addMetor' && <AddMentorModal />}
      {currentModal === 'addFee' && <AddTutorModal />}
      {currentModal === 'addDatabaseTutorMentor' && <InputDatabaseTutorMentorModal />}
    {/* {documentType === DocumentCategoryEnum.EvaluasTutor ? 
      (<InputTutorEvaluationModal isOpen={isModalOpen} onRequestClose={closeModal}/>)
      :
      (<MentorEvaluationModal isOpen={isModalOpen} onRequestClose={closeModal} />)
    } */}
    </>
    
  );
}
export default ContentWithModal;
