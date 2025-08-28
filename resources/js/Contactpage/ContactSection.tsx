import styles from './ContactSection.module.css';
import Img from '/public/images/contact.avif'
import { PhoneCall, Mail,  } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className={styles.contactSection} aria-label="Contact">
      <div className={styles.contactContainer}>
        
        <div className={styles.contactInfoSection}>
          <h1 className={styles.contactTitle}>
            Get a <span>Free </span> Quote Today
          </h1>
          <h2 className={styles.contactInfo}>
            Note: We'll get back to you quickly with a no-obligation quote.
            <br />You don’t need to be home for most jobs — just provide access.</h2>
            <img className={styles.contactImage} src={Img} alt="" />
            <div className={styles.contactInfoContainer}>
              <div>
                <PhoneCall size={32} color="#4A90E2" />
                <div>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              <div>
                <Mail size={32} color="#4A90E2" />
                <div>
                  <p>
                    info@example.com
                  </p>
                </div>
              </div>
            </div>
        </div>


        <div className={styles.contactFormSection}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" required  placeholder='John Doe'/>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Address/Area *</label>
              <input type="text" id="address" name="address" required  placeholder='Your address'/>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Service(s) needed *</label>
              <select id="services" name="services" required>
                <option value="">Choose services</option>
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>
                <option value="service3">Service 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="message">Preferred contact method *</label>
              <select name="method" id="method" required>
                <option value="">Select contact method</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div>
              <label htmlFor="message">Optional Notes</label>
              <textarea id="message" name="message" rows={4} placeholder='Anything else you’d like us to know? Leave us a message'></textarea>
            </div>
            <button type="submit" className={styles.ctaBtn}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
