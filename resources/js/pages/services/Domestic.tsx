import styles from './HeroSection.module.css';
import Img from '/public/images/aboutus.png';
import { useRef, useEffect } from 'react';
import { animate } from 'animejs';
import { Head } from '@inertiajs/react';

import Header from '../../landingpage/Header';
import Footer from '../../landingpage/Footer';
import FinalCTASection from '../../landingpage/FinalCTASection';
import FAQSection from '../../landingpage/FAQSection';
import ServicesSection from '../../Servicepage/ServicesSection';
import CTASection from '../../landingpage/CTASection';



export default function Domestic() {
  return (
    <>
      <Head title="Domestic Window Cleaner Bristol | Get Spotless Results Today">
        <meta name="description" content="Choose Domestic Window Cleaner Bristol for sparkling, streak-free windows—Eco-friendly, insured service tailored for homes. Book your free quote now!" />
      </Head>
      <Header />
      <section className={styles.blogHeroSection} aria-label="Domestic Window Cleaning">
        <div className={styles.blogHeroContent}>
          <div className={styles.imageContainer}>
            <img className={styles.blogHeroImage} src={Img} alt="Domestic window cleaning" />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.blogHeroTitle}>
              <span style={{ color: '#FDB940' }}>Domestic</span>{' '}
              <span style={{ color: '#3087C1' }}>Window Cleaning</span>
            </h1>
            <div className={styles.blogHeroSubtitle}>
              Crystal-clear, streak-free windows... every time, from Bristol’s most trusted local window cleaners.
            </div>
            <div style={{ textAlign: 'left', color: '#222', fontSize: '1.08rem', marginBottom: 18, fontWeight: 500 }}>
              <div style={{ fontWeight: 600, fontSize: '1.13rem', marginBottom: 8 }}>Tired of window cleaners who overpromise and underdeliver?</div>
              <div style={{ marginBottom: 18 }}>
                You’re not alone. Many Bristol homeowners struggle to find a cleaner they can truly count on. That’s why we created <b style={{ color: '#3087C1' }}>Invisible Window Cleaning</b>... a reliable, professional service built on trust, consistency, and spotless results.
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
                Flexible 6–weekly or one–off cleans
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ display: 'inline-flex', marginRight: 10 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#fff"/>
                    <path d="M6 12.5L10 16L16 7" stroke="#FDB940" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Pure water pole system (no harsh chemicals)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ display: 'inline-flex', marginRight: 10 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#fff"/>
                    <path d="M6 12.5L10 16L16 7" stroke="#FDB940" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Internal window cleaning on request
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ display: 'inline-flex', marginRight: 10 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#fff"/>
                    <path d="M6 12.5L10 16L16 7" stroke="#FDB940" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                SMS reminders before every visit
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ display: 'inline-flex', marginRight: 10 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#fff"/>
                    <path d="M6 12.5L10 16L16 7" stroke="#FDB940" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                No need to be home – access only required
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
