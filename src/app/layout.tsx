import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./common/footer";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rate my gov",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="min-h-screen flex flex-col">
        <div className="bg-gradient-to-b from-gray-800 to-red-800 mx-auto w-full flex-1 flex flex-col" >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

