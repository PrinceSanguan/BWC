import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.blogHeroSection} aria-label="Blog Hero">
      <h1 className={styles.blogHeroTitle}>Insights & Tips from Our Team</h1>
      <div className={styles.blogHeroSubtitle}>
        Explore our latest articles for window cleaning tips, company news, and helpful advice to keep your property looking its best.
      </div>
    </section>
  );
}
