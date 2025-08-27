import styles from './BlogsSection.module.css';
import Img from '/public/images/servicehero.jpg';

type Service = {
  name: string;
  description: string;
  image: string;
};

const services: Service[] = [
  { name: '5 Reasons Your Bristol Home Needs a Professional Window Cleaner', description: 'You’ve probably been there: you grab a bottle of cleaner and some paper towels, ready to make your windows sparkle, only to be left with frustrating streaks and smudges...', image: Img },
  { name: 'The Surprising Benefits of Regular Commercial Window Cleaning in Bristol', description: 'As a business owner in Bristol, you know that first impressions are everything. Your storefront, office building, or restaurant is the face of your brand. While you might focus on your interior and signage...', image: Img },
  { name: 'Why Our Eco-Friendly Window Cleaning Is Perfect for Bristol', description: 'Many people are becoming more aware of the environmental impact of household cleaning products. That\'s why we\'re proud to offer an eco-friendly window cleaning Bristol service...', image: Img },
  { name: 'Bristol\'s Best-Kept Secret: How BWC Makes Windows Sparkle Year-Round', description: 'Discover how BWC Window Cleaning transforms homes in Bristol with expert techniques and eco-friendly solutions, ensuring your windows shine brilliantly throughout every season.', image: Img },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection} aria-label="Our Services">
      <div className={styles.servicesGrid}>
        {services.map((service, i) => (
          <article className={styles.serviceCard} key={i}>
            <img src={service.image} alt={service.name} className={styles.serviceImage} />
            <h3 className={styles.serviceName}>{service.name}</h3>
            <p className={styles.serviceDesc}>{service.description}</p>
            <button className={styles.readMoreButton}>Read more</button>
          </article>
        ))}
      </div>
    </section>
  );
}
