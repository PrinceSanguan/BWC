import HamburgerMenu from './HamburgerMenu';
import HeaderBanner from './HeaderBanner';
import styles from './Header.module.css';
import { useRef } from 'react';
import { animate } from 'animejs';

export default function Header() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const buttonAnimationRef = useRef<any>(null);
  const textAnimationRefs = useRef<any[]>([]);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      buttonAnimationRef.current = animate(buttonRef.current, {
        scale: [1, 1.05, 1],
        duration: 500,
        loop: true,
        easing: 'easeInOutQuad',
      });
    }
    // Wave effect for text
    textRefs.current.forEach((span, i) => {
      if (span) {
        textAnimationRefs.current[i] = animate(span, {
          translateY: [0, -10, 0],
          duration: 500,
          delay: i * 100,
          loop: true,
          easing: 'easeInOutQuad',
        });
      }
    });
  };

  const handleMouseLeave = () => {
    if (buttonAnimationRef.current) {
      buttonAnimationRef.current.pause();
      buttonAnimationRef.current = null;
    }
    textAnimationRefs.current.forEach((anim) => {
      if (anim) anim.pause();
    });
    textAnimationRefs.current = [];

    // Reset animations
    if (buttonRef.current) {
      animate(buttonRef.current, {
        scale: 1,
        duration: 300,
        easing: 'easeInOutQuad',
      });
    }
    textRefs.current.forEach((span) => {
      if (span) {
        animate(span, {
          translateY: 0,
          duration: 300,
          easing: 'easeInOutQuad',
        });
      }
    });
  };

  // Handler to navigate to /contact
  const handleCTAClick = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <HeaderBanner />
      <header className={styles.mainHeader} aria-label="Main Navigation">
        <div className={styles.logoBox}>
          <img src="/images/8f11858a-851a-45be-94a6-0df380a91a71-removebg-preview.png" alt="Company Logo" className={styles.logoImg} />
        </div>
        <nav className={styles.navBar}>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/areas">Areas</a>
          <a href="/contact">Contact</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/blogs">Blogs</a>
        </nav>
        <div className={styles.hamburgerMenuOnly}><HamburgerMenu /></div>
        <button
          ref={buttonRef}
          className={styles.ctaBtn}
          type="button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleCTAClick}
        >
          <span className={styles.ctaIcon} aria-hidden="true">&#10077;</span>
          <span ref={(el) => { textRefs.current[0] = el; }} >Get</span>
          <span ref={(el) => { textRefs.current[1] = el; }} >a</span>
          <span ref={(el) => { textRefs.current[2] = el; }} >Free</span>
          <span ref={(el) => { textRefs.current[3] = el; }} >Quote</span>
        </button>
      </header>
    </>
  );
}
