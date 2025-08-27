
import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import HeroSection from '../Servicepage/HeroSection';
import ServicesSection from '../Servicepage/ServicesSection';
import FinalCTASection from '../landingpage/FinalCTASection';

export default function Services() {
  return (
    <>
      <Header />
      <div>
        <HeroSection />
        <ServicesSection />
        <FinalCTASection /> 
      </div>
      <Footer />
    </>
  );
}
