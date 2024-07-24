import React from "react";

interface TableRowProps {
  data: {
    id: number;
    name: string;
    email: string;
  };
}

const StudentAccountRows: React.FC<TableRowProps> = ({ data }: TableRowProps) => {
  return (
    <>
      <td className="px-4  text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <span>{data.id}</span>
        </div>
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.name}
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.email}
      </td>
    </>
  );
};

export default StudentAccountRows;
