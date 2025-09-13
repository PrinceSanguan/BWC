import styles from './VideoSection.module.css';
import { animate } from 'animejs';
import { useEffect, useRef } from 'react';


export default function VideoSection() {

  const sectionRef = useRef<HTMLElement>(null);
  const hasTextAnimated = useRef(false);
  const hasContentAnimated = useRef(false);

  useEffect(() => {
    // Set initial hidden state for all elements
    const element = sectionRef.current;
    if (element) {
      const title = element.querySelector(`.${styles.videoTitle}`);
      const subtitle = element.querySelector(`.${styles.videoSubtitle}`);
      const videoFrameWrap = element.querySelector(`.${styles.videoFrameWrap}`);
      const buttonGroup = element.querySelector(`.${styles.buttonGroup}`);
      [title, subtitle, videoFrameWrap, buttonGroup].forEach(el => {
        if (el) {
          (el as HTMLElement).style.opacity = '0';
          (el as HTMLElement).style.transform = 'translateY(50px)';
        }
      });
    }

    const handleScroll = () => {
      const element = sectionRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Animate text when top of section enters viewport
      if (!hasTextAnimated.current && rect.top < viewportHeight * 0.9 && rect.bottom > viewportHeight * 0.1) {
        const title = element.querySelector(`.${styles.videoTitle}`);
        const subtitle = element.querySelector(`.${styles.videoSubtitle}`);

        animate([title, subtitle], {
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 800,
          easing: 'easeOutQuad',
        });

        hasTextAnimated.current = true;
      }

      // Animate content when middle is in view
      if (!hasContentAnimated.current && hasTextAnimated.current) {
        const sectionMiddle = rect.top + rect.height / 2;
        const viewportMiddle = viewportHeight / 2;

        if (Math.abs(sectionMiddle - viewportMiddle) < 100) {
          const videoFrameWrap = element.querySelector(`.${styles.videoFrameWrap}`);
          const buttonGroup = element.querySelector(`.${styles.buttonGroup}`);

          animate([videoFrameWrap, buttonGroup], {
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 800,
            easing: 'easeOutQuad',
          });

          hasContentAnimated.current = true;
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handler to navigate to /contact
  const handleCTAClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section ref={sectionRef} className={styles.videoSection} aria-label="Your Local Cleaners at Work">
      <h2 className={styles.videoTitle}>
        Your Local Cleaners at <span className={styles.videoAccent}>Work</span>
      </h2>
      <div className={styles.videoSubtitle}>
        Watch our expert team in action on a recent job. See the clear difference we make to<br />
        properties every single day.
      </div>
      <div className={styles.videoFrameWrap}>
        <iframe
          className={styles.videoFrame}
          src="https://www.youtube.com/embed/1QZQhJd6G9w"
          title="Street Front Window Clean Bedminster - Bristol"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.buttonGroup}>
        <button
          className={styles.ctaBtn}
          type="button"
          aria-label="Get a free quote"
          onClick={handleCTAClick}
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
    </section>
  );
}
