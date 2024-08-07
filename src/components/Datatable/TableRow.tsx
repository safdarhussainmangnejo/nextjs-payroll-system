'use client';
import React, { useState } from "react";

interface TableRowProps {
  data: {
    name: string;
    email: string;
    id: number;
    date: string;
    eventName: string;
    endDate: string;
    mentor: string;
    classCode: string;
    className: string;
    period: string;
    service: string;
    from: string;
    to: string;
    mockupType: string;
    studentName: string;
    startDate: string;
    file: string;
    status: string;
    AttendanceType: string;
    assessmentType: string;
    nameOfParticipants: string;
    participant: string;
  };
  tableType?: string;
}

const TableRow: React.FC<TableRowProps> = ({
  data,
  tableType,
}: TableRowProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState<string[]>([]);
  const updateStatus = (newStatus: string) => {
    setUserData((prevData) => ({
        ...prevData,
        status: newStatus
    }));
    setDropdownOpen(false); // Close dropdown after selection
  };
  console.log("userData: ", userData)
  console.log("tableType: ", tableType)
  return (
    <>
      <td className="px-4  text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <span>{data.id}</span>
        </div>
      </td>

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
          <span>{data.date}</span>
        </div>
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.eventName || data.mentor}
      </td>


      {(data?.name && data?.email) && (
        <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          <div className="flex items-center gap-x-2">
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

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.mockupType || data.AttendanceType || data.endDate || data.className || data?.classCode}
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data?.period || data?.className || data.studentName}
      </td>

      {(data?.service || data?.assessmentType) && 
        (<td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {data?.period || data?.assessmentType}
        </td>)
      }

      { (data.from || data.startDate) &&
      (<td className="px-4  text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
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
          {data?.startDate && 
          (<svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24">
            <path fill="black" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
          </svg>)
        }
          <span>{data.from || data.startDate}</span>
        </div>
      </td>)
      }
      
      {(data.to || data.endDate) && 
      (<td className="px-4  text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
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
          ) }
          {data?.endDate && 
          (<svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24">
            <path fill="black" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
          </svg>)
        }
          <span>{data.to || data.endDate}</span>
        </div>
      </td>)
      }
      

      {(data?.participant) && 
        (<td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {data?.participant }
        </td>)
      }

      {(data?.nameOfParticipants) && 
        (<td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {data?.nameOfParticipants }
        </td>)
      }

      {(data?.file) && 
        (<td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {data?.file }
        </td>)
      }

{data?.status && (
        <td className="px-4 text-sm whitespace-nowrap">
          <div className="flex items-center space-x-2">
          <span
            className={`px-3 py-1 rounded-full font-semibold text-sm
            ${
              data.service === "Cicil"
                ? "bg-yellow-100 text-yellow-800"
                : data.service === "Proofreading"
                  ? "bg-green-100 text-green-800"
                  : data.service === "Stop"
                    ? "redchip" 
                  : data.status === 'Upcoming'
                  ? "bg-purple-100 text-purple-800"
                  : data.status === 'Waiting'
                  ? "bg-yellow-100 text-yellow-800"
                  : data.status === 'Confirm'
                  ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
            }`}
          >
            {data.service || data.status}
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

export default TableRow;
