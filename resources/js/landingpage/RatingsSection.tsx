import styles from './RatingsSection.module.css';

export default function RatingsSection() {
  return (
    <section className={styles.ratingsSection} aria-label="Customer Ratings">
      <h2 className={styles.ratingsTitle}>Our Customers Love Us</h2>
      <div className={styles.stars} aria-label="5 star rating">★★★★★</div>
      <p className={styles.ratingsText}>Rated 5 stars by hundreds of happy clients!</p>
    </section>
  );
}
