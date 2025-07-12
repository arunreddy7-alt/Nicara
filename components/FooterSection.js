import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full min-h-[60vh] bg-[#6d756b] text-white flex flex-col items-center p-0">
      <div className="w-full flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-8 pb-10 flex-1 gap-10 md:gap-0">
        {/* Contact Us - Left */}
        <div className="md:w-1/3 flex flex-col items-start justify-end mb-8 md:mb-0 ml-0 md:ml-0" style={{ minHeight: 120 }}>
          <h3 className="text-2xl sm:text-3xl font-light mb-6" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>Contact Us</h3>
          <p className="mb-3 text-lg sm:text-xl text-left md:text-left"><span className="font-bold">Email</span> : hello@dwelltales.com</p>
          <p className="mb-3 text-lg sm:text-xl text-left md:text-left"><span className="font-bold">Phone</span> : +91 89777 56062</p>
          <p className="mb-3 text-lg sm:text-xl text-left md:text-left"><span className="font-bold">Address</span> :<br />1. Madhapur, Hyderabad<br />2. Indiranagar, Bangalore</p>
          <p className="text-lg sm:text-xl text-left md:text-left"></p>
        </div>
        {/* Logo - Center */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
          <Image src="/nicara-footer-full.png" alt="Nicara Full Logo" width={340} height={170} className="mb-6" />
        </div>
        {/* Quick Links - Right */}
        <div className="w-full md:w-1/3 flex flex-col items-end justify-end" style={{ minHeight: 120 }}>
          <div className="flex flex-col w-full max-w-xs md:max-w-sm">
            <h3 className="text-2xl sm:text-3xl font-light mb-6 text-left md:text-right" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>Quick Links</h3>
            <ul className="list-disc list-inside ml-0 md:ml-[228px] space-y-4 text-lg">
              <li><Link href="/works" className="underline">Our story</Link></li>
              <li><Link href="/services" className="underline">What We Do</Link></li>
              <li><Link href="/process" className="underline">Process</Link></li>
              <li><Link href="/about" className="underline">Works</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full text-center pb-4 text-xs opacity-80">
        © Copyright DWELLTALES LLP. All rights reserved.
      </div>
    </footer>
  );
} 