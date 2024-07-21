import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const AttendanceTable: React.FC = () => {
  const attendanceData = [
    {
      id: 1,
      date: '03 Mar 2023',
      classCode: 'Kode Kelas',
      participant: {
        name: 'Hanna Un',
        email: 'hanna@unpixel.com'
      },
      serviceType: 'Proofreading',
      documentType: 'Essay',
      wordCount: 10000,
      extraWordCount: 400,
      correction: '2 (Dua)',
      actionImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/79711d2fde5db1d4be65e81781fcc4b8252747ae8d2a7bb2af033be12be2c493?apiKey=3134160d320944cb9be378a5d06b0bb6&'
    },
    // ... repeat this object 7 more times with different ids and actionImage URLs
  ];

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