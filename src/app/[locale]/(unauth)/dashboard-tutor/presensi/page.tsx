"use client";
import CustomTable from "@/components/Custom/CustomTable";
import DatePicker from "@/components/Custom/DatePicker";
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
      <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-8 ">
                <h1 className="text-2xl font-bold heading-font-weight-color ">
                Tutor Attendance
                </h1>
              </div>
              <div className="col-span-4">
                <SearchInput />
              </div>
            </div>

        
        {/* display date, and Dropdown */}
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
        <div>
        </div>
      </div>

      {rowsTutorAttendance?.length > 0 ? (
        <CustomTable
          rows={rowsTutorAttendance}
          columns={columnsTutorAttendance}
          tableType={DocumentCategoryEnum.Presensi}
        />
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
