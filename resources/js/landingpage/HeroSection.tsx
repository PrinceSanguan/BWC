import styles from './HeroSection.module.css';
import { animate, stagger } from 'animejs';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleFirstRef = useRef<HTMLSpanElement>(null);
  const titleSecondRef = useRef<HTMLSpanElement>(null);
  const titleThirdRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bottomTextRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    if (
      titleFirstRef.current &&
      titleSecondRef.current &&
      titleThirdRef.current &&
      subtitleRef.current &&
      listRef.current &&
      buttonRef.current &&
      bottomTextRef.current &&
      imageRef.current
    ) {
      setTimeout(() => setIsBlurred(true), 200);

      animate(
        [
          titleSecondRef.current, 
          titleFirstRef.current,
          titleThirdRef.current,
          subtitleRef.current,
          listRef.current,
          buttonRef.current,
          bottomTextRef.current,
          imageRef.current,
        ],
        {
          opacity: [0, 1],
          translateY: [30, 0],
          delay: stagger(200, { start: 800 }),
          duration: (el, i) => (i === 1 || i === 2) ? 1000 : 600, // First and third spans slower (1000ms), second faster (600ms)
          easing: 'easeOutQuad',
        }
      );
    }
  }, []);

  // Handler to navigate to /contact
  const handleCTAClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section className={styles.heroSection} aria-label="Hero">
      <div ref={heroRef} className={`${styles.heroGlassEffect} ${isBlurred ? styles.blurred : ''}`}> 
        <div className={styles.heroLeftContent}>
          <h1>
            <span ref={titleFirstRef} className={styles.heroTitle} style={{ opacity: 0 }}>Bristol's Most Trusted</span> 
            <span ref={titleSecondRef} className={styles.heroTitle} style={{ opacity: 0 }}> <br />Window Cleaning</span>
            <span ref={titleThirdRef} className={styles.heroTitle} style={{ opacity: 0 }}> Experts Since 2003</span>
          </h1>
          <h2 ref={subtitleRef} className={styles.heroSubtitle}>Friendly, Local, Fully Insured Window Cleaners for Homes & Businesses</h2>
          <ul ref={listRef} className={styles.heroSubtitle}>
            <li>Regular 6-weekly cleans or one-off visits</li>
            <li>Guaranteed finish.</li>
            <li>Text reminders before every clean</li>
          </ul>
          <button
            ref={buttonRef}
            className={styles.ctaBtn}
            type="button"
            aria-label="Get a free quote"
            onClick={handleCTAClick}
          >
            <span className={styles.ctaIcon} aria-hidden="true">&#10077;</span> Get a Free Quote
          </button>
          <h3 ref={bottomTextRef} className={styles.heroBottomText}>Fast replies | No obligation</h3>
        </div>
        <div className={styles.heroRightContent}>
          <img ref={imageRef} src="/images/heroPic.png" alt="hero image" />
        </div>
      </div>
    </section>
  );
}
