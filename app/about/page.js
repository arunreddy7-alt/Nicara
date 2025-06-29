import FooterSection from "../../components/FooterSection";

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-white px-6 pt-10 pb-20 flex flex-col items-center">
        <h1 className="text-[6rem] font-light leading-none mb-8 mt-10 text-black" style={{ fontFamily: 'Didot, serif' }}>NICARA</h1>
        <div className="w-full flex justify-center">
          <div style={{ padding: '56.25% 0 0 0', position: 'relative', width: '100%', maxWidth: '1100px', marginTop: '-1.5rem' }}>
            <iframe
              src="https://player.vimeo.com/video/1000655134?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="NICARA/Dwelltales"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Our Story Section */}
        <section className="w-full flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto mt-20 px-0 md:pl-4 md:pr-8 -ml-2">
          <div className="w-full md:w-1/3 mb-12 md:mb-0">
            <h2 className="text-[5rem] md:text-[6rem] font-light leading-[1.05] text-black text-left" style={{ fontFamily: 'Didot, serif' }}>
              Our<br />Story
            </h2>
          </div>
          <div className="w-full md:w-2/3 text-black space-y-8 text-lg md:text-xl -ml-10" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
            <p className="mb-4">The Journey of Nicara</p>
            <p className="mb-4">Nicara was born from a simple yet profound belief—spaces are more than just structures; they are experiences, emotions, and reflections of those who live and work in them.</p>
            <p className="mb-4">Where It All Began</p>
            <p className="mb-4">We started our journey in Madhapur, Hyderabad, with a passion for interior design and architecture, creating bespoke homes, cafes, and hospitality spaces that blended functionality with beauty. Each project was a canvas, and we loved bringing unique visions to life. But as we worked closely with our clients, we noticed a recurring challenge—they often struggled to find the right property before even thinking about design.</p>
            <p className="mb-4">Expanding into Property Scouting</p>
            <p className="mb-4">We realized that great design starts with the right foundation. A well-located, well-structured property makes all the difference in bringing a vision to life. So, we expanded our services to property scouting, helping our clients find spaces that truly matched their needs—whether a cozy home, a buzzing commercial space, or a serene hospitality retreat.</p>
            <p className="mb-4">The Final Touch – Furniture & Styling</p>
            <p className="mb-4">Even after the perfect property was found and beautifully designed, something was missing—the soul of the space. That's when we ventured into furniture and styling, curating handcrafted, sustainable pieces that added warmth, personality, and a touch of Indian artistry.</p>
            <p className="mb-4">Where We Are Today</p>
            <p className="mb-4">Today, Nicara is more than just a design and consulting firm—it's a storyteller of spaces. With a strong presence in Hyderabad (Madhapur) and Bangalore (Indiranagar), we bring our expertise, creativity, and passion wherever great opportunities arise.</p>
            <p className="mb-4">We don't just design spaces—we create experiences that last a lifetime. And we'd love to be part of yours.</p>
          </div>
        </section>
        {/* Founders Section */}
        <section className="w-full flex flex-col md:flex-row items-end justify-between max-w-7xl mx-auto mt-24 mb-10 px-0 md:px-8">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="w-full flex justify-center">
              <img src="/nishanth.jpg" alt="Nishanth P." className="object-cover w-[350px] h-[350px] md:w-[420px] md:h-[420px]" />
            </div>
            <div className="text-3xl font-light mt-6 text-black" style={{ fontFamily: 'Didot, serif' }}>
              Nishanth P.
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="w-full flex justify-center">
              <img src="/sriniketh.png" alt="Sriniketh P." className="object-cover w-[350px] h-[350px] md:w-[420px] md:h-[420px]" />
            </div>
            <div className="text-3xl font-light mt-6 text-black" style={{ fontFamily: 'Didot, serif' }}>
              Sriniketh P.
            </div>
          </div>
        </section>
        {/* Contact/Inquiry Form Section */}
        <section className="w-full flex flex-col md:flex-row items-start justify-between max-w-8xl mx-auto mt-30 px-2 md:px-8">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-[5rem] md:text-[6rem] font-light leading-[1.05] text-black" style={{ fontFamily: 'Didot, serif' }}>
              Reach out to<br />inquire about<br />our services
            </h2>
          </div>
          <form className="w-full md:w-1/2 grid grid-cols-1 gap-6" autoComplete="off">
            <div className="grid grid-cols-2 gap-4">
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
              <label htmlFor="file-upload" className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg min-h-[120px] cursor-pointer transition hover:border-black">
                <span className="flex flex-col items-center justify-center py-8">
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-lg text-gray-600">Add a File</span>
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