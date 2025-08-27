import React from 'react';
import styles from './WhyChooseUsSection.module.css';
import * as Icons from 'lucide-react';

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
  return (
    <section className={styles.whyChooseSection} aria-label="Why Choose Us">
      <h2 className={styles.whyChooseTitle}>Why Choose Us?</h2>
      <div className={styles.whyChooseGrid}>
        {reasons.map((reason, i) => {
          const IconComponent = (Icons as any)[reason.icon] as React.ComponentType<any> | undefined;
          return (
            <div className={styles.whyChooseCard} key={i}>
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
