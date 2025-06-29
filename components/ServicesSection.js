import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#f5f2e9] py-8 px-4 sm:px-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light" style={{ fontFamily: 'Didot, serif' }}>Services</h2>
        <div className="flex flex-col items-end sm:items-end">
          <a
            href="/services"
            className="text-base sm:text-lg md:text-xl underline font-normal sm:mr-4"
            style={{ fontFamily: 'Helvetica Neue, serif' }}
          >
            View
          </a>
          <a
            href="/services"
            className="text-base sm:text-lg md:text-xl underline font-normal sm:mr-4 -mt-1"
            style={{ fontFamily: 'Helvetica Neue, serif' }}
          >
            Services
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Property Scouting */}
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/services-property.png" alt="Property Scouting" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-lg sm:text-xl font-normal text-left" style={{ fontFamily: 'Helvetica Neue, serif' }}>Property Scouting</h3>
          </div>
        </div>
        {/* Interiors & Architecture */}
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/services-interiors.png" alt="Interiors & Architecture" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-lg sm:text-xl font-normal text-left" style={{ fontFamily: 'Helvetica Neue, serif' }}>Interiors & Architecture</h3>
          </div>
        </div>
        {/* Furniture & Styling */}
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/services-furniture.png" alt="Furniture & Styling" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-lg sm:text-xl font-normal text-left" style={{ fontFamily: 'Helvetica Neue, serif' }}>Furniture & Styling</h3>
          </div>
        </div>
      </div>
    </section>
  );
} 