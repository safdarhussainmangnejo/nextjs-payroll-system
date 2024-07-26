"use client";
import { useModal } from "@/app/ModalContext";
import CustomTable from "@/components/Custom/CustomTable";
import DatePicker from "@/components/Custom/DatePicker";
import Dropdown from "@/components/Custom/Dropdown";
import MentorEvaluation from "@/components/Custom/MentorEvaluation";
import SearchInput from "@/components/Custom/SearchInput";
import { DocumentCategoryEnum } from "@/utils/Constants";
import {
  columnsAddMentor,
  columnsClassData,
  rowsAddMentor,
  rowsClassData,
} from "@/utils/DummyData";
import { useState } from "react";
// import React, { useState } from "react";

const ClassData: React.FC = () => {
  // const { openModal } = useModal();
  const { showModal, currentModal } = useModal();
  const [activeTab, setActiveTab] = useState("tutor"); // Default active tab

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold heading-font-weight-color mb-4">
          Setting
        </h1>
      </div>

      <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 border-stroke bg-transparent whitespace-nowrap dark:border-gray-700">
        {/* Tutor Tab */}
        <button
          onClick={() => handleTabClick("tutor")}
          className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center bg-transparent sm:text-base whitespace-nowrap focus:outline-none ${
            activeTab === "tutor"
              ? "text-blue-600 border-b-2 border-blue-500 dark:border-blue-400 dark:text-blue-300"
              : "text-gray-700 border-b-2 border-transparent dark:text-white hover:border-gray-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
            fill={activeTab === "tutor" ? "currentColor" : "none"}
          >
            <path
              fill="currentColor"
              d="M20 17a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.46c.35.61.54 1.3.54 2h10v11h-9v2m4-10v2H9v13H7v-6H5v6H3v-8H1.5V9a2 2 0 0 1 2-2zM8 4a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2"
            />
          </svg>
          <span className="mx-1">Tutor</span>
        </button>

        {/* Mentor Tab */}
        <button
          onClick={() => handleTabClick("mentor")}
          className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center bg-transparent sm:text-base whitespace-nowrap focus:outline-none ${
            activeTab === "mentor"
              ? "text-blue-600 border-b-2 border-blue-500 dark:border-blue-400 dark:text-blue-300"
              : "text-gray-700 border-b-2 border-transparent dark:text-white hover:border-gray-400"
          }`}
        >
          <img
            width="18"
            height="18"
            src="https://img.icons8.com/ios-filled/50/classroom.png"
            alt="classroom"
            style={{
              filter: activeTab === "mentor" ? "none" : "grayscale(100%)",
            }}
          />
          <span className="mx-1">Mentor</span>
        </button>
      </div>

      <div className="p-4">
        {/* <h1 className="text-2xl font-bold mb-4">Mentor</h1> */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* flex-1 for equal width distribution, min-w-0 to prevent overflow */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold truncate heading-font-weight-color">
              {activeTab === "tutor" ? "Tutor Class Data" : "Mentor Class Data"}
            </h1>
          </div>

          {(activeTab === "tutor"
            ? rowsClassData.length > 0
            : rowsAddMentor.length > 0) && (
            <>
              {/* flex-1 for equal width, but with max-width to control size on larger screens */}
              <div className="flex-1 max-w-sm min-w-0 ml-10">
                <SearchInput />
              </div>

              {/* flex-1 for equal width, button container flex to center button horizontally */}
              <div className="flex-1 min-w-0 flex justify-center">
                <button
                  className="px-18 py-2.5 bg-gray-800 text-white flex items-center rounded btn-open-modal"
                  onClick={
                    activeTab === "tutor"
                      ? () => showModal("addTutor")
                      : () => showModal("addMetor")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2rem"
                    height="1.2rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 12v6m0 0l3-2m-3 2l-3-2m4-13H8.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V9m-6-6c.286.003.466.014.639.055c.204.05.399.13.578.24c.202.124.375.297.72.643l3.126 3.125c.346.346.518.518.642.72c.11.18.19.374.24.578c.04.173.051.354.054.639M13 3v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h2.802m0 0H19"
                    />
                  </svg>
                  <span className="ml-2">
                    {activeTab === "tutor"
                      ? "Add Tutor Class"
                      : "Add Mentor Class"}
                  </span>
                </button>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-between space-x-2 mb-4 mt-3">
          <div className="flex-1">
            <DatePicker />
          </div>
          <div className="flex-1">
            <Dropdown options={["All Types", "Profiling", "Lainnya"]} />
          </div>
          <div className="flex-1">
            <Dropdown options={["All Status"]} />
          </div>
        </div>
      </div>
      {(
        activeTab === "tutor"
          ? rowsClassData.length > 0
          : rowsAddMentor.length > 0
      ) ? (
        <CustomTable
          columns={activeTab === "tutor" ? columnsClassData : columnsAddMentor}
          rows={activeTab === "tutor" ? rowsClassData : rowsAddMentor}
          tableType={
            activeTab === "tutor"
              ? DocumentCategoryEnum.ClassData
              : DocumentCategoryEnum.AddMetor
          }
        />
      ) : (
        <MentorEvaluation
          imageSrc="/assets/attendance.png"
          heading={
            activeTab === "tutor"
              ? "There is no list of tutor classes yet"
              : "There is no list of mentor classes yet"
          }
          subheading="Are you sure you want to accept this"
          buttonText={
            activeTab === "tutor" ? "Add Tutot Class" : "Add Mentor Class"
          }
          handleOnClick={
            activeTab === "tutor"
              ? () => showModal("addTutor")
              : () => showModal("addMetor")
          }
        />
      )}
    </>
  );
};

export default ClassData;
