import styles from './OurValuesSection.module.css';
import * as Icons from 'lucide-react';
import { useEffect, useRef, useCallback } from 'react';
import { animate } from 'animejs';

type Value = {
  description: string;
  icon: keyof typeof Icons;
};

const values: Value[] = [
  { description: 'All staff are full-time employees on well-paid contracts', icon: 'Handshake' },
  { description: 'We never use subcontractors', icon: 'HandHeart' },
  { description: 'We believe stable jobs make for better service', icon: 'Users' },
  { description: 'We value clear communication, fair pricing, and long-term relationships', icon: 'Scale' },
];

export default function OurValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ourRef = useRef<HTMLSpanElement>(null);
  const valuesRef = useRef<HTMLSpanElement>(null);

  const setCardRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate heading spans first
            if (ourRef.current) {
              animate(ourRef.current, {
                translateX: [-100, 0],
                opacity: [0, 1],
                duration: 600, // Faster
                easing: 'easeOutQuad',
              });
            }
            if (valuesRef.current) {
              animate(valuesRef.current, {
                translateX: [100, 0],
                opacity: [0, 1],
                duration: 600, // Faster
                delay: 300, // Shorter delay
                easing: 'easeOutQuad',
              });
            }
            // Then animate cards
            // Animation order: 1, 2, 0, 3 (middle first, then outer)
            const order = [1, 2, 0, 3];
            order.forEach((index, i) => {
              const card = cardRefs.current[index];
              if (card) {
                const text = card.querySelector(`.${styles.valueDesc}`);
                const icon = card.querySelector(`.${styles.valueBgIcon}`);
                // Stagger cards with shorter delay between each, starting after heading
                const cardDelay = 900 + i * 200; // Shorter total delay
                // Text first (fade + slide up), then icon (fade + scale) with 200ms internal delay
                if (text) {
                  animate(text, {
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 400, // Faster
                    delay: cardDelay,
                    easing: 'easeOutQuad',
                  });
                }
                if (icon) {
                  animate(icon, {
                    opacity: [0, 1],
                    scale: [0.8, 1],
                    duration: 400, // Faster
                    delay: cardDelay + 200, // 200ms after text
                    easing: 'easeOutQuad',
                  });
                }
              }
            });
            observer.disconnect(); // Run once
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.valuesSection} aria-label="Our Values">
      <h2 className={styles.valuesHeading}>
        <span ref={ourRef} className={styles.valuesTitle}>Our </span>
        <span ref={valuesRef} className={styles.valuesTitle}>Values</span>
      </h2>
      <div className={styles.valuesGrid} ref={gridRef}>
        {values.map((value, i) => {
          const IconComponent = (Icons as any)[value.icon] as React.ComponentType<any> | undefined;
          return (
            <div
              className={styles.valueCard}
              key={i}
              ref={setCardRef(i)}
            >
              <div className={styles.valueBgIcon}>
                {IconComponent ? <IconComponent className={styles.valueIcon} size={32} color="#fff" /> : null}
              </div>
              <div className={styles.valueDesc}>{value.description}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
