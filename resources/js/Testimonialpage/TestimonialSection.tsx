import styles from './TestimonialSection.module.css';
import { useEffect, useRef, useCallback } from 'react';
import { animate } from 'animejs';

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
  const sectionRef = useRef<HTMLElement>(null);
  const titleRestRef = useRef<HTMLSpanElement>(null);
  const customersRef = useRef<HTMLSpanElement>(null);
  const sayRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate "Customers" first
    if (customersRef.current) {
      animate(customersRef.current, {
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 1500, // Slower
        easing: 'easeOutQuad',
      });
    }

    // Then animate the rest of the title
    if (titleRestRef.current) {
      animate(titleRestRef.current, {
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 1500, // Slower
        delay: 300, // Adjusted delay
        easing: 'easeOutQuad',
      });
    }

    if (sayRef.current) {
      animate(sayRef.current, {
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 1500, // Slower
        delay: 300, // Adjusted delay
        easing: 'easeOutQuad',
      });
    }

    // Subtitle
    if (subtitleRef.current) {
      animate(subtitleRef.current, {
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 1500, // Slower
        delay: 600, // Adjusted delay
        easing: 'easeOutQuad',
      });
    }

    // Cards: middle first, then sides
    if (cardRefs.current[1]) {
      animate(cardRefs.current[1], {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1500, // Slower
        delay: 900, // Adjusted delay
        easing: 'easeOutQuad',
      });
    }

    if (cardRefs.current[0]) {
      animate(cardRefs.current[0], {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1500, // Slower
        delay: 1200, // Adjusted delay
        easing: 'easeOutQuad',
      });
    }

    if (cardRefs.current[2]) {
      animate(cardRefs.current[2], {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1500, // Slower
        delay: 1200, // Adjusted delay
        easing: 'easeOutQuad',
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.testimonialSection} aria-label="Customer Testimonials">
      <h1 className={styles.testimonialTitle}>
        <span ref={titleRestRef}>What Our </span>
        <span ref={customersRef}>Customers</span>
        <span ref={sayRef}> Say</span>
      </h1>
      <h2 ref={subtitleRef} className={styles.testimonialSubtitle}>Read what real clients have to say about our service. Their feedback highlights the quality and care we bring to every job.</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((t, i) => {
          const setCardRef = useCallback((el: HTMLDivElement | null) => {
            if (el) {
              cardRefs.current[i] = el;
            }
          }, [i]);

          return (
            <article className={styles.testimonialCard} key={i} ref={setCardRef} aria-label={`Testimonial from ${t.name}`}>
              <div className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</div>
              <div className={styles.testimonialStars} aria-label={`${t.rating} star rating`}>
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
              </div>
              <div className={styles.testimonialName}>{t.name}</div>
              <div className={styles.testimonialRole}>{t.role}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
