import React from 'react';
import TableHeader from './TableHeader';

const AttendanceTable: React.FC = () => {

  return (
    <div className="flex gap-0 mt-6 leading-[160%] max-md:flex-wrap">
      <TableHeader />
      
      {/* {attendanceData.map((data) => (
        <tr key={data.id}>
        <TableRow data={data} />
        </tr>
      ))} */}
    </div>
  );
};

export default AttendanceTable;