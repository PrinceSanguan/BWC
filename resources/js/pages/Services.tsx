import { Head } from '@inertiajs/react';
import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import HeroSection from '../Servicepage/HeroSection';
import ServicesSection from '../Servicepage/ServicesSection';
import FinalCTASection from '../landingpage/FinalCTASection';

export default function Services() {
  return (
    <>
      <Head title="Bristol Window Cleaning | Streak-Free, Eco-Friendly Experts">
        <meta name="description" content="Trusted window cleaners in Bristol since 2003. Residential & commercial services with eco-friendly, ladder-free cleaning. Streak-free results, fully insured team." />
      </Head>
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
