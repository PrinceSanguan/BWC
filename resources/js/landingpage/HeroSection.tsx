import styles from './HeroSection.module.css';
import { animate, stagger } from 'animejs';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bottomTextRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    if (
      titleRef.current &&
      subtitleRef.current &&
      listRef.current &&
      buttonRef.current &&
      bottomTextRef.current &&
      imageRef.current
    ) {
      setTimeout(() => setIsBlurred(true), 200);

      animate(
        [
          titleRef.current,
          subtitleRef.current,
          listRef.current,
          buttonRef.current,
          bottomTextRef.current,
          imageRef.current,
        ],
        {
          opacity: [0, 1],
          translateY: [30, 0],
          delay: stagger(100, { start: 800 }),
          duration: 800,
          easing: 'easeOutQuad',
        }
      );
    }
  }, []);

  return (
    <section className={styles.heroSection} aria-label="Hero">
      <div ref={heroRef} className={`${styles.heroGlassEffect} ${isBlurred ? styles.blurred : ''}`}>
        <div className={styles.heroLeftContent}>
          <h1 ref={titleRef}>
            <span className={styles.heroTitle}>Invisible Window <br />Cleaning </span> 
            <span className={styles.heroTitle}> – Crystal-Clear <br />Results Across Bristol</span>
          </h1>
          <h2 ref={subtitleRef} className={styles.heroSubtitle}>Friendly, Local, Fully Insured Window Cleaners for Homes & Businesses</h2>
          <ul ref={listRef} className={styles.heroSubtitle}>
            <li>Regular 6-weekly cleans or one-off visits</li>
            <li>Guaranteed finish.</li>
            <li>Text reminders before every clean</li>
          </ul>
          <button ref={buttonRef} className={styles.ctaBtn} type="button" aria-label="Get a free quote">
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
