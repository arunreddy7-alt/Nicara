"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper to close menu on link click (only in mobile mode)
  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <nav className="w-full border-b border-black/60 bg-white flex items-start justify-between px-4 sm:px-14 pt-6 sm:pt-14 pb-4 relative z-50">
      <div className="flex flex-col items-center justify-center" style={{ minWidth: 10 }}>
        <Link href="/">
          <Image src="/nicara-logo.png" alt="Nicara Logo" width={140} height={120} priority className="mb-3" />
        </Link>
      </div>
      {/* Hamburger Icon */}
      <button
        className="sm:hidden flex flex-col justify-center items-center ml-4 mt-2"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="block w-10 h-0.5 bg-black mb-2"></span>
        <span className="block w-10 h-0.5 bg-black mb-2"></span>
        <span className="block w-10 h-0.5 bg-black"></span>
      </button>
      {/* Nav Links */}
      <div
        className={
          menuOpen
            ? "absolute top-full left-0 w-full bg-white flex flex-col items-center gap-6 py-8 border-b border-black/60 sm:static sm:flex-row sm:gap-8 sm:py-0 sm:border-0"
            : "hidden sm:flex gap-8 items-center mt-4 sm:mt-9"
        }
      >
        <Link href="/" className="text-xs font-normal hover:underline underline-offset-4 text-black" onClick={handleLinkClick}>HOME</Link>
        <Link href="/works" className="text-xs font-normal hover:underline underline-offset-4 text-black" onClick={handleLinkClick}>WORKS</Link>
        <Link href="/services" className="text-xs font-normal hover:underline underline-offset-4 text-black" onClick={handleLinkClick}>SERVICES</Link>
        <Link href="/process" className="text-xs font-normal hover:underline underline-offset-4 text-black" onClick={handleLinkClick}>PROCESS</Link>
        <Link href="/about" className="text-xs font-normal hover:underline underline-offset-4 text-black" onClick={handleLinkClick}>ABOUT</Link>
      </div>
    </nav>
  );
} 