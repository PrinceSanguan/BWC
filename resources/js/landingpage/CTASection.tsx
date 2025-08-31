import styles from './CTASection.module.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const logoCol = element.querySelector(`.${styles.ctaLogoCol}`);
    const textCol = element.querySelector(`.${styles.ctaTextCol}`);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoCol,
        { x: -100, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'center center',
            toggleActions: 'play none none none',
          },
        }
      );
      gsap.fromTo(
        textCol,
        { x: 100, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'center center',
            toggleActions: 'play none none none',
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={sectionRef} className={styles.ctaSection} aria-label="Who We Are">
      <div className={styles.ctaContainer}>
        <div className={styles.ctaLogoCol}>
          <img src="/images/Group 2.webp" alt="Invisible Window Cleaning logo" className={styles.ctaLogoImg} />
        </div>
        <div className={styles.ctaTextCol}>
          <h2 className={styles.ctaTitle}>
            Who <span className={styles.ctaAccent}>We Are</span>
          </h2>
          <p className={styles.ctaDesc}>
            Invisible Window Cleaning is a small, independent window cleaning business serving homes and businesses across the Bristol urban area.
          </p>
          <p className={styles.ctaDesc}>
            We’re not a franchise or agency — just a skilled, reliable team who believe in doing the job properly, treating customers well, and being easy to work with.
          </p>
        </div>
      </div>
    </section>
  );
}
