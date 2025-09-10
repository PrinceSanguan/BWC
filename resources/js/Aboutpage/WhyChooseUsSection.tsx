import React, { useEffect, useRef, useCallback } from 'react';
import styles from './WhyChooseUsSection.module.css';
import * as Icons from 'lucide-react';
import { animate } from 'animejs';

type Reason = {
  icon: string; 
  text: string;
  definition: string;
};

const reasons: Reason[] = [
  { icon: 'Handshake', text: 'Experienced, friendly professionals', definition: 'Our team is highly trained and dedicated to providing the best service possible.' },
  { icon: 'HandHeart', text: 'Eco-friendly and safe cleaning methods', definition: 'We use environmentally friendly products and techniques to ensure the safety of your home and the planet.' },
  { icon: 'Users', text: 'Flexible scheduling and reliable service', definition: 'We work around your schedule to provide convenient and dependable cleaning services.' },
  { icon: 'Scale', text: 'Transparent pricing, no hidden fees', definition: 'We provide clear and upfront pricing, so you know exactly what to expect with no surprises.' },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate h2 first
            if (h2Ref.current) {
              animate(h2Ref.current, {
                opacity: [0, 1],
                translateY: [-20, 0],
                duration: 1000,
                easing: 'easeOutQuad',
              });
            }
            // Then animate cards: 0 and 1 first, then 2 and 3, with converging effect
            const order = [0, 1, 2, 3];
            order.forEach((index, i) => {
              const card = cardRefs.current[index];
              if (card) {
                // Stagger: 0 and 1 at 1000ms, 2 and 3 at 1300ms
                const cardDelay = 1000 + Math.floor(i / 2) * 300;
                // Converging: left cards (0,2) from -100, right cards (1,3) from +100
                const translateXFrom = index % 2 === 0 ? -100 : 100;
                animate(card, {
                  opacity: [0, 1],
                  translateX: [translateXFrom, 0],
                  duration: 600,
                  delay: cardDelay,
                  easing: 'easeOutQuad',
                });
              }
            });
            observer.disconnect(); // Run once
          }
        });
      },
      {
        threshold: 0, // Trigger when any part is visible
        rootMargin: '-50% 0px -50% 0px' // Trigger when the middle of the section is in the middle of the viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.whyChooseSection} aria-label="Why Choose Us">
      <h1 ref={h2Ref} className={styles.whyChooseTitle}>Why Choose Us?</h1>
      <div className={styles.whyChooseGrid}>
        {reasons.map((reason, i) => {
          const IconComponent = (Icons as any)[reason.icon] as React.ComponentType<any> | undefined;
          return (
            <div className={styles.whyChooseCard} key={i} ref={setCardRef(i)}>
              <div className={styles.whyChooseIcon}>
                {IconComponent
                  ? <IconComponent size={50} color="#256193" />
                  : <div style={{width:50,height:50,borderRadius:8,background:'#e6f0f5'}} />}
              </div>
              <div className={styles.whyChooseReason}>{reason.text}</div>
              <div className={styles.whyChooseDefinition}>{reason.definition}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
