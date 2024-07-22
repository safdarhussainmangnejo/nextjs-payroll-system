"use client";
import CustomTable from "@/components/Custom/CustomTable";
import DateRangePicker from "@/components/Custom/DateRangePicker";
import Dropdown from "@/components/Custom/Dropdown";
import MentorEvaluation from "@/components/Custom/MentorEvaluation";
import SearchInput from "@/components/Custom/SearchInput";
import { DocumentCategoryEnum } from "@/utils/Constants";
import { columnsTutorAttendance, rowsTutorAttendance } from "@/utils/DummyData";
import React from "react";

const Presensi: React.FC = () => {
  
  return (
    <>
    <div className="">
    <h1 className="text-2xl heading-font-weight-color mb-4">Tutor</h1>
    </div>
      <div className="p-4">
        <div className="flex">
          <div className="flex-1 w-64 ...">
            <h1 className="text-2xl heading-font-weight-color">Tutor Attendance</h1>
          </div>
          <div className="flex-1 w-32 ...">
            <SearchInput />
          </div>
        </div>
        <div className="flex space-x-4 mb-4 mt-3">
          <DateRangePicker />
          <Dropdown options={["Profiling", "Lainnya", "Quartal 4"]} />
          <Dropdown options={["All Status"]} />
        </div>
        <div></div>
      </div>
      
      {rowsTutorAttendance?.length > 0 ? (
        <CustomTable rows={rowsTutorAttendance} columns={columnsTutorAttendance} tableType={DocumentCategoryEnum.Presensi } />
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

export default Presensi;
