import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.mainFooter} aria-label="Footer">
      <div className={styles.footerGrid}>
        {/* Left: Logo, mission, social */}
        <div className={styles.footerColLeft}>
          <div className={styles.footerLogoWrap}>
            <div className={styles.footerLogoPlaceholder}>LOGO</div>
          </div>
          <div className={styles.footerMission}>
            Our mission is that to offer you the best possible window cleaning service in Bristol. There is only one thing worse than a dirty window and that is a poorly cleaned one!
          </div>
          <div className={styles.footerSocialRow}>
            <span>Follow us</span>
            <a href="#" aria-label="Facebook" className={styles.footerSocialIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M18 10A8 8 0 1 0 10 18V12.5H8V10h2V8.5c0-2 1.2-3 3-3 .6 0 1.2.1 1.2.1v2h-.7c-.7 0-.8.3-.8.8V10h2.1l-.3 2.5h-1.8V18A8 8 0 0 0 18 10Z" fill="#23405a"/></svg>
            </a>
            <a href="#" aria-label="Pinterest" className={styles.footerSocialIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#23405a" strokeWidth="2"/><path d="M10 14.5c-2.5 0-4-1.7-4-3.7 0-2 1.7-3.8 4-3.8s4 1.8 4 3.8c0 2-1.5 3.7-4 3.7Zm0-5.2c-.8 0-1.5.7-1.5 1.5S9.2 12.3 10 12.3s1.5-.7 1.5-1.5S10.8 9.3 10 9.3Z" fill="#23405a"/></svg>
            </a>
          </div>
          <div className={styles.footerCopyright}>
            &copy; 2025 Invisible Window Cleaning. All rights reserved.
          </div>
        </div>
        {/* Middle: Contact, Company, Services */}
        <div className={styles.footerColMid}>
          <div className={styles.footerContactBlock}>
            <div className={styles.footerContactRow}>
              <span className={styles.footerContactIcon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.5 3.5l5 5-5 5" stroke="#256193" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span>07598 208258</span>
            </div>
            <div className={styles.footerContactRow}>
              <span className={styles.footerContactIcon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 4l7 7 7-7" stroke="#256193" strokeWidth="2"/></svg>
              </span>
              <span>clean@invisiblewindowcleaning.co.uk</span>
            </div>
            <div className={styles.footerContactRow}>
              <span className={styles.footerContactIcon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="3" stroke="#256193" strokeWidth="2"/></svg>
              </span>
              <span>[Whatsapp Clickable Link]</span>
            </div>
          </div>
          <div className={styles.footerLinksWrap}>
            <div className={styles.footerLinksCol}>
              <div className={styles.footerLinksTitle}><b>Company</b></div>
              <a href="#" className={styles.footerLink}>Home</a>
              <a href="#" className={styles.footerLink}>About Us</a>
              <a href="#" className={styles.footerLink}>Services</a>
              <a href="#" className={styles.footerLink}>Contact</a>
            </div>
            <div className={styles.footerLinksCol}>
              <div className={styles.footerLinksTitle}><b>Services</b></div>
              <span className={styles.footerLink}>Domestic Window Cleaning</span>
              <span className={styles.footerLink}>Commercial Window Cleaning</span>
              <span className={styles.footerLink}>Gutter Clearing</span>
              <span className={styles.footerLink}>Soffit, Fascia, &amp; Gutter Face Cleaning</span>
            </div>
          </div>
        </div>
        {/* Right: Location, hours */}
        <div className={styles.footerColRight}>
          <div className={styles.footerLocationTitle}><b>Location</b></div>
          <div className={styles.footerLocationAddr}>Bristol BS8 2SB<br />195 Whiteladies Road</div>
          <div className={styles.footerOpenTitle}><b>Open Hours</b></div>
          <div className={styles.footerOpenHours}>Mon - Sat: 8 am – 4 pm,<br />Sunday: 10 am – 2 pm</div>
        </div>
      </div>
    </footer>
  );
}
