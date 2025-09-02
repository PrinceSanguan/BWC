import { MapPin , MousePointerClick } from 'lucide-react'; // Keep only MapPin
import styles from './HeroSection.module.css';
import Img from '/public/images/map.png';

export default function HeroSection() {
  return (
    <section className={styles.areasHeroSection} aria-label="Areas Hero">
      <div className={styles.areasHeroContent}>
        <div className={styles.areasHeroLeftContainer}>
          <h1>
            <span className={styles.areasHeroTitle}>Areas We </span>
            <span className={styles.areasHeroTitle}>Cover</span>
          </h1>
          <h2 className={styles.areasHeroSubtitle}>
            We deliver professional window cleaning services across the entire Bristol urban area with unmatched reliability and expertise.
            Our experienced window cleaners bristol team ensures crystal-clear results for both residential and commercial window cleaning properties throughout the city.
          </h2>
          <h2 className={styles.areasHeroSubtitle}>
            Our biggest customer bases are in South and East Bristol,
            but we provide trusted window cleaning bristol coverage across Central <br /> and North areas too.
          </h2>
        </div>
        <div className={styles.areasHeroRightContainer}>
          <div className={styles.areasHeroImageCaptionContainer}>
            <MousePointerClick className={styles.areasHeroMousePointer} />
            <h2 className={styles.areasHeroImageCaption}>Click on your area to learn more <br /> about our services nearby.</h2>
          </div>
          <img className={styles.areasHeroImage} src={Img} alt="Map of Bristol" />
      
          <div className={styles.pinWrapper} style={{ top: '10%', left: '25%' }}>
            <MapPin className={styles.areasHeroPin} />
            <span className={styles.pinTooltip}>North Bristol</span>
          </div>
          <div className={styles.pinWrapper} style={{ top: '25%', left: '55%' }}>
            <MapPin className={styles.areasHeroPin} />
            <span className={styles.pinTooltip}>Central Bristol</span>
          </div>
          <div className={styles.pinWrapper} style={{ top: '52%', left: '60%' }}>
            <MapPin className={styles.areasHeroPin} />
            <span className={styles.pinTooltip}>South Bristol</span>
          </div>
          <div className={styles.pinWrapper} style={{ top: '38%', left: '83%' }}>
            <MapPin className={styles.areasHeroPin} />
            <span className={styles.pinTooltip}>East Bristol</span>
          </div>
      
        </div>
      </div>
    </section>
  );
}
