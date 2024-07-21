import React, { ReactNode } from "react";
import TableRow from "../Datatable/TableRow";
interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: any) => ReactNode;
}

interface DataTableProps {
  columns?: Column[];
  rows?: any[];
  onEditClick?: (row: any) => void;
  onDeleteClick?: (no: number) => void;
  onViewClick?: (row: any) => void;
}

const CustomTable = ({
  columns,
  rows,
  onEditClick,
  onDeleteClick,
  onViewClick,
}: DataTableProps) => {
  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col ">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border-[1.5px] border-stroke bg-transparen dark:border-gray-700 md:rounded-lg">
              <table className="table-auto min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 border-[1.5px] border-stroke bg-transparen dark:bg-gray-800">
                  <tr>
                    {columns &&
                      columns.map((column) => (
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody className="bg-white  divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {rows &&
                    rows.map((row) => (
                      <tr className="border-[1.5px] border-stroke bg-transparen" key={row.id}>
                        <TableRow data={row} />
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-3">
                            <img
                              src="/icons/view.png"
                              alt="View"
                              className="w-8 h-8 cursor-pointer"
                            />
                            <img
                              src="/icons/edit.png"
                              alt="Edit"
                              className="w-8 h-8 cursor-pointer"
                              onClick={onEditClick}
                            />
                            <img
                              src="/icons/delete.png"
                              alt="Delete"
                              className="w-8 h-8 cursor-pointer"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <a
          href="#"
          className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <span>previous</span>
        </a>

        <div className="items-center hidden md:flex gap-x-3">
          <a
            href="#"
            className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
          >
            1
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            2
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            3
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            ...
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            12
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            13
          </a>
          <a
            href="#"
            className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
          >
            14
          </a>
        </div>

        <a
          href="#"
          className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <span>Next</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:-scale-x-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
export default CustomTable;
