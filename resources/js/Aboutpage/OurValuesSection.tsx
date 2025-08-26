import styles from './OurValuesSection.module.css';
import { LucideHeartHandshake, HandHeart, UsersRound, Scale} from 'lucide-react';

type Value = {
  description: string;
  icon: React.ComponentType<any>;
};

const values: Value[] = [
  { 
    description: 'All staff are full-time employees on well-paid contracts',
    icon: LucideHeartHandshake
  },
  { 
    description: 'We never use subcontractors',
    icon: HandHeart
  },
  { 
    description: 'We believe stable jobs make for better service',
    icon: UsersRound
  },
  { 
    description: 'We value clear communication, fair pricing, and long-term relationships',
    icon: Scale
  },
];

export default function OurValuesSection() {
  return (
    <section className={styles.valuesSection} aria-label="Our Values">
      <h2>
        <span className={styles.valuesTitle}>Our </span>
        <span className={styles.valuesTitle}>Values</span>
      </h2>
      <div className={styles.valuesGrid}>
        {values.map((value, i) => {
          const IconComponent = value.icon;
          return (
            <div className={styles.valueCard} key={i}>
              <div className={styles.valueBgIcon}>
                 <IconComponent className={styles.valueIcon} size={32} color="#fff" />
              </div>
              <div className={styles.valueDesc}>{value.description}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
