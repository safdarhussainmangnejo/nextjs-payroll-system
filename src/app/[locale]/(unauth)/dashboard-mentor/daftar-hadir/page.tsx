import CustomTable from "@/components/Custom/CustomTable";
import { columnsAttendanceDat, rowsAttendanceData } from "@/utils/DummyData";

export default function DaftarHadir() {
  return (
    <div>
      <h1>Welcome to DaftarHadir</h1>
      <h1>Attendance List</h1>
      <CustomTable columns={columnsAttendanceDat} rows={rowsAttendanceData}/>
      {/* <LoginPage/> */}
    </div>
  );
}