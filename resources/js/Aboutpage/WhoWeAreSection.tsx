import styles from './WhoWeAreSection.module.css';
import Img from '/home/natty/BWC/public/images/aboutus.png';


export default function WhoWeAreSection() {
  return (
    <section className={styles.whoWeAreSection} aria-label="Who We Are">
      <div className={styles.herocontent}>
        <div className={styles.heroLeftContent}>
          <h1> 
            <span className={styles.whoWeAreTitle}>Who</span>
            <span className={styles.whoWeAreTitle}> We are</span>
          </h1>
          <h2 className={styles.whoWeAreText}>
            Invisible Window Cleaning brings over 20 years of combined expertise to every Bristol property. <br />
            As skilled window cleaning professionals,
            we've perfected the art of delivering spotless window cleaning results that transform your view.

          </h2>
          <h2 className={styles.whoWeAreText}>
            We’re not a franchise or agency — just a skilled,
            reliable team who believe in doing the job properly,
            <br />treating customers well,
            and being easy to work with.
          </h2>
          <div>
            <button className={styles.heroButton}>Free Quote</button>
            <button className={styles.heroButton}>Contact Us</button>
          </div>
        </div>
        <div className={styles.heroRightContent}>
          <img className={styles.heroImage} src={Img} alt="About Us" />
        </div>
      </div>
    </section>
  );
}
