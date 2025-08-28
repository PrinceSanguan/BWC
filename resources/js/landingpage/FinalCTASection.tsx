import styles from './FinalCTASection.module.css';

export default function FinalCTASection() {
  return (
    <section className={styles.finalCTASection} aria-label="Final Call to Action">
      <h1 className={styles.finalCTATitle}>
        Your Local <span className={styles.finalCTAGold}>Window Cleaner</span> in<br />South Bristol &amp; Beyond
      </h1>
      <div className={styles.finalCTASubtitle}>
        From homes to high-rises, we provide professional and reliable window cleaning services across Bristol.<br />
        Experience the difference a streak-free clean can make.
      </div>
     <button className={styles.ctaBtn} type="button">
        <span className={styles.ctaIcon} aria-hidden="true">&#10077;</span> Get a Free Quote
        </button>
      <button
        className={styles.finalCTAScrollTop}
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="17" stroke="#fff" strokeWidth="2"/><path d="M12 20l6-6 6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </section>
  );
}
