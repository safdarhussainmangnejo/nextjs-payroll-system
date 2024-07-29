"use client";
import React, { ReactNode } from "react";
import TableRow from "../Datatable/TableRow";
import { DocumentCategoryEnum, DocumentRowsEnum } from "../../utils/Constants";
import BonusTableRow from "../BonusMentorTable/BonusRows";
import PreseniRows from "../BonusMentorTable/PresensiRows";
import EvaluasiTutorRows from "../BonusMentorTable/EvaluasiTutorRows";
import StudentAccountRows from "../BonusMentorTable/StudentAccountRows";
import SessionPackageDataRows from "../BonusMentorTable/SessionPackageDataRows";
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
  tableType?: string;
  onEditClick?: (row: any) => void;
  onDeleteClick?: (no: number) => void;
  onViewClick?: (row: any) => void;
}

const CustomTable = ({
  columns,
  rows,
  onEditClick,
  onDeleteClick,
  onViewClick = () => console.log("onViewClick clicked"),
  tableType,
}: DataTableProps) => {
  return (
    <>
      {rows && (
        <section className="container px-4 mx-auto">
          <div className="flex flex-col ">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border-[1.5px] border-stroke bg-transparen dark:border-gray-700 md:rounded-lg">
                  <table className="table-auto min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 border-[1.5px] border-stroke bg-transparen dark:bg-gray-800">
                      <tr>
                        {tableType === DocumentCategoryEnum.RequestSchedule && (
                          <div className="flex items-center mt-4 pl-3">
                            <input
                              id="default-checkbox"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                          </div>
                        )}

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
                          <tr
                            className="border-[1.5px] border-stroke bg-transparen"
                            key={row.id}
                          >
                            {tableType ===
                              DocumentCategoryEnum.RequestSchedule && (
                              <div className="flex items-center mt-7 pl-3">
                                <input
                                  id={row.id}
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                              </div>
                            )}
                            {tableType === DocumentCategoryEnum.BonusMentor ? (
                              <BonusTableRow data={row} />
                            ) : tableType === DocumentCategoryEnum.Presensi ? (
                              <PreseniRows data={row} />
                            ) : tableType ===
                              DocumentCategoryEnum.EvaluasiTutor ? (
                              <EvaluasiTutorRows data={row} />
                            ) : tableType ===
                              DocumentCategoryEnum.StudentAccount ? (
                              <StudentAccountRows data={row} />
                            ) : tableType ===
                                DocumentCategoryEnum.SessionPackageData ||
                              DocumentCategoryEnum.ClassData ||
                              DocumentCategoryEnum.AddMetor ||
                              DocumentRowsEnum.DatabaseStudent ||
                              DocumentCategoryEnum.RequestSchedule ||
                              DocumentRowsEnum.RequestScheduleTimeList ? (
                              <SessionPackageDataRows
                                data={row}
                                tableType={tableType}
                              />
                            ) : (
                              <TableRow data={row} />
                            )}
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-3">
                                <img
                                  src="/icons/view.png"
                                  alt="View"
                                  className="w-8 h-8 cursor-pointer"
                                  onClick={() => onViewClick(row)}
                                />
                                {tableType != DocumentCategoryEnum.RequestSchedule && (
                                  <>
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
                                  </>
                                )}
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
      )}
    </>
  );
};
export default CustomTable;
