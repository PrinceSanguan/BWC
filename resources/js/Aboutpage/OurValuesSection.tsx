import styles from './OurValuesSection.module.css';

type Value = {
  title: string;
  description: string;
};

const values: Value[] = [
  { title: 'Reliability', description: 'We show up on time and deliver consistent, high-quality results.' },
  { title: 'Integrity', description: 'We are honest, transparent, and treat your property with respect.' },
  { title: 'Customer Care', description: 'We listen to your needs and go the extra mile to ensure satisfaction.' },
  { title: 'Innovation', description: 'We use the latest tools and eco-friendly solutions.' },
  { title: 'Community', description: 'We support our local area and build lasting relationships.' },
];

export default function OurValuesSection() {
  return (
    <section className={styles.valuesSection} aria-label="Our Values">
      <h2 className={styles.valuesTitle}>Our Values</h2>
      <div className={styles.valuesGrid}>
        {values.map((value, i) => (
          <div className={styles.valueCard} key={i}>
            <div className={styles.valueTitle}>{value.title}</div>
            <div>{value.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
