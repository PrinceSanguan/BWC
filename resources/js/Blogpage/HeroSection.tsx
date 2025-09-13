import styles from './HeroSection.module.css';
import Img from '/public/images/aboutus.png'
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function HeroSection() {
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
          duration: 1200, // Slower
          easing: 'easeOutQuad',
        });
      }

      // Then animate the rest of the title
      if (titleRestRef.current) {
        animate(titleRestRef.current, {
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 1200, // Slower
          delay: 300, // Adjusted delay
          easing: 'easeOutQuad',
        });
      }

      // Subtitle
      if (subtitle) {
        animate(subtitle, {
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 1200, // Slower
          delay: 600, // Adjusted delay
          easing: 'easeOutQuad',
        });
      }

      // Buttons
      if (buttons.length > 0) {
        animate( buttons, {
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 1200, // Slower
          delay: (el, i) => 900 + i * 150, // Adjusted delay
          easing: 'easeOutQuad',
        });
      }

      // Image
      if (image) {
        animate(image, {
          opacity: [0, 1],
          scale: [0.95, 1],
          duration: 1200, // Slower
          delay: 1200, // Adjusted delay
          easing: 'easeOutQuad',
        });
      }
    }
  }, []);
  
  return (
    <section ref={sectionRef} className={styles.blogHeroSection} aria-label="Blog Hero" style={{ background: '#fff' }}>
      <div className={styles.blogHeroContent}>
        <div className={styles.imageContainer}>
          <img className={styles.blogHeroImage} src={Img} alt="" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.blogHeroTitle}>
            <span ref={titleRestRef}>Your Bristol Window Cleaning <br /></span>
            <span ref={resourceRef}>Resource</span>
          </h1>
          <h2 className={styles.blogHeroSubtitle}>
            Looking for reliable tips, industry insights, and local expertise? You're in the right place.
            Our blog is filled with valuable information designed to help you make informed 
            decisions and discover the true benefits of a professional, streak-free shine.</h2>
          <div className={styles.buttonGroup}>
            <button
              className={styles.ctaBtn}
              type="button"
              onClick={() => { window.location.href = '/contact'; }}
            >
              <span className={styles.ctaIcon} aria-hidden="true">&#10077;</span> Get a Free Quote
            </button>
            <button
              className={styles.ctaBtn}
              type="button"
              onClick={() => { window.location.href = '/services'; }}
            >
              See Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
