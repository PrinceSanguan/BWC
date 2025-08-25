
import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import TestimonialSection from '../Testimonialpage/TestimonialSection';
import CompareSection from '../Testimonialpage/CompareSection';

export default function Testimonials() {
  return (
    <>
      <Header />
      <div>
        <TestimonialSection />
        <CompareSection />
      </div>
      <Footer />
    </>
  );
}
