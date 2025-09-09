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


export default function Gutter() {
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
      <Head title="Gutter Cleaning in Bristol | Expert, Fast & Reliable Service">
        <meta name="description" content="Reliable Gutter Cleaning in Bristol. Eco-friendly, fully insured, with 20+ years of experience keeping homes safe from water damage. Free quotes!" />
      </Head>
      <Header />
      <section className={styles.blogHeroSection} aria-label="Gutter Clearing">
        <div className={styles.blogHeroContent}>
          <div className={styles.imageContainer}>
            <img className={styles.blogHeroImage} src={Img} alt="Gutter clearing" />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.blogHeroTitle}>
              <span style={{ color: '#FDB940' }}>Gutter</span>{' '}
              <span style={{ color: '#3087C1' }}>Clearing</span>
            </h1>
            <div className={styles.blogHeroSubtitle}>
              Stop costly water damage before it starts - expert gutter cleaning that protects your biggest investment
            </div>
            <div style={{ textAlign: 'left', color: '#222', fontSize: '1.08rem', marginBottom: 18, fontWeight: 500 }}>
              <div style={{ fontWeight: 600, fontSize: '1.13rem', marginBottom: 8 }}>
                Clogged gutters are a ticking time bomb. Right now, blocked debris could be forcing water into your walls, under your roof, or around your foundations. The result? Thousands in structural repairs, damp problems that destroy your home's value, and insurance headaches you never saw coming.
              </div>
              <div style={{ marginBottom: 18 }}>
                Our gutter clearing Bristol service eliminates this threat completely - protecting your property with thorough, professional clearing that keeps water flowing exactly where it should.
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
                Full moss and debris removal
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ display: 'inline-flex', marginRight: 10 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#fff"/>
                    <path d="M6 12.5L10 16L16 7" stroke="#FDB940" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Downpipe power-flushing and flow testing
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ display: 'inline-flex', marginRight: 10 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#fff"/>
                    <path d="M6 12.5L10 16L16 7" stroke="#FDB940" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Before/after photo evidence
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ display: 'inline-flex', marginRight: 10 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#fff"/>
                    <path d="M6 12.5L10 16L16 7" stroke="#FDB940" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Zero-mess cleanup guaranteed
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
