
import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import HeroSection from '../Servicepage/HeroSection';
import ServicesSection from '../Servicepage/ServicesSection';

export default function Services() {
  return (
    <>
      <Header />
      <div>
        <HeroSection />
        <ServicesSection />
      </div>
      <Footer />
    </>
  );
}
