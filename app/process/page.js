import Image from "next/image";
import FooterSection from "../../components/FooterSection";

const steps = [
  {
    title: "Understanding Your Vision",
    img: "/process-vision.png",
    top: "",
    bottom: "We listen to your needs and dreams.",
  },
  {
    title: "Finding the Right Property",
    img: "/process-property.png",
    top: "",
    bottom: "Helping you choose the best space.",
  },
  {
    title: "Design & Planning",
    img: "/process-design.png",
    top: "",
    bottom: "Creating a concept that reflects your style.",
  },
];

const steps2 = [
  {
    title: "Execution & Project Management",
    img: "/process-execution.png",
    top: "",
    bottom: "Bringing the design to life seamlessly.",
  },
  {
    title: "Furniture & Styling",
    img: "/process-furniture.png",
    top: "",
    bottom: "Adding the perfect finishing touches.",
  },
  {
    title: "Handover & Beyond",
    img: "/process-handover.png",
    top: "",
    bottom: "Ensuring every detail is just right.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <main className="min-h-screen bg-white px-2 sm:px-4 md:px-10 pt-32 sm:pt-40 pb-16 sm:pb-20">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light leading-none mb-10 text-black w-full text-left" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>
          Process
        </h1>
        <div className="w-full max-w-8xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full text-base sm:text-xl font-normal text-black text-center mb-2 sm:mb-4" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>
                {step.top}
              </div>
              <div className="w-full aspect-[4/5] relative mb-4 sm:mb-6">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '0rem' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
              <div className="text-xl sm:text-3xl md:text-4xl font-light text-black text-center mb-4 sm:mb-7" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>{step.title}</div>
              {step.bottom && (
                <div className="text-base sm:text-xl font-normal text-black text-center mt-1 sm:mt-2 w-full" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>
                  {step.bottom}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full max-w-8xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {steps2.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {step.top && (
                <div className="w-full text-base sm:text-xl font-normal text-black text-center mb-2 sm:mb-4" style={{fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>
                  {step.top}
                </div>
              )}
              <div className="w-full aspect-[4/5] relative mb-4 sm:mb-6">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '0rem' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
              <div className="text-xl sm:text-3xl md:text-4xl font-light text-black text-center mb-4 sm:mb-7" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>{step.title}</div>
              {step.bottom && (
                <div className="text-base sm:text-xl font-normal text-black text-center mt-1 sm:mt-2 w-full" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif'}}>
                  {step.bottom}
                </div>
              )}
            </div>
          ))}
        </div>
        <section className="w-full flex flex-col md:flex-row items-start justify-between max-w-8xl mx-auto mt-16 sm:mt-20 px-2 sm:px-8">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl sm:text-7xl md:text-8xl font-light leading-[1.05] text-black" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>
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
              <label className="inline-flex items-center text-black"><input type="checkbox" className="mr-2" />Interior Design</label>
                <label className="inline-flex items-center text-black"><input type="checkbox" className="mr-2" />Project Management</label>
                <label className="inline-flex items-center text-black"><input type="checkbox" className="mr-2" />Decor & Styling</label>
                <label className="inline-flex items-center text-black"><input type="checkbox" className="mr-2" />Furniture Design</label>
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