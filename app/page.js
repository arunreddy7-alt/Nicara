import WhyUsSection from "../components/WhyUsSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import HandcraftedVideoSection from "../components/HandcraftedVideoSection";
import OurProcessSection from "../components/OurProcessSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FooterSection from "../components/FooterSection";
import AutoImageSlider from "../components/AutoImageSlider";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center min-h-screen bg-white text-black">
      <AutoImageSlider />
      <WhyUsSection />
      <WhatWeDoSection />
      <HandcraftedVideoSection />
      <OurProcessSection />
      <TestimonialsSection />
      <section className="w-full flex flex-col md:flex-row items-start justify-between max-w-8xl mx-auto mt-16 sm:mt-20 px-2 sm:px-8">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-light leading-[1.05] text-black" style={{ fontFamily: 'Didot, serif' }}>
            Reach out to<br />inquire about<br />our services
          </h2>
        </div>
        <form className="w-full md:w-1/2 grid grid-cols-1 gap-4 sm:gap-6" autoComplete="off">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1 text-black">First Name <span className="text-gray-500">(required)</span></label>
              <input type="text" className="w-full border border-gray-450 rounded p-2 text-black" required />
            </div>
            <div>
              <label className="block text-sm mb-1 text-black">Last Name</label>
              <input type="text" className="w-full border border-gray-450 rounded p-2 text-black" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1 text-black">Email <span className="text-gray-500">(required)</span></label>
            <input type="email" className="w-full border border-gray-450 rounded p-2 text-black" required />
          </div>
          <div>
            <label className="block text-sm mb-1 text-black">Phone</label>
            <input type="tel" className="w-full border border-gray-450 rounded p-2 text-black" />
          </div>
          <div>
            <label className="block text-sm mb-1 text-black">What services are you interested in?</label>
            <div className="flex flex-col gap-2 pl-1">
              <label className="inline-flex items-center text-black"><input type="checkbox" className="mr-2" />Property Scouting</label>
              <label className="inline-flex items-center text-black"><input type="checkbox" className="mr-2" />Interiors & Architecture</label>
              <label className="inline-flex items-center text-black"><input type="checkbox" className="mr-2" />Furniture & Styling</label>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1 text-black">Preferred Date</label>
            <input type="date" className="w-full border border-gray-450 rounded p-2 text-black" placeholder="dd/mm/yyyy" />
          </div>
          <div>
            <label className="block text-sm mb-1 text-black">What is your budget?</label>
            <input type="text" className="w-full border border-gray-450 rounded p-2 text-black" />
          </div>
          <div>
            <label className="block text-sm mb-1 text-black">Message <span className="text-gray-500">(required)</span></label>
            <textarea className="w-full border border-gray-450 rounded p-2 min-h-[80px] text-black" required></textarea>
          </div>
          <div>
            <label className="block text-sm mb-1 text-black">Attach Floor Plan/Design?</label>
            <label htmlFor="file-upload" className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg min-h-[100px] sm:min-h-[120px] cursor-pointer transition hover:border-black">
              <span className="flex flex-col items-center justify-center py-6 sm:py-8">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400 mb-2 sm:w-10 sm:h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-base sm:text-lg text-gray-600">Add a File</span>
              </span>
              <input id="file-upload" type="file" className="hidden" />
            </label>
          </div>
          <button type="submit" className="mt-2 mb-8 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">Submit</button>
        </form>
      </section>
      <FooterSection />
    </main>
  );
}
