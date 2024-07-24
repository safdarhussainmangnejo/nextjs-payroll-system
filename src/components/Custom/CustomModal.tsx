// components/CustomModal.tsx
import React from "react";
import Modal from "react-modal";
import { FC } from "react";

interface CustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const CustomModal: FC<CustomModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center mt-13 p-4 z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-40"
    >
      <div className="bg-white rounded-lg mt-7 p-6 w-full max-w-md max-h-full overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Others</h1>

        <div className="p-4 block max-w-sm bg-white rounded-lg border-[1.5px] border-stroke bg-transparent border-inherit mb-6 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Other Edit</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <path d="M 36 5.0097656 C 34.205301 5.0097656 32.410791 5.6901377 31.050781 7.0507812 L 8.9160156 29.183594 C 8.4960384 29.603571 8.1884588 30.12585 8.0253906 30.699219 L 5.0585938 41.087891 A 1.50015 1.50015 0 0 0 6.9121094 42.941406 L 17.302734 39.974609 A 1.50015 1.50015 0 0 0 17.304688 39.972656 C 17.874212 39.808939 18.39521 39.50518 18.816406 39.083984 L 40.949219 16.949219 C 43.670344 14.228094 43.670344 9.7719064 40.949219 7.0507812 C 39.589209 5.6901377 37.794699 5.0097656 36 5.0097656 z M 36 7.9921875 C 37.020801 7.9921875 38.040182 8.3855186 38.826172 9.171875 A 1.50015 1.50015 0 0 0 38.828125 9.171875 C 40.403 10.74675 40.403 13.25325 38.828125 14.828125 L 36.888672 16.767578 L 31.232422 11.111328 L 33.171875 9.171875 C 33.957865 8.3855186 34.979199 7.9921875 36 7.9921875 z M 29.111328 13.232422 L 34.767578 18.888672 L 16.693359 36.962891 C 16.634729 37.021121 16.560472 37.065723 16.476562 37.089844 L 8.6835938 39.316406 L 10.910156 31.521484 A 1.50015 1.50015 0 0 0 10.910156 31.519531 C 10.933086 31.438901 10.975086 31.366709 11.037109 31.304688 L 29.111328 13.232422 z"></path>
            </svg>
          </div>
          <hr className="my-4 border-[1.5px] border-stroke bg-transparent dark:bg-gray-700" />

          <div className="flex">
            <div className="flex-1 w-64">
              <span className="text-gray-500">Mentor’s Name</span>
            </div>
            <div className="flex-1 w-32">
              <span className="block text-black dark:text-white">Nama User</span>
            </div>
          </div>

          <div className="flex mt-3">
            <div className="flex-1 w-64">
              <span className="text-gray-500">Date of Filing</span>
            </div>
            <div className="flex-1 w-32">
              <span className="block text-black dark:text-white">23 Oktober 2023</span>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Event Name
            </label>
            <input
              type="text"
              placeholder="Event Name"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Person In Charge
            </label>
            <input
              type="text"
              placeholder="Person In Charge"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              Fee
            </label>
            <input
              type="text"
              placeholder="Fee"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-black dark:text-white">
              End Date
            </label>
            <input
              type="text"
              placeholder="Select End Date"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="text-gray-900 bg-white w-48 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={onRequestClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="text-white bg-gray-800 w-48 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;


// // components/CustomModal.tsx
// import React from "react";
// import Modal from "react-modal";
// import { FC } from "react";
// import "../../styles/global.css";

// interface CustomModalProps {
//   isOpen: boolean;
//   onRequestClose: () => void;
// }

// const CustomModal: FC<CustomModalProps> = ({ isOpen, onRequestClose }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       className="fixed inset-0 flex items-center justify-center p-4"
//       overlayClassName="fixed inset-0 bg-black bg-opacity-50"
//     >
//       <div className="bg-white rounded-lg p-6 w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-4">Profiling</h1>
//         <div className="p-4 block max-w-sm bg-white border border-inherit rounded-lg mb-6 dark:bg-gray-800 dark:border-gray-700">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-xl font-semibold">Edit Profiling</h2>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               x="0px"
//               y="0px"
//               width="30"
//               height="30"
//               viewBox="0 0 48 48"
//             >
//               <path d="M 36 5.0097656 C 34.205301 5.0097656 32.410791 5.6901377 31.050781 7.0507812 L 8.9160156 29.183594 C 8.4960384 29.603571 8.1884588 30.12585 8.0253906 30.699219 L 5.0585938 41.087891 A 1.50015 1.50015 0 0 0 6.9121094 42.941406 L 17.302734 39.974609 A 1.50015 1.50015 0 0 0 17.304688 39.972656 C 17.874212 39.808939 18.39521 39.50518 18.816406 39.083984 L 40.949219 16.949219 C 43.670344 14.228094 43.670344 9.7719064 40.949219 7.0507812 C 39.589209 5.6901377 37.794699 5.0097656 36 5.0097656 z M 36 7.9921875 C 37.020801 7.9921875 38.040182 8.3855186 38.826172 9.171875 A 1.50015 1.50015 0 0 0 38.828125 9.171875 C 40.403 10.74675 40.403 13.25325 38.828125 14.828125 L 36.888672 16.767578 L 31.232422 11.111328 L 33.171875 9.171875 C 33.957865 8.3855186 34.979199 7.9921875 36 7.9921875 z M 29.111328 13.232422 L 34.767578 18.888672 L 16.693359 36.962891 C 16.634729 37.021121 16.560472 37.065723 16.476562 37.089844 L 8.6835938 39.316406 L 10.910156 31.521484 A 1.50015 1.50015 0 0 0 10.910156 31.519531 C 10.933086 31.438901 10.975086 31.366709 11.037109 31.304688 L 29.111328 13.232422 z"></path>
//             </svg>
//           </div>
//           <hr className="my-4 border-1 border-slate-200 dark:bg-gray-700" />
//           <div className="flex">
//             <div className="flex-1 w-64">
//               <span className="text-gray-500">Mentor’s Name</span>
//             </div>
//             <div className="flex-1 w-32">
//               <span className="block text-black dark:text-white">
//                 Nama User
//               </span>
//             </div>
//           </div>
//           <div className="flex mt-3">
//             <div className="flex-1 w-64">
//               <span className="text-gray-500">Date of Filing</span>
//             </div>
//             <div className="flex-1 w-32">
//               <span className="block text-black dark:text-white">
//                 23 Oktober 2023
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col gap-5">
//           <div>
//             <label className="mb-2 block text-sm font-medium text-black dark:text-white">
//               Class Code
//             </label>
//             <input
//               type="text"
//               placeholder="Write Down Class Code"
//               className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//             />
//           </div>
//           <div>
//             <label className="mb-2 block text-sm font-medium text-black dark:text-white">
//               Participant's Name
//             </label>
//             <input
//               type="text"
//               placeholder="Select Participant"
//               className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//             />
//           </div>
//           <div>
//             <label className="mb-2 block text-sm font-medium text-black dark:text-white">
//               End Date
//             </label>
//             <input
//               type="text"
//               placeholder="Select End Date"
//               className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//             />
//           </div>
//         </div>
//         <div className="flex justify-between mt-4">
//           <button
//             type="button"
//             className="text-gray-900 bg-white w-48 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
//             onClick={onRequestClose}
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             className="bg-gray-800 text-white w-48  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default CustomModal;
