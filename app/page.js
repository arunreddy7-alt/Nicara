import ShowcaseImage from "../components/ShowcaseImage";
import WhyUsSection from "../components/WhyUsSection";
import WorksSection from "../components/WorksSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen pt-10 bg-white text-black">
      <h4 className="text-5xl font-light leading-relaxed mb-2" style={{ fontFamily: 'Didot, serif' }}>Welcome to Nicara</h4>
      <p className="text-xl leading-relaxed mb-4" style={{ fontFamily: 'Helvetica Neue, serif' }}>Where your story becomes your space.</p>
      <p className="text-lg leading-relaxed mb-4" style={{ fontFamily: 'Helvetica Neue, serif' }}>Interiors | Furniture & Styling | Space Consulting</p>
      <p className="text-lg leading-relaxed mb-4" style={{ fontFamily: 'Helvetica Neue, serif' }}>Hyderabad & Bangalore</p>
      <ShowcaseImage />
      <WhyUsSection />
      <WorksSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}
