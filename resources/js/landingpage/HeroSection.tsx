import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection} aria-label="Hero">
      <h1 className={styles.heroTitle}>Welcome to Our Service</h1>
      <p className={styles.heroSubtitle}>Your trusted partner for professional solutions.</p>
    </section>
  );
}
