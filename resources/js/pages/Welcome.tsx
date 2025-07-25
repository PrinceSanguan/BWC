import { Head } from '@inertiajs/react';
import { Suspense, lazy } from 'react';
import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import HeroSection from '../landingpage/HeroSection';

// Lazy load non-critical components
const AboutUsSection = lazy(() => import('../landingpage/AboutUsSection'));
const WhatWeDoSection = lazy(() => import('../landingpage/WhatWeDoSection'));
const ContactUsSection = lazy(() => import('../landingpage/ContactUsSection'));
const MeetTheTeamSection = lazy(() => import('../landingpage/MeetTheTeamSection'));

// Loading fallback component
const SectionLoader = () => (
  <div style={{ 
    height: '200px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#f8fcff'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid #7ecbff',
      borderTop: '3px solid transparent',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
  </div>
);

export default function Welcome() {
  return (
    <>
      <Head title="Professional Window Cleaning Bristol | Free Quote">
        {/* Critical CSS - Inline for immediate rendering */}
        <style>{`
          /* Critical above-the-fold styles */
          .hero-section {
            height: 100vh;
            position: relative;
            overflow: hidden;
            color: white;
          }
          .main-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 50;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 1.5rem;
            margin-top: -24px;
            transition: all 0.3s ease;
            color: white;
          }
          .hero-content {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            padding: 0 1.5rem;
            text-align: center;
          }
          .cta-button {
            background: #003366;
            color: white;
            font-weight: 600;
            padding: 1rem 2rem;
            border-radius: 0.375rem;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1rem;
            transform: translateZ(0);
            box-shadow: 0 4px 15px rgba(0, 51, 102, 0.3);
          }
          .cta-button:hover {
            background: #ffd600;
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 10px 25px rgba(255, 214, 0, 0.3);
          }
          .hero-video {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
          }
          .logo-container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            margin-top: 18px;
          }
          .logo-box {
            width: 8.5rem;
            height: 3.5rem;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.75rem;
            box-shadow: 0 2px 12px rgba(0,0,0,0.10);
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @media (max-width: 768px) {
            .logo-box {
              width: 6rem !important;
              height: 2.5rem !important;
            }
          }
        `}</style>

        {/* Meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Professional window cleaning services in Bristol. Reliable, trusted team for homes and businesses. 6-weekly cleans, gutter clearing, commercial services. Get your free quote today!" />
        <meta name="keywords" content="window cleaning Bristol, gutter cleaning, commercial window cleaning, domestic window cleaning, fascia cleaning" />
        <meta name="theme-color" content="#003366" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Professional Window Cleaning Bristol | Free Quote" />
        <meta property="og:description" content="Bristol's trusted window cleaning service. Professional, reliable team for homes and businesses." />
        <meta property="og:image" content="/images/hero-poster-optimized.webp" />
        <meta property="og:type" content="website" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.bunny.net" />
        
        {/* Optimized font loading */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <style>{`@font-face { font-family: 'Montserrat'; font-style: normal; font-weight: 400; font-display: swap; src: local('Montserrat'), url('https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm45_QpRyS7m.woff2') format('woff2'); }`}</style>
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/hero-poster-optimized.avif" as="image" />
        <link rel="preload" href="/images/8f11858a-851a-45be-94a6-0df380a91a71-removebg-preview.png" as="image" />
        
        {/* Prefetch non-critical resources */}
        <link rel="prefetch" href="/videos/hero-compressed.webm" />
        <link rel="prefetch" href="/images/about-section-bg.avif" />
        
        {/* Service Worker for caching */}
        <script>{`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js');
            });
          }
        `}</script>
      </Head>
      
      <div className="window-cleaning-theme">
        <Header />
        <HeroSection />
        
        <Suspense fallback={<SectionLoader />}>
          <AboutUsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <WhatWeDoSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ContactUsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <MeetTheTeamSection />
        </Suspense>
        
        <Footer />
      </div>
    </>
  );
}