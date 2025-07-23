import React from 'react';
import { Calendar } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="h-screen text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #003366 0%, #004080 50%, #001a33 100%)' }}>
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237ecbff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='45' cy='45' r='1'/%3E%3Ccircle cx='15' cy='45' r='1'/%3E%3Ccircle cx='45' cy='15' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Main Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Small subtitle */}
        <div className="mb-8">
          <p className="text-sm font-medium tracking-widest uppercase" style={{ color: '#ffd600' }}>
            Bristol's Trusted Window Cleaning
          </p>
        </div>
        
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-12 max-w-4xl">
          <span className="block">Professional Exterior Cleaning</span>
          <span className="block" style={{ color: '#7ecbff' }}>For Homes & Businesses</span>
        </h1>
        
        {/* CTA Button */}
        <button 
          className="px-8 py-4 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
          style={{
            background: '#ffd600',
            color: '#003366',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            const btn = e.target as HTMLButtonElement;
            btn.style.background = '#7ecbff';
            btn.style.color = 'white';
            btn.style.boxShadow = '0 10px 25px rgba(126, 203, 255, 0.3)';
          }}
          onMouseOut={(e) => {
            const btn = e.target as HTMLButtonElement;
            btn.style.background = '#ffd600';
            btn.style.color = '#003366';
            btn.style.boxShadow = '0 4px 15px rgba(255, 214, 0, 0.3)';
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
      
      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(0,51,102,0.2) 0%, transparent 30%, transparent 70%, rgba(0,51,102,0.3) 100%)'
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