
import HeaderBanner from './HeaderBanner';
import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <HeaderBanner />
      <header className={styles.mainHeader} aria-label="Main Navigation">
        <div className={styles.logoBox}>
          <div className={styles.logoPlaceholder}>LOGO</div>
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
        <button className={styles.ctaBtn} type="button">
        <span className={styles.ctaIcon} aria-hidden="true">&#10077;</span> Get a Free Quote
        </button>
      </header>
    </>
  );
}
