import styles from './TestimonialSection.module.css';

const testimonials = [
  {
    img: '/images/pexels-tima-miroshnichenko-6195953.jpg',
    name: 'Mark, Southville',
    role: 'Manager',
    quote: 'Prompt, polite, and brilliant results every time.',
    stars: 5,
  },
  {
    img: '/images/pexels-tima-miroshnichenko-6195953.jpg',
    name: 'Liz, Hanham',
    role: 'Manager',
    quote: 'Gutters cleared quickly, and left no mess behind.',
    stars: 5,
  },
  {
    img: '/images/pexels-tima-miroshnichenko-6195953.jpg',
    name: 'Tom, Easton',
    role: 'Manager',
    quote: 'Really flexible when I had to change a clean last-minute.',
    stars: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection} id="testimonials" aria-label="Testimonials">
      <h2 className={styles.testimonialTitle}>
        Built on <span className={styles.testimonialAccent}>Trust</span> and <span className={styles.testimonialAccent}>Hard Work</span>
      </h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((t, i) => (
          <div className={styles.testimonialCard} key={i}>
            <div className={styles.testimonialAvatarWrap}>
              <img src={t.img} alt={t.name} className={styles.testimonialAvatar} />
            </div>
            <div className={styles.testimonialName}>{t.name}</div>
            <div className={styles.testimonialRole}>{t.role}</div>
            <div className={styles.testimonialQuote}>
              <span className={styles.testimonialQuoteIcon}>&#10077;</span> {t.quote}
            </div>
            <div className={styles.testimonialStars}>
              {'★★★★★'.slice(0, t.stars)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
