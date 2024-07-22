import React from "react";

interface TableRowProps {
  data: {
    mentorName: string;
    bonusType: string;
    id: number;
    date: string;
    scholarshipName: string;
    universityDestination: string;
    status: string;
  };
}

const BonusTableRow: React.FC<TableRowProps> = ({ data }: TableRowProps) => {
  return (
    <>
      <td className="px-4  text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <span>{data.id}</span>
        </div>
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.date}
      </td>
      <td className="px-4  text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
          <h2 className="text-sm font-normal">{data.mentorName}</h2>
        </div>
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.bonusType}
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.scholarshipName}
      </td>
      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.universityDestination}
      </td>
      <td className="px-4 text-sm whitespace-nowrap">
        <span
          className={`px-3 py-1 rounded-full font-semibold text-sm
    ${
      data.status === "Diproses"
        ? "bg-yellow-100 text-yellow-800"
        : data.status === "Diterima"
          ? "bg-green-100 text-green-800"
          : data.status === "Ditolak"
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

export default BonusTableRow;
