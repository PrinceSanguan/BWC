
import styles from './HeroSection.module.css';
import Img from '/public/images/aboutus.png';
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

import Header from '../../landingpage/Header';
import Footer from '../../landingpage/Footer';
import FinalCTASection from '../../landingpage/FinalCTASection';
import FAQSection from '../../landingpage/FAQSection';
import ServicesSection from '../../Servicepage/ServicesSection';
import CTASection from '../../landingpage/CTASection';


export default function SoffitFascia() {
  const sectionRef = useRef<HTMLElement>(null);
  const resourceRef = useRef<HTMLSpanElement>(null);
  const titleRestRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const title = sectionRef.current.querySelector(`.${styles.blogHeroTitle}`);
      const subtitle = sectionRef.current.querySelector(`.${styles.blogHeroSubtitle}`);
      const buttons = sectionRef.current.querySelectorAll(`.${styles.ctaBtn}`);
      const image = sectionRef.current.querySelector(`.${styles.blogHeroImage}`);

      // Animate "Resource" first
      if (resourceRef.current) {
        animate(resourceRef.current, {
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 1200,
          easing: 'easeOutQuad',
        });
      }

      // Then animate the rest of the title
      if (titleRestRef.current) {
        animate(titleRestRef.current, {
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 1200,
          delay: 300,
          easing: 'easeOutQuad',
        });
      }

      // Subtitle
      if (subtitle) {
        animate(subtitle, {
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 1200,
          delay: 600,
          easing: 'easeOutQuad',
        });
      }

      // Buttons
      if (buttons.length > 0) {
        animate(buttons, {
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 1200,
          delay: (el, i) => 900 + i * 150,
          easing: 'easeOutQuad',
        });
      }

      // Image
      if (image) {
        animate(image, {
          opacity: [0, 1],
          scale: [0.95, 1],
          duration: 1200,
          delay: 1200,
          easing: 'easeOutQuad',
        });
      }
    }
  }, []);

  return (
    <>
      <Header />
      <section className={styles.blogHeroSection} aria-label="Soffit, Fascia & Gutter Face Cleaning">
        <div className={styles.blogHeroContent}>
          <div className={styles.imageContainer}>
            <img className={styles.blogHeroImage} src={Img} alt="Soffit, Fascia & Gutter Face Cleaning" />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.blogHeroTitle}>
              <span style={{ color: '#FDB940' }}>Soffit, Fascia</span>{' '}
              <span style={{ color: '#3087C1' }}>& Gutter Face Cleaning</span>
            </h1>
            <div className={styles.blogHeroSubtitle}>
              Bring back that 'just moved in' look your home deserves.
            </div>
            <div style={{ textAlign: 'left', color: '#222', fontSize: '1.08rem', marginBottom: 18, fontWeight: 500 }}>
              <div style={{ fontWeight: 600, fontSize: '1.13rem', marginBottom: 8 }}>
                Look up at your home… Do you see green streaks on the fascias, black marks on the gutters, and soffits that have lost their shine?
              </div>
              <div style={{ marginBottom: 18 }}>
                It feels like your house is slowly losing its charm. What started as a bit of dirt has become a constant reminder that your home isn't looking its best.<br /><br />
                Our professional fascia and soffit cleaners help Bristol homeowners rediscover their home's true character every single day. We gently wash away years of grime to reveal that clean, bright finish you remember—the one that makes you proud to pull into your driveway again.
              </div>
            </div>
            <div style={{ fontWeight: 700, color: '#256193', fontSize: '1.13rem', marginBottom: 10 }}>What's included?</div>
            <ul style={{ color: '#111', fontSize: '1.08rem', lineHeight: 1.7, margin: 0, padding: 0, listStyle: 'none', fontWeight: 600 }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ display: 'inline-flex', marginRight: 10 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#fff"/>
                    <path d="M6 12.5L10 16L16 7" stroke="#FDB940" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Clean soffits, fascias & gutter exteriors
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ display: 'inline-flex', marginRight: 10 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#fff"/>
                    <path d="M6 12.5L10 16L16 7" stroke="#FDB940" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Remove green staining, algae, grime
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ display: 'inline-flex', marginRight: 10 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#fff"/>
                    <path d="M6 12.5L10 16L16 7" stroke="#FDB940" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Great as a one-off or with window cleans
              </li>
            </ul>
            <button style={{ marginTop: 22, background: '#FDB940', color: '#23405a', fontWeight: 700, border: 'none', borderRadius: 7, padding: '0.7rem 1.5rem', fontSize: '1.08rem', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 22, color: '#256193' }} aria-hidden="true">&#10077;</span> Get a Free Quote
            </button>
          </div>
        </div>
      </section>
      <CTASection />
      <ServicesSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </>
  );
}
