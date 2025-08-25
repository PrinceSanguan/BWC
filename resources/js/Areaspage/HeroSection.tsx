import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.areasHeroSection} aria-label="Areas Hero">
      <h1 className={styles.areasHeroTitle}>Find a Window Cleaner Near You</h1>
      <div className={styles.areasHeroSubtitle}>
        We proudly serve all of Bristol and the surrounding areas. Explore the regions we cover and see how we can help keep your windows sparkling clean.
      </div>
    </section>
  );
}
