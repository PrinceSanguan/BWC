import styles from './WhoWeAreSection.module.css';

export default function WhoWeAreSection() {
  return (
    <section className={styles.whoWeAreSection} aria-label="Who We Are">
      <h2 className={styles.whoWeAreTitle}>Who We Are</h2>
      <div className={styles.whoWeAreText}>
        We are a dedicated team of window cleaning professionals serving Bristol and the surrounding areas. Our mission is to deliver sparkling results, friendly service, and peace of mind to every customer. We believe in reliability, integrity, and building lasting relationships with our community.
      </div>
    </section>
  );
}
