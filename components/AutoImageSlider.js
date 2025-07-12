"use client";
import { useEffect, useState } from "react";

const images = [
  { src: "/homes.jpg", name: "Homes With Heart", position: "center" },
  { src: "/retreats.jpg", name: "Pieces That Belong", position: "bottom" },
  { src: "/celebrations-events.jpg", name: "Tiny Tales", position: "center" },
  { src: "/furniture-decor.jpg", name: "Styled Retreats", position: "bottom" }
];

const positionClasses = {
  center: "absolute inset-0 flex items-center justify-center w-full",
  bottom: "absolute bottom-16 left-1/2 -translate-x-1/2 w-full flex justify-center",
  top: "absolute top-16 left-1/2 -translate-x-1/2 w-full flex justify-center",
  "bottom-left": "absolute bottom-16 left-12 flex justify-start"
};

export default function AutoImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const posClass = positionClasses[images[current].position] || positionClasses.center;
  const textMarginTop = ["center", "top"].includes(images[current].position) ? "mt-[100px]" : "";

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <img
        src={images[current].src}
        alt={images[current].name}
        className="object-cover w-full h-full"
      />
      {/* Optional overlay for readability */}
      {/* <div className="absolute inset-0 bg-white/20" /> */}
      {/* Name text at variable position with fade animation and navbar padding */}
      <div className={posClass}>
        <span
          className="text-black text-5xl md:text-6xl font-light text-center select-none"
          style={{
            fontFamily: 'Montserrat, Inter, Geist, sans-serif',
            marginTop:
              current === 0 ? '-2rem'
              : current === 1 ? '-22rem'
              : current === 2 ? '-13rem'
              : current === 3 ? '-21rem'
              : undefined,
            marginLeft:
              current === 1 ? '39rem'
              : current === 2 ? '17rem'
              : current === 3 ? '33rem'
              : undefined
          }}
        >
          {images[current].name.charAt(0).toUpperCase() + images[current].name.slice(1)}
        </span>
      </div>
      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full border border-black/60 bg-black transition-all duration-300 ${current === idx ? 'opacity-80' : 'opacity-30'}`}
          />
        ))}
      </div>
    </div>
  );
} 
