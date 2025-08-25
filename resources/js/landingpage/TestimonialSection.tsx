import styles from './TestimonialSection.module.css';

export default function TestimonialSection() {
  return (
    <section className={styles.testimonialSection} id="testimonials" aria-label="Testimonials">
      <h2 className={styles.testimonialTitle}>What Our Clients Say</h2>
      <blockquote className={styles.testimonialBlockquote}>
        "Fantastic service! Highly recommend."
      </blockquote>
      <cite className={styles.testimonialCite}>- Happy Customer</cite>
    </section>
  );
}
