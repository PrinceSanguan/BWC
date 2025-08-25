import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.contactSection} aria-label="Contact">
      <h2 className={styles.contactTitle}>Contact Us</h2>
      <div className={styles.contactInfo}>
        Have a question or want to request a quote? Fill out the form below and our team will get back to you as soon as possible.
      </div>
      <form className={styles.contactForm}>
        <input className={styles.contactInput} type="text" placeholder="Your Name" required />
        <input className={styles.contactInput} type="email" placeholder="Your Email" required />
        <textarea className={styles.contactTextarea} rows={4} placeholder="Your Message" required />
        <button className={styles.contactButton} type="submit">Send Message</button>
      </form>
    </section>
  );
}
