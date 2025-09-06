import styles from './ServicesSection.module.css';
import Img from '/public/images/servicehero.jpg';
import { useEffect, useRef, useCallback } from 'react';
import { animate } from 'animejs';


type Service = {
  name: string;
  description: string;
  image: string;
  link: string;
};

const services: Service[] = [
  {
    name: 'Domestic Window Cleaning',
  description: "Elevate your home's curb appeal with our professional residential window cleaning service. Using advanced ladder-free technology and eco-friendly solutions, we deliver crystal-clear results that make your windows sparkle. Our Bristol window cleaners understand local needs and provide flexible scheduling that fits your lifestyle, ensuring your home always looks its absolute best.",
    image: Img,
    link: '/services/domestic',
  },
  {
    name: 'Commercial Window Cleaning',
  description: "Make a lasting impression with reliable commercial window cleaning tailored for Bristol businesses. Our professional window cleaning Bristol service includes same day window cleaning for urgent needs, ensuring your premises maintain that polished corporate image. From retail shops to office complexes, we deliver consistent quality that reflects your business standards.",
    image: Img,
    link: '/services/commercial',
  },
  {
    name: 'Gutter Clearing',
  description: "Protect your Bristol property investment with comprehensive gutter cleaning services Bristol homeowners depend on. Our thorough approach prevents costly water damage, removes dangerous blockages, and includes detailed system inspections. Trust our window cleaning company Bristol to keep your gutters flowing perfectly while maintaining your property's structural integrity.",
    image: Img,
    link: '/services/gutter',
  },
  {
    name: 'Soffit, Fascia & Gutter Face Cleaning',
  description: "Experience our complete range of specialist window cleaning services including solar panel cleaning Bristol, signage cleaning Bristol, and soffit maintenance. Our window cleaner Bristol UK team uses cutting-edge techniques to restore and maintain every aspect of your property's exterior, delivering results that exceed expectations every time.",
    image: Img,
    link: '/services/soffit-fascia',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animated = useRef<boolean[]>([false, false, false, false, false]);

  const setCardRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    // Observer for title
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current[0]) {
            if (titleRef.current) {
              animate(titleRef.current, {
                opacity: [0, 1],
                translateY: [-20, 0],
                duration: 1000,
                easing: 'easeOutQuad',
              });
            }
            animated.current[0] = true;
            titleObserver.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      titleObserver.observe(sectionRef.current);
    }

    // Observers for each card
    const cardObservers: IntersectionObserver[] = [];
    for (let i = 0; i < 4; i++) {
      const cardObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !animated.current[i + 1]) {
              const card = cardRefs.current[i];
              if (card) {
                animate(card, {
                  opacity: [0, 1],
                  translateY: [20, 0],
                  duration: 1000,
                  easing: 'easeOutQuad',
                });
              }
              animated.current[i + 1] = true;
              cardObserver.disconnect();
            }
          });
        },
        { threshold: 0.5 } // Trigger when middle of card is in view
      );

      const cardEl = cardRefs.current[i];
      if (cardEl) {
        cardObserver.observe(cardEl);
      }
      cardObservers.push(cardObserver);
    }

    return () => {
      titleObserver.disconnect();
      cardObservers.forEach(obs => obs.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.servicesSection} aria-label="Our Services" style={{ background: '#fff' }}>
      <h2 ref={titleRef} className={styles.servicesTitle}>Our Services</h2>
      <div className={styles.servicesIntro}>
        {services.map((service, i) => (
          <div className={styles.serviceTitleName} key={i}>
            <div>{service.name}</div>
          </div>))}
      </div>
      <div className={styles.servicesGrid}>
        {services.map((service, i) => (
          <div className={styles.serviceCard} key={i} ref={setCardRef(i)}>
            <img src={service.image} alt={service.name} className={styles.serviceImage} />
            <div className={styles.serviceName}>{service.name}</div>
            <div className={styles.serviceDesc}>{service.description}</div>
            <a href={service.link} className={styles.readMoreButton}>
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
