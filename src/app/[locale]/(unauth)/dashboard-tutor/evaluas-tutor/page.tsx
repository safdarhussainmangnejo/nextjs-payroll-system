'use client'
import CustomTable from "@/components/Custom/CustomTable";
import DateRangePicker from "@/components/Custom/DateRangePicker";
import Dropdown from "@/components/Custom/Dropdown";
import MentorEvaluation from "@/components/Custom/MentorEvaluation";
import SearchInput from "@/components/Custom/SearchInput";
import LoginPage from "@/components/Login/LoginPage";
import { columnsAttendanceDat, rowsAttendanceData } from "@/utils/DummyData";
import React, { useState } from "react";

const EvaluasTutor: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tutor</h1>
      <div className="flex">
        <div className="flex-1 w-64 ...">
          <h1 className="text-2xl font-bold">Tutor Evaluation</h1>
        </div>
        <div className="flex-1 w-32 ...">
          <SearchInput />
        </div>
      </div>
      <div className="flex space-x-4 mb-4 mt-3">
        <DateRangePicker />
        <Dropdown options={["Profiling", "Lainnya"]} />
        <Dropdown options={["All Status"]} />
      </div>
      {/* <CustomTable columns={columnsAttendanceDat} rows={rowsAttendanceData}/> */}
    
      
      <MentorEvaluation 
        imageSrc="/icons/evaluation.png"
        heading="No Tutor Evaluation Have Been Recorded"
        subheading="Are you sure you want to accept this?"
        buttonText="Input Tutor Evaluation"
      />
     </div>
     
      // <Table onEdit={handleOpenModal} />
      // <CustomModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />

  );
};

export default EvaluasTutor;
