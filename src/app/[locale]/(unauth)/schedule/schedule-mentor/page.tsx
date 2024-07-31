"use client";
import { useModal } from "@/app/ModalContext";
import CustomTable from "@/components/Custom/CustomTable";
import DatePicker from "@/components/Custom/DatePicker";
import Dropdown from "@/components/Custom/Dropdown";
import MentorEvaluation from "@/components/Custom/MentorEvaluation";
import SearchInput from "@/components/Custom/SearchInput";
import RequestScheduleDetailsPage from "@/components/DetailPages/RequestScheduleDetailsPage";
import { DocumentCategoryEnum, FORMMODE } from "@/utils/Constants";
import { columnsScheduleMentor, rowsScheduleMentor } from "@/utils/DummyData";
import { useState } from "react";

const ScheduleMentor: React.FC = () => {
  const { showModal } = useModal();
  const [activeTab, setActiveTab] = useState("mentor"); // Default active tab
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
              Schedule Mentor
            </h1>
          </div>

          <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 border-stroke bg-transparent whitespace-nowrap dark:border-gray-700">
            {/* Mentor Tab */}
            <button
              onClick={() => handleTabClick("mentor")}
              className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center bg-transparent sm:text-base whitespace-nowrap focus:outline-none ${
                activeTab === "mentor"
                  ? "text-blue-600 border-b-2 border-blue-500 dark:border-blue-400 dark:text-blue-300"
                  : "text-gray-700 border-b-2 border-transparent dark:text-white hover:border-gray-400"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 512 512"
                fill={activeTab === "mentor" ? "currentColor" : "none"}
              >
                <path
                  fill="currentColor"
                  d="M120.998 40.998v37.943C136.22 89.471 146 109.278 146 131.001c0 13.71-3.901 26.65-10.598 36.985c3.465 1.35 7.106 2.85 10.15 4.172l122.352-22.783l5.918 54.842l-111.748 23.219c-.862 16.261-2.45 32.262-5.289 51.566h336.217V40.998zM96 88.998c-16.595 0-32.002 17.747-32.002 42.004S79.405 173.004 96 173.004s32.002-17.745 32.002-42.002S112.595 88.998 96 88.998m156.096 81.629l-108.592 20.22c-14.24-5.602-4.956-3.035-21.469-8.517c-7.476 5.469-16.33 8.672-26.035 8.672c-8.6 0-16.53-2.523-23.428-6.9c-8.59 3.564-17.655 8.09-25.736 12.654c-12.992 7.338-23.722 13.211-27.838 16.033v130.213h20.004V232h17.996v263.002h30.004V326h17.996v169.002h26.004v-171.84l.154-.824c9.514-50.64 12.588-77.384 13.461-109.656l109.56-22.766zm-98.153 126.375c-.952 5.682-1.991 11.64-3.146 17.996H478v-17.996zM208 344.998c-16.595 0-32.002 17.747-32.002 42.004c0 18.198 8.67 32.73 20.01 38.855c3.599-1.662 7.482-2.706 11.68-2.851c4.633-.16 8.98.767 13.052 2.42c10.968-6.352 19.262-20.63 19.262-38.424c0-24.257-15.407-42.004-32.002-42.004m112 0c-16.595 0-32.002 17.747-32.002 42.004c0 18.198 8.67 32.73 20.01 38.855c3.599-1.662 7.482-2.706 11.68-2.851c4.633-.16 8.98.767 13.052 2.42c10.968-6.352 19.262-20.63 19.262-38.424c0-24.257-15.407-42.004-32.002-42.004m112 0c-16.595 0-32.002 17.747-32.002 42.004c0 18.198 8.67 32.73 20.01 38.855c3.599-1.662 7.482-2.706 11.68-2.851c4.633-.16 8.98.767 13.052 2.42c10.968-6.352 19.262-20.63 19.262-38.424c0-24.257-15.407-42.004-32.002-42.004m-223.688 95.996c-3.844.133-8.907 2.93-14.3 8.785s-10.696 14.25-15.125 22.76c-4.226 8.12-7.609 16.16-10.06 22.463h85.339c-3.04-6.436-7.138-14.549-12.133-22.711c-5.298-8.658-11.511-17.138-17.668-22.957s-11.8-8.487-16.053-8.34m112 0c-3.844.133-8.907 2.93-14.3 8.785s-10.696 14.25-15.125 22.76c-4.226 8.12-7.609 16.16-10.06 22.463h85.339c-3.04-6.436-7.138-14.549-12.133-22.711c-5.298-8.658-11.511-17.138-17.668-22.957s-11.8-8.487-16.052-8.34zm112 0c-3.844.133-8.907 2.93-14.3 8.785s-10.696 14.25-15.125 22.76c-4.226 8.12-7.609 16.16-10.06 22.463h85.339c-3.04-6.436-7.138-14.549-12.133-22.711c-5.298-8.658-11.511-17.138-17.668-22.957s-11.8-8.487-16.052-8.34z"
                />
              </svg>
              <span className="mx-1">Mentor</span>
            </button>

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
          </div>

          <div className="p-4 mt-5">
            {/* <h1 className="text-2xl font-bold mb-4">Mentor</h1> */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              {/* flex-1 for equal width distribution, min-w-0 to prevent overflow */}
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold truncate heading-font-weight-color">
                  Schedule Mentor
                </h1>
              </div>

              {(activeTab === "tutor"
                ? rowsScheduleMentor.length > 0
                : rowsScheduleMentor.length > 0) && (
                <>
                  {/* flex-1 for equal width, but with max-width to control size on larger screens */}
                  <div className="flex-1 max-w-sm min-w-0 ml-10">
                    <SearchInput />
                  </div>

                  {/* flex-1 for equal width, button container flex to center button horizontally */}
                  {/* <div className="flex-1 min-w-0 flex justify-center">
                    <button
                      className="px-8 py-2.5 viewlist-button-class text-white flex items-center rounded btn-open-modal"
                      onClick={
                        activeTab === "tutor"
                          ? () => showModal("addTutor")
                          : () => showModal("addMetor")
                      }
                    >
                      <span className="mr-2">
                        {activeTab === "tutor" ? "View: List" : "View: List"}
                      </span>
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
                          d="M4 6h16M4 12h8m-8 6h16"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex-1 min-w-0 flex justify-center">
                    <button
                      className="px-7 py-2.5 bg-gray-800 text-white flex items-center rounded btn-open-modal"
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
                          ? "Add Schedule"
                          : "Add Schedule"}
                      </span>
                    </button>
                  </div> */}
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
              ? rowsScheduleMentor.length > 0
              : rowsScheduleMentor.length > 0
          ) ? (
            <>
              <CustomTable
                columns={
                  activeTab === "tutor"
                    ? columnsScheduleMentor
                    : columnsScheduleMentor
                }
                rows={
                  activeTab === "tutor"
                    ? rowsScheduleMentor
                    : rowsScheduleMentor
                }
                tableType={
                  activeTab === "tutor"
                    ? DocumentCategoryEnum.ScheduleMentor
                    : DocumentCategoryEnum.ScheduleMentor
                }
                onViewClick={handleViewClick}
              />
            </>
          ) : (
            <MentorEvaluation
              imageSrc="/assets/mentoring.png"
              heading={"No Schedule yet"}
              subheading="Are you sure you want to accept this"
              buttonText={"See Request"}
              handleOnClick={
                activeTab === "tutor"
                  ? () => showModal("addTutor")
                  : () => showModal("addMetor")
              }
            />
          )}
        </>
      )}
    </>
  );
};

export default ScheduleMentor;
