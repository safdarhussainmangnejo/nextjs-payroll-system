// import { Card, Typography } from "@material-tailwind/react";
 

// const TABLE_HEAD = ["Name", "Job", "Employed", ""];
 
// const TABLE_ROWS = [
//   {
//     name: "John Michael",
//     job: "Manager",
//     date: "23/04/18",
//   },
//   {
//     name: "Alexa Liras",
//     job: "Developer",
//     date: "23/04/18",
//   },
//   {
//     name: "Laurent Perrier",
//     job: "Executive",
//     date: "19/09/17",
//   },
//   {
//     name: "Michael Levi",
//     job: "Developer",
//     date: "24/12/08",
//   },
//   {
//     name: "Richard Gran",
//     job: "Manager",
//     date: "04/10/21",
//   },
// ];
 
// const Table: React.FC = () => {
//   return (
//     <Card className="h-full w-full overflow-scroll">
//       <table className="w-full min-w-max table-auto text-left">
//         <thead>
//           <tr>
//             {TABLE_HEAD.map((head) => (
//               <th
//                 key={head}
//                 className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
//               >
//                 <Typography
//                   variant="small"
//                   color="blue-gray"
//                   className="font-normal leading-none opacity-70"
//                 >
//                   {head}
//                 </Typography>
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>

//           {TABLE_ROWS.map(({ name, job, date }, index) => {
//             const isLast = index === TABLE_ROWS.length - 1;
//             const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
//             return (
//               <tr key={name}>
//                 <td className={classes}>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-normal"
//                   >
//                     {name}
//                   </Typography>
//                 </td>
//                 <td className={classes}>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-normal"
//                   >
//                     {job}
//                   </Typography>
//                 </td>
//                 <td className={classes}>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-normal"
//                   >
//                     {date}
//                   </Typography>
//                 </td>
//                 <td className={classes}>
//                   <Typography
//                     as="a"
//                     href="#"
//                     variant="small"
//                     color="blue-gray"
//                     className="font-medium"
//                   >
//                     Edit
//                   </Typography>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </Card>
//   );
// }
// export default Table;

// // components/Table.tsx
import React from 'react';

const Table: React.FC<{ onEdit: () => void }> = ({ onEdit }) => {
  const data = [
    { no: 1, date: '03 Mar 2023', classCode: 'Kode Kelas', name: 'Hanna Un', endDate: '10 Mar 2023' },
    { no: 2, date: '03 Mar 2023', classCode: 'Kode Kelas', name: 'Hanna Un', endDate: '10 Mar 2023' },
    { no: 3, date: '03 Mar 2023', classCode: 'Kode Kelas', name: 'Hanna Un', endDate: '10 Mar 2023' },
    { no: 4, date: '03 Mar 2023', classCode: 'Kode Kelas', name: 'Hanna Un', endDate: '10 Mar 2023' },
    { no: 5, date: '03 Mar 2023', classCode: 'Kode Kelas', name: 'Hanna Un', endDate: '10 Mar 2023' },
    { no: 6, date: '03 Mar 2023', classCode: 'Kode Kelas', name: 'Hanna Un', endDate: '10 Mar 2023' },
    { no: 7, date: '03 Mar 2023', classCode: 'Kode Kelas', name: 'Hanna Un', endDate: '10 Mar 2023' },
    { no: 8, date: '03 Mar 2023', classCode: 'Kode Kelas', name: 'Hanna Un', endDate: '10 Mar 2023' },
  ];

  return (
    <table className="table-auto min-w-full">
      <thead>
        <tr>
          <th className="py-2 px-4 border">No</th>
          <th className="py-2 px-4 border">Date</th>
          <th className="py-2 px-4 border">Class Code</th>
          <th className="py-2 px-4 border">Participant’s Name</th>
          <th className="py-2 px-4 border">End Date</th>
          <th className="py-2 px-4 border">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.no}>
            <td className="py-2 px-4 border">{row.no}</td>
            <td className="py-2 px-4 border">{row.date}</td>
            <td className="py-2 px-4 border">{row.classCode}</td>
            <td className="py-2 px-4 border">{row.name}</td>
            <td className="py-2 px-4 border">{row.endDate}</td>
            {/* <td className="py-2 px-4 border">
              <button className="text-blue-500">View</button>
              <button className="text-red-500 ml-2">Delete</button>
            </td> */}
            <td className="py-2 px-4 border">
  <div className="flex space-x-2">
    <img src="/icons/view.png" alt="View" className="w-8 h-8 cursor-pointer" />
    <img src="/icons/edit.png" alt="Edit" className="w-8 h-8 cursor-pointer" onClick={onEdit} />
    <img src="/icons/delete.png" alt="Delete" className="w-8 h-8 cursor-pointer" />
  </div>
</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;