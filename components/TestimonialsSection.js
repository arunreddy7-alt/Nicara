export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-16 pb-8 sm:pb-12 flex flex-col items-center px-4 sm:px-8">
      <h2
        className="text-4xl sm:text-5xl md:text-6xl font-light mb-8 sm:mb-12 text-center"
        style={{ fontFamily: 'Raleway, serif' }}
      >
        Testimonials
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="w-full aspect-video relative">
          <video
            src="/review1.mp4"
            controls
            className="absolute top-0 left-0 w-full h-full object-cover rounded"
          />
        </div>
        <div className="w-full aspect-video relative">
          <video
            src="/review2.mp4"
            controls
            className="absolute top-0 left-0 w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
} 