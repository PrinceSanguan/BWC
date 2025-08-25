import styles from './WhyChooseUsSection.module.css';

const reasons = [
  'Experienced, friendly professionals',
  'Eco-friendly and safe cleaning methods',
  'Flexible scheduling and reliable service',
  'Transparent pricing, no hidden fees',
  'Excellent customer reviews',
  'Fully insured and satisfaction guaranteed',
];

export default function WhyChooseUsSection() {
  return (
    <section className={styles.whyChooseSection} aria-label="Why Choose Us">
      <h2 className={styles.whyChooseTitle}>Why Choose Us?</h2>
      <div className={styles.whyChooseGrid}>
        {reasons.map((reason, i) => (
          <div className={styles.whyChooseCard} key={i}>
            <div className={styles.whyChooseReason}>{reason}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
