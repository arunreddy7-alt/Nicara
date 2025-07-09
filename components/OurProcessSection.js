import Image from "next/image";

const steps = [
  {
    title1:"our process",
    title: "Listen",
    desc: "We begin with a conversation - understanding your lifestyle, values, and how you want to feel in your space.",
    img: "/process-1.jpg"
  },
  {
    title: "Imagine",
    desc: "We create a visual direction - moodboards, palettes, and materials that reflect your story.",
    img: "/process-2.jpg"
  },
  {
    title: "Create",
    desc: "From drawing to execution, we bring the design to life with care and clarity.",
    img: "/process-3.jpg"
  },
  {
    title: "Style",
    desc: "We layer the space with textures, florals, decors, and curated details that feel like you.",
    img: "/process-4.jpg"
  },
  {
    title: "Handover",
    desc: "You walk into a space that's fully ready - designed, styled, and delivered with joy.",
    img: "/process-5.jpg"
  }
];

export default function OurProcessSection() {
  return (
    <section className="w-full bg-white -mt-15 pt-0">
      <h1
        className="text-5xl md:text-6xl font-light text-left text-black mb--5 mt-32 ml-4"
        style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}
      >
        Our process
      </h1>
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={`flex flex-col lg:flex-row items-stretch justify-center ${
            idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
          } ${idx === 0 ? 'mt-0' : 'mt-0'}`}
        >
          {/* Text */}
          <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 px-8 py-8">
            <h2 className="text-2xl md:text-4xl font-light mb-4" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>
              {step.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 text-center lg:text-left" style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif' }}>
              {step.desc}
            </p>
          </div>
          {/* Image */}
          <div className={`w-full lg:w-1/2 flex items-center justify-end p-0 pr-0 pl-0 ${idx === 0 ? '-mt-32' : ''} relative`}>
            <Image
              src={step.img}
              alt={step.title}
              width={700}
              height={448}
              className={`w-full ${idx === 0 ? 'h-[50rem]' : 'h-[50rem]'} object-cover`}
            />
            {idx === 0 && (
              <a
                href="/process"
                className="absolute top-20 right-20 text-black text-base sm:text-lg font-medium px-4 py-2"
                style={{ fontFamily: 'Montserrat, Inter, Geist, sans-serif', zIndex: 10 }}
              >
                View All
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
} 
