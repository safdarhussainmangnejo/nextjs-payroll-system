import { DocumentCategoryEnum } from "@/utils/Constants";
import React, { useState } from "react";

interface TableRowProps {
  data: {
    id: number;
    package: string;
    sessionQuantity: string;
    packageQuantity: string;
    className: string;
    period: string;
    classCode: string;
    classPeriod: string;
    service: string;
    tutor: string;
    mentorProfiling: string;
    packageType: string;
    paymentMethod: string;
    status: string;
    education: string;
    scholarshipAwardee: string;
    studyField: string;
    handledField: string;
    productName: string;
    fee: number;
    name: string;
    email: string;
    to: string;
    from: string;
    total: string;
    date: string;
  };
  tableType?: string;
}

const SessionPackageDataRows: React.FC<TableRowProps> = ({
  data,
  tableType,
}: TableRowProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to update the status in your data
  const updateStatus = (newStatus: string) => {
    // setData((prevData) => ({
    //     ...prevData,
    //     status: newStatus
    // }));
    setDropdownOpen(false); // Close dropdown after selection
  };
  return (
    <>
      {tableType != DocumentCategoryEnum.RequestSchedule  && (
        <td className="px-4  text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
          <div className="inline-flex items-center gap-x-3">
            {data?.date && (
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
            )}
            <span>{data.date || data.id}</span>
          </div>
        </td>
      )}

      {tableType === DocumentCategoryEnum.RequestSchedule && (
        <td className="px-2  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          <div className="flex items-center gap-x-4">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="Arthur Melo"
            />
            <div>
              <h2 className="text-sm font-medium text-gray-800 dark:text-white mt-5">
                {data.name}
              </h2>
              <p
                style={{ marginTop: "-3px" }}
                className="text-xs font-normal text-gray-600 dark:text-gray-400"
              >
                {data.email}
              </p>
            </div>
          </div>
        </td>
      )}

      <td className="px-4  text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          {data?.from && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1"
                />
              </g>
            </svg>
          )}
          <span>
            {data.package ||
              data.className ||
              data.classCode ||
              data.tutor ||
              data.productName ||
              data.from}
          </span>
        </div>
      </td>

      <td className="px-4  text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          {data?.to && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1"
                />
              </g>
            </svg>
          )}
          <span>
            {data?.sessionQuantity ||
              data?.period ||
              data?.className ||
              data.mentorProfiling ||
              data.education ||
              data.to ||
              `Rp. ${data.fee}`}
          </span>
        </div>
      </td>

      {(data?.packageQuantity ||
        data?.classPeriod ||
        data.packageType ||
        data.scholarshipAwardee ||
        data.total) && (
        <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {data.packageQuantity ||
            data?.classPeriod ||
            data.packageType ||
            data.scholarshipAwardee ||
            data.total}
        </td>
      )}
      {(data?.service || data.studyField) && (
        <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {data?.service || data.studyField}
        </td>
      )}
      {data?.handledField && (
        <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {data?.service || data.studyField}
        </td>
      )}

      {data?.paymentMethod && (
        <td className="px-4 text-sm whitespace-nowrap">
          <span
            className={`px-3 py-1 rounded-full font-semibold text-sm
            ${
              data.paymentMethod === "Cicil"
                ? "bg-yellow-100 text-yellow-800"
                : data.paymentMethod === "Lunas"
                  ? "bg-green-100 text-green-800"
                  : data.paymentMethod === "Stop"
                    ? "redchip"
                    : "bg-gray-100 text-gray-800"
            }`}
          >
            {data.paymentMethod}
          </span>
        </td>
      )}


      {data?.status && (
        <td className="px-4 text-sm whitespace-nowrap">
          <div className="flex items-center space-x-2">
            {" "}
            {/* Ensure space between items */}
            <span
              className={`px-3 py-1 rounded-full font-semibold text-sm
        ${
          data.status === "Not Started"
            ? "bg-yellow-100 text-yellow-800"
            : data.status === "On Going"
              ? "bg-green-100 text-green-800"
              : data.status === "Stop"
                ? "redchip"
                : data.status === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : data.status === "Approve"
                    ? "bg-green-100 text-green-800"
                    : data.status === "Not Used"
                      ? "bg-yellow-100 text-yellow-800"
                      : data.status === "Fix Schedule"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
        }`}
            >
              {data.status}
            </span>
            {/* Dropdown Icon */}
            <div className="relative">
              <svg
                className="cursor-pointer w-4 h-4" // Removed ml-2 for direct control below
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 7l5 5 5-5"
                />
              </svg>
              {/* Dropdown Menu */}
              {dropdownOpen && (
                <ul className="absolute right-0 z-10 mt-1 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <li
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    onClick={() => updateStatus("Approve")}
                  >
                    Approve
                  </li>
                  <li
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    onClick={() => updateStatus("Disapprove")}
                  >
                    Disapprove
                  </li>
                  <li
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    onClick={() => updateStatus("Pending")}
                  >
                    Pending
                  </li>
                </ul>
              )}
            </div>
          </div>
        </td>
      )}
    </>
  );
};

export default SessionPackageDataRows;
