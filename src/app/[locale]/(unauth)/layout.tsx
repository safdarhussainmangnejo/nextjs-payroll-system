"use client";
import "@/styles/global.css";
import React, { useState } from "react";
// import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { AppConfig } from "@/utils/AppConfig";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ModalProvider } from "@/app/ModalContext";
import ContentWithModal from "@/app/ContentWithModal";

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
// export default function Layout(props: { children: React.ReactNode }) {

//   return (
//     <>
//     <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
//   );
// }
