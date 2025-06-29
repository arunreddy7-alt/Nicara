import Image from "next/image";

export default function ShowcaseImage() {
  return (
    <div className="w-full bg-[#f5f2e9] mt-4">
      <Image
        src="/interior-showcase.png"
        alt="Interior Design Showcase"
        width={1920}
        height={768}
        className="object-cover w-full h-auto rounded-none"
        priority
      />
    </div>
  );
} 