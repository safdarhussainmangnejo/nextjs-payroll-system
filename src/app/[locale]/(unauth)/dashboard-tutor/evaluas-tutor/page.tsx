"use client";
import { useModal } from "@/app/ModalContext";
import DatePicker from "@/components/Custom/DatePicker";
import Dropdown from "@/components/Custom/Dropdown";
import MentorEvaluation from "@/components/Custom/MentorEvaluation";
import SearchInput from "@/components/Custom/SearchInput";
import React from "react";

const EvaluasTutor: React.FC = () => {
  const { showModal, currentModal } = useModal();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <>
      <div>
        <h1 className="text-2xl heading-font-weight-color mb-4">Tutor</h1>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-8 ">
            <h1 className="text-2xl font-bold heading-font-weight-color ">
              Tutor Evaluation
            </h1>
          </div>
          <div className="col-span-4">
            <SearchInput />
          </div>
        </div>

        <div className="flex justify-between space-x-2 mb-4 mt-3">
          <div className="flex-1">
            <DatePicker />
          </div>
          <div className="flex-1">
            <Dropdown options={["Profiling", "Lainnya"]} />
          </div>
          <div className="flex-1">
            <Dropdown options={["All Status"]} />
          </div>
        </div>

        {/* <CustomTable columns={columnsAttendanceDat} rows={rowsAttendanceData}/> */}

        <MentorEvaluation
          imageSrc="/icons/evaluation.png"
          heading="No Tutor Evaluation Have Been Recorded"
          subheading="Are you sure you want to accept this?"
          buttonText="Input Tutor Evaluation"
          handleOnClick={() => showModal("inputTutorEvaluation")}
        />
      </div>

      {/* <Table onEdit={handleOpenModal} />
      <CustomModal isOpen={isModalOpen} onRequestClose={handleCloseModal} /> */}
    </>
  );
};

export default EvaluasTutor;
