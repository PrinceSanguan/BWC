import styles from './WhoWeAreSection.module.css';
import Img from '/public/images/aboutus.png'
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';


export default function WhoWeAreSection() {

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current && imageRef.current) {
         animate(textRef.current, {
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuad'
      });
      // Animate image from right after text
      animate(imageRef.current, {
        translateX: [100, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 1000, // Delay to start after text animation
        easing: 'easeOutQuad'
      });
    }
  }, []);

  return (
    <section className={styles.blogHeroSection} aria-label="Blog Hero">
      <div className={styles.blogHeroContent} ref={containerRef}>
        <div className={styles.textContainer} ref={textRef}>
          <h1 className={styles.blogHeroTitle}>Who <span>We Are</span></h1>
          <h2 className={styles.blogHeroSubtitle}>
           Invisible Window Cleaning is a small, independent window cleaning business serving <br />
           homes and businesses across the Bristol urban area.
           </h2>
           <h2 className={styles.blogHeroSubtitle}>
            We’re not a franchise or agency — just a skilled, reliable team who believe in doing the job properly,<br />
            treating customers well, and being easy to work with.
           </h2>
          <div className={styles.buttonGroup}>
            <button className={styles.heroButton} aria-label="Get a free quote">
            <button className={styles.ctaBtn} type="button">
            <span className={styles.ctaIcon} aria-hidden="true">&#10077;</span> Get a Free Quote
            </button>
            </button>
            <button className={styles.ctaBtn}>See Our Services</button>
          </div>
        </div>
        <div ref={imageRef}>
          <img className={styles.blogHeroImage} src={Img} alt="" />
        </div>
      </div>
    </section>
  );
}
