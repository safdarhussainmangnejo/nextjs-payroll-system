import React from "react";

interface TableRowProps {
  data: {
    mentorName: string;
    time: string;
    id: number;
    date: string;
    class: string;
    duration: string;
    status: string;
    name: string;
    email: string;
    extraDuration: string;
    rejectionReason: string;
  };
}

const PreseniRows: React.FC<TableRowProps> = ({ data }: TableRowProps) => {
  return (
    <>
      <td className="px-4  text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <span>{data.id}</span>
        </div>
      </td>

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

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.date}
      </td>
      {/* <td className="px-4  text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
          <h2 className="text-sm font-normal">{data.mentorName}</h2>
        </div>
      </td> */}

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.time}
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.class}
      </td>
      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.duration}
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.extraDuration}
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.rejectionReason}
      </td>

      <td className="px-4 text-sm whitespace-nowrap">
        <span
          className={`px-3 py-1 rounded-full font-semibold text-sm
    ${
      data.status === "Processed"
        ? "bg-yellow-100 text-yellow-800"
        : data.status === "Accepted"
          ? "bg-green-100 text-green-800"
          : data.status === "Rejected"
            ? "bg-red-text"
            : "bg-gray-100 text-gray-800"
    }`}
        >
          {data.status}
        </span>
      </td>
    </>
  );
};

export default PreseniRows;