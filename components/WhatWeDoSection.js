import Image from "next/image";
import Link from "next/link";

export default function WhatWeDoSection() {
  const items = [
    {
      title: "Interior Design",
      desc: "From villas to retreats - thoughtful design for how you live.",
      img: "/whatwedo-interior.jpg"
    },
    {
      title: "Project Management",
      desc: "We make the process easy, smooth, and fully handled.",
      img: "/whatwedo-project.jpg"
    },
    {
      title: "Decor & Styling",
      desc: "For moments, rituals, and spaces - full of feeling and joy.",
      img: "/whatwedo-decor.jpg"
    },
    {
      title: "Furniture Design",
      desc: "Designed pieces that feel timeless, personal, and crafted with care.",
      img: "/whatwedo-furniture.jpg"
    }
  ];
  return (
    <section className="w-full bg-white py-12 flex flex-col items-center px-2 sm:px-4">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-10 text-left w-full" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>
        What We Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl mx-auto">
        {items.map((item, idx) => (
          <div key={idx} className="p-6 flex flex-col items-center text-center h-full w-full">
            <Link href="/services" className="w-full block">
              <Image src={item.img} alt={item.title} width={1200} height={900} priority className="w-full h-[55rem] object-cover mb-4 shadow-md" style={{ borderRadius: 0 }} />
            </Link>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>{item.title}</h3>
            <p className="text-base sm:text-lg text-gray-700" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 
