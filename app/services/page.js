import Image from "next/image";
import FooterSection from "../../components/FooterSection";

const services = [
  {
    title: "Property Scouting",
    img: "/services-property.png",
    description: "Finding the perfect space for your home, business, or hospitality project.",
  },
  {
    title: "Interiors & Architecture",
    img: "/services-interiors.png",
    description: "Designing thoughtful, functional, and artistic spaces.",
  },
  {
    title: "Furniture & Styling",
    img: "/services-furniture.png",
    description: "Handcrafted, sustainable pieces that add warmth and personality.",
  },
];

export default function ServicePage() {
  return (
    <>
      <main className="min-h-screen bg-white px-3 sm:px-6 pt-8 sm:pt-10 pb-16 sm:pb-20 flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light leading-none mb-10 text-black w-full text-left" style={{ fontFamily: 'Didot, serif' }}>
          Services
        </h1>
        <div className="w-full max-w-8xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full aspect-[4/5] relative mb-6 sm:mb-9">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '0rem' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
              <div className="text-2xl sm:text-4xl font-light text-black text-left w-full" style={{ fontFamily: 'Didot, serif' }}>
                {service.title}
              </div>
              <p className="text-base sm:text-xl font-normal text-black text-left w-full mt-6 sm:mt-9" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <section className="w-full flex flex-col md:flex-row items-start justify-between max-w-8xl mx-auto mt-20 sm:mt-30 px-2 sm:px-8">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-7xl md:text-8xl font-light leading-[1.05] text-black" style={{ fontFamily: 'Didot, serif' }}>
              Reach out to<br />inquire about<br />our services
            </h1>
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
            <button type="submit" className="mt-2 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">Submit</button>
          </form>
        </section>
      </main>
      <FooterSection />
    </>
  );
} 