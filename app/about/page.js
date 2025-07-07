import FooterSection from "../../components/FooterSection";
import Image from "next/image";

function AboutHeroSection() {
  return (
    <section className="relative w-screen h-[45vh] flex items-center justify-center overflow-hidden -mt-13" style={{ background: "#f8f8f8" }}>
      <Img
        src="/about-hero.jpg" // Replace with your image path
        alt="About Us Hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-4" style={{ fontFamily: 'Didot, serif' }}>
          About Us
        </h1>
        <div className="w-24 h-1 bg-white mx-auto mt-2 rounded-full opacity-80" />
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-white flex flex-col items-center p-0 m-0">
        <AboutHeroSection />
        <section className="w-full flex flex-col items-center justify-center py-16 bg-white">
          <div className="max-w-3xl w-full text-center mx-auto">
            <h2 className="text-4xl font-light text-gray-700 mb-8" style={{ fontFamily: 'Raleway, serif' }}>
              About Nicara
            </h2>
            <p className="text-base text-black-700 mb-4">We&apos;re not just interior designers — we&apos;re storytellers of space.
            At Nicara, we believe your home should feel like you — layered with comfort, beauty, and quiet joy. Our work blends function with feeling, clean lines with softness, and soul with every detail. From homes and retreats to styled celebrations, we design and execute spaces that are lived in, loved, and made to last. We keep things personal, intentional, and effortlessly elegant. That&apos;s the Nicara way.</p>
          </div>
        </section>
        <section className="w-full flex flex-col items-center justify-center py-12 bg-white">
          <div className="w-full px-8">
            <h2 className="text-4xl font-light text-gray-700 mb-6 text-center" style={{ fontFamily: 'Raleway, serif' }}>
              The Founders
            </h2>
          </div>
          <div className="max-w-3xl w-full mx-auto">
            <p className="text-lg text-black-700 mb-4 text-center">
              We&apos;ve been friends since we were kids — building things, breaking things, and chasing ideas that felt bigger than us.
              Life took us to different cities — London, Bangalore, Pune, and back to Hyderabad — each one shaping us in its own way.
              Nishanth followed the path of design, exploring spaces that hold beauty, emotion, and soul.
              Sriniketh studied at BITS Pilani and found his rhythm in structure — grounding creativity with precision and calm.
              Nicara is where those paths meet — where friendship becomes vision, and every space is built with intention, detail, and quiet joy.
            </p>
          </div>
        </section>
        {/* Founders Section */}
        <section className="w-full flex flex-col lg:flex-row items-end justify-between max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-24 mb-8 sm:mb-10 px-4 sm:px-6 lg:px-0 lg:px-8">
          <div className="w-full lg:w-1/2 flex flex-col items-center mb-8 lg:mb-0">
            <div className="w-full flex justify-center">
              <Image src="/nishanth.jpg" alt="Nishanth P." width={420} height={420} className="object-cover w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px]" />
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-light mt-4 sm:mt-6 text-black" style={{ fontFamily: 'Didot, serif' }}>
              Nishanth P.
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="w-full flex justify-center">
              <Image src="/sriniketh.png" alt="Sriniketh P." width={420} height={420} className="object-cover w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px]" />
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-light mt-4 sm:mt-6 text-black" style={{ fontFamily: 'Didot, serif' }}>
              Sriniketh P.
            </div>
          </div>
        </section>
        {/* Contact/Inquiry Form Section */}
        <section className="w-full flex flex-col md:flex-row items-start justify-between max-w-8xl mx-auto mt-4 sm:mt-8 px-2 sm:px-8 mb-24">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-light leading-[1.05] text-black" style={{ fontFamily: 'Didot, serif' }}>
              Reach out to<br />inquire about<br />our services
            </h2>
          </div>
          <form className="w-full lg:w-1/2 grid grid-cols-1 gap-4 sm:gap-6" autoComplete="off">
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
            <button type="submit" className="mt-2 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">Submit</button>
          </form>
        </section>
      </main>
      <FooterSection />
    </>
  );
} 