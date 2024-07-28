"use client";
import { useModal } from "@/app/ModalContext";
import CustomTable from "@/components/Custom/CustomTable";
import DatePicker from "@/components/Custom/DatePicker";
import Dropdown from "@/components/Custom/Dropdown";
import SearchInput from "@/components/Custom/SearchInput";
import { DocumentCategoryEnum } from "@/utils/Constants";
import { columnsStudentAccount, rowsStudentAccount } from "@/utils/DummyData";
// import React, { useState } from "react";

const StudentAccount: React.FC = () => {
  // const { openModal } = useModal();
  const { showModal } = useModal();

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
          Setting/Account
        </h1>
      </div>
      <div className="flex ">
        <div className=" flex-1 w-32 p-4 bg-white rounded-lg border-[1.5px] border-stroke bg-transparent border-inherit mb-6 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between">
            <div className="ml-5">
              <h1 className=" font-bold heading-font-weight-color mb-5">
                23
              </h1>
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
              <h1 className=" font-bold heading-font-weight-color mb-5">
                10
              </h1>
              <p className="subheading-font-weight-color">Active Students</p>
            </div>
            <div className=" ml-4" >
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
              <h1 className=" font-bold heading-font-weight-color mb-5">
                10
              </h1>
              <p className="subheading-font-weight-color">Inactive Students</p>
            </div>
            <div className=" ml-4" >
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
              Student Account
            </h1>
          </div>

          {/* flex-1 for equal width, but with max-width to control size on larger screens */}
          <div className="flex-1 max-w-sm min-w-0 ml-10">
            <SearchInput />
          </div>

          {/* flex-1 for equal width, button container flex to center button horizontally */}
          <div className="flex-1 min-w-0 flex justify-center">
            <button
              className="px-20 py-2.5 bg-gray-800 text-white flex items-center rounded btn-open-modal"
              onClick={() => showModal("addStudentAccount")}
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
              <span className="ml-2">Add Account</span>
            </button>
          </div>
        </div>

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
      </div>
      <CustomTable
        columns={columnsStudentAccount}
        rows={rowsStudentAccount}
        tableType={DocumentCategoryEnum.StudentAccount}
      />
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

export default StudentAccount;
