import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-black/60 bg-white flex items-start justify-between px-14 pt-14 pb-4">
      <div className="flex flex-col items-center justify-center" style={{ minWidth: 10 }}>
        <Image src="/nicara-logo.png" alt="Nicara Logo" width={140} height={120} priority className="mb-3" />
      </div>
      <div className="flex gap-8 items-center mt-4 sm:mt-9">
        <Link href="/" className="text-xs font-normal hover:underline underline-offset-4 text-black">HOME</Link>
        <Link href="/works" className="text-xs font-normal hover:underline underline-offset-4 text-black">WORKS</Link>
        <Link href="/services" className="text-xs font-normal hover:underline underline-offset-4 text-black">SERVICES</Link>
        <Link href="/process" className="text-xs font-normal hover:underline underline-offset-4 text-black">PROCESS</Link>
        <Link href="/about" className="text-xs font-normal hover:underline underline-offset-4 text-black">ABOUT</Link>
      </div>
    </nav>
  );
} 