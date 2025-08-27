import styles from './OurValuesSection.module.css';
import * as Icons from 'lucide-react';

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
  return (
    <section className={styles.valuesSection} aria-label="Our Values">
      <h2>
        <span className={styles.valuesTitle}>Our </span>
        <span className={styles.valuesTitle}>Values</span>
      </h2>
      <div className={styles.valuesGrid}>
        {values.map((value, i) => {
          const IconComponent = (Icons as any)[value.icon] as React.ComponentType<any> | undefined;
          return (
            <div className={styles.valueCard} key={i}>
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
