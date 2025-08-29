
import { useState } from 'react';
import styles from './Header.module.css';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.hamburgerMenuWrapper}>
      <button
        className={styles.hamburgerBtn}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <span className={styles.hamburgerIcon}>
          <span />
          <span />
          <span />
        </span>
      </button>
      {open && (
        <nav id="mobile-nav" className={styles.mobileNav}>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/areas">Areas</a>
          <a href="/contact">Contact</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/blogs">Blogs</a>
          <button className={styles.ctaBtn} type="button" style={{marginTop: '1.2em'}}>
            <span className={styles.ctaIcon} aria-hidden="true">&#10077;</span> Get a Free Quote
          </button>
        </nav>
      )}
    </div>
  );
}
