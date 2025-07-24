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
      <header
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          zIndex: '50',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.5rem',
          transition: 'all 0.3s ease',
          color: 'white',
          marginTop: '-24px',
          background: scrolled
            ? 'linear-gradient(135deg, #001a33 0%, #003366 100%)'
            : 'transparent',
          boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
          backdropFilter: scrolled ? 'blur(6px)' : undefined
        }}
      >
        {/* Left: Social Icons - Hidden on mobile */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem', 
          marginRight: '1rem',
          marginTop: '18px'
        }}>
          <a 
            href="#" 
            style={{
              color: 'white',
              transition: 'all 0.3s ease',
              display: 'none'
            }}
            className="social-link"
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#ffd600';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Facebook size={20} />
          </a>
          <a 
            href="#" 
            style={{
              color: 'white',
              transition: 'all 0.3s ease',
              display: 'none'
            }}
            className="social-link"
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#ffd600';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Instagram size={20} />
          </a>
          <a 
            href="#" 
            style={{
              color: 'white',
              transition: 'all 0.3s ease',
              display: 'none'
            }}
            className="social-link"
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#ffd600';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Twitter size={20} />
          </a>
        </div>

        {/* Center: Logo */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flex: '1',
          marginTop: '18px'
        }} className="logo-container">
          <div
            style={{
              width: '8.5rem',
              height: '3.5rem',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.75rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.10)'
            }}
            className="logo-box"
          >
            <img
              src="/images/8f11858a-851a-45be-94a6-0df380a91a71-removebg-preview.png"
              alt="Logo"
              style={{ 
                width: 'auto', 
                height: '90%',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile/tablet */}
        <nav style={{ 
          display: 'none',
          alignItems: 'center', 
          gap: '2rem', 
          fontSize: '0.875rem', 
          fontWeight: '500',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: '18px'
        }} className="desktop-nav">
          <a 
            href="/services" 
            style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#ffd600'}
            onMouseOut={(e) => e.currentTarget.style.color = 'white'}
          >
            Services
          </a>
          <a 
            href="/testimonials" 
            style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#ffd600'}
            onMouseOut={(e) => e.currentTarget.style.color = 'white'}
          >
            Reviews
          </a>
          
          {/* Spacer for logo */}
          <div style={{ width: '10rem' }}></div>
          
          <a 
            href="/areas" 
            style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#ffd600'}
            onMouseOut={(e) => e.currentTarget.style.color = 'white'}
          >
            Areas We Cover
          </a>
          <a 
            href="/about" 
            style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#ffd600'}
            onMouseOut={(e) => e.currentTarget.style.color = 'white'}
          >
            About Us
          </a>
        </nav>

        {/* Right: Get a Quote Button (Desktop) & Hamburger (Mobile/Tablet) */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          marginLeft: '1rem',
          marginTop: '18px'
        }}>
          {/* Desktop Quote Button */}
          <a href="/contact" style={{ display: 'none' }} className="desktop-quote-btn">
            <button
              style={{
                background: '#ffd600',
                color: 'black',
                fontWeight: '600',
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(255, 214, 0, 0.15)',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f59e0b'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffd600'}
            >
              Get a Quote
            </button>
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'block'
            }}
            className="hamburger-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile/Tablet Navigation Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(135deg, #001a33 0%, #003366 100%)',
            zIndex: '40',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            color: 'white'
          }}
        >
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            fontSize: '1.25rem',
            fontWeight: '500'
          }}>
            <a 
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                padding: '1rem'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#ffd600'}
              onMouseOut={(e) => e.currentTarget.style.color = 'white'}
            >
              Services
            </a>
            <a 
              href="/testimonials"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                padding: '1rem'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#ffd600'}
              onMouseOut={(e) => e.currentTarget.style.color = 'white'}
            >
              Reviews
            </a>
            <a 
              href="/areas"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                padding: '1rem'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#ffd600'}
              onMouseOut={(e) => e.currentTarget.style.color = 'white'}
            >
              Areas We Cover
            </a>
            <a 
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                padding: '1rem'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#ffd600'}
              onMouseOut={(e) => e.currentTarget.style.color = 'white'}
            >
              About Us
            </a>
          </nav>

          {/* Social Icons in Mobile Menu */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <a 
              href="#" 
              style={{
                color: 'white',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#ffd600';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Facebook size={24} />
            </a>
            <a 
              href="#" 
              style={{
                color: 'white',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#ffd600';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              style={{
                color: 'white',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#ffd600';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Twitter size={24} />
            </a>
          </div>

          {/* Get a Quote Button in Mobile Menu */}
          <a 
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{ marginTop: '2rem' }}
          >
            <button
              style={{
                background: '#ffd600',
                color: 'black',
                fontWeight: '600',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.125rem',
                boxShadow: '0 4px 12px rgba(255, 214, 0, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f59e0b';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#ffd600';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get a Quote
            </button>
          </a>
        </div>
      )}

      {/* Responsive CSS */}
      <style>
        {`
          /* Desktop styles */
          @media (min-width: 1025px) {
            .desktop-nav {
              display: flex !important;
            }
            .desktop-quote-btn {
              display: block !important;
            }
            .hamburger-btn {
              display: none !important;
            }
            .social-link {
              display: block !important;
            }
          }
          
          /* Tablet and Mobile styles */
          @media (max-width: 1024px) {
            .desktop-nav {
              display: none !important;
            }
            .desktop-quote-btn {
              display: none !important;
            }
            .hamburger-btn {
              display: block !important;
            }
            .social-link {
              display: none !important;
            }
            
            /* Center logo and reduce size on tablet/mobile */
            .logo-container {
              position: absolute !important;
              left: 50% !important;
              transform: translateX(-50%) !important;
              flex: none !important;
            }
            
            .logo-box {
              width: 6rem !important;
              height: 2.5rem !important;
            }
          }
          
          /* Mobile specific adjustments */
          @media (max-width: 768px) {
            header {
              padding: 0.75rem 1rem !important;
            }
            
            header > div:first-child {
              margin-right: 0.5rem !important;
            }
            
            header > div:last-child {
              margin-left: 0.5rem !important;
            }
            
            /* Further reduce logo size on mobile */
            .logo-box {
              width: 5rem !important;
              height: 2rem !important;
            }
          }
        `}
      </style>
    </>
  );
}