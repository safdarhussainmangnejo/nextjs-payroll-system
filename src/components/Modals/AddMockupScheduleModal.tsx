import { useModal } from "@/app/ModalContext";
import React from "react";
import Dropdown from "../Custom/Dropdown";

const AddMockupScheduleModal = () => {
  const { closeModal } = useModal();
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50  z-40"></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full max-w-md mx-auto">
          {/* Modal content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* Modal header */}
            <div className="flex items-start justify-between p-5 ">
              <h3 className="text-2xl font-semibold">Add Mockup Schedule</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={closeModal}
              >
                <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/* Modal body */}
            <form className="relative flex-auto p-6">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Tutor
                </label>
                <Dropdown options={["Tutor 1", "Tutor 2", "Tutor 3"]} />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Mockup Type
                </label>
                <Dropdown
                  options={["Mockup Type 1", "Mockup Type 2", "Mockup Type 3"]}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Student
                </label>
                <Dropdown options={["Student 1", "Student 2", "Student 3"]} />
              </div>

              <div className="flex space-x-4">
                {" "}
                {/* Added flex container */}
                <div className="flex-1">
                  <label
                    htmlFor="student"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Student
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="px-10 py-2 mt-2.5 text-sm leading-6 rounded-xl border border-stroke bg-transparent text-slate-400 max-md:max-w-full"
                    value="2024-02-24"
                  />
                </div>
                <div className="flex-1 mt-5">
                  <input
                    type="time"
                    id="startTime"
                    className="px-11 py-2 mt-2.5 text-sm leading-6 rounded-xl border border-stroke bg-transparent text-slate-400 max-md:max-w-full"
                    value="14:00"
                  />
                </div>
              </div>

              <div className="flex space-x-4 mt-10">
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-900 bg-white w-48 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white bg-gray-800 w-50 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMockupScheduleModal;
