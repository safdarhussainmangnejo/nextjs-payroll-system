"use client";
import { useModal } from "@/app/ModalContext";
import CustomTable from "@/components/Custom/CustomTable";
import DatePicker from "@/components/Custom/DatePicker";
import Dropdown from "@/components/Custom/Dropdown";
import MentorEvaluation from "@/components/Custom/MentorEvaluation";
import SearchInput from "@/components/Custom/SearchInput";
import EvaluasiDetails from "@/components/DetailPages/EvaluasiDetails";
import { DocumentCategoryEnum, FORMMODE } from "@/utils/Constants";
import { columnsEvaluasiTutor, rowsEvaluasiTutor } from "@/utils/DummyData";
import React, { useState } from "react";

const EvaluasTutor: React.FC = () => {
  const { showModal, currentModal } = useModal();
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [mode, setMode] = useState(FORMMODE.Disabled);

  const handleViewClick = (row: any) => {
    setMode(FORMMODE.View);
    setSelectedRow(row);
  };

  const goBack = () => {
    setMode(FORMMODE.Disabled);
  };


  const isView = mode === FORMMODE.View;

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

      {isView ? (
        <div className="min-h-screen bg-gray-100 p-4">
          <button
            onClick={goBack}
            className="flex items-center mb-4 text-gray-500 hover:text-blue-700"
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"
                />
                <path
                  fill="currentColor"
                  d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"
                />
              </svg>
            </span>
            Back
          </button>
          <EvaluasiDetails selectedRow={selectedRow} />
        </div>
      ) : rowsEvaluasiTutor.length > 0 ? (
        <>
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
          </div>
          <CustomTable
            columns={columnsEvaluasiTutor}
            rows={rowsEvaluasiTutor}
            tableType={DocumentCategoryEnum.EvaluasiTutor}
            onViewClick={handleViewClick}
          />
        </>
      ) : (
        <MentorEvaluation
          imageSrc="/icons/evaluation.png"
          heading="No Tutor Evaluation Have Been Recorded"
          subheading="Are you sure you want to accept this?"
          buttonText="Input Tutor Evaluation"
          handleOnClick={() => showModal("inputTutorEvaluation")}
        />
      )}
    </>
  );
};

export default EvaluasTutor;
