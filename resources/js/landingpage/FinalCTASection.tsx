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
      <button className={styles.finalCTAButton}>
        <span className={styles.finalCTAQuoteIcon} aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M7.5 15c0-2.5 2-4.5 4.5-4.5V7.5C8.5 7.5 6 10 6 13v2h1.5zm7 0c0-2.5 2-4.5 4.5-4.5V7.5C15.5 7.5 13 10 13 13v2h1.5z" fill="#256193"/></svg>
        </span>
        Get a Free Quote
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
