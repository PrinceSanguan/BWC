import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={`main-header window-cleaning-theme ${scrolled ? 'scrolled' : ''}`}>
        {/* Left: Social Icons - Hidden on mobile */}
        <div className="header-social-container">
          <a href="#" className="social-link">
            <Facebook size={20} />
          </a>
          <a href="#" className="social-link">
            <Instagram size={20} />
          </a>
          <a href="#" className="social-link">
            <Twitter size={20} />
          </a>
        </div>

        {/* Center: Logo */}
        <div className="logo-container">
          <div className="logo-box">
            <img
              src="/images/8f11858a-851a-45be-94a6-0df380a91a71-removebg-preview.png"
              alt="Logo"
              className="logo-image"
            />
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile/tablet */}
        <nav className="desktop-nav">
          <a href="/services" className="nav-link">Services</a>
          <a href="/testimonials" className="nav-link">Reviews</a>
          
          {/* Spacer for logo */}
          <div className="nav-spacer"></div>
          
          <a href="/areas" className="nav-link">Areas We Cover</a>
          <a href="/about" className="nav-link">About Us</a>
        </nav>

        {/* Right: Get a Quote Button (Desktop) & Hamburger (Mobile/Tablet) */}
        <div className="header-actions">
          {/* Desktop Quote Button */}
          <a href="/contact" className="desktop-quote-btn" style={{ display: 'none' }}>
            <button className="cta-button-small">
              Get a Quote
            </button>
          </a>

          {/* Hamburger Menu Button */}
          <button onClick={toggleMobileMenu} className="hamburger-btn">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile/Tablet Navigation Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <a 
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              Services
            </a>
            <a 
              href="/testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              Reviews
            </a>
            <a 
              href="/areas"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              Areas We Cover
            </a>
            <a 
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              About Us
            </a>
          </nav>

          {/* Social Icons in Mobile Menu */}
          <div className="mobile-social-container">
            <a href="#" className="mobile-social-link">
              <Facebook size={24} />
            </a>
            <a href="#" className="mobile-social-link">
              <Instagram size={24} />
            </a>
            <a href="#" className="mobile-social-link">
              <Twitter size={24} />
            </a>
          </div>

          {/* Get a Quote Button in Mobile Menu */}
          <div className="mobile-cta-container">
            <a href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="mobile-cta-button">
                Get a Quote
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}