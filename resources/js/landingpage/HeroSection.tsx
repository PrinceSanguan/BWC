import styles from './HeroSection.module.css';



export default function HeroSection() {
  return (
    <section className={styles.heroSection} aria-label="Hero">
      <div className={styles.heroGlassEffect}>
        <div className={styles.heroLeftContent}>
          <h1>
            <span className={styles.heroTitle}>Invisible Window <br />Cleaning </span> 
            <span className={styles.heroTitle}> – Crystal-Clear <br />Results Across Bristol</span>
          </h1>
          <h2 className={styles.heroSubtitle}>Friendly, Local, Fully Insured Window Cleaners for Homes & Businesses</h2>
          <ul className={styles.heroSubtitle}>
            <li>Regular 6-weekly cleans or one-off visits</li>
            <li>Guaranteed finish.</li>
            <li>Text reminders before every clean</li>
          </ul>
          <button className={styles.ctaBtn} type="button" aria-label="Get a free quote">
            <span className={styles.ctaIcon} aria-hidden="true">&#10077;</span> Get a Free Quote
          </button>
          <h3 className={styles.heroBottomText}>Fast replies | No obligation</h3>
        </div>
        <div className={styles.heroRightContent}>
          <img src="/images/heroPic.png" alt="hero image" />
        </div>
      </div>
      
    </section>
  );
}
