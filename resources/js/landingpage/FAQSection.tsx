import styles from './FAQSection.module.css';

export default function FAQSection() {
  return (
    <section className={styles.faqSection} id="faq" aria-label="Frequently Asked Questions">
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        <details>
          <summary>How do I book a service?</summary>
          <p>Contact us via the form or phone to schedule your appointment.</p>
        </details>
        <details>
          <summary>What areas do you cover?</summary>
          <p>We serve Bristol and surrounding areas.</p>
        </details>
      </div>
    </section>
  );
}
