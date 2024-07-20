"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import useLocalStorage from "@/hooks/useLocalStorage";
import useColorMode from "@/hooks/useColorMode";
import ClickOutside from "../Tables/ClickOutside";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    // name: "MENU",
    menuItems: [
      {
        icon: (
          // <svg
          //   className="fill-current"
          //   width="18"
          //   height="18"
          //   viewBox="0 0 18 18"
          //   fill="none"
          //   xmlns="http://www.w3.org/2000/svg"
          // >
          //   <path
          //     d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
          //     fill=""
          //   />
          //   <path
          //     d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
          //     fill=""
          //   />
          //   <path
          //     d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
          //     fill=""
          //   />
          //   <path
          //     d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
          //     fill=""
          //   />
          // </svg>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/puffy-filled/32/inbox.png"
            alt="inbox"
          />
        ),
        label: "HOME", // Dashboad
        route: "#",
        // children: [{ label: "eCommerce", route: "/" }],
      },
      // {
      //   icon: (
      //     <svg
      //       className="fill-current"
      //       width="18"
      //       height="18"
      //       viewBox="0 0 18 18"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14.5406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17.5218 15.525 17.5218 14.5406V4.72495C17.5218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H4.1624V10.9968H1.77178V8.21245ZM5.42803 8.21245H8.38115V10.9968H5.42803V8.21245ZM8.38115 12.2625V15.0187H5.42803V12.2625H8.38115ZM9.64678 12.2625H12.5999V15.0187H9.64678V12.2625ZM9.64678 10.9968V8.21245H12.5999V10.9968H9.64678ZM13.8374 8.21245H16.228V10.9968H13.8374V8.21245ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.48433 14.3437 5.20308 14.3437 4.83745V4.24683H15.7499C16.0312 4.24683 16.2562 4.47183 16.2562 4.75308V6.94683H1.77178V4.75308C1.77178 4.47183 1.96865 4.24683 2.2499 4.24683ZM1.77178 14.5125V12.2343H4.1624V14.9906H2.2499C1.96865 15.0187 1.77178 14.7937 1.77178 14.5125ZM15.7499 15.0187H13.8374V12.2625H16.228V14.5406C16.2562 14.7937 16.0312 15.0187 15.7499 15.0187Z"
      //         fill=""
      //       />
      //     </svg>
      //   ),
      //   label: "Calendar",
      //   route: "/calendar",
      // },
      {
        icon: (
          <img width="25" height="25" src="https://img.icons8.com/glyph-neue/64/overtime.png" alt="overtime"/>
        ),
        label: "SCHEDULE",
        route: "#",
        children: [
          {
            icon: (
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/glyph-neue/64/upload-to-ftp.png"
                alt="upload-to-ftp"
              />
            ),
            label: "Request Schedule",
            route: "/schedule/request-schedule",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
              </svg>
            ),
            label: "Schedule Tutor",
            route: "/schedule/schedule-tutor",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
              </svg>
            ),
            label: "Schedule Mentor",
            route: "/schedule/schedule-mentor",
          },
        ],
      },
      {
        icon: (
          <img width="25" height="25" src="https://img.icons8.com/ios/50/classroom.png" alt="classroom"/>
        ),
        label: "DASHBOARD MENTOR",
        route: "#",
        children: [
          {
            icon: (
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/glyph-neue/64/upload-to-ftp.png"
                alt="upload-to-ftp"
              />
            ),
            label: "Bonus Mentor",
            route: "/dashboard-mentor/bonus-mentor",
          },
          {
            icon: (
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/material-two-tone/24/storage.png"
                alt="storage"
              />
            ),
            label: "Daftar Hadir",
            route: "/dashboard-mentor/daftar-hadir",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
              </svg>
            ),
            label: "Evaluas Mentor",
            route: "/dashboard-mentor/evaluas-mentor",
          },
        ],
      },
      {
        icon: (
          <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/tuition--v1.png" alt="tuition--v1"/>
        ),
        label: "DASHBOARD TUTOR",
        route: "#",
        children: [
          {
            icon: (
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/glyph-neue/64/upload-to-ftp.png"
                alt="upload-to-ftp"
              />
            ),
            label: "Presensi",
            route: "/dashboard-tutor/presensi",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
              </svg>
            ),
            label: "Evaluas Tutor",
            route: "/dashboard-tutor/evaluas-tutor",
          },
        ],
      },

      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
    <path d="M47.16,21.221l-5.91-0.966c-0.346-1.186-0.819-2.326-1.411-3.405l3.45-4.917c0.279-0.397,0.231-0.938-0.112-1.282 l-3.889-3.887c-0.347-0.346-0.893-0.391-1.291-0.104l-4.843,3.481c-1.089-0.602-2.239-1.08-3.432-1.427l-1.031-5.886 C28.607,2.35,28.192,2,27.706,2h-5.5c-0.49,0-0.908,0.355-0.987,0.839l-0.956,5.854c-1.2,0.345-2.352,0.818-3.437,1.412l-4.83-3.45 c-0.399-0.285-0.942-0.239-1.289,0.106L6.82,10.648c-0.343,0.343-0.391,0.883-0.112,1.28l3.399,4.863 c-0.605,1.095-1.087,2.254-1.438,3.46l-5.831,0.971c-0.482,0.08-0.836,0.498-0.836,0.986v5.5c0,0.485,0.348,0.9,0.825,0.985 l5.831,1.034c0.349,1.203,0.831,2.362,1.438,3.46l-3.441,4.813c-0.284,0.397-0.239,0.942,0.106,1.289l3.888,3.891 c0.343,0.343,0.884,0.391,1.281,0.112l4.87-3.411c1.093,0.601,2.248,1.078,3.445,1.424l0.976,5.861C21.3,47.647,21.717,48,22.206,48 h5.5c0.485,0,0.9-0.348,0.984-0.825l1.045-5.89c1.199-0.353,2.348-0.833,3.43-1.435l4.905,3.441 c0.398,0.281,0.938,0.232,1.282-0.111l3.888-3.891c0.346-0.347,0.391-0.894,0.104-1.292l-3.498-4.857 c0.593-1.08,1.064-2.222,1.407-3.408l5.918-1.039c0.479-0.084,0.827-0.5,0.827-0.985v-5.5C47.999,21.718,47.644,21.3,47.16,21.221z M25,32c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7C32,28.866,28.866,32,25,32z"></path>
</svg>
        ),
        label: "SETTINGS",
        route: "#",
        children: [
          {
            icon: (
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/puffy-filled/32/inbox.png"
                alt="inbox"
              />
            ),
            label: "Student Account",
            route: "/settings/student-account",
          },
          {
            icon: (
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/glyph-neue/64/upload-to-ftp.png"
                alt="upload-to-ftp"
              />
            ),
            label: "Session & Packages Data",
            route: "/settings/session-packages-data",
          },
          {
            icon: (
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/glyph-neue/64/upload-to-ftp.png"
                alt="upload-to-ftp"
              />
            ),
            label: "Class Data",
            route: "/settings/class-data",
          },
          {
            icon: (
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/external-database-work-from-home-flatart-icons-solid-flatarticons.png"
                alt="external-database-work-from-home-flatart-icons-solid-flatarticons"
              />
            ),
            label: "Database",
            route: "/settings/database",
          },
        ],
      },
    ],
  },
  // {
  //   name: "OTHERS",
  //   menuItems: [
  //     {
  //       icon: (
  //         <svg
  //           className="fill-current"
  //           width="18"
  //           height="19"
  //           viewBox="0 0 18 19"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clipPath="url(#clip0_130_9801)">
  //             <path
  //               d="M10.8563 0.55835C10.5188 0.55835 10.2095 0.8396 10.2095 1.20522V6.83022C10.2095 7.16773 10.4907 7.4771 10.8563 7.4771H16.8751C17.0438 7.4771 17.2126 7.39272 17.3251 7.28022C17.4376 7.1396 17.4938 6.97085 17.4938 6.8021C17.2688 3.28647 14.3438 0.55835 10.8563 0.55835ZM11.4751 6.15522V1.8521C13.8095 2.13335 15.6938 3.8771 16.1438 6.18335H11.4751V6.15522Z"
  //               fill=""
  //             />
  //             <path
  //               d="M15.3845 8.7427H9.1126V2.69582C9.1126 2.35832 8.83135 2.07707 8.49385 2.07707C8.40947 2.07707 8.3251 2.07707 8.24072 2.07707C3.96572 2.04895 0.506348 5.53645 0.506348 9.81145C0.506348 14.0864 3.99385 17.5739 8.26885 17.5739C12.5438 17.5739 16.0313 14.0864 16.0313 9.81145C16.0313 9.6427 16.0313 9.47395 16.0032 9.33332C16.0032 8.99582 15.722 8.7427 15.3845 8.7427ZM8.26885 16.3083C4.66885 16.3083 1.77197 13.4114 1.77197 9.81145C1.77197 6.3802 4.47197 3.53957 7.8751 3.3427V9.36145C7.8751 9.69895 8.15635 10.0083 8.52197 10.0083H14.7938C14.6813 13.4958 11.7845 16.3083 8.26885 16.3083Z"
  //               fill=""
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_130_9801">
  //               <rect
  //                 width="18"
  //                 height="18"
  //                 fill="white"
  //                 transform="translate(0 0.052124)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>
  //       ),
  //       label: "Chart",
  //       route: "/chart",
  //     },
  //     {
  //       icon: (
  //         <svg
  //           className="fill-current"
  //           width="18"
  //           height="19"
  //           viewBox="0 0 18 19"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clipPath="url(#clip0_130_9807)">
  //             <path
  //               d="M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V7.53335C0.506348 8.4896 1.29385 9.2771 2.2501 9.2771H15.7501C16.7063 9.2771 17.4938 8.4896 17.4938 7.53335V2.3021C17.4938 1.34585 16.7063 0.55835 15.7501 0.55835ZM16.2563 7.53335C16.2563 7.8146 16.0313 8.0396 15.7501 8.0396H2.2501C1.96885 8.0396 1.74385 7.8146 1.74385 7.53335V2.3021C1.74385 2.02085 1.96885 1.79585 2.2501 1.79585H15.7501C16.0313 1.79585 16.2563 2.02085 16.2563 2.3021V7.53335Z"
  //               fill=""
  //             />
  //             <path
  //               d="M6.13135 10.9646H2.2501C1.29385 10.9646 0.506348 11.7521 0.506348 12.7083V15.8021C0.506348 16.7583 1.29385 17.5458 2.2501 17.5458H6.13135C7.0876 17.5458 7.8751 16.7583 7.8751 15.8021V12.7083C7.90322 11.7521 7.11572 10.9646 6.13135 10.9646ZM6.6376 15.8021C6.6376 16.0833 6.4126 16.3083 6.13135 16.3083H2.2501C1.96885 16.3083 1.74385 16.0833 1.74385 15.8021V12.7083C1.74385 12.4271 1.96885 12.2021 2.2501 12.2021H6.13135C6.4126 12.2021 6.6376 12.4271 6.6376 12.7083V15.8021Z"
  //               fill=""
  //             />
  //             <path
  //               d="M15.75 10.9646H11.8688C10.9125 10.9646 10.125 11.7521 10.125 12.7083V15.8021C10.125 16.7583 10.9125 17.5458 11.8688 17.5458H15.75C16.7063 17.5458 17.4938 16.7583 17.4938 15.8021V12.7083C17.4938 11.7521 16.7063 10.9646 15.75 10.9646ZM16.2562 15.8021C16.2562 16.0833 16.0312 16.3083 15.75 16.3083H11.8688C11.5875 16.3083 11.3625 16.0833 11.3625 15.8021V12.7083C11.3625 12.4271 11.5875 12.2021 11.8688 12.2021H15.75C16.0312 12.2021 16.2562 12.4271 16.2562 12.7083V15.8021Z"
  //               fill=""
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_130_9807">
  //               <rect
  //                 width="18"
  //                 height="18"
  //                 fill="white"
  //                 transform="translate(0 0.052124)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>
  //       ),
  //       label: "UI Elements",
  //       route: "#",
  //       children: [
  //         { label: "Alerts", route: "/ui/alerts" },
  //         { label: "Buttons", route: "/ui/buttons" },
  //       ],
  //     },
  //     {
  //       icon: (
  //         <svg
  //           className="fill-current"
  //           width="18"
  //           height="19"
  //           viewBox="0 0 18 19"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clipPath="url(#clip0_130_9814)">
  //             <path
  //               d="M12.7127 0.55835H9.53457C8.80332 0.55835 8.18457 1.1771 8.18457 1.90835V3.84897C8.18457 4.18647 8.46582 4.46772 8.80332 4.46772C9.14082 4.46772 9.45019 4.18647 9.45019 3.84897V1.88022C9.45019 1.82397 9.47832 1.79585 9.53457 1.79585H12.7127C13.3877 1.79585 13.9221 2.33022 13.9221 3.00522V15.0709C13.9221 15.7459 13.3877 16.2802 12.7127 16.2802H9.53457C9.47832 16.2802 9.45019 16.2521 9.45019 16.1959V14.2552C9.45019 13.9177 9.16894 13.6365 8.80332 13.6365C8.43769 13.6365 8.18457 13.9177 8.18457 14.2552V16.1959C8.18457 16.9271 8.80332 17.5459 9.53457 17.5459H12.7127C14.0908 17.5459 15.1877 16.4209 15.1877 15.0709V3.03335C15.1877 1.65522 14.0627 0.55835 12.7127 0.55835Z"
  //               fill=""
  //             />
  //             <path
  //               d="M10.4346 8.60205L7.62207 5.7333C7.36895 5.48018 6.97519 5.48018 6.72207 5.7333C6.46895 5.98643 6.46895 6.38018 6.72207 6.6333L8.46582 8.40518H3.45957C3.12207 8.40518 2.84082 8.68643 2.84082 9.02393C2.84082 9.36143 3.12207 9.64268 3.45957 9.64268H8.49395L6.72207 11.4427C6.46895 11.6958 6.46895 12.0896 6.72207 12.3427C6.83457 12.4552 7.00332 12.5114 7.17207 12.5114C7.34082 12.5114 7.50957 12.4552 7.62207 12.3145L10.4346 9.4458C10.6877 9.24893 10.6877 8.85518 10.4346 8.60205Z"
  //               fill=""
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_130_9814">
  //               <rect
  //                 width="18"
  //                 height="18"
  //                 fill="white"
  //                 transform="translate(0 0.052124)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>
  //       ),
  //       label: "Authentication",
  //       route: "#",
  //       children: [
  //         { label: "Sign In", route: "/auth/signin" },
  //         { label: "Sign Up", route: "/auth/signup" },
  //       ],
  //     },
  //   ],
  // },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [colorMode, setColorMode] = useState("");
  console.log("colorMode in Sidebar ", colorMode);

  // const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "home");

  useEffect(() => {
    const storedThemeColor = localStorage.getItem("color-theme");
    if (storedThemeColor) {
      setColorMode(storedThemeColor);
    }
  }, []);

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      {/* <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white dark:bg-slate-700 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      > */}
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden  text-black dark:text-white bg-black duration-300 ease-linear light:bg-boxdark lg:translate-x-0 
          ${colorMode === "dark" ? "bg-black text-white" : "bg-white text-black"} 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden duration-300 ease-linear ${
          colorMode === "dark" ? "bg-black text-white" : "bg-white text-black"
        } ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      > */}
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          {/* <Link href="/">
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
            />
          </Link> */}
          <h1>Operational</h1>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- User Name Box --> */}
        <div className="flex items-center space-x-4 p-3 ml-2">
          <span className="flex-shrink-0 w-12 h-12">
            <Image
              className="rounded-full"
              src="/assets/profile.png"
              alt="User"
              width={48}
              height={48}
            />
          </span>
          <span className="flex flex-col flex-grow">
            <span className="text-sm font-medium text-black dark:text-white">
              <h2 className="font-semibold"> Siyarifah Nurbailti </h2>
            </span>
            <span className="text-xs">
              <h3>Operational</h3>
            </span>
          </span>
        </div>
        <hr className="my-8 border-1 border-slate-300 ml-5 mr-5 dark:bg-gray-700" />
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-2 lg:px-4">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                {/* <h3 className="mb-4 ml-4 text-sm font-semibold text-slate-500">
                  {group.name}
                </h3> */}

                <ul className="mb-6 flex flex-col gap-1.5  text-bodydark2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
