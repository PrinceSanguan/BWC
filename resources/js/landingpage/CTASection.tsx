import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.ctaSection} aria-label="Who We Are">
      <div className={styles.ctaContainer}>
        <div className={styles.ctaLogoCol}>
          <div className={styles.logoPlaceholder}>LOGO</div>
        </div>
        <div className={styles.ctaTextCol}>
          <h2 className={styles.ctaTitle}>
            Who <span className={styles.ctaAccent}>We Are</span>
          </h2>
          <p className={styles.ctaDesc}>
            Invisible Window Cleaning is a small, independent window cleaning business serving homes and businesses across the Bristol urban area.
          </p>
          <p className={styles.ctaDesc}>
            We’re not a franchise or agency — just a skilled, reliable team who believe in doing the job properly, treating customers well, and being easy to work with.
          </p>
        </div>
      </div>
    </section>
  );
}
