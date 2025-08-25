import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.ctaSection} aria-label="Call to Action">
      <h2 className={styles.ctaTitle}>Get Your Free Quote Today!</h2>
      <button className={styles.ctaButton}>Request a Quote</button>
    </section>
  );
}
