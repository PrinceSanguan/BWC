import styles from './HeroSection.module.css';
import { gsap } from 'gsap';
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
    const timeline = gsap.timeline();
    
    if (heroRef.current && titleRef.current && subtitleRef.current && 
        listRef.current && buttonRef.current && bottomTextRef.current && imageRef.current) {
      
      // Set initial states for all elements
      gsap.set([titleRef.current, subtitleRef.current, listRef.current, 
               buttonRef.current, bottomTextRef.current, imageRef.current], 
        { opacity: 0, y: 30 }
      );

      // Animation sequence: clear -> blur -> all text appears
      timeline
        // First, blur the glass quickly
        .call(() => {
          setIsBlurred(true);
        }, [], 0.2)
        // Then animate all text elements together after blur completes
        .to([titleRef.current, subtitleRef.current, listRef.current, 
             buttonRef.current, bottomTextRef.current, imageRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1
        }, "+=0.8");
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
