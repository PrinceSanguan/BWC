import styles from './RatingsSection.module.css';

function ImpactCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className={styles.impactCard}>
      <div className={styles.impactIcon}>{icon}</div>
      <div className={styles.impactValue}>{value}</div>
      <div className={styles.impactLabel}>{label}</div>
    </div>
  );
}

export default function RatingsSection() {
  return (
    <section className={styles.ratingsSection} aria-label="Impact By The Numbers">
      <h2 className={styles.ratingsTitle}>
        Our <span className={styles.impactAccent}>Impact</span> By The Numbers
      </h2>
      <div className={styles.impactGrid}>
        <ImpactCard
          icon={<span role="img" aria-label="Home"><svg width="36" height="36" fill="#225b8e" viewBox="0 0 24 24"><path d="M12 3l9 8h-3v7a2 2 0 0 1-2 2h-2v-5h-4v5H7a2 2 0 0 1-2-2v-7H2z"/></svg></span>}
          value="15,400+"
          label="Domestic Cleans"
        />
        <ImpactCard
          icon={<span role="img" aria-label="Building"><svg width="36" height="36" fill="#225b8e" viewBox="0 0 24 24"><path d="M3 21V3h18v18H3zm2-2h14V5H5v14zm2-2v-2h2v2H7zm0-4v-2h2v2H7zm0-4V7h2v2H7zm4 8v-2h2v2h-2zm0-4v-2h2v2h-2zm0-4V7h2v2h-2zm4 8v-2h2v2h-2zm0-4v-2h2v2h-2zm0-4V7h2v2h-2z"/></svg></span>}
          value="37"
          label="Commercial Contracts"
        />
        <ImpactCard
          icon={<span role="img" aria-label="People"><svg width="36" height="36" fill="#225b8e" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05C17.16 14.1 19 15.03 19 16.5V19h5v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></span>}
          value="600+"
          label="New Customers Last Year"
        />
        <ImpactCard
          icon={<span role="img" aria-label="Coffee"><svg width="36" height="36" fill="#225b8e" viewBox="0 0 24 24"><path d="M18 8V6a6 6 0 0 0-12 0v2H2v2h2v7a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5v-7h2V8h-2zm-2 0H8V6a4 4 0 0 1 8 0v2zm-6 9a3 3 0 0 1-3-3h2a1 1 0 0 0 2 0h2a1 1 0 0 0 2 0h2a3 3 0 0 1-3 3H10zm7-3a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-7h8v7z"/></svg></span>}
          value="Too Many!"
          label="Cups of Coffee"
        />
      </div>
      <div className={styles.impactSubtitle}>
        We take pride in delivering exceptional cleaning services. Our team<br />
        is trusted across Bristol for reliable, high-quality results.
      </div>
    </section>
  );
}
