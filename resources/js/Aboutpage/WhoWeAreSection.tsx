import styles from './WhoWeAreSection.module.css';
import Img from '/public/images/aboutus.png'


export default function HeroSection() {
  return (
    <section className={styles.blogHeroSection} aria-label="Blog Hero">
      <div className={styles.blogHeroContent}>
        <div className={styles.textContainer}>
          <h1 className={styles.blogHeroTitle}>Who <span>We Are</span></h1>
          <h2 className={styles.blogHeroSubtitle}>
           Invisible Window Cleaning is a small, independent window cleaning business serving <br />
           homes and businesses across the Bristol urban area.
           </h2>
           <h2 className={styles.blogHeroSubtitle}>
            We’re not a franchise or agency — just a skilled, reliable team who believe in doing the job properly,<br />
            treating customers well, and being easy to work with.
           </h2>
          <div className={styles.buttonGroup}>
            <button className={styles.ctaBtn}>Get a Free Quote</button>
            <button className={styles.ctaBtn}>See Our Services</button>
          </div>
        </div>
        <div>
          <img className={styles.blogHeroImage} src={Img} alt="" />
        </div>
      </div>
    </section>
  );
}
