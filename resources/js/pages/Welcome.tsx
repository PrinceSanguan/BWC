import { Head } from '@inertiajs/react';
import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import HeroSection from '../landingpage/HeroSection';
import AboutUsSection from '../landingpage/AboutUsSection';
import ContactUsSection from '../landingpage/ContactUsSection';
import MeetTheTeamSection from '../landingpage/MeetTheTeamSection';
import WhatWeDoSection from '../landingpage/WhatWeDoSection';
import CTASection from '../landingpage/CTASection';

export default function Welcome() {
  return (
    <>
      <Head title="Welcome">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <WhatWeDoSection />
      <ContactUsSection />
      <MeetTheTeamSection />
      <CTASection />
      <Footer />
    </>
  );
}
