import type { input } from "@material-tailwind/react";

export const columnsAttendanceDat = [
  { id: "no", label: "No", minWidth: 50 },
  { id: "date", label: "Date", minWidth: 100 },
  { id: "eventName", label: "Event Name", minWidth: 100 },
  { id: "personInCharge", label: "Person in Charge", minWidth: 150 },
  { id: "endDate", label: "End Date", minWidth: 50 },
  { id: "actions", label: "Actions", minWidth: 100 },
];

export const rowsAttendanceData = [
  {
    id: 1,
    date: "03 Mar 2023",
    eventName: "Webinar",
    name: "Hanna Un",
    email: "hanna@unpixel.com",
    endDate: "03 Mar 2023",
  },
  {
    id: 2,
    date: "03 Mar 2023",
    eventName: "Webinar",
    name: "Hanna Un",
    email: "hanna@unpixel.com",
    endDate: "03 Mar 2023",
  },
  {
    id: 3,
    date: "03 Mar 2023",
    eventName: "Webinar",
    name: "Hanna Un",
    email: "hanna@unpixel.com",
    endDate: "03 Mar 2023",
  },
  {
    id: 4,
    date: "03 Mar 2023",
    eventName: "Webinar",
    name: "Hanna Un",
    email: "hanna@unpixel.com",
    endDate: "03 Mar 2023",
  },
  {
    id: 5,
    date: "03 Mar 2023",
    eventName: "Webinar",
    name: "Hanna Un",
    email: "hanna@unpixel.com",
    endDate: "03 Mar 2023",
  },
  {
    id: 6,
    date: "03 Mar 2023",
    eventName: "Webinar",
    name: "Hanna Un",
    email: "hanna@unpixel.com",
    endDate: "03 Mar 2023",
  },
];

// Bonus Mentor Rows and Colums
export const columnsBonusMentor = [
  { id: 'no', label: 'No', minWidth: 50 },
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'mentorName', label: 'Mentor Name', minWidth: 100 },
  { id: 'bonusType', label: "Bonus Type", minWidth: 150 },
  { id: 'scholarshipName', label: 'Scholarship Name', minWidth: 50 },
  { id: 'universityDestination', label: 'University Destination', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'actions', label: 'Actions', minWidth: 100 }
];
export const rowsBonusMentor  = [
  { id: 1, date: '03 Mar 2023', mentorName: 'Nama User', bonusType: 'LoA Unconditional', scholarshipName: '03 Mar 2023', universityDestination: 'MIT', status: 'Diterima' },
  { id: 2, date: '03 Mar 2023', mentorName: 'Nama User', bonusType: 'LoA Unconditional', scholarshipName: '03 Mar 2023', universityDestination: 'MIT', status: 'Ditolak' },
  { id: 3, date: '03 Mar 2023', mentorName: 'Nama User', bonusType: 'LoA Unconditional', scholarshipName: '03 Mar 2023', universityDestination: 'MIT', status: 'Diterima' },
  { id: 4, date: '03 Mar 2023', mentorName: 'Nama User', bonusType: 'LoA Unconditional', scholarshipName: '03 Mar 2023', universityDestination: 'MIT', status: 'Diproses' },
  { id: 5, date: '03 Mar 2023', mentorName: 'Nama User', bonusType: 'LoA Unconditional', scholarshipName: '03 Mar 2023', universityDestination: 'MIT', status: 'Diterima' },
  { id: 6, date: '03 Mar 2023', mentorName: 'Nama User', bonusType: 'LoA Unconditional', scholarshipName: '03 Mar 2023', universityDestination: 'MIT', status: 'Ditolak' },
  { id: 7, date: '03 Mar 2023', mentorName: 'Nama User', bonusType: 'LoA Unconditional', scholarshipName: '03 Mar 2023', universityDestination: 'MIT', status: 'Diterima' },
  { id: 8, date: '03 Mar 2023', mentorName: 'Nama User', bonusType: 'LoA Unconditional', scholarshipName: '03 Mar 2023', universityDestination: 'MIT', status: 'Diproses' },
];

// Tutor Attenance Rows and Colums
export const columnsTutorAttendance = [
  { id: 'no', label: 'No', minWidth: 10 },
  { id: 'participantName', label: 'Participant Name', minWidth: 160 },
  { id: 'date', label: 'Date', minWidth: 80 },
  { id: 'time', label: "Time", minWidth: 40 },
  { id: 'class', label: 'Class', minWidth: 40 },
  { id: 'duration', label: 'Duration', minWidth: 40 },
  { id: 'extraDuration', label: 'Extra Duration', minWidth: 40 },
  { id: 'rejectionReason', label: 'Rejection Reason', minWidth: 60 },
  { id: 'status', label: 'Status', minWidth: 60 },
  { id: 'actions', label: 'Actions', minWidth: 100 }
];

export const rowsTutorAttendance = [
  {id: 1, email: 'hanna@unpixet.com', name: 'Hanna Un', date: '03 Mar 2023', time: '14:00 WB', class: 'Masterclass', duration:'60 Minit', extraDuration: '60 Minit',  rejectionReason: 'Tulis alasan disini', status: 'Accepted'},
  {id: 2, email: 'hanna@unpixet.com', name: 'Hanna Un', date: '03 Mar 2023', time: '14:00 WB', class: 'Masterclass', duration:'60 Minit', extraDuration: '60 Minit',  rejectionReason: 'Tulis alasan disini', status: 'Rejected'},
  {id: 3, email: 'hanna@unpixet.com', name: 'Hanna Un', date: '03 Mar 2023', time: '14:00 WB', class: 'Masterclass', duration:'60 Minit', extraDuration: '60 Minit',  rejectionReason: 'Tulis alasan disini', status: 'Accepted'},
  {id: 4, email: 'hanna@unpixet.com', name: 'Hanna Un', date: '03 Mar 2023', time: '14:00 WB', class: 'Masterclass', duration:'60 Minit', extraDuration: '60 Minit',  rejectionReason: 'Tulis alasan disini', status: 'Processed'},
  {id: 5, email: 'hanna@unpixet.com', name: 'Hanna Un', date: '03 Mar 2023', time: '14:00 WB', class: 'Masterclass', duration:'60 Minit', extraDuration: '60 Minit',  rejectionReason: 'Tulis alasan disini', status: 'Accepted'},
  {id: 6, email: 'hanna@unpixet.com', name: 'Hanna Un', date: '03 Mar 2023', time: '14:00 WB', class: 'Masterclass', duration:'60 Minit', extraDuration: '60 Minit',  rejectionReason: 'Tulis alasan disini', status: 'Rejected'},
  {id: 7, email: 'hanna@unpixet.com', name: 'Hanna Un', date: '03 Mar 2023', time: '14:00 WB', class: 'Masterclass', duration:'60 Minit', extraDuration: '60 Minit',  rejectionReason: 'Tulis alasan disini', status: 'Accepted'},
  {id: 8, email: 'hanna@unpixet.com', name: 'Hanna Un', date: '03 Mar 2023', time: '14:00 WB', class: 'Masterclass', duration:'60 Minit', extraDuration: '60 Minit',  rejectionReason: 'Tulis alasan disini', status: 'Processed'}
]


// Evaluasi Tutor Rows and Colums
export const columnsEvaluasiTutor = [
  { id: 'no', label: 'No', minWidth: 10 },
  { id: 'tutor', label: 'Tutor', minWidth: 160 },
  { id: 'period', label: 'Period', minWidth: 80 },
  { id: 'score', label: "Score", minWidth: 40 },
  { id: 'pros', label: 'Pros', minWidth: 40 },
  { id: 'cons', label: 'Cons', minWidth: 40 },
  { id: 'input', label: 'Input', minWidth: 40 },
  { id: 'actions', label: 'Actions', minWidth: 100 }
];

export const rowsEvaluasiTutor = [
  {id: 1, email: 'hanna@unpixet.com', name: 'Hanna Un', period: 'Oktober - Desember', score: '4.5', pros: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', cons:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', input: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo' },
  {id: 2, email: 'hanna@unpixet.com', name: 'Hanna Un', period: 'Oktober - Desember', score: '4.5', pros: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', cons:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', input: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo' },
  {id: 3, email: 'hanna@unpixet.com', name: 'Hanna Un', period: 'Oktober - Desember', score: '4.5', pros: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', cons:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', input: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo' },
  {id: 4, email: 'hanna@unpixet.com', name: 'Hanna Un', period: 'Oktober - Desember', score: '4.5', pros: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', cons:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', input: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo' },
  {id: 5, email: 'hanna@unpixet.com', name: 'Hanna Un', period: 'Oktober - Desember', score: '4.5', pros: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', cons:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', input: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo' },
  {id: 6, email: 'hanna@unpixet.com', name: 'Hanna Un', period: 'Oktober - Desember', score: '4.5', pros: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', cons:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', input: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo' },
  {id: 7, email: 'hanna@unpixet.com', name: 'Hanna Un', period: 'Oktober - Desember', score: '4.5', pros: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', cons:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', input: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo' },
  {id: 8, email: 'hanna@unpixet.com', name: 'Hanna Un', period: 'Oktober - Desember', score: '4.5', pros: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', cons:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo', input: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien felis, commodo' },
]

// Evaluasi Tutor Rows and Colums
export const columnsStudentAccount = [
  { id: 'no', label: 'No', minWidth: 10 },
  { id: 'name', label: 'Name', minWidth: 160 },
  { id: 'email', label: 'Address', minWidth: 150 },
  { id: 'actions', label: 'Actions', minWidth: 150 }
];

export const rowsStudentAccount = [
  {id: 1, email: 'hanna@unpixet.com', name: 'Syarifah Nurbati' },
  {id: 2, email: 'hanna@unpixet.com', name: 'Syarifah Nurbati' },
  {id: 3, email: 'hanna@unpixet.com', name: 'Syarifah Nurbati' },
  {id: 4, email: 'hanna@unpixet.com', name: 'Syarifah Nurbati' },
  {id: 5, email: 'hanna@unpixet.com', name: 'Syarifah Nurbati' },
  {id: 6, email: 'hanna@unpixet.com', name: 'Syarifah Nurbati' },
  {id: 7, email: 'hanna@unpixet.com', name: 'Syarifah Nurbati' },
  {id: 8, email: 'hanna@unpixet.com', name: 'Syarifah Nurbati' },
 
];

// Session and Package Data Rows and Colums
export const columnsSessionPackageData = [
  { id: 'no', label: 'No', minWidth: 10 },
  { id: 'package', label: 'Package', minWidth: 160 },
  { id: 'sessionQuantity', label: 'Session Quantity', minWidth: 150 },
  { id: 'packageQuantity', label: 'Package Quantity', minWidth: 150 },
  { id: 'actions', label: 'Actions', minWidth: 150 }
];

export const rowsSessionPackageData = [
  {id: 1, package: 'KQWI WIT 2', sessionQuantity: 11, packageQuantity: 4 },
  {id: 2, package: 'KQWI WIT 2', sessionQuantity: 11, packageQuantity: 4 },
  {id: 3, package: 'KQWI WIT 2', sessionQuantity: 11, packageQuantity: 4 },
  {id: 4, package: 'KQWI WIT 2', sessionQuantity: 11, packageQuantity: 4 },
  {id: 5, package: 'KQWI WIT 2', sessionQuantity: 11, packageQuantity: 4 },
  {id: 6, package: 'KQWI WIT 2', sessionQuantity: 11, packageQuantity: 4 },
  {id: 7, package: 'KQWI WIT 2', sessionQuantity: 11, packageQuantity: 4 },
  {id:81, package: 'KQWI WIT 2', sessionQuantity: 11, packageQuantity: 4 },
  
];

// Class Data Data Rows and Colums
export const columnsClassData = [
  { id: 'no', label: 'No', minWidth: 10 },
  { id: 'class', label: 'Class Name', minWidth: 160 },
  { id: 'period', label: 'Period Kelas', minWidth: 150 },
  { id: 'actions', label: 'Actions', minWidth: 150 }
];

export const rowsClassData = [
  {id: 1, class: 'Class Name', period: 'September - October'},
  {id: 2, class: 'Class Name', period: 'September - October'},
  {id: 3, class: 'Class Name', period: 'September - October'},
  {id: 4, class: 'Class Name', period: 'September - October'},
  {id: 5, class: 'Class Name', period: 'September - October'},
  {id: 6, class: 'Class Name', period: 'September - October'},
  {id: 7, class: 'Class Name', period: 'September - October'},
  {id: 8, class: 'Class Name', period: 'September - October'},
  
];
