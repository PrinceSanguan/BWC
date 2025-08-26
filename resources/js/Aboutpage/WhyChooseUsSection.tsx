import React from 'react';
import styles from './WhyChooseUsSection.module.css';
import { LucideHeartHandshake, HandHeart, UsersRound, Scale} from 'lucide-react';


const reasons: { icon: React.ComponentType<any>; text: string }[] = [
  {
    icon: LucideHeartHandshake,
    text: 'Experienced, friendly professionals',
  },
  {
    icon: HandHeart,
    text: 'Eco-friendly and safe cleaning methods',
  },
  {
    icon: UsersRound,
    text: 'Flexible scheduling and reliable service',
  },
  {
    icon: Scale,
    text: 'Transparent pricing, no hidden fees',
  }
];


export default function WhyChooseUsSection() {
  return (
    <section className={styles.whyChooseSection} aria-label="Why Choose Us">
      <h2 className={styles.whyChooseTitle}>Why Choose Us?</h2>
      <div className={styles.whyChooseGrid}>
        {reasons.map((reason, i) => (
          <div className={styles.whyChooseCard} key={i}>
            <div className={styles.whyChooseIcon}>{React.createElement(reason.icon)}</div>
            <div className={styles.whyChooseReason}>{reason.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
