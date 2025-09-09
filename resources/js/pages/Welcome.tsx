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
      <Head title="Bristol Window Cleaners | Professional Service You Can Trust">
        <meta name="description" content="Choose Bristol Window Cleaners for a spotless finish. Fully insured, eco-friendly, and affordable. Local, reliable, and available 7 days a week." />
      </Head>
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
