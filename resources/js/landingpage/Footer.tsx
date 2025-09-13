import styles from './Footer.module.css';
import { Phone, Mail, MessageCircle, Facebook } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const colLeftRef = useRef<HTMLDivElement>(null);
  const colMidRef = useRef<HTMLDivElement>(null);
  const colRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial hidden state for each column
    [colLeftRef.current, colMidRef.current, colRightRef.current].forEach(col => {
      if (col) {
        col.style.opacity = '0';
        col.style.transform = 'translateY(50px)';
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate all columns together
            animate([colLeftRef.current, colMidRef.current, colRightRef.current], {
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 800,
              easing: 'easeOutQuad',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe the entire footer
    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer ref={footerRef} className={styles.mainFooter} aria-label="Footer">
      <div className={styles.footerGrid}>
        {/* Left: Logo, mission, social */}
        <div ref={colLeftRef} className={styles.footerColLeft}>
          <div className={styles.footerLogoWrap}>
            <img src="/images/8f11858a-851a-45be-94a6-0df380a91a71-removebg-preview.png" alt="Company Logo" className={styles.footerLogo} />
          </div>
          <div className={styles.footerMission}>
            Our mission is that to offer you the best possible window cleaning service in Bristol. There is only one thing worse than a dirty window and that is a poorly cleaned one!
          </div>
          <div className={styles.footerSocialRow}>
            <span>Follow us</span>
            <a href="#" aria-label="Facebook" className={styles.footerSocialIcon}>
              <Facebook size={20} color="#23405a" />
            </a>
            {/* Pinterest icon not available in lucide-react as 'Pinterest' or 'PinterestIcon'. Add when available or use another icon. */}
          </div>
          <div className={styles.footerCopyright}>
            &copy; 2025 Invisible Window Cleaning. All rights reserved.
          </div>
        </div>
        {/* Middle: Contact, Company, Services */}
        <div ref={colMidRef} className={styles.footerColMid}>
          <div className={styles.footerContactBlock}>
            <div className={styles.footerContactRow}>
              <span className={styles.footerContactIcon}>
                <Phone size={18} color="#256193" strokeWidth={2} />
              </span>
              <span>07598 208258</span>
            </div>
            <div className={styles.footerContactRow}>
              <span className={styles.footerContactIcon}>
                <Mail size={18} color="#256193" strokeWidth={2} />
              </span>
              <span>clean@invisiblewindowcleaning.co.uk</span>
            </div>
            <div className={styles.footerContactRow}>
              <span className={styles.footerContactIcon}>
                <MessageCircle size={18} color="#256193" strokeWidth={2} />
              </span>
              <span>[Whatsapp Clickable Link]</span>
            </div>
          </div>
          <div className={styles.footerLinksWrap}>
            <div className={styles.footerLinksCol}>
              <div className={styles.footerLinksTitle}><b>Company</b></div>
              <a href="/" className={styles.footerLink}>Home</a>
              <a href="/about" className={styles.footerLink}>About Us</a>
              <a href="/services" className={styles.footerLink}>Services</a>
              <a href="/contact" className={styles.footerLink}>Contact</a>
            </div>
            <div className={styles.footerLinksCol}>
              <div className={styles.footerLinksTitle}><b>Services</b></div>
              <a href="/services/domestic" className={styles.footerLink}>Domestic Window Cleaning</a>
              <a href="/services/commercial" className={styles.footerLink}>Commercial Window Cleaning</a>
              <a href="/services/gutter" className={styles.footerLink}>Gutter Clearing</a>
              <a href="/services/soffit-fascia" className={styles.footerLink}>Soffit, Fascia, &amp; Gutter Face Cleaning</a>
            </div>
          </div>
        </div>
        {/* Right: Location, hours */}
        <div ref={colRightRef} className={styles.footerColRight}>
          <div className={styles.footerLocationTitle}><b>Location</b></div>
          <div className={styles.footerLocationAddr}>Bristol BS8 2SB<br />195 Whiteladies Road</div>
          <div className={styles.footerOpenTitle}><b>Open Hours</b></div>
          <div className={styles.footerOpenHours}>Mon - Sat: 8 am – 4 pm,<br />Sunday: 10 am – 2 pm</div>
        </div>
      </div>
      {/* Microformats h-card for organization info */}
      <div className="h-card" style={{display: 'none'}}>
        <span className="p-name">Your Company Name</span>
        <a className="u-url" href="https://yourdomain.com/">https://yourdomain.com/</a>
        <img className="u-logo" src="https://yourdomain.com/logo.png" alt="Logo" />
        <span className="p-tel">+1-800-555-1212</span>
      </div>
    </footer>
  );
}
