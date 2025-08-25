import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.serviceHeroSection} aria-label="Service Hero">
      <h1 className={styles.serviceHeroTitle}>Our Professional Cleaning Services</h1>
      <div className={styles.serviceHeroSubtitle}>
        Discover our full range of window and exterior cleaning services, delivered by experienced professionals with a commitment to quality and care.
      </div>
    </section>
  );
}
