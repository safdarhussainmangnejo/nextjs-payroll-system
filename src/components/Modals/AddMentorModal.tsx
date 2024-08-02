import { useModal } from "@/app/ModalContext";
import React from "react";
import Dropdown from "../Custom/Dropdown";

const AddMentorModal = () => {
  const { closeModal, currentModal } = useModal();
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50  z-40"></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full max-w-md mx-auto">
          {/* Modal content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* Modal header */}
            <div className="flex items-start justify-between p-5 ">
              <h3 className="text-2xl font-semibold">{currentModal === 'addTutor' ? 'Add Tutor Class' : 'Add Mentor Class'}</h3>
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
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  {currentModal === 'addTutor' ? 'Class' : 'Kode Kelas'}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={currentModal === 'addTutor' ? "Write Down Class Name" : "Write Down Kode Kelas" }
                  className="mt-1 block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>

              {currentModal === 'addMetor' &&
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Class Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Write Down Class Name"
                  className="mt-1 block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
               }

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Period
                </label>
                <Dropdown options={["All Types", "Profiling", "Lainnya"]} />
              </div>

              {currentModal === 'addMetor' &&
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Write Down Service"
                  className="mt-1 block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
               }

              <div className="flex space-x-4">
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

export default AddMentorModal;
