import styles from './FAQSection.module.css';
import { useState } from 'react';

const faqs = [
  {
    q: 'What areas do you cover?',
    a: (
      <>
        We provide professional window cleaning services across South, East, Central, and North Bristol, covering both residential and commercial properties. Whether you’re in the city center, a surrounding suburb, or a nearby village, we can help. You can check our dedicated <b>Areas Page</b> to see the full list of locations we serve and find out if we cover your specific postcode.
      </>
    ),
  },
  {
    q: 'Do I need to be at home during the cleaning?',
    a: '',
  },
  {
    q: 'Can I get a quote for more than one cleaning service at the same time?',
    a: '',
  },
  {
    q: 'What equipment do you use?',
    a: '',
  },
  {
    q: 'How long will the cleaning take?',
    a: '',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className={styles.faqSection} id="faq" aria-label="Frequently Asked Questions">
      <h2 className={styles.faqTitle}>
        Frequently Asked <span className={styles.faqAccent}>Questions</span>
      </h2>
      <div className={styles.faqSubtitle}>
        Get quick answers to the questions you might have. We’ve covered the essentials to make things simple and clear.
      </div>
      <div className={styles.faqList}>
        {faqs.map((faq, i) => (
          <div
            className={styles.faqItem + ' ' + (openIdx === i ? styles.open : '')}
            key={i}
          >
            <button
              className={styles.faqSummary}
              aria-expanded={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              type="button"
            >
              <span className={styles.faqChevron} aria-hidden="true">
                {openIdx === i ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 15l5-5 5 5" stroke="#256193" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5" stroke="#256193" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </span>
              {faq.q}
            </button>
            {openIdx === i && faq.a && (
              <div className={styles.faqAnswer}>{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
