import styles from './AreasSection.module.css';

type Area = {
  name: string;
  description: string;
};

const areas: Area[] = [
  { name: 'South Bristol', description: 'Bedminster, Southville, Knowle, Brislington, and more.' },
  { name: 'East Bristol', description: 'Hanham, Kingswood, St George, Fishponds, and more.' },
  { name: 'Central Bristol', description: 'City Centre, Redcliffe, Clifton, Cotham, and more.' },
  { name: 'North Bristol', description: 'Horfield, Filton, Bishopston, Henleaze, and more.' },
];

export default function AreasSection() {
  return (
    <section className={styles.areasSection} aria-label="Service Areas">
      <h2 className={styles.areasTitle}>Areas We Cover</h2>
      <div className={styles.areasGrid}>
        {areas.map((area, i) => (
          <div className={styles.areasCard} key={i}>
            <div className={styles.areasName}>{area.name}</div>
            <div>{area.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
