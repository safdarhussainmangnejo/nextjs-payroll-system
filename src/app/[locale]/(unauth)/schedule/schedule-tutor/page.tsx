"use client";
import { useModal } from "@/app/ModalContext";
import CustomTable from "@/components/Custom/CustomTable";
import DatePicker from "@/components/Custom/DatePicker";
import Dropdown from "@/components/Custom/Dropdown";
import MentorEvaluation from "@/components/Custom/MentorEvaluation";
import SearchInput from "@/components/Custom/SearchInput";
import RequestScheduleDetailsPage from "@/components/DetailPages/RequestScheduleDetailsPage";
import {
  DocumentCategoryEnum,
  FORMMODE,
  ScheduleTutorTabs,
} from "@/utils/Constants";
import {
  columnsScheduleTutorAssessment,
  columnsScheduleTutorClass,
  columnsScheduleTutorMockup,
  rowsScheduleTutorAssessment,
  rowsScheduleTutorClass,
  rowsScheduleTutorMockup,
} from "@/utils/DummyData";
import { useState } from "react";

const ScheduleTutor: React.FC = () => {
  const [activeTab, setActiveTab] = useState("class"); // Default active tab
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [mode, setMode] = useState(FORMMODE.Disabled);
  const { showModal } = useModal();

  const handleViewClick = (row: any) => {
    setMode(FORMMODE.View);
    setSelectedRow(row);
  };

  const goBack = () => {
    setMode(FORMMODE.Disabled);
  };

  const isView = mode === FORMMODE.View;

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <>
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
          <RequestScheduleDetailsPage selectedRow={selectedRow} />
        </div>
      ) : (
        <>
          <div>
            <h1 className="text-2xl font-bold heading-font-weight-color mb-4">
              Schedule Tutor
            </h1>
          </div>

          <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 border-stroke bg-transparent whitespace-nowrap dark:border-gray-700">
            {/* Class Tab */}
            <button
              onClick={() => handleTabClick("class")}
              className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center bg-transparent sm:text-base whitespace-nowrap focus:outline-none ${
                activeTab === "class"
                  ? "text-blue-600 border-b-2 border-blue-500 dark:border-blue-400 dark:text-blue-300"
                  : "text-gray-700 border-b-2 border-transparent dark:text-white hover:border-gray-400"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
                fill={activeTab === "class" ? "currentColor" : "none"}
              >
                <path
                  fill="currentColor"
                  d="M23 2H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 18h-2v-1h-5v1H2V4h20zM10.29 9.71A1.71 1.71 0 0 1 12 8c.95 0 1.71.77 1.71 1.71c0 .95-.76 1.72-1.71 1.72s-1.71-.77-1.71-1.72m-4.58 1.58c0-.71.58-1.29 1.29-1.29a1.29 1.29 0 0 1 1.29 1.29c0 .71-.58 1.28-1.29 1.28S5.71 12 5.71 11.29m10 0A1.29 1.29 0 0 1 17 10a1.29 1.29 0 0 1 1.29 1.29c0 .71-.58 1.28-1.29 1.28s-1.29-.57-1.29-1.28M20 15.14V16H4v-.86c0-.94 1.55-1.71 3-1.71c.55 0 1.11.11 1.6.3c.75-.69 2.1-1.16 3.4-1.16s2.65.47 3.4 1.16c.49-.19 1.05-.3 1.6-.3c1.45 0 3 .77 3 1.71"
                />
              </svg>
              <span className="mx-1">Class</span>
            </button>

            {/* Mockup Tab */}
            <button
              onClick={() => handleTabClick("mockup")}
              className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center bg-transparent sm:text-base whitespace-nowrap focus:outline-none ${
                activeTab === "mockup"
                  ? "text-blue-600 border-b-2 border-blue-500 dark:border-blue-400 dark:text-blue-300"
                  : "text-gray-700 border-b-2 border-transparent dark:text-white hover:border-gray-400"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
                fill={activeTab === "mockup" ? "currentColor" : "none"}
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4M2 6h4m-4 4h4m-4 4h4m-4 4h4" />
                  <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                </g>
              </svg>
              <span className="mx-1">Mockup</span>
            </button>

            {/* Assessment Tab */}
            <button
              onClick={() => handleTabClick("assessment")}
              className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center bg-transparent sm:text-base whitespace-nowrap focus:outline-none ${
                activeTab === "assessment"
                  ? "text-blue-600 border-b-2 border-blue-500 dark:border-blue-400 dark:text-blue-300"
                  : "text-gray-700 border-b-2 border-transparent dark:text-white hover:border-gray-400"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 48 48"
                fill={activeTab === "assessment" ? "currentColor" : "none"}
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                >
                  <rect width="40" height="32" x="4" y="8" rx="2" />
                  <path fill="currentColor" d="M32 25v7m-8-16v16m-8-12v12" />
                </g>
              </svg>
              <span className="mx-1">Assessment</span>
            </button>
          </div>

          <div className="p-4 mt-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              {/* Heading on the left side */}
              <div className="flex items-center flex-1 min-w-0">
                <h1 className="text-2xl font-bold truncate heading-font-weight-color">
                  {activeTab === "class"
                    ? "Class"
                    : activeTab === "mockup"
                      ? "Mockup"
                      : "Assessment"}
                </h1>
              </div>

              {/* Right-aligned components */}
              <div className="flex items-center space-x-4">
                {activeTab === ScheduleTutorTabs.Mockup && (
                  <button
                    className="px-7 py-2.5 bg-gray-800 text-white flex items-center rounded btn-open-modal"
                    onClick={() => showModal("addMockupSchedule")}
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
                      {activeTab === ScheduleTutorTabs.Mockup
                        ? "Add Schedule"
                        : "Add Schedule"}
                    </span>
                  </button>
                )}
                <div className="flex-grow min-w-0 max-w-lg">
                  <SearchInput />
                </div>
              </div>
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
            activeTab === "class"
              ? rowsScheduleTutorClass.length > 0
              : rowsScheduleTutorClass.length > 0
          ) ? (
            <>
              <CustomTable
                columns={
                  activeTab === "class"
                    ? columnsScheduleTutorClass
                    : activeTab === "mockup"
                      ? columnsScheduleTutorMockup
                      : columnsScheduleTutorAssessment
                }
                rows={
                  activeTab === "class"
                    ? rowsScheduleTutorClass
                    : activeTab === "mockup"
                      ? rowsScheduleTutorMockup
                      : rowsScheduleTutorAssessment
                }
                tableType={DocumentCategoryEnum.ScheduleTutor}
                onViewClick={handleViewClick}
              />
            </>
          ) : (
            <MentorEvaluation
              imageSrc="/assets/mentoring.png"
              heading={"No Schedule yet"}
              subheading="Are you sure you want to accept this"
              buttonText={"See Request"}
              handleOnClick={() => console.log("No Click Funtion")}
            />
          )}
        </>
      )}
    </>
  );
};

export default ScheduleTutor;
