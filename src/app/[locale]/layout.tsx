"use client";
import "@/styles/global.css";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { DemoBadge } from "@/components/DemoBadge";
import { AppConfig } from "@/utils/AppConfig";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

// export const metadata: Metadata = {
//   icons: [
//     {
//       rel: 'apple-touch-icon',
//       url: '/apple-touch-icon.png',
//     },
//     {
//       rel: 'icon',
//       type: 'image/png',
//       sizes: '32x32',
//       url: '/favicon-32x32.png',
//     },
//     {
//       rel: 'icon',
//       type: 'image/png',
//       sizes: '16x16',
//       url: '/favicon-16x16.png',
//     },
//     {
//       rel: 'icon',
//       url: '/favicon.ico',
//     },
//   ],
// };

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(props.params.locale)) notFound();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Using internationalization in Client Components
  // const messages = useMessages();

  return (
    <html lang={props.params.locale}>
      <body>
        <NextIntlClientProvider
          locale={props.params.locale}
          // messages={messages}
        >
          {/* <Header /> */}
          {/* <!-- ===== Page Wrapper Start ===== --> */}
          <div className="flex">
            {/* <!-- ===== Sidebar Start ===== --> */}
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            {/* <!-- ===== Sidebar End ===== --> */}

            {/* <!-- ===== Content Area Start ===== --> */}
            <div className="relative flex flex-1 flex-col lg:ml-72.5">
              {/* <!-- ===== Header Start ===== --> */}
              <Navbar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              {/* <!-- ===== Header End ===== --> */}

              {/* <!-- ===== Main Content Start ===== --> */}
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  {props.children}
                </div>
              </main>
              {/* <!-- ===== Main Content End ===== --> */}
            </div>
            {/* <!-- ===== Content Area End ===== --> */}
          </div>
          {/* <!-- ===== Page Wrapper End ===== --> */}
          {/* <div className="relative flex flex-1 flex-col lg:ml-72.5">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          {props.children}
          </div> */}
          {/* <DemoBadge /> */}
        </NextIntlClientProvider>
      </body>
      <script src="node_modules/@material-tailwind/html@latest/scripts/ripple.js"></script>
      <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
      <script src="node_modules/@material-tailwind/html@latest/scripts/dialog.js"></script>
      <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/dialog.js"></script>
    </html>
  );
}
