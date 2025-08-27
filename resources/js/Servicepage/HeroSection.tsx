import styles from './HeroSection.module.css';
import Img from '/public/images/servicehero.jpg';

export default function HeroSection() {
  return (
    <section className={styles.serviceHeroSection} aria-label="Service Hero">
        <div className={styles.serviceContent}>
          <div className={styles.serviceContentLeft}>
            <h1>
              <span className={styles.serviceHeroTitle}>Professional </span>
              <span className={styles.serviceHeroTitle}>Exterior Cleaning – Inside & Out</span>
              </h1>
            <h2 className={styles.serviceHeroSubtitle}>
              We offer a range of exterior cleaning services for homes and businesses in Bristol.
              Whether you need regular upkeep or a one-off spruce-up, we’ve got you covered.</h2>
            <button className={styles.serviceButton}> Get a Free Quote</button>
            <button className={styles.serviceButton}> See Our Services</button>
          </div>
          <div className={styles.serviceContentRight}>
            <img src={Img} alt="Service Hero" className={styles.serviceHeroImage} />
          </div>
        </div>
    </section>
  );
}
