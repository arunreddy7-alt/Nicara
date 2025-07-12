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
      className={`w-full border-b border-black/60 fixed top-0 z-50 transition-colors duration-300
        ${scrolledUp ? 'bg-white shadow-md -translate-y-5' : 'bg-transparent translate-y-0'}
        flex flex-col items-center px-4 sm:px-14 pt-2 sm:pt-4 pb-2
        transition-transform duration-300 ease-in-out font-["Montserrat","Inter","Geist","sans-serif"]`}
    >
      {/* Centered Logo at the Top */}
      <div className="flex flex-col items-center justify-center z-10">
        <Link href="/">
          <Image src="/nicara-logo.png" alt="Nicara Logo" width={100} height={80} priority className="mb-2" />
        </Link>
      </div>
      {/* Nav Links Centered Below Logo */}
      <div className="hidden sm:flex flex-row gap-8 items-center justify-center mt-3 z-0">
        <Link href="/" className="text-xs font-normal hover:underline underline-offset-4 text-black font-['Montserrat','Inter','Geist',sans-serif]" onClick={handleLinkClick}>HOME</Link>
        <Link href="/about" className="text-xs font-normal hover:underline underline-offset-4 text-black font-['Montserrat','Inter','Geist',sans-serif]" onClick={handleLinkClick}>OUR STORY</Link>
        <Link href="/services" className="text-xs font-normal hover:underline underline-offset-4 text-black font-['Montserrat','Inter','Geist',sans-serif]" onClick={handleLinkClick}>WHAT WE DO</Link>
        <Link href="/process" className="text-xs font-normal hover:underline underline-offset-4 text-black font-['Montserrat','Inter','Geist',sans-serif]" onClick={handleLinkClick}>PROCESS</Link>
        <Link href="/works" className="text-xs font-normal hover:underline underline-offset-4 text-black font-['Montserrat','Inter','Geist',sans-serif]" onClick={handleLinkClick}>WORKS</Link>
      </div>
      {/* Hamburger Icon on the right for mobile */}
      <button
        className="sm:hidden flex flex-col justify-center items-center ml-auto mt-2 z-10 absolute right-4 top-1/2 -translate-y-1/2"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="block w-10 h-0.5 bg-black mb-2"></span>
        <span className="block w-10 h-0.5 bg-black mb-2"></span>
        <span className="block w-10 h-0.5 bg-black"></span>
      </button>
      {/* Mobile Nav Links */}
      <div
        className={
          menuOpen
            ? "absolute top-full left-0 w-full bg-white/80 flex flex-col items-center gap-6 py-8 border-b border-black/60 sm:hidden"
            : "hidden"
        }
      >
        <Link href="/" className="text-xs font-normal hover:underline underline-offset-4 text-black font-['Montserrat','Inter','Geist',sans-serif]" onClick={handleLinkClick}>HOME</Link>
        <Link href="/works" className="text-xs font-normal hover:underline underline-offset-4 text-black font-['Montserrat','Inter','Geist',sans-serif]" onClick={handleLinkClick}>WORKS</Link>
        <Link href="/services" className="text-xs font-normal hover:underline underline-offset-4 text-black font-['Montserrat','Inter','Geist',sans-serif]" onClick={handleLinkClick}>SERVICES</Link>
        <Link href="/process" className="text-xs font-normal hover:underline underline-offset-4 text-black font-['Montserrat','Inter','Geist',sans-serif]" onClick={handleLinkClick}>PROCESS</Link>
        <Link href="/about" className="text-xs font-normal hover:underline underline-offset-4 text-black font-['Montserrat','Inter','Geist',sans-serif]" onClick={handleLinkClick}>OUR STORY</Link>
      </div>
    </nav>
  );
} 