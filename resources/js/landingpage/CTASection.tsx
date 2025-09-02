import styles from './CTASection.module.css';
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Set initial hidden state for all elements
    const element = sectionRef.current;
    if (element) {
      const logoCol = element.querySelector(`.${styles.ctaLogoCol}`);
      const textCol = element.querySelector(`.${styles.ctaTextCol}`);
      if (logoCol) {
        (logoCol as HTMLElement).style.opacity = '0';
        (logoCol as HTMLElement).style.transform = 'translateX(-100px)';
      }
      if (textCol) {
        (textCol as HTMLElement).style.opacity = '0';
        (textCol as HTMLElement).style.transform = 'translateX(100px)';
      }
    }

    const handleScroll = () => {
      if (hasAnimated.current) return;
      const element = sectionRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const sectionMiddle = rect.top + rect.height / 2;
      const viewportMiddle = window.innerHeight / 2;

      // Trigger when the section's middle is within 100px of viewport center
      if (Math.abs(sectionMiddle - viewportMiddle) < 100) {
        const logoCol = element.querySelector(`.${styles.ctaLogoCol}`);
        const textCol = element.querySelector(`.${styles.ctaTextCol}`);

        // Animate logoCol from left
        if (logoCol) {
          animate(logoCol, {
            opacity: [0, 1],
            translateX: [-100, 0],
            duration: 1000,
            easing: 'easeOutQuad',
          });
        }

        // Animate textCol from right
        if (textCol) {
          animate(textCol, {
            opacity: [0, 1],
            translateX: [100, 0],
            duration: 1000,
            easing: 'easeOutQuad',
          });
        }

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
           Invisible Window Cleaning brings over 20 years of combined expertise to every Bristol property. As skilled window cleaning professionals, we've perfected the art of delivering spotless window cleaning results that transform your view.
          </p>
          <p className={styles.ctaDesc}>
            We're not just another local window cleaning company Bristol calls upon – we're trusted window cleaners near me who combine traditional craftsmanship with cutting-edge reach and wash window cleaning technology for superior results
          </p>
        </div>
      </div>
    </section>
  );
}
