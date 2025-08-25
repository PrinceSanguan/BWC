import styles from './ActionsSection.module.css';

const actions = [
  {
    img: '/images/pexels-tima-miroshnichenko-6195953.jpg',
    alt: 'Residential Window Cleaners',
    caption: 'Residential\nWindow Cleaners',
  },
  {
    img: '/images/pexels-tima-miroshnichenko-6195956.jpg',
    alt: 'Professional Window Cleaning',
    caption: 'Professional\nWindow Cleaning',
  },
  {
    img: '/images/pexels-matilda-wormwood-4098315.jpg',
    alt: 'Cleaning your Windows, Frames, Sills & more',
    caption: 'Cleaning your Windows,\nFrames , Sills & more',
  },
];

export default function ActionsSection() {
  return (
    <section className={styles.actionsSection} aria-label="Our Sparkle in Action">
      <h2 className={styles.actionsTitle}>
        Our <span className={styles.actionsAccent}>Sparkle</span> in <span className={styles.actionsAccent}>Action</span>
      </h2>
      <div className={styles.actionsSubtitle}>
        Experience the difference with our professional window cleaning service. We bring a<br />
        sparkling finish to homes and businesses alike.
      </div>
      <div className={styles.actionsGrid}>
        {actions.map((a, i) => (
          <div className={styles.actionCard} key={i}>
            <img src={a.img} alt={a.alt} className={styles.actionImg} />
            <div className={styles.actionCaption}>
              {a.caption.split('\n').map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
