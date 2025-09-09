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
        <meta name="description" content="Bristol Window Cleaners with over 20 years’ experience. Our eco-friendly, fully insured team delivers streak-free results for homes and businesses across Bristol. Discover our values, meet our team, and see why we’re the city’s most trusted window cleaners." />
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
