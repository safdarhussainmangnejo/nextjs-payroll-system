"use client";
import { useModal } from "@/app/ModalContext";
import CustomTable from "@/components/Custom/CustomTable";
import DatePicker from "@/components/Custom/DatePicker";
import Dropdown from "@/components/Custom/Dropdown";
import MentorEvaluation from "@/components/Custom/MentorEvaluation";
import SearchInput from "@/components/Custom/SearchInput";
import { DocumentCategoryEnum, DocumentRowsEnum } from "@/utils/Constants";
import { columnsDatabaseFee, columnsDatabaseMentor, columnsDatabaseStudent, columnsStudentAccount, rowsDatabaseFee, rowsDatabaseMentor, rowsDatabaseStudent, rowsStudentAccount } from "@/utils/DummyData";
import { useState } from "react";
// import React, { useState } from "react";

const Database: React.FC = () => {
  // const { openModal } = useModal();
  const { showModal } = useModal();
  const [activeTab, setActiveTab] = useState("student"); // Default active tab

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

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
        <h1 className="text-2xl font-bold heading-font-weight-color mb-4">
          Setting/Database
        </h1>
      </div>

      <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 border-stroke bg-transparent whitespace-nowrap dark:border-gray-700">
        {/* Student Tab */}
        <button
          onClick={() => handleTabClick("student")}
          className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center bg-transparent sm:text-base whitespace-nowrap focus:outline-none ${
            activeTab === "student"
              ? "text-blue-600 border-b-2 border-blue-500 dark:border-blue-400 dark:text-blue-300"
              : "text-gray-700 border-b-2 border-transparent dark:text-white hover:border-gray-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
            fill={activeTab === "student" ? "currentColor" : "none"}
          >
            <path
              fill="currentColor"
              d="M20 17a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.46c.35.61.54 1.3.54 2h10v11h-9v2m4-10v2H9v13H7v-6H5v6H3v-8H1.5V9a2 2 0 0 1 2-2zM8 4a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2"
            />
          </svg>
          <span className="mx-1">Student</span>
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

        {/* Fee Tab */}
        <button
          onClick={() => handleTabClick("fee")}
          className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center bg-transparent sm:text-base whitespace-nowrap focus:outline-none ${
            activeTab === "fee"
              ? "text-blue-600 border-b-2 border-blue-500 dark:border-blue-400 dark:text-blue-300"
              : "text-gray-700 border-b-2 border-transparent dark:text-white hover:border-gray-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.1rem"
            height="1.1rem"
            viewBox="0 0 14 14"
            fill={activeTab === "fee" ? "currentColor" : "none"}
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M1.5 0A1.5 1.5 0 0 0 0 1.5v6A1.5 1.5 0 0 0 1.5 9h11A1.5 1.5 0 0 0 14 7.5v-6A1.5 1.5 0 0 0 12.5 0zm6.125 1.454a.625.625 0 1 0-1.25 0v.4a1.532 1.532 0 0 0-.15 3.018l1.197.261a.39.39 0 0 1-.084.773h-.676a.39.39 0 0 1-.369-.26a.625.625 0 0 0-1.178.416c.194.55.673.965 1.26 1.069v.415a.625.625 0 1 0 1.25 0V7.13a1.641 1.641 0 0 0 .064-3.219L6.492 3.65a.281.281 0 0 1 .06-.556h.786a.388.388 0 0 1 .369.26a.625.625 0 1 0 1.178-.416a1.64 1.64 0 0 0-1.26-1.069zM2.75 3.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m8.5 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M4.5 9.875c.345 0 .625.28.625.625v2a.625.625 0 1 1-1.25 0v-2c0-.345.28-.625.625-.625m5.625.625a.625.625 0 1 0-1.25 0v2a.625.625 0 1 0 1.25 0zm-2.5.75a.625.625 0 1 0-1.25 0v2a.625.625 0 1 0 1.25 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="mx-1">Fee</span>
        </button>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-bold truncate heading-font-weight-color">
          {activeTab === "student"
            ? "Student"
            : activeTab === "mentor"
              ? "Mentor"
              : "Database Fee"}
        </h1>
      </div>
      <div className="flex mt-5">
        <div className=" flex-1 w-32 p-4 bg-white rounded-lg border-[1.5px] border-stroke bg-transparent border-inherit mb-6 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between">
            <div className="ml-5">
              <h1 className=" font-bold heading-font-weight-color mb-5">23</h1>
              <p className="subheading-font-weight-color">Total Students</p>
            </div>
            <div className=" ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="1.3"
                    opacity="0.3"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.3"
                    d="M12 17v-6"
                  />
                  <circle
                    cx="1"
                    cy="1"
                    r="1"
                    fill="currentColor"
                    transform="matrix(1 0 0 -1 11 9)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex-1 ml-5 p-4 bg-white rounded-lg border-[1.5px] border-stroke bg-transparent border-inherit mb-6 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between ">
            <div className="ml-5">
              <h1 className=" font-bold heading-font-weight-color mb-5">10</h1>
              <p className="subheading-font-weight-color">Active Students</p>
            </div>
            <div className=" ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="1.3"
                    opacity="0.3"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.3"
                    d="M12 17v-6"
                  />
                  <circle
                    cx="1"
                    cy="1"
                    r="1"
                    fill="currentColor"
                    transform="matrix(1 0 0 -1 11 9)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex-1 ml-5 p-4 bg-white rounded-lg border-[1.5px] border-stroke bg-transparent border-inherit mb-6 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between ">
            <div className="ml-5">
              <h1 className=" font-bold heading-font-weight-color mb-5">10</h1>
              <p className="subheading-font-weight-color">Inactive Students</p>
            </div>
            <div className=" ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="1.3"
                    opacity="0.3"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.3"
                    d="M12 17v-6"
                  />
                  <circle
                    cx="1"
                    cy="1"
                    r="1"
                    fill="currentColor"
                    transform="matrix(1 0 0 -1 11 9)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        {/* <h1 className="text-2xl font-bold mb-4">Mentor</h1> */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* flex-1 for equal width distribution, min-w-0 to prevent overflow */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold truncate heading-font-weight-color">
              Database
            </h1>
          </div>

          {/* flex-1 for equal width, but with max-width to control size on larger screens */}
          <div className="flex-1 max-w-sm min-w-0 ml-10">
            <SearchInput />
          </div>

          {/* flex-1 for equal width, button container flex to center button horizontally */}
          <div className="flex-1 min-w-0 flex justify-center">
            <button
              className="px-18 py-2.5 bg-gray-800 text-white flex items-center rounded btn-open-modal"
              onClick={activeTab === "fee" ? () => showModal("addFee") : activeTab === "mentor" ? () => showModal('addDatabaseTutorMentor') : () => showModal('addDatabaseTutorMentor')}
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
                {activeTab === "student"
                  ? "Add Student"
                  : activeTab === "mentor"
                    ? "Add Tutor/Mentor"
                    : "Add Fee"}
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-between space-x-2 mb-4 mt-3">
          <div className="flex-1">
            <DatePicker />
          </div>
          <div className="flex-1">
            <Dropdown options={["All Types","Profiling", "Lainnya"]} />
          </div>
          <div className="flex-1">
            <Dropdown options={["All Status"]} />
          </div>
        </div>
      </div>

      {(
        activeTab === "student"
          ? rowsDatabaseStudent?.length > 0 
          : activeTab === "mentor" ? rowsDatabaseMentor?.length > 0 : rowsDatabaseFee?.length > 0
      ) ? (
        <CustomTable
          columns={activeTab === "student" ? columnsDatabaseStudent : activeTab === "mentor" ? columnsDatabaseMentor : columnsDatabaseFee }
          rows={activeTab === "student" ? rowsDatabaseStudent : activeTab === "mentor" ? rowsDatabaseMentor : rowsDatabaseFee}
          tableType={
            activeTab === "student"
              ? DocumentRowsEnum.DatabaseStudent
              : activeTab === "mentor" ? DocumentRowsEnum.DatabaseMentor : DocumentRowsEnum.DatabaseFee
          }
        />
      ) : (
        <MentorEvaluation
          imageSrc="/assets/attendance.png"
          heading={
            activeTab === "student"
              ? "There is no list of student classes yet"
              : "There is no list of mentor classes yet"
          }
          subheading="Are you sure you want to accept this"
          buttonText={
            activeTab === "student" ? "Add Student" : "Add Mentor Class"
          }
          handleOnClick={
            activeTab === "student"
              ? () => showModal("addTutor")
              : () => showModal("addMetor")
          }
        />
      )}
      {/* {currentModal === 'mentorEvaluation' && <MentorEvaluationModal />} */}

      {/* // <MentorEvaluation
    //   imageSrc="/icons/evaluation.png"
    //   heading="No Mentor Evaluation Have Been Recorded"
    //   subheading="Are you sure you want to accept this?"
    //   buttonText="Input Mentor Evaluation"
    // /> */}
    </>
  );
};

export default Database;
