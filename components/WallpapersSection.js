import Image from "next/image";
import Link from "next/link";

const wallpapers = [
  {
    img: "/wallpaper1.jpg",
    title: ""
  },
  {
    img: "/wallpaper2.jpg",
    title: ""
  },
  {
    img: "/wallpaper3.jpg",
    title: ""
  },
  {
    img: "/wallpaper4.jpg",
    title: ""
  },
  {
    img: "/wallpaper5.jpg",
    title: ""
  },
  {
    img: "/wallpaper6.jpg",
    title: ""
  }
];

export default function WallpapersSection() {
  return (
    <section className="w-full bg-white py-12 flex flex-col items-center px-2 sm:px-4">
      <div className="w-full flex items-center justify-between mb-10">
        <h2 className="text-3xl sm:text-4xl font-light text-left text-gray-700" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>
          Our Works
        </h2>
        <Link
          href="/works"
          className="text-base sm:text-lg font-medium text-black hover:underline transition mr-16 mt-3"
          style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}
        >
          View all
        </Link>
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
        {wallpapers.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white">
            <div className="w-full aspect-[4/5] relative mb-4">
              <Link href="/works" className="w-full h-full block">
                <Image
                  src={item.img}
                  alt={item.title || "Wallpaper"}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </Link>
            </div>
            <div className="w-full text-lg sm:text-xl font-normal text-black text-left" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>
              {item.title}
            </div>
            <div className="w-full text-base text-gray-600 text-left mt-1" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 