import { MousePointerClick } from 'lucide-react';
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
          <h2 className={styles.areasHeroSubtitle}>We clean windows, gutters, and fascias across the <br /> entire Bristol urban area. </h2>
          <h2 className={styles.areasHeroSubtitle}>Our biggest customer bases are in South and East <br /> Bristol, but we cover Central and North too.</h2>
        </div>
        <div className={styles.areasHeroRightContainer}>
          <div className={styles.areasHeroImageCaptionContainer}>
            <MousePointerClick className={styles.areasHeroImageCaptionIcon} />
            <h2 className={styles.areasHeroImageCaption}>Click on your area to learn more <br /> about our services nearby.</h2>
          </div>
          <img className={styles.areasHeroImage} src={Img} alt="Map of Bristol" />
        </div>
      </div>
    </section>
  );
}
