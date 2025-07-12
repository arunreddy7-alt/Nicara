export default function HandcraftedVideoSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/handcrafted.mp4" // <-- replace with your video file path
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
        <h2 className="text-3xl md:text-6xl font-light text-black mb-4" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>
          Curated Interiors with Love
        </h2>
        <p className="text-lg md:text-2xl text-black mb-6" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>
          Know more about our craft
        </p>
        <a
          href="/about"
          className="inline-block bg-white/80 hover:bg-white text-black text-lg font-normal px-8 py-3 rounded-full shadow transition"
        >
          Our Story
        </a>
      </div>
      <div className="absolute inset-0 bg-white/30 pointer-events-none" />
    </section>
  );
} 
