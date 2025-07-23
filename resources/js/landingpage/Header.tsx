import React from 'react';
import { Facebook, Instagram, Twitter, Scissors } from 'lucide-react';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-transparent text-white">
      {/* Left: Logo */}
      <div className="flex items-center justify-center w-20 h-20">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #ffd600 0%, #ffdd33 100%)',
            border: '2px solid #7ecbff',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 5px 20px rgba(255, 214, 0, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <Scissors className="w-8 h-8" style={{color: '#003366'}} />
        </div>
      </div>
      {/* Center: Navigation */}
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium justify-center w-full">
        <a 
          href="/services" 
          className="transition-colors duration-300"
          style={{color: 'white'}}
          onMouseOver={(e) => (e.target as HTMLAnchorElement).style.color = '#ffd600'}
          onMouseOut={(e) => (e.target as HTMLAnchorElement).style.color = 'white'}
        >
          Services
        </a>
        <a 
          href="/testimonials" 
          className="transition-colors duration-300"
          style={{color: 'white'}}
          onMouseOver={(e) => (e.target as HTMLAnchorElement).style.color = '#ffd600'}
          onMouseOut={(e) => (e.target as HTMLAnchorElement).style.color = 'white'}
        >
          Reviews
        </a>
        <a 
          href="/areas" 
          className="transition-colors duration-300"
          style={{color: 'white'}}
          onMouseOver={(e) => (e.target as HTMLAnchorElement).style.color = '#ffd600'}
          onMouseOut={(e) => (e.target as HTMLAnchorElement).style.color = 'white'}
        >
          Areas We Cover
        </a>
        <a 
          href="/about" 
          className="transition-colors duration-300"
          style={{color: 'white'}}
          onMouseOver={(e) => (e.target as HTMLAnchorElement).style.color = '#ffd600'}
          onMouseOut={(e) => (e.target as HTMLAnchorElement).style.color = 'white'}
        >
          About Us
        </a>
        <a 
          href="/contact" 
          className="transition-colors duration-300"
          style={{color: 'white'}}
          onMouseOver={(e) => (e.target as HTMLAnchorElement).style.color = '#ffd600'}
          onMouseOut={(e) => (e.target as HTMLAnchorElement).style.color = 'white'}
        >
          Get a Quote
        </a>
      </nav>
      {/* Right: Social Icons */}
      <div className="flex items-center space-x-4">
        <a 
          href="#" 
          className="transition-all duration-300"
          style={{color: '#7ecbff'}}
          onMouseOver={(e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.color = '#ffd600';
            target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.color = '#7ecbff';
            target.style.transform = 'translateY(0)';
          }}
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a 
          href="#" 
          className="transition-all duration-300"
          style={{color: '#7ecbff'}}
          onMouseOver={(e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.color = '#ffd600';
            target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.color = '#7ecbff';
            target.style.transform = 'translateY(0)';
          }}
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a 
          href="#" 
          className="transition-all duration-300"
          style={{color: '#7ecbff'}}
          onMouseOver={(e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.color = '#ffd600';
            target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            target.style.color = '#7ecbff';
            target.style.transform = 'translateY(0)';
          }}
        >
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
}