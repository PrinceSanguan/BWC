
import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import WhoWeAreSection from '../Aboutpage/WhoWeAreSection';
import OurValuesSection from '../Aboutpage/OurValuesSection';
import TeamSection from '../Aboutpage/TeamSection';
import WhyChooseUsSection from '../Aboutpage/WhyChooseUsSection';
import GetStartedSection from '../Aboutpage/GetStartedSection';
import FinalCTASection from '@/landingpage/FinalCTASection';
import FAQSection from '@/landingpage/FAQSection';

export default function About() {
  return (
    <>
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
