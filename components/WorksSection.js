import Image from "next/image";

export default function WorksSection() {
  return (
    <section className="w-full bg-[#f5f2e9] py-8 px-4 sm:px-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light" style={{ fontFamily: 'Didot, serif' }}>Works</h2>
        <a
          href="/works"
          className="text-base sm:text-lg md:text-xl underline font-normal sm:mr-4 self-end sm:self-auto"
          style={{ fontFamily: 'Helvetica Neue, serif' }}
        >
          View Work
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Residential */}
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/works-residential.png" alt="Residential" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-lg sm:text-xl font-normal" style={{ fontFamily: 'Helvetica Neue, serif' }}>RESIDENTIAL</h3>
            <p className="text-xs mt-4" style={{ fontFamily: 'Helvetica Neue, serif' }}>LUXURY APARTMENT, VILLAS & TOWNHOMES</p>
          </div>
        </div>
        {/* Commercial */}
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/works-commercial.png" alt="Commercial" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-lg sm:text-xl font-normal" style={{ fontFamily: 'Helvetica Neue, serif' }}>COMMERCIAL</h3>
            <p className="text-xs mt-4" style={{ fontFamily: 'Helvetica Neue, serif' }}>OFFICES , CO-WORKING SPACES & RETAIL OUTLET</p>
          </div>
        </div>
        {/* Hospitality */}
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/works-hospitality.png" alt="Hospitality" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-lg sm:text-xl font-normal" style={{ fontFamily: 'Helvetica Neue, serif' }}>HOSPITALITY</h3>
            <p className="text-xs mt-4" style={{ fontFamily: 'Helvetica Neue, serif' }}>BOUTIQUE HOTELS, CAFE, RESORT & RESTAURANTS</p>
          </div>
        </div>
      </div>
    </section>
  );
} 