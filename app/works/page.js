"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterSection from "../../components/FooterSection";

const images = [
  "/works/1.png",
  "/works/2.png",
  "/works/3.png",
  "/works/4.png",
  "/works/5.png",
  "/works/6.png",
  "/works/7.png",
  "/works/8.png",
  "/works/9.png",
  "/works/10.png",
  "/works/11.png",
  "/works/12.png",
  "/works/13.png",
  "/works/14.png",
  "/works/15.png",
  "/works/16.png",
  "/works/17.png",
  "/works/18.png",
  "/works/19.png",
  "/works/20.png",
  "/works/21.png",
  "/works/22.png",
  "/works/23.png",
  "/works/24.png",
  "/works/25.png",
  "/works/26.png",
  "/works/27.png",
  "/works/28.png",
  "/works/29.png",
  "/works/30.png",
  "/works/31.png",
  "/works/32.png",
  "/works/33.png",
  "/works/34.png",
  "/works/35.png",
  "/works/36.png",
  "/works/37.png",
  "/works/38.png",
  "/works/39.png",
  "/works/40.png",
  "/works/41.png",
  "/works/42.png",
];

export default function WorksPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <main className="min-h-screen bg-white px-6 pt-10 pb-20">
        <h1 className="text-[6rem] font-light leading-none mb-10 text-black" style={{ fontFamily: 'Didot, serif' }}>Works</h1>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-25">
          {images.map((src, idx) => (
            <div key={idx} className="w-full mb-4 break-inside-avoid" data-aos="fade-up">
              <Image
                src={src}
                alt={`Work ${idx + 1}`}
                width={600}
                height={400}
                className="w-full h-auto rounded-no"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </main>
      <FooterSection />
    </>
  );
} 