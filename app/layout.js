"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>N</title>
        <meta name="description" content="NICARA - Design and Consulting. Bespoke interiors, architecture, property scouting, and more." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}
      >
        <Navbar />
        <main className="w-full flex flex-col items-center min-h-screen bg-white text-black">
          {children}
        </main>
      </body>
    </html>
  );
}
