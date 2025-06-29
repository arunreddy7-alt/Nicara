import Image from "next/image";

export default function WorksSection() {
  return (
    <section className="w-full bg-[#f5f2e9] py-8 px-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-5xl font-light" style={{ fontFamily: 'Didot, serif' }}>Works</h2>
        <a href="/works" className="text-xl underline font-normal mr-4" style={{ fontFamily: 'Helvetica Neue, serif' }}>View Work</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Residential */}
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/works-residential.png" alt="Residential" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-xl font-normal" style={{ fontFamily: 'Helvetica Neue, serif' }}>RESIDENTIAL</h3>
            <p className="text-xs mt-4" style={{ fontFamily: 'Helvetica Neue, serif' }}>LUXURY APARTMENT, VILLAS & TOWNHOMES</p>
          </div>
        </div>
        {/* Commercial */}
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/works-commercial.png" alt="Commercial" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-xl font-normal" style={{ fontFamily: 'Helvetica Neue, serif' }}>COMMERCIAL</h3>
            <p className="text-xs mt-4" style={{ fontFamily: 'Helvetica Neue, serif' }}>OFFICES , CO-WORKING SPACES & RETAIL OUTLET</p>
          </div>
        </div>
        {/* Hospitality */}
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/works-hospitality.png" alt="Hospitality" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-xl font-normal" style={{ fontFamily: 'Helvetica Neue, serif' }}>HOSPITALITY</h3>
            <p className="text-xs mt-4" style={{ fontFamily: 'Helvetica Neue, serif' }}>BOUTIQUE HOTELS, CAFE, RESORT & RESTAURANTS</p>
          </div>
        </div>
      </div>
    </section>
  );
} 