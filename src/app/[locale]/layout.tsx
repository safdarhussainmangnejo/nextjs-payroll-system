"use client";
import "@/styles/global.css";
import React, { useState } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { AppConfig } from "@/utils/AppConfig";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ModalProvider } from "../ModalContext";
import ContentWithModal from "../ContentWithModal";

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(props.params.locale)) notFound();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang={props.params.locale}>
      <ModalProvider>
        {" "}
        {/* Wrap everything inside ModalProvider */}
        <body>
          <NextIntlClientProvider locale={props.params.locale}>
            <div className="flex">
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <div className="relative flex flex-1 flex-col lg:ml-72.5">
                <Navbar
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {props.children}
                  </div>
                </main>
              </div>
            </div>
          </NextIntlClientProvider>
        </body>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
        <script src="node_modules/@material-tailwind/html@latest/scripts/ripple.js"></script>
        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
        <script src="node_modules/@material-tailwind/html@latest/scripts/dialog.js"></script>
        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/dialog.js"></script>
        <ContentWithModal />
      </ModalProvider>
    </html>
  );
}

// function ContentWithModal() {
//   const { isModalOpen, closeModal } = useModal(); // Correct use inside ModalProvider
//   return (
//     <MentorEvaluationModal isOpen={isModalOpen} onRequestClose={closeModal} />
//   );
// }

// "use client";
// import "@/styles/global.css";

// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import { NextIntlClientProvider, useMessages } from "next-intl";
// import { AppConfig } from "@/utils/AppConfig";
// import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Sidebar from "@/components/Sidebar";
// import MentorEvaluationModal from "@/components/MentorEvaluation/MentorEvaluationModel";
// import { ModalProvider } from "../ModalContext";
// import { useModal } from '../ModalContext';

// // export const metadata: Metadata = {
// //   icons: [
// //     {
// //       rel: 'apple-touch-icon',
// //       url: '/apple-touch-icon.png',
// //     },
// //     {
// //       rel: 'icon',
// //       type: 'image/png',
// //       sizes: '32x32',
// //       url: '/favicon-32x32.png',
// //     },
// //     {
// //       rel: 'icon',
// //       type: 'image/png',
// //       sizes: '16x16',
// //       url: '/favicon-16x16.png',
// //     },
// //     {
// //       rel: 'icon',
// //       url: '/favicon.ico',
// //     },
// //   ],
// // };

// export default function RootLayout(props: {
//   children: React.ReactNode;
//   params: { locale: string };
// }) {
//   // Validate that the incoming `locale` parameter is valid
//   if (!AppConfig.locales.includes(props.params.locale)) notFound();

//   const { isModalOpen, closeModal } = useModal();

//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // const [isModalOpen, setIsModalOpen] = useState(false);

//   // const handleOpenModal = () => {
//   //   setIsModalOpen(true);
//   // };

//   // const handleCloseModal = () => {
//   //   setIsModalOpen(false);
//   // };

//   // Using internationalization in Client Components
//   // const messages = useMessages();

//   return (
//     <html lang={props.params.locale}>
//       <body>
//       <ModalProvider>
//         <NextIntlClientProvider
//           locale={props.params.locale}
//           // messages={messages}
//         >
//           {/* <Header /> */}
//           {/* <!-- ===== Page Wrapper Start ===== --> */}
//           <div className="flex">
//             {/* <!-- ===== Sidebar Start ===== --> */}
//             <Sidebar
//               sidebarOpen={sidebarOpen}
//               setSidebarOpen={setSidebarOpen}
//             />
//             {/* <!-- ===== Sidebar End ===== --> */}

//             {/* <!-- ===== Content Area Start ===== --> */}
//             <div className="relative flex flex-1 flex-col lg:ml-72.5">
//               {/* <!-- ===== Header Start ===== --> */}
//               <Navbar
//                 sidebarOpen={sidebarOpen}
//                 setSidebarOpen={setSidebarOpen}
//               />
//               {/* <!-- ===== Header End ===== --> */}

//               {/* <!-- ===== Main Content Start ===== --> */}
//               <main>
//                 <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
//                   {props.children}
//                 </div>
//               </main>
//               {/* <!-- ===== Main Content End ===== --> */}
//             </div>
//             {/* <!-- ===== Content Area End ===== --> */}
//           </div>
//           {/* <!-- ===== Page Wrapper End ===== --> */}
//           <MentorEvaluationModal
//             isOpen={isModalOpen}
//             onRequestClose={closeModal}
//           />
//         </NextIntlClientProvider>
//         </ModalProvider>
//       </body>
//       <script src="node_modules/@material-tailwind/html@latest/scripts/ripple.js"></script>
//       <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
//       <script src="node_modules/@material-tailwind/html@latest/scripts/dialog.js"></script>
//       <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/dialog.js"></script>
//     </html>
//   );
// }
