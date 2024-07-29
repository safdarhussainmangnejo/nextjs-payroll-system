"use client";
import { useModal } from "@/app/ModalContext";
import CustomTable from "@/components/Custom/CustomTable";
import DatePicker from "@/components/Custom/DatePicker";
import { DocumentRowsEnum } from "@/utils/Constants";
import {
  columnsRequestScheduleTimeList,
  rowsRequestScheduleTimeList,
} from "@/utils/DummyData";
import UserProfile from "../UserProfile";
// import React, { useState } from "react";

interface EvaluasiDetailProps {
  selectedRow: {
    period: string;
    score: number;
    tutor: string;
    pros: string;
    cons: string;
    input: string;
    email: string;
    name: string;
  };
}

const RequestScheduleDetailsPage: React.FC<EvaluasiDetailProps> = ({
  selectedRow,
}: EvaluasiDetailProps) => {
  const { showModal } = useModal();

  const StatCard = ({ number, label }: any) => (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white">
      <div>
        <div className="text-2xl font-semibold">{number}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
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
  );

  const stats = [
    { number: 12, label: "Active Mentor" },
    { number: 10, label: "Inactive Mentor" },
  ];

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <>
      <UserProfile
        {...selectedRow}
        name={"Pristia Candra"}
        role={"Mentor"}
        joinDate={"23 Feb 2023 - Present"}
        imageUrl={"/assets/user-02.png"}
      />


      <div className="flex mt-5">
        <div className=" flex-1 w-32 p-4 bg-white rounded-lg border-[1.5px] border-stroke bg-transparent border-inherit mb-6 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between">
            <div className="ml-5">
              <h1 className=" font-bold heading-font-weight-color mb-5">
                Total Jam
              </h1>
              <p className="subheading-font-weight-color">10 hours</p>
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
                Engagement
              </h1>
              <p className="subheading-font-weight-color">3 Days</p>
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

      <div className="p-4 mt-5">
        <div className="flex flex-wrap justify-between gap-8">
          {/* flex-1 for equal width distribution, min-w-0 to prevent overflow */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold truncate heading-font-weight-color">
              Request Time List
            </h1>
          </div>

          <div className="flex-1 min-w-0 flex items-right">
            <button
              className="px-7 py-2.5 bg-gray-800 text-white flex items-center rounded btn-open-modal"
              onClick={() => showModal("addTutor")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
                />
              </svg>
              <span className="ml-2">Add Schedule</span>
            </button>
          </div>
        </div>

        <div className="flex justify-between space-x-2 mb-4 mt-3">
          <div className="flex-1">
            <DatePicker />
          </div>
        </div>
      </div>

      {rowsRequestScheduleTimeList?.length > 0 && (
        <CustomTable
          columns={columnsRequestScheduleTimeList}
          rows={rowsRequestScheduleTimeList}
          tableType={DocumentRowsEnum.RequestScheduleTimeList}
        />
      )}
    </>
  );
};

export default RequestScheduleDetailsPage;
