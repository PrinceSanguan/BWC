import styles from './CompareSection.module.css';

export default function CompareSection() {
  return (
    <section className={styles.compareSection} aria-label="Before and After Comparison">
      <h2 className={styles.compareTitle}>See the Difference</h2>
      <div className={styles.compareGrid}>
        <div className={styles.compareCard}>
          <div className={styles.compareLabel}>Before</div>
          <div className={styles.compareImage}>Before Image</div>
        </div>
        <div className={styles.compareCard}>
          <div className={styles.compareLabel}>After</div>
          <div className={styles.compareImage}>After Image</div>
        </div>
      </div>
    </section>
  );
}
