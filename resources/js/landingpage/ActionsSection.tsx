import styles from './ActionsSection.module.css';

export default function ActionsSection() {
  return (
    <section className={styles.actionsSection} aria-label="How It Works">
      <h2 className={styles.actionsTitle}>How It Works</h2>
      <ol className={styles.actionsList}>
        <li>Contact us</li>
        <li>Get a quote</li>
        <li>Enjoy our service</li>
      </ol>
    </section>
  );
}
