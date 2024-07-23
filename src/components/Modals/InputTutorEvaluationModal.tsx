import React, { useState, type FC } from "react";
import { useModal } from "../../app/ModalContext";

// Define the types for the form state
interface FormData {
  period: string;
  score: string;
  tutor: string;
  pros: string;
  cons: string;
  masukan: string;
}

// interface CustomModalProps {
//   isOpen: boolean;
//   onRequestClose: () => void;
// }

const InputTutorEvaluationModal: FC = ({
  // isOpen,
  // onRequestClose,
}) => {
  const { closeModal } = useModal();
  const [formData, setFormData] = useState<FormData>({
    period: "",
    score: "",
    tutor: "",
    pros: "",
    cons: "",
    masukan: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Implement submit logic here, possibly sending data to an API
  };

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
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeModal}></div>

      {/* Modal content positioned on the right */}
      <div className=" flex justify-end h-full fixed inset-0 items-start">
        <form className="w-4/12 p-5 overflow-auto bg-white shadow-xl h-full" onSubmit={handleSubmit}>
              <h2 className="text-2xl heading-font-weight-color leading-8 max-md:max-w-full">
                Input Tutor Evaluation
              </h2>

              <div className="mb-4 mt-3 relative">
                <label
                  htmlFor="tutor"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Tutor <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center">
                  <select
                    id="tutor"
                    name="tutor"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.tutor}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Tutor</option>
                    <option value="class1">tutor 1</option>
                    <option value="class2">tutor 2</option>
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

              <div className="mb-4 relative">
                <label
                  htmlFor="period"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Period <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center">
                  <select
                    id="period"
                    name="period"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.period}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Participant</option>
                    <option value="class1">Period 1</option>
                    <option value="class2">Period 2</option>
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
                  htmlFor="score"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                 Score <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="score"
                  name="score"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.score}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="pros"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Pros <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="pros"
                  name="pros"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={4}
                  value={formData.pros}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
 
              <div className="mb-6">
                <label
                  htmlFor="cons"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Cons <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="cons"
                  name="cons"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={4}
                  value={formData.cons}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="masukan"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Musakan <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="masukan"
                  name="masukan"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={4}
                  value={formData.masukan}
                  onChange={handleInputChange}
                  required
                ></textarea>
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

export default InputTutorEvaluationModal;
