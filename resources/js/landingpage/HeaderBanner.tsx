import styles from './HeaderBanner.module.css';

export default function HeaderBanner() {
  return (
    <div className={styles.headerBanner} role="contentinfo" aria-label="Contact and Location Info">
      <div className={styles.bannerCol}>
        <span className={styles.bannerEmail}>clean@invisiblewindowcleaning.co.uk</span>
      </div>
      <div className={styles.bannerCol + ' ' + styles.bannerCenter}>
        <span className={styles.bannerAddress}><strong>Bristol BS8 2SB, 195 Whiteladies Road</strong></span>
      </div>
      <div className={styles.bannerCol + ' ' + styles.bannerRight}>
        <span className={styles.bannerCall}><strong>Give us a Call!</strong></span>
        <span className={styles.bannerPhone}>07598 208 258</span>
      </div>
    </div>
  );
}
