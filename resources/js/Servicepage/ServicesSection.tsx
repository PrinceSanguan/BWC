import styles from './ServicesSection.module.css';
import Img from '/public/images/servicehero.jpg';
import { useEffect, useRef, useCallback } from 'react';
import { animate } from 'animejs';

type Service = {
  name: string;
  description: string;
  image: string;
};

const services: Service[] = [
  { name: 'Domestic Window Cleaning', description: 'It is a common service nationwide to have your domestic windows cleaned regularly. Having a good regular and reliable window cleaner is hard to come by.', image: Img },
  { name: 'Commercial Window Cleaning', description: 'Unlike many other Bristol window cleaners, we won’t quit until the job is done to a gold standard. Our commercial window cleaning strategy aims to leave you with a thorough window cleaning job done', image: Img },
  { name: 'Gutter Clearing', description: 'Don\'t let clogged gutters threaten your home. Our expert gutter clearing service is designed to protect your property from the serious and costly damage that can result from water overflow...', image: Img },
  { name: 'Soffit, Fascia & Gutter Face Cleaning', description: 'Bring your home\'s exterior back to life with our professional cleaning service for soffits, fascias, and gutter faces. Over time, these areas can become stained with dirt, algae, and grime, making your property look tired and neglected..', image: Img },
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
    <section ref={sectionRef} className={styles.servicesSection} aria-label="Our Services">
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
            <button className={styles.readMoreButton}>Read more</button>
          </div>
        ))}
      </div>
    </section>
  );
}
