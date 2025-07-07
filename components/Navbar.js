"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolledUp, setScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolledUp(true);
      } else {
        setScrolledUp(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to close menu on link click (only in mobile mode)
  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <nav
      className={`w-full border-b border-black/60 bg-white flex items-start justify-between px-4 sm:px-14 pt-2 sm:pt-4 pb-2 fixed top-0 z-50 transition-transform duration-300 ease-in-out ${scrolledUp ? '-translate-y-10' : 'translate-y-0'}`}
    >
      <div className="flex flex-col items-center justify-center" style={{ minWidth: 10 }}>
        <Link href="/">
          <Image src="/nicara-logo.png" alt="Nicara Logo" width={100} height={80} priority className="mb-2" />
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
        <Link href="/about" className="text-xs font-normal hover:underline underline-offset-4 text-black" onClick={handleLinkClick}>OUR STORY</Link>
      </div>
    </nav>
  );
} 