"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CursorShape from "@/components/CursorShape/CursorShape";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <html lang="en">
      <title>Locomotive</title>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet"
      />

      <body className={` `}>
        <CustomCursor />
        {/* <CursorShape /> */}
        {children}
      </body>
    </html>
  );
}
