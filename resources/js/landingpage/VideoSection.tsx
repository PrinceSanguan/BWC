import styles from './VideoSection.module.css';

export default function VideoSection() {
  return (
    <section className={styles.videoSection} aria-label="Video Demo">
      <h2 className={styles.videoTitle}>See Us In Action</h2>
      <video className={styles.responsiveVideo} controls>
        <source src="/videos/webm/12761815_3364_1440_30fps.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
