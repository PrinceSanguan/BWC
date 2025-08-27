
import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import HeroSection from '../Areaspage/HeroSection';
import AreasSection from '../Areaspage/AreasSection';
import FinalCTASection from '@/landingpage/FinalCTASection';

export default function Areas() {
  return (
    <>
      <Header />
      <div>
        <HeroSection />
        <AreasSection />
        <FinalCTASection /> 
      </div>
      <Footer />
    </>
  );
}
