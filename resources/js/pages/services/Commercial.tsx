import styles from './HeroSection.module.css';
import Img from '/public/images/aboutus.png';
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { Head } from '@inertiajs/react';

import Header from '../../landingpage/Header';
import Footer from '../../landingpage/Footer';
import FinalCTASection from '../../landingpage/FinalCTASection';
import FAQSection from '../../landingpage/FAQSection';
import ServicesSection from '../../Servicepage/ServicesSection';
import CTASection from '../../landingpage/CTASection';


export default function Commercial() {
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
      <Head title="Commercial Window Cleaning in Bristol | Experienced Local Professionals">
        <meta name="description" content="Commercial Window Cleaning in Bristol you can rely on. Eco-friendly, fully insured, ladder-free service delivering streak-free results." />
      </Head>
      <Header />
      <section className={styles.blogHeroSection} aria-label="Commercial Window Cleaning">
        <div className={styles.blogHeroContent}>
          <div className={styles.imageContainer}>
            <img className={styles.blogHeroImage} src={Img} alt="Commercial window cleaning" />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.blogHeroTitle}>
              <span style={{ color: '#FDB940' }}>Commercial</span>{' '}
              <span style={{ color: '#3087C1' }}>Window Cleaning</span>
            </h1>
            <div className={styles.blogHeroSubtitle}>
              Safe, reliable window cleaning for businesses across Bristol and South Bristol
            </div>
            <div style={{ textAlign: 'left', color: '#222', fontSize: '1.08rem', marginBottom: 18, fontWeight: 500 }}>
              <div style={{ fontWeight: 600, fontSize: '1.13rem', marginBottom: 8 }}>
                Your windows say more about your business than you think. Smudges, streaks, and neglected glass can quietly damage your professional image whether it’s a shopfront, office, school, or surgery. Customers and clients notice, and their first impression is shaped before you even speak.
              </div>
              <div style={{ marginBottom: 18 }}>
                That’s why our commercial window cleaning Bristol service is trusted by local businesses to deliver spotless, streak-free results every time.
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
                Frames and sills washed as standard
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ display: 'inline-flex', marginRight: 10 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#fff"/>
                    <path d="M6 12.5L10 16L16 7" stroke="#FDB940" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Safe access up to 5 storeys, no ladders needed
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ display: 'inline-flex', marginRight: 10 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#fff"/>
                    <path d="M6 12.5L10 16L16 7" stroke="#FDB940" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                SMS reminders for scheduled visits
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ display: 'inline-flex', marginRight: 10 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#fff"/>
                    <path d="M6 12.5L10 16L16 7" stroke="#FDB940" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Post-clean inspection to guarantee perfection
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
