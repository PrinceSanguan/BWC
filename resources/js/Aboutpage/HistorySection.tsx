import styles from './HistorySection.module.css';

type HistoryEvent = {
  year: string;
  description: string;
};

const history: HistoryEvent[] = [
  { year: '2015', description: 'Invisible Window Cleaning was founded with a mission to deliver streak-free results and friendly service.' },
  { year: '2018', description: 'Expanded to cover all of Bristol, adding new team members and equipment.' },
  { year: '2021', description: 'Launched eco-friendly cleaning options and digital booking.' },
  { year: '2024', description: 'Reached 1,000+ happy customers and expanded our service offerings.' },
];

export default function HistorySection() {
  return (
    <section className={styles.historySection} aria-label="Company History">
      <h2 className={styles.historyTitle}>Our History</h2>
      <div className={styles.historyTimeline}>
        {history.map((event, i) => (
          <div className={styles.historyEvent} key={i}>
            <div className={styles.historyYear}>{event.year}</div>
            <div>{event.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
