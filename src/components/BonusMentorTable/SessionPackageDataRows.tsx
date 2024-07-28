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
  };
}

const SessionPackageDataRows: React.FC<TableRowProps> = ({
  data,
}: TableRowProps) => {
  return (
    <>
      <td className="px-4  text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <span>{data.id}</span>
        </div>
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.package || data.class || data.classCode || data.tutor || data.productName}
      </td>

      <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data?.sessionQuantity ||
          data?.period ||
          data?.className ||
          data.mentorProfiling ||
          data.education || `Rp. ${data.fee}`}
      </td>

      {(data?.packageQuantity ||
        data?.classPeriod ||
        data.packageType ||
        data.scholarshipAwardee) && (
        <td className="px-4  text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
          {data.packageQuantity ||
            data?.classPeriod ||
            data.packageType ||
            data.scholarshipAwardee}
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
                    ? "bg-red-text"
                    : "bg-gray-100 text-gray-800"
            }`}
          >
            {data.paymentMethod}
          </span>
        </td>
      )}

      {data?.status && (
        <td className="px-4 text-sm whitespace-nowrap">
          <span
            className={`px-3 py-1 rounded-full font-semibold text-sm
            ${
              data.status === "Not Started"
                ? "bg-yellow-100 text-yellow-800"
                : data.status === "On Going"
                  ? "bg-green-100 text-green-800"
                  : data.status === "Stop"
                    ? "bg-red-text"
                    : "bg-gray-100 text-gray-800"
            }`}
          >
            {data.status}
          </span>
        </td>
      )}
    </>
  );
};

export default SessionPackageDataRows;
