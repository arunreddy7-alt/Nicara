"use client";
import { useEffect, useState } from "react";

const images = [
  { src: "/homes.jpg", name: "Homes", position: "center" },
  { src: "/retreats.jpg", name: "Retreats", position: "bottom" },
  { src: "/celebrations-events.jpg", name: "Celebrations & Events", position: "center" },
  { src: "/furniture-decor.jpg", name: "Furniture & Decor", position: "bottom" }
];

const positionClasses = {
  center: "absolute inset-0 flex items-center justify-center w-full",
  bottom: "absolute bottom-16 left-1/2 -translate-x-1/2 w-full flex justify-center",
  top: "absolute top-16 left-1/2 -translate-x-1/2 w-full flex justify-center",
  "bottom-left": "absolute bottom-16 left-12 flex justify-start"
};

export default function AutoImageSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 100);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const posClass = positionClasses[images[current].position] || positionClasses.center;
  const textMarginTop = ["center", "top"].includes(images[current].position) ? "mt-[100px]" : "";

  return (
    <div className="w-screen h-[calc(100vh-100px)] overflow-hidden -mt-13">
      <img
        src={images[current].src}
        alt={images[current].name}
        className="object-cover w-full h-full"
        style={{ transition: 'opacity 0.5s' }}
      />
      {/* Name text at variable position with fade animation and navbar padding */}
      <div className={posClass}>
        <span
          className={`text-black text-5xl md:text-6xl font-light text-center select-none transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'} ${textMarginTop}`}
          style={{ fontFamily: 'Raleway, serif' }}
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
