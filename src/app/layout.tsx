import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "sonner";
import BirthCertificatePage from "@/components/BirthForm/BirthCertificatePage";

const InterSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Bangladesh",
  description: "Digital service for a connected nation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${InterSans.variable} antialiased`}>
        <Navbar />
        <BirthCertificatePage />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
