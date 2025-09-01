import styles from './FinalCTASection.module.css';
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function FinalCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      const title = section.querySelector(`.${styles.finalCTATitle}`);
      const subtitle = section.querySelector(`.${styles.finalCTASubtitle}`);
      const ctaBtn = section.querySelector(`.${styles.ctaBtn}`);
      const scrollTopBtn = section.querySelector(`.${styles.finalCTAScrollTop}`);
      [title, subtitle, ctaBtn, scrollTopBtn].forEach(el => {
        if (el) {
          (el as HTMLElement).style.opacity = '0';
          (el as HTMLElement).style.transform = 'translateY(50px)';
        }
      });
    }

    const handleScroll = () => {
      if (hasAnimated.current) return;
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionMiddle = rect.top + rect.height / 2;
      const viewportMiddle = window.innerHeight / 2;

      // Animate when the section's middle is within 100px of viewport center
      if (Math.abs(sectionMiddle - viewportMiddle) < 100) {
        const title = section.querySelector(`.${styles.finalCTATitle}`);
        const subtitle = section.querySelector(`.${styles.finalCTASubtitle}`);
        const ctaBtn = section.querySelector(`.${styles.ctaBtn}`);
        const scrollTopBtn = section.querySelector(`.${styles.finalCTAScrollTop}`);

        animate([title, subtitle, ctaBtn, scrollTopBtn], {
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 800,
          easing: 'easeOutQuad',
          delay: (el, i) => i * 200, // Staggered delay
        });

        hasAnimated.current = true;
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.finalCTASection} aria-label="Final Call to Action">
      <h1 className={styles.finalCTATitle}>
        Your Local <span className={styles.finalCTAGold}>Window Cleaner</span> in<br />South Bristol &amp; Beyond
      </h1>
      <div className={styles.finalCTASubtitle}>
        From homes to high-rises, we provide professional and reliable window cleaning services across Bristol.<br />
        Experience the difference a streak-free clean can make.
      </div>
      <button className={styles.ctaBtn} type="button">
        <span className={styles.ctaIcon} aria-hidden="true">&#10077;</span> Get a Free Quote
      </button>
      <button
        className={styles.finalCTAScrollTop}
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="17" stroke="#fff" strokeWidth="2"/><path d="M12 20l6-6 6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </section>
  );
}
