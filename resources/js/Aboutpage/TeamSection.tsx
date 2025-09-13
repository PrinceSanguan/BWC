import styles from './TeamSection.module.css';
import { useEffect, useRef, useCallback } from 'react';
import { animate } from 'animejs';

type TeamMember = {
  name: string;
  role: string;
  initials: string;
};

const team: TeamMember[] = [
  { name: 'Alex Smith', role: 'Founder', initials: 'AS' },
  { name: 'Jamie Lee', role: 'Lead Technician', initials: 'JL' },
  { name: 'Morgan Ray', role: 'Customer Care', initials: 'MR' },
  { name: 'Taylor Kim', role: 'Technician', initials: 'TK' },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const meetRef = useRef<HTMLSpanElement>(null);
  const teamRef = useRef<HTMLSpanElement>(null);

  const setCardRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate heading spans first
            if (meetRef.current) {
              animate(meetRef.current, {
                translateX: [-100, 0],
                opacity: [0, 1],
                duration: 600, // Faster
                easing: 'easeOutQuad',
              });
            }
            if (teamRef.current) {
              animate(teamRef.current, {
                translateX: [100, 0],
                opacity: [0, 1],
                duration: 600, // Faster
                delay: 300, // Shorter delay
                easing: 'easeOutQuad',
              });
            }
            // Then animate cards: middle two (1,2) first, then outer (0,3)
            const order = [1, 2, 0, 3];
            order.forEach((index, i) => {
              const card = cardRefs.current[index];
              if (card) {
                // Stagger cards with shorter delay between each, starting after heading
                const cardDelay = 900 + i * 200; // Shorter total delay
                animate(card, {
                  opacity: [0, 1],
                  translateY: [20, 0],
                  duration: 400, // Faster
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
    <section ref={sectionRef} className={styles.teamSection} aria-label="Our Team">
      <h2>
        <span ref={meetRef} className={styles.teamTitle}>Meet the</span>
        <span ref={teamRef} className={styles.teamTitle}> Team</span>
      </h2>
      <div className={styles.teamGrid}>
        {team.map((member, i) => (
          <div className={styles.teamCard} key={i} ref={setCardRef(i)}>
            <div className={styles.teamAvatar}>{member.initials}</div>
            <div className={styles.teamName}>{member.name}</div>
            <div className={styles.teamRole}>{member.role}</div>
            <div>
              <button
                className={styles.teamButton}
                type="button"
                onClick={() => { window.location.href = '/contact'; }}
              >
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
