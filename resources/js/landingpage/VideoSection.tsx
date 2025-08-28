import styles from './VideoSection.module.css';

export default function VideoSection() {
  return (
    <section className={styles.videoSection} aria-label="Your Local Cleaners at Work">
      <h2 className={styles.videoTitle}>
        Your Local Cleaners at <span className={styles.videoAccent}>Work</span>
      </h2>
      <div className={styles.videoSubtitle}>
        Watch our expert team in action on a recent job. See the clear difference we make to<br />
        properties every single day.
      </div>
      <div className={styles.videoFrameWrap}>
        <iframe
          className={styles.videoFrame}
          src="https://www.youtube.com/embed/1QZQhJd6G9w"
          title="Street Front Window Clean Bedminster - Bristol"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.buttonGroup}>
            <button className={styles.heroButton} aria-label="Get a free quote">
            <button className={styles.ctaBtn} type="button">
            <span className={styles.ctaIcon} aria-hidden="true">&#10077;</span> Get a Free Quote
            </button>
            </button>
            <button className={styles.ctaBtn}>See Our Services</button>
        </div>
    </section>
  );
}
