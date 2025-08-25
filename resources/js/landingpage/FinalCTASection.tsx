import styles from './FinalCTASection.module.css';

export default function FinalCTASection() {
  return (
    <section className={styles.finalCTASection} aria-label="Final Call to Action">
      <h2 className={styles.finalCTATitle}>Ready to Get Started?</h2>
      <button className={styles.finalCTAButton}>Contact Us Now</button>
    </section>
  );
}
