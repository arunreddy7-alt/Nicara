import Image from "next/image";

export default function ProcessSection() {
  return (
    <section className="w-full bg-[#f5f2e9] py-8 px-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-5xl font-light uppercase" style={{ fontFamily: 'Didot, serif' }}>PROCESS</h2>
        <a href="/process" className="text-xl underline font-normal mr-4" style={{ fontFamily: 'Helvetica Neue, serif' }}>View Process</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Row 1 */}
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/process-vision.png" alt="Understanding Your Vision" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-xl font-normal text-left" style={{ fontFamily: 'Helvetica Neue, serif' }}>Understanding Your Vision</h3>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/process-property.png" alt="Finding the Right Property" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-xl font-normal text-left" style={{ fontFamily: 'Helvetica Neue, serif' }}>Finding the Right Property</h3>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/process-design.png" alt="Design & Planning" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-xl font-normal text-left" style={{ fontFamily: 'Helvetica Neue, serif' }}>Design & Planning</h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Row 2 */}
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/process-execution.png" alt="Execution & Project Management" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-xl font-normal text-left" style={{ fontFamily: 'Helvetica Neue, serif' }}>Execution & Project Management</h3>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/process-furniture.png" alt="Furniture & Styling" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-xl font-normal text-left" style={{ fontFamily: 'Helvetica Neue, serif' }}>Furniture & Styling</h3>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#f5f2e9]">
          <Image src="/process-handover.png" alt="Handover & Beyond" width={420} height={420} className="object-cover w-full h-auto" />
          <div className="w-full pt-4 pb-2 px-2">
            <h3 className="text-xl font-normal text-left" style={{ fontFamily: 'Helvetica Neue, serif' }}>Handover & Beyond</h3>
          </div>
        </div>
      </div>
    </section>
  );
} 