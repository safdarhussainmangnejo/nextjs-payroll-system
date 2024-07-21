"use client";
import CustomTable from "@/components/Custom/CustomTable";
import DateRangePicker from "@/components/Custom/DateRangePicker";
import Dropdown from "@/components/Custom/Dropdown";
import SearchInput from "@/components/Custom/SearchInput";
import { columnsAttendanceDat, rowsAttendanceData } from "@/utils/DummyData";
import React, { useState } from "react";

const EvaluasMetor: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mentor</h1>
      <div className="flex">
        <div className="flex-1 w-32 ...">
          <h1 className="text-2xl font-bold">Evaluation</h1>
        </div>
        <div className="flex-1 w-16 ...">
          <SearchInput />
        </div>
        <div className="flex-1 w-16 ...">
        <button className="mt-2 px-4 py-2 bg-gray-800 text-white flex items-center rounded">
        <img width="25" height="25" src="/icons/upload.jpg" alt="file-upload"/>
        <span className='ml-2'>Add Evaluation</span>
      </button>
        </div>
      </div> */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Mentor</h1>
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* flex-1 for equal width distribution, min-w-0 to prevent overflow */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold truncate">Evaluation</h1>
          </div>

          {/* flex-1 for equal width, but with max-width to control size on larger screens */}
          <div className="flex-1 max-w-sm min-w-0 ml-10">
            <SearchInput />
          </div>

          {/* flex-1 for equal width, button container flex to center button horizontally */}
          <div className="flex-1 min-w-0 flex justify-center">
            <button className="px-20 py-2 bg-gray-800 text-white flex items-center rounded">
              <img
                width="15"
                height="15"
                src="/icons/upload.jpg"
                alt="file-upload"
              />
              <span className="ml-2">Add Evaluation</span>
            </button>
          </div>
        </div>

        <div className="flex space-x-4 mb-4 mt-3">
          <DateRangePicker />
          <Dropdown options={["Profiling", "Lainnya"]} />
          <Dropdown options={["All Status"]} />
        </div>
      </div>
      <CustomTable columns={columnsAttendanceDat} rows={rowsAttendanceData} />
    </>
    // <MentorEvaluation
    //   imageSrc="/icons/evaluation.png"
    //   heading="No Mentor Evaluation Have Been Recorded"
    //   subheading="Are you sure you want to accept this?"
    //   buttonText="Input Mentor Evaluation"
    // />

    // <Table onEdit={handleOpenModal} />
    // <CustomModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
  );
};

export default EvaluasMetor;
