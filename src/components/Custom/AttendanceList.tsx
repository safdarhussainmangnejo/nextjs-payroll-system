'use client'
import React, { useState } from "react";
import DateRangePicker from "./DateRangePicker";
import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";
import Table from "./UserTable";
import CustomModal from "./CustomModal";
import MentorEvaluation from "./MentorEvaluation";

const AttendanceList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mentor</h1>
      <div className="flex">
        <div className="flex-1 w-64 ...">
          <h1 className="text-2xl font-bold">Mentor Evaluation</h1>
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

      <div>
      <MentorEvaluation 
        imageSrc="/icons/evaluation.png"
        heading="No Mentor Evaluation Have Been Recorded"
        subheading="Are you sure you want to accept this?"
        buttonText="Input Mentor Evaluation"
      />
    </div>
      {/* <Table onEdit={handleOpenModal} />
      <CustomModal isOpen={isModalOpen} onRequestClose={handleCloseModal} /> */}
    </div>
  );
};

export default AttendanceList;
