import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full min-h-[60vh] bg-[#6d756b] text-white flex flex-col items-center p-0">
      {/* Centered full logo image at the top */}
      <div className="w-full flex flex-col items-center pt-16 pb-6">
        <Image src="/nicara-footer-full.png" alt="Nicara Full Logo" width={600} height={320} className="mb-6" />
      </div>
      {/* Contact Us and Quick Links at the bottom */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto px-4 sm:px-8 pb-10 flex-1 gap-10 md:gap-0">
        {/* Contact Us */}
        <div className="w-full md:w-1/3 flex flex-col items-start justify-end mb-8 md:mb-0" style={{ minHeight: 120 }}>
          <h3 className="text-2xl sm:text-3xl font-light mb-6" style={{ fontFamily: 'Didot, serif' }}>Contact Us</h3>
          <p className="mb-3 text-lg sm:text-xl text-left md:text-left"><span className="font-bold">Email</span> : hello@dwelltales.com</p>
          <p className="mb-3 text-lg sm:text-xl text-left md:text-left"><span className="font-bold">Phone</span> : +91 89777 56062 / +91 85599 01234</p>
          <p className="mb-3 text-lg sm:text-xl text-left md:text-left"><span className="font-bold">Address</span> :<br />Madhapur, Hyderabad</p>
          <p className="text-lg sm:text-xl text-left md:text-left">Indiranagar, Bangalore</p>
        </div>
        {/* Quick Links */}
        <div className="w-full md:w-2/3 flex flex-col items-start md:items-end justify-end" style={{ minHeight: 120 }}>
          <div className="flex flex-col w-full max-w-xs md:max-w-sm">
            <h3 className="text-2xl sm:text-3xl font-light mb-6 text-left md:text-right" style={{ fontFamily: 'Didot, serif' }}>Quick Links</h3>
            <ul className="list-disc list-inside ml-0 md:ml-[228px] space-y-4 text-lg">
              <li><Link href="/works" className="underline">Works</Link></li>
              <li><Link href="/services" className="underline">Services</Link></li>
              <li><Link href="/process" className="underline">Process</Link></li>
              <li><Link href="/about" className="underline">About</Link></li>
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