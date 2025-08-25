import styles from './ServicesSection.module.css';

type Service = {
  name: string;
  description: string;
};

const services: Service[] = [
  { name: 'Domestic Window Cleaning', description: 'Streak-free cleaning for homes, flats, and apartments.' },
  { name: 'Commercial Window Cleaning', description: 'Professional cleaning for offices, shops, and businesses.' },
  { name: 'Gutter Clearing', description: 'Keep your gutters clear and your property protected.' },
  { name: 'Soffit, Fascia & Gutter Face Cleaning', description: 'Restore the look of your exterior with a thorough clean.' },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} aria-label="Our Services">
      <h2 className={styles.servicesTitle}>Our Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, i) => (
          <div className={styles.serviceCard} key={i}>
            <div className={styles.serviceName}>{service.name}</div>
            <div className={styles.serviceDesc}>{service.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
