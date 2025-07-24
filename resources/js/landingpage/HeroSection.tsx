import React from 'react';
import { Calendar } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="h-screen text-white relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/12761815_3364_1440_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Main Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Small subtitle */}
        <div className="mb-8">
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(0, 51, 102, 0.85)',
              color: 'white',
              borderRadius: '999px',
              padding: '0.4em 1.2em',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
            }}
          >
            Bristol's Trusted Window Cleaning
          </span>
        </div>
        
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-12 max-w-4xl" style={{ color: '#fff' }}>
          <span className="block" style={{ color: '#fff' }}>Professional Exterior Cleaning</span>
          <span className="block" style={{ color: '#fff' }}>For Homes & Businesses</span>
        </h1>
        
        {/* CTA Button */}
        <button 
          className="px-8 py-4 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
          style={{
            background: '#003366',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 51, 102, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#ffd600';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 214, 0, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = '#003366';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 51, 102, 0.3)';
          }}
        >
          <Calendar className="w-5 h-5" />
          <span>Get a Free Quote</span>
        </button>
        
        {/* Navigation dots */}
        <div className="absolute bottom-8 flex space-x-3">
          <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
          <div className="w-3 h-3 rounded-full" style={{ background: '#ffd600' }}></div>
          <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
        </div>
      </main>

      {/* Decorative elements */}
      <div 
        className="absolute top-1/4 left-10 w-20 h-20 border-2 rotate-45 opacity-30"
        style={{ borderColor: '#ffd600' }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-10 w-16 h-16 border-2 rotate-12 opacity-30"
        style={{ borderColor: '#7ecbff' }}
      ></div>
      <div 
        className="absolute top-1/3 right-1/4 w-12 h-12 border-2 rotate-45 opacity-20"
        style={{ borderColor: '#7ecbff' }}
      ></div>
      <div 
        className="absolute bottom-1/3 left-1/4 w-8 h-8 border-2 rotate-12 opacity-25"
        style={{ borderColor: '#ffd600' }}
      ></div>
      
      {/* Vignette overlays for top, bottom, left, and right */}
      {/* Top vignette */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-32 z-20" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), transparent)'
      }}></div>
      {/* Bottom vignette */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-32 z-20" style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)'
      }}></div>
      {/* Left vignette */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-24 z-20" style={{
        background: 'linear-gradient(to right, rgba(0,0,0,0.35), transparent)'
      }}></div>
      {/* Right vignette */}
      <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-24 z-20" style={{
        background: 'linear-gradient(to left, rgba(0,0,0,0.35), transparent)'
      }}></div>
      
      {/* Light accent beams */}
      <div 
        className="absolute top-0 left-1/4 w-1 h-32 opacity-20 rotate-12"
        style={{ background: 'linear-gradient(to bottom, #7ecbff, transparent)' }}
      ></div>
      <div 
        className="absolute bottom-0 right-1/3 w-1 h-24 opacity-20 -rotate-12"
        style={{ background: 'linear-gradient(to top, #ffd600, transparent)' }}
      ></div>
    </div>
  );
}