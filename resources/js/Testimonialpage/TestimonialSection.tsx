import styles from './TestimonialSection.module.css';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: 'Sarah B.',
    role: 'Homeowner',
    quote: 'Absolutely spotless windows! The team was friendly and efficient. Highly recommend.',
    rating: 5,
  },
  {
    name: 'James P.',
    role: 'Business Owner',
    quote: 'Professional service and great results every time. My shopfront has never looked better.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    role: 'Landlord',
    quote: 'Easy booking, punctual staff, and sparkling clean windows. Will use again!',
    rating: 4,
  },
];

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection} aria-label="Customer Testimonials">
      <h2 className={styles.testimonialTitle}>What Our Customers Say</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((t, i) => (
          <article className={styles.testimonialCard} key={i} aria-label={`Testimonial from ${t.name}`}>
            <div className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</div>
            <div className={styles.testimonialStars} aria-label={`${t.rating} star rating`}>
              {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
            </div>
            <div className={styles.testimonialName}>{t.name}</div>
            <div className={styles.testimonialRole}>{t.role}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
