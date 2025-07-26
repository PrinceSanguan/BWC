import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export default function HeroSection() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // Check if device can handle video performance
    const isMobile = window.innerWidth < 768;
    const nav = navigator as any;
    const hasSlowConnection = nav.connection && nav.connection.effectiveType === 'slow-2g';
    
    if (!isMobile && !hasSlowConnection) {
      setShouldLoadVideo(true);
    }

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          setShouldLoadVideo(true);
        }
      },
      { threshold: 0.1 }
    );

    const heroElement = document.querySelector('.hero-section');
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero-section window-cleaning-theme">
      {/* Optimized Background Video */}

      {/* Video or Poster */}
      {shouldLoadVideo && isIntersecting ? (
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        >
          <source src="/videos/webm/12761815_3364_1440_30fps.webm" type="video/webm" />
          <source src="/videos/hero-compressed.mp4" type="video/mp4" />
        </video>
      ) : (
        <picture>
          <source srcSet="/images/hero-poster-optimized.avif" type="image/avif" />
          <source srcSet="/images/hero-poster-optimized.webp" type="image/webp" />
          <div 
            className="hero-video"
            style={{
              backgroundImage: 'url(/images/hero-poster-optimized.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </picture>
      )}

      {/* Dark overlay for video/poster */}
      <div className="hero-video-overlay" />

      {/* Main Hero Content */}
      <main className="hero-content">
        {/* Small subtitle */}
        <div className="mb-8">
          <span style={{fontWeight: 600, fontSize: '1.1rem', color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.18)'}}>
            Bristol's Trusted Window Cleaning
          </span>
        </div>
        
        {/* Main headline */}
        <h1 className="hero-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
          <span className="block">Professional Exterior Cleaning</span>
          <span className="block">For Homes & Businesses</span>
        </h1>
        
        {/* CTA Button */}
        <button className="cta-button">
          <Calendar className="w-5 h-5" />
          <span>Get a Free Quote</span>
        </button>
        
        {/* Navigation dots */}
        <div className="hero-dots">
          <div className="hero-dot hero-dot-inactive"></div>
          <div className="hero-dot hero-dot-active"></div>
          <div className="hero-dot hero-dot-inactive"></div>
        </div>
      </main>

      {/* Decorative elements */}
      <div className="hero-decoration hero-decoration-1"></div>
      <div className="hero-decoration hero-decoration-2"></div>
      <div className="hero-decoration hero-decoration-3"></div>
      <div className="hero-decoration hero-decoration-4"></div>
      
      {/* Vignette overlays */}
      <div className="hero-vignette hero-vignette-top"></div>
      <div className="hero-vignette hero-vignette-bottom"></div>
      <div className="hero-vignette hero-vignette-left"></div>
      <div className="hero-vignette hero-vignette-right"></div>
      
      {/* Light accent beams */}
      <div className="hero-beam hero-beam-1"></div>
      <div className="hero-beam hero-beam-2"></div>
    </div>
  );
}