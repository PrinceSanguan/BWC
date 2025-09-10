import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import HeroSection from '../Areaspage/HeroSection';
import AreasSection from '../Areaspage/AreasSection';
import FinalCTASection from '@/landingpage/FinalCTASection';
import { Head } from '@inertiajs/react';

export default function Areas() {
  return (
    <>
      <Head title="Bristol Window Cleaning | Local Experts Near You">
        <meta name="description" content="Trusted Bristol window cleaners covering North, South, East & Central. Residential & commercial services with eco-friendly streak-free guarantee." />
      </Head>
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
