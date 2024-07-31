import { useModal } from "@/app/ModalContext";
import React from "react";
import Dropdown from "../Custom/Dropdown";

const RequestScheduleMentorModal = () => {
  const { closeModal } = useModal();
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50  z-40"></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full max-w-md mx-auto">
          {/* Modal content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* Modal header */}
            <div className="flex flex-col items-center justify-center mt-5 p-5 bg-gray-100">
              <img
                src="/icons/correct.png"
                alt="correct-icon"
                className="w-8 h-8 cursor-pointer mb-5"
              />
              <h1 className=" text-xl font-bold -mb-5">
                Are you sure to add schedule
              </h1>
              <p className="subheading-font-weight-color mt-10">
                According to Request orm Tutor
              </p>
            </div>

            {/* <div className="flex items-center justify-center p-5 ">
              <div>
                <img
                  src="/icons/correct.png"
                  alt="correct-icon"
                  className="w-8 h-8 cursor-pointer"
                />
              </div>

              <h3 className="text-2xl font-semibold">
                {currentModal === "addTutor"
                  ? "Add Tutor Class"
                  : "Add Mentor Class"}
              </h3>
            </div> */}

            <div className="p-4 block max-w-md mx-auto bg-white rounded-lg border-[1.5px] border-stroke bg-transparent border-inherit mb-6 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">Request Schedule</h2>
                
              </div>
              <hr className="my-4 border-[1.5px] border-stroke bg-transparent dark:bg-gray-700" />

              <div className="flex">
                <div className="flex-1 w-64">
                  <span className="text-gray-500">Tutor</span>
                </div>
                <div className="flex-1 w-32">
                  <span className="block text-black font-semibold dark:text-white">
                    Nama User
                  </span>
                </div>
              </div>

              <div className="flex mt-3">
                <div className="flex-1 w-64">
                  <span className="text-gray-500">Date</span>
                </div>
                <div className="flex-1 w-32">
                  <span className="block text-black font-semibold dark:text-white">
                    23 Oktober 2023
                  </span>
                </div>
              </div>

              <div className="flex mt-3">
                <div className="flex-1 w-64">
                  <span className="text-gray-500">Time</span>
                </div>
                <div className="flex-1 w-32">
                  <span className="block text-black font-semibold dark:text-white">
                    14:00 to 15:00 WIB
                  </span>
                </div>
              </div>

            </div>

            {/* Modal body */}
            <form className="relative flex-auto p-6">
              

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Class
                </label>
                <Dropdown options={["Class 1", "Class 2", "Class 3"]} />
              </div>


              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-900 bg-white w-48 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white bg-gray-800 w-48 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestScheduleMentorModal;
