import React, { useState, type FC } from "react";
import { useModal } from "../../app/ModalContext";

// Define the types for the form state
interface FormData {
  mentorNumber: string;
  name: string;
  education: string;
  studyField: string;
  handledField: string;
  fieldsHaveHanlded: string;
  scholarshipAwardee: string;
}

// interface CustomModalProps {
//   isOpen: boolean;
//   onRequestClose: () => void;
// }

const InputDatabaseTutorMentorModal: FC = (
  {
    // isOpen,
    // onRequestClose,
  }
) => {
  const { closeModal } = useModal();
  const [formData, setFormData] = useState<FormData>({
    mentorNumber: '',
  name: '',
  education: '',
  scholarshipAwardee: '',
  studyField: '',
  handledField: '',
  fieldsHaveHanlded: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("formData: ", formData)

    try {
      const response = await fetch("/api/saveEvaluation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Data saved successfully");
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("Form Data Submitted:", formData);
  // };

  // const handleCancel = () => {
  //   setIsOpen(false);
  // };

  // const handleOpenModal = () => {
  //   setIsOpen(true);
  // };

  return (
    <div className="relative">
      {/* {isOpen && ( */}

      <div className="fixed inset-0 z-50 flex">
        {/* Background with opacity */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={closeModal}
        ></div>

        {/* Modal content positioned on the right */}
        <div className=" flex justify-end h-full fixed inset-0 items-start">
          <form
            className="w-4/12 p-5 overflow-auto bg-white shadow-xl h-full"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl heading-font-weight-color leading-8 max-md:max-w-full">
              Input Database Tutor/Mentor
            </h2>

            <div className="mb-4 mt-3 relative">
              <label
                htmlFor="mentorNumber"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Mentor Number <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <select
                  id="mentorNumber"
                  name="mentorNumber"
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.mentorNumber}
                  onChange={handleInputChange}
                  required
                >
                  <option disabled value="">Select Mentor Number</option>
                  <option value="class1">1</option>
                  <option value="class2">2</option>
                </select>
                <div className="absolute  right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="fill-current h-4 w-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.707 7.293a1 1 0 0 1 1.414 0L10 10.172l2.879-2.879a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </div>
              </div>
            </div>


            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Write Down Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4 mt-3 relative">
              <label
                htmlFor="education"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Education <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <select
                  id="education"
                  name="education"
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                >
                  <option disabled value="">Select Education Level</option>
                  <option value="class1">Level 1</option>
                  <option value="class2">Level 2</option>
                </select>
                <div className="absolute  right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="fill-current h-4 w-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.707 7.293a1 1 0 0 1 1.414 0L10 10.172l2.879-2.879a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="scholarshipAwardee"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Scholarship Awardee <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="scholarshipAwardee"
                name="scholarshipAwardee"
                placeholder="Write Down Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.scholarshipAwardee}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4 mt-3 relative">
              <label
                htmlFor="studyField"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Study Field <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <select
                  id="studyField"
                  name="studyField"
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.studyField}
                  onChange={handleInputChange}
                  required
                >
                  <option disabled value="">Select Study Field</option>
                  <option value="class1">Field 1</option>
                  <option value="class2">Field 2</option>
                </select>
                <div className="absolute  right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="fill-current h-4 w-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.707 7.293a1 1 0 0 1 1.414 0L10 10.172l2.879-2.879a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="handledField"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Handled Field <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="handledField"
                name="handledField"
                placeholder="Write Down Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.handledField}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="fieldsHaveHanlded"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Fields that Have Been Hanlded<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fieldsHaveHanlded"
                name="fieldsHaveHanlded"
                placeholder="Write Down Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.fieldsHaveHanlded}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={closeModal}
                className=" cancel-button-class bg-white w-48 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white bg-gray-800 w-48 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default InputDatabaseTutorMentorModal;
