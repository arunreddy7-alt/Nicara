"use client";
import { useRef, useState } from "react";

export default function TestimonialsSection() {
  const videoRefs = [useRef(null), useRef(null)];
  const [playing, setPlaying] = useState([false, false]);

  const handlePlayPause = (idx) => {
    const video = videoRefs[idx].current;
    const newPlaying = [...playing];
    if (video.paused) {
      video.play();
      newPlaying[idx] = true;
    } else {
      video.pause();
      newPlaying[idx] = false;
    }
    setPlaying(newPlaying);
  };

  return (
    <section className="w-full bg-white pt-10 sm:pt-16 pb-8 sm:pb-12 flex flex-col items-center px-4 sm:px-8">
      <h2
        className="text-4xl sm:text-5xl md:text-6xl font-light mb-8 sm:mb-12 text-center"
        style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}
      >
        Testimonials
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {["/review1.mp4", "/review2.mp4"].map((src, idx) => (
          <div key={src} className="w-full aspect-video relative flex items-center justify-center">
            <video
              ref={videoRefs[idx]}
              src={src}
              className="absolute top-0 left-0 w-full h-full object-cover rounded"
              controls={false}
              onClick={() => handlePlayPause(idx)}
            />
            {(!playing[idx]) && (
              <button
                onClick={() => handlePlayPause(idx)}
                className="absolute z-10 flex items-center justify-center w-16 h-16 bg-black/70 rounded-full text-white text-3xl hover:bg-black/90 transition"
                style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                aria-label="Play video"
              >
                ▶
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 