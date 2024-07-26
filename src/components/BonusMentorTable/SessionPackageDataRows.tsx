import React from "react";

interface TableRowProps {
  data: {
    id: number;
    package: string;
    sessionQuantity: string;
    packageQuantity: string;
    class: string;
    period: string;
    classCode: string;
    className: string;
    classPeriod: string;
    service: string;
  };
}

const SessionPackageDataRows: React.FC<TableRowProps> = ({ data }: TableRowProps) => {
  return (
    <>
      <td className="px-4  text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <span>{data.id}</span>
        </div>
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.package || data.class || data.classCode}
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data?.sessionQuantity || data?.period || data?.className}
      </td>
      {(data?.packageQuantity || data?.classPeriod) && 
      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.packageQuantity || data?.classPeriod }
      </td>

      }
      {(data?.service) && 
      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data?.service }
      </td>
      }
    </>
  );
};

export default SessionPackageDataRows;
