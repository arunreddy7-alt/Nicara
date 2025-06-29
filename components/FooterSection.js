import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full min-h-[93vh] bg-[#6d756b] text-white flex flex-col items-center p-0">
      {/* Centered full logo image at the top */}
      <div className="w-full flex flex-col items-center pt-20 pb-6">
        <Image src="/nicara-footer-full.png" alt="Nicara Full Logo" width={600} height={320} className="mb-6" />
      </div>
      {/* Contact and Quick Links at the bottom */}
      <div className="w-full flex flex-col md:flex-row justify-between items-end max-w-7xl mx-auto px-8 pb-12 flex-1">
        {/* Contact Us */}
        <div className="mb-8 md:mb-1 md:w-1/2 flex flex-col justify-end" style={{ minHeight: 120 }}>
          <h3 className="text-3xl font-light mb-6" style={{ fontFamily: 'Didot, serif' }}>Contact Us</h3>
          <p className="mb-3 text-xl"><span className="font-bold">Email</span> : hello@dwelltales.com</p>
          <p className="mb-3 text-xl"><span className="font-bold">Phone</span> : +91 89777 56062 / +91 85599 01234</p>
          <p className="mb-3 text-xl"><span className="font-bold">Address</span> :<br />Madhapur, Hyderabad</p>
          <p className="text-xl">Indiranagar, Bangalore</p>
        </div>
        {/* Quick Links */}
        <div className="md:w-1/4 flex flex-col items-end justify-end ml-200" style={{ minHeight: 120 }}>
          <h3 className="text-2xl font-light mb-6" style={{ fontFamily: 'Didot, serif' }}>Quick Links</h3>
          <ul className="list-disc pl-6 space-y-4 text-lg ">
            <li><Link href="/works" className="underline">Works</Link></li>
            <li><Link href="/services" className="underline">Services</Link></li>
            <li><Link href="/process" className="underline">Process</Link></li>
            <li><Link href="/about" className="underline">About</Link></li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center pb-4 text-xs opacity-80">
        © Copyright DWELLTALES LLP. All rights reserved.
      </div>
    </footer>
  );
} 