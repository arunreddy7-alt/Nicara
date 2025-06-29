export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-16 pb-8 sm:pb-12 flex flex-col items-center px-4 sm:px-8">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 sm:mb-12 text-center"
        style={{ fontFamily: 'Didot, serif' }}
      >
        Life-changing insights delivered with
        <br className="hidden sm:block" />
        precision and care.
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="w-full aspect-video relative">
          <iframe
            src="https://player.vimeo.com/video/1000660975?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            title="Review"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full aspect-video relative">
          <iframe
            src="https://player.vimeo.com/video/1000659824?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            title="Review"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
} 