import styles from './HeroSection.module.css';
import Img from '/public/images/servicehero.jpg';
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function HeroSection() {
  
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const professionalRef = useRef<HTMLSpanElement>(null);
  const exteriorRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const button1Ref = useRef<HTMLButtonElement>(null);
  const button2Ref = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    if (professionalRef.current) {
      animate(professionalRef.current, {
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuad',
      });
    }
    if (exteriorRef.current) {
      animate(exteriorRef.current, {
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 500, // Delay after "Professional"
        easing: 'easeOutQuad',
      });
    }
    if (subtitleRef.current) {
      animate(subtitleRef.current, {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 1000, // Delay after title
        easing: 'easeOutQuad',
      });
    }
    if (button1Ref.current) {
      animate(button1Ref.current, {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 1200, // Delay after subtitle
        easing: 'easeOutQuad',
      });
    }
    if (button2Ref.current) {
      animate(button2Ref.current, {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 1400, // Delay after first button
        easing: 'easeOutQuad',
      });
    }
    if (rightRef.current) {
      animate(rightRef.current, {
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 1600, // Delay after buttons to make it last
        easing: 'easeOutQuad',
      });
    }
  }, []);

  return (
    <section className={styles.serviceHeroSection} aria-label="Service Hero" style={{ background: '#fff' }}>
        <div className={styles.serviceContent}>
          <div ref={leftRef} className={styles.serviceContentLeft}>
            <h1>
              <span ref={professionalRef} className={styles.serviceHeroTitle}>Bristol Window Cleaning </span>
              <span ref={exteriorRef} className={styles.serviceHeroTitle}>Professional Exterior Cleaning Services</span>
            </h1>
            <h2 ref={subtitleRef} className={styles.serviceHeroSubtitle}>
              We offer a range of exterior cleaning services for homes and businesses in Bristol.
              Whether you need regular upkeep or a one-off spruce-up, we’ve got you covered.</h2>

          <div className={styles.buttonGroup}>
            <button ref={button1Ref} className={styles.ctaBtn} type="button">
            <span className={styles.ctaIcon} aria-hidden="true">&#10077;</span> Get a Free Quote
            </button>
            <button ref={button2Ref} className={styles.ctaBtn}>See Our Services</button>
            </div>
          </div>
          <div ref={rightRef} className={styles.serviceContentRight}>
            <img src={Img} alt="Service Hero" className={styles.serviceHeroImage} />
          </div>
        </div>
    </section>
  );
}
