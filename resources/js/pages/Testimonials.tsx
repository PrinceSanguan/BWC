
import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import TestimonialSection from '../Testimonialpage/TestimonialSection';
import CompareSection from '../Testimonialpage/CompareSection';
import FinalCTASection from '@/landingpage/FinalCTASection';
import FAQSection from '@/landingpage/FAQSection';
import ContactSection from '@/Contactpage/ContactSection';

export default function Testimonials() {
  return (
    <>
      <Header />
      <div>
        <TestimonialSection />
        <CompareSection />
        <FAQSection />
        <FinalCTASection />
        <ContactSection />  
      </div>
      <Footer />
    </>
  );
}
