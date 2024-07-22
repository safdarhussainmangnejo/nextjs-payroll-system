"use client";
import CustomTable from "@/components/Custom/CustomTable";
import DateRangePicker from "@/components/Custom/DateRangePicker";
import Dropdown from "@/components/Custom/Dropdown";
import MentorEvaluation from "@/components/Custom/MentorEvaluation";
import SearchInput from "@/components/Custom/SearchInput";
import EvaluationForm from "@/components/MentorEvaluation/EvaluationForm";
import { DocumentCategoryEnum } from "@/utils/Constants";
import { columnsBonusMentor, rowsBonusMentor } from "@/utils/DummyData";
import React, { useState } from "react";

const BonusMentor: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div className="">
    <h1 className="text-2xl heading-font-weight-color mb-4">Mentor</h1>
    </div>
      <div className="p-4">
        <div className="flex">
          <div className="flex-1 w-64 ...">
            <h1 className="text-2xl heading-font-weight-color">Bonus Mentor</h1>
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
        <div></div>
      </div>
      
      {rowsBonusMentor?.length > 0 ? (
        <CustomTable rows={rowsBonusMentor} columns={columnsBonusMentor} tableType={DocumentCategoryEnum.BonusMentor } />
      ) : (
        <MentorEvaluation
          imageSrc="/assets/bonus.png"
          heading="No Bonus Have Been Recorded"
          subheading="Are you sure you want to accept this?"
        />
      )}
    </>
  );
};

export default BonusMentor;
