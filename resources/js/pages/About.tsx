
import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import WhoWeAreSection from '../Aboutpage/WhoWeAreSection';
import OurValuesSection from '../Aboutpage/OurValuesSection';
import HistorySection from '../Aboutpage/HistorySection';
import TeamSection from '../Aboutpage/TeamSection';
import WhyChooseUsSection from '../Aboutpage/WhyChooseUsSection';

export default function About() {
  return (
    <>
      <Header />
      <div>
        <WhoWeAreSection />
        <OurValuesSection />
        <HistorySection />
        <TeamSection />
        <WhyChooseUsSection />
      </div>
      <Footer />
    </>
  );
}
