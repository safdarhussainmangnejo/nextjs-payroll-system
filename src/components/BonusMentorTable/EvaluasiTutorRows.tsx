import React from "react";

interface TableRowProps {
  data: {
    email: string;
    name: string;
    id: number;
    period: string;
    score: number;
    pros: string;
    cons: string;
    input: string;
  };
}

const EvaluasiTutorRows: React.FC<TableRowProps> = ({
  data,
}: TableRowProps) => {
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
        {data.period}
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.score}
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2zM4 4v13.17L5.17 16H20V4zm2 3h12v2H6zm0 4h9v2H6z"
            onClick= {() => alert(data.pros)}
          />
        </svg>
      </td>
      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2zM4 4v13.17L5.17 16H20V4zm2 3h12v2H6zm0 4h9v2H6z"
            onClick= {() => alert(data.cons)}
          />
        </svg>
       
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2zM4 4v13.17L5.17 16H20V4zm2 3h12v2H6zm0 4h9v2H6z"
            onClick= {() => alert(data.input)}
          />
        </svg>
      </td>

      {/* <td className="px-4 text-sm whitespace-nowrap">
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
      </td> */}
    </>
  );
};

export default EvaluasiTutorRows;
