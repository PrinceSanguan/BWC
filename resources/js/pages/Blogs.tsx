
import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import HeroSection from '../Blogpage/HeroSection';
import BlogsSection from '../Blogpage/BlogsSection';
import FinalCTASection from '@/landingpage/FinalCTASection';

export default function Blogs() {
  return (
    <>
      <Header />
      <div>
        <HeroSection />
        <BlogsSection />
        <FinalCTASection />   
      </div>
      <Footer />
    </>
  );
}
