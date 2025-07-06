const steps = [
  {
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
    <section className="w-full bg-white">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-10 text-left w-full px-8 pt-25" style={{ fontFamily: 'Raleway, sans-serif' }}>
        Our Process
      </h2>
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={`flex flex-col lg:flex-row items-stretch justify-center ${
            idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
          } py-12`}
        >
          {/* Text */}
          <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 px-8 py-8">
            <h2 className="text-2xl md:text-4xl font-light mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              {step.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 text-center lg:text-left" style={{ fontFamily: 'Helvetica Neue, serif' }}>
              {step.desc}
            </p>
          </div>
          {/* Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-[28rem] object-cover rounded"
            />
          </div>
        </div>
      ))}
    </section>
  );
} 