import styles from './HeroSection.module.css';
import Img from '/public/images/aboutus.png'


export default function HeroSection() {
  return (
    <section className={styles.blogHeroSection} aria-label="Blog Hero">
      <div className={styles.blogHeroContent}>
        <div>
          <img className={styles.blogHeroImage} src={Img} alt="" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.blogHeroTitle}>Your Bristol Window Cleaning <br /> <span>Resource</span></h1>
          <h2 className={styles.blogHeroSubtitle}>
            Looking for reliable tips, industry insights, and local expertise? You're in the right place.
            Our blog is filled with valuable information designed to help you make informed 
            decisions and discover the true benefits of a professional, streak-free shine.</h2>
          <div className={styles.buttonGroup}>
            <button className={styles.heroButton} aria-label="Get a free quote">
            <button className={styles.ctaBtn} type="button">
            <span className={styles.ctaIcon} aria-hidden="true">&#10077;</span> Get a Free Quote
            </button>
            </button>
            <button className={styles.ctaBtn}>See Our Services</button>
          </div>
        </div>
      </div>
    </section>
  );
}
