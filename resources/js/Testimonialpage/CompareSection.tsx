import styles from './CompareSection.module.css';
import * as Icons from 'lucide-react';

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
  return (
    <section className={styles.compareSection} aria-label="Before and After Comparison">
      <h1 className={styles.compareTitle}>What Makes Us <span>Different</span></h1>
      <h2 className={styles.compareSubtitle}>
        We're a local business built on trust and transparency. 
        Our focus is always on delivering top-tier service to every customer.
      </h2>
      
      <div className={styles.compareGrid}>
        {values.map((value, i) => {
          const IconComponent = (Icons as any)[value.icon] as React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined;

          return (
            <div className={styles.compareCard} key={i}>
              <div className={styles.compareBgIcon} aria-hidden="true" >
                {IconComponent ? (
                  <IconComponent className={styles.compareIcon} size={40} strokeWidth={2} />
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
