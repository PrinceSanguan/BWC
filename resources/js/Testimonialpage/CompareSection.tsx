import styles from './CompareSection.module.css';
import * as Icons from 'lucide-react';
import { useEffect, useRef, useCallback } from 'react';
import { animate } from 'animejs';

type Value = {
  description: string;
  icon: keyof typeof Icons;
};

const values: Value[] = [
  { description: 'Fully insured for every job', icon: 'ShieldCheck' },
  { description: 'Uniformed, friendly staff', icon: 'Users' },
  { description: 'Serving Bristol since [established year]', icon: 'HandHeart' },
  { description: 'Fair employment for all workers', icon: 'Handshake' },
  { description: 'Hundreds of happy regular customers', icon: 'Laugh' }, 
];

export default function CompareSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRestRef = useRef<HTMLSpanElement>(null);
  const differentRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate "Different" first with pop effect
            if (differentRef.current) {
              animate(differentRef.current, {
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 1200,
                easing: 'easeOutQuad',
              });
            }

            // Then animate the rest of the title
            if (titleRestRef.current) {
              animate(titleRestRef.current, {
                opacity: [0, 1],
                translateY: [-20, 0],
                duration: 1200,
                delay: 200,
                easing: 'easeOutQuad',
              });
            }

            // Subtitle
            if (subtitleRef.current) {
              animate(subtitleRef.current, {
                opacity: [0, 1],
                translateY: [-20, 0],
                duration: 1200,
                delay: 400,
                easing: 'easeOutQuad',
              });
            }

            // Animate all cards together
            cardRefs.current.forEach((card, i) => {
              if (card) {
                animate(card, {
                  opacity: [0, 1],
                  scale: [0.8, 1],
                  duration: 1200,
                  delay: 600,
                  easing: 'easeOutQuad',
                });
              }
            });

            observer.disconnect(); // Run once
          }
        });
      },
      { 
        threshold: 0.7, // Increased threshold to trigger deeper in the section
        rootMargin: '-50px 0px' // Additional offset to fine-tune trigger point
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.compareSection} aria-label="Before and After Comparison">
      <h1 className={styles.compareTitle}>
        <span ref={titleRestRef}>What Makes Us </span>
        <span ref={differentRef}>Different</span>
      </h1>
      <h2 ref={subtitleRef} className={styles.compareSubtitle}>
        We're a local business built on trust and transparency. 
        Our focus is always on delivering top-tier service to every customer.
      </h2>
      
      <div className={styles.compareGrid}>
        {values.map((value, i) => {
          const IconComponent = (Icons as any)[value.icon] as React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined;

          return (
            <div className={styles.compareCard} key={i} ref={setCardRef(i)}>
              <div className={styles.compareBgIcon} aria-hidden="true" >
                {IconComponent ? (
                  <IconComponent className={styles.compareIcon} width={40} height={40} strokeWidth={2} />
                ) : (
                  <span className={styles.missingIcon}>{value.icon}</span>
                )}
              </div>
              <div className={styles.compareDesc}>{value.description}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
