import { Head } from '@inertiajs/react';
import Header from '@/landingpage/Header';
import Footer from '@/landingpage/Footer';
import HeroSection from '@/landingpage/HeroSection';
import RatingsSection from '@/landingpage/RatingsSection';
import CTASection from '@/landingpage/CTASection';
import ActionsSection from '@/landingpage/ActionsSection';
import VideoSection from '@/landingpage/VideoSection';
import TestimonialSection from '@/landingpage/TestimonialSection';
import FAQSection from '@/landingpage/FAQSection';
import FinalCTASection from '@/landingpage/FinalCTASection';

export default function Welcome() {
  return (
    <>
      <Head title="Welcome | Landing Page" />
      <div className="landing-page-theme">
        <Header />
        <HeroSection />
        <RatingsSection />
        <CTASection />
        <ActionsSection />
        <VideoSection />
        <TestimonialSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </div>
    </>
  );
}
