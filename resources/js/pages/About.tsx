import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import WhoWeAreSection from '../Aboutpage/WhoWeAreSection';
import OurValuesSection from '../Aboutpage/OurValuesSection';
import TeamSection from '../Aboutpage/TeamSection';
import WhyChooseUsSection from '../Aboutpage/WhyChooseUsSection';
import GetStartedSection from '../Aboutpage/GetStartedSection';
import FinalCTASection from '@/landingpage/FinalCTASection';
import FAQSection from '@/landingpage/FAQSection';
import { Head } from '@inertiajs/react';

export default function About() {
  return (
    <>
      <Head title="About Us | Your Trusted Bristol Window Cleaners">
        <meta name="description" content="Bristol Window Cleaners with over 20 years’ experience. Eco-friendly, fully insured team delivering streak-free results you can rely on." />
      </Head>
      <Header />
      <div>
        <WhoWeAreSection />
        <OurValuesSection />
        <GetStartedSection />
        <TeamSection />
        <WhyChooseUsSection />
        <FAQSection />
        <FinalCTASection />
      </div>
      <Footer />
    </>
  );
}
