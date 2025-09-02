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
        <div id="area-0"><AreasSection areaIndex={0} /></div>
        <div id="area-1"><AreasSection areaIndex={1} /></div>
        <div id="area-2"><AreasSection areaIndex={2} /></div>
        <div id="area-3"><AreasSection areaIndex={3} /></div>
        <FinalCTASection />
      </div>
      <Footer />
    </>
  );
}
