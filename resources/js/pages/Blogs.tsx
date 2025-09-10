import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import HeroSection from '../Blogpage/HeroSection';
import BlogsSection from '../Blogpage/BlogsSection';
import FinalCTASection from '@/landingpage/FinalCTASection';
import { Head } from '@inertiajs/react';

export default function Blogs({ blogs }: { blogs: any[] }) {
  return (
    <>
      <Head title="Bristol Window Cleaning | Streak-Free & Eco-Friendly Experts">
        <meta name="description" content="Trusted Bristol window cleaners. Streak-free guarantee, eco-friendly methods, and same-day service. Residential, commercial & solar panel cleaning." />
      </Head>
      <Header />
      <div>
        <HeroSection />
        <BlogsSection blogs={blogs} />
        <FinalCTASection />   
      </div>
      <Footer />
    </>
  );
}
