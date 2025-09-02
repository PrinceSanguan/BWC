import styles from './AreasSection.module.css';
import { MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs'; // Fixed import: Use default export

type Area = {
  name: string;
  description: string;
  subareas?: string[];
  services?: string[];
};

type AreasSectionProps = {
  areaIndex?: number;
  areas?: Area[]; 
};

const defaultAreas: Area[] = [
  { 
    name: 'South Bristol',
    description: 'We serve homes and businesses throughout:', 
    subareas: [ 'Bedminster', 'Southville', 'Knowle', 'Totterdown', 'Brislington', 'Bishopsworth', 'Bedminster Down'], 
    services: ['One-off cleans before house sales', 'Regular 6-weekly window cleaning services', 'Gutter clearing in older properties', 'External fascia/gutter face cleaning'] 
  },
  { 
    name: 'East Bristol', 
    description: 'We clean in:', 
    subareas: ['Redfield', 'St George', 'Hanham', 'Kingswood', 'Easton', 'Speedwell', 'Fishponds', 'Staple Hill'], 
    services: ['Domestic window cleaning', 'Commercial units in Kingswood/Fishponds', 'Eco-friendly window cleaning'] 
  },
  { 
    name: 'Central Bristol', 
    description: 'Local service in:', 
    subareas: ['Clifton', 'Cotham', 'Montpelier','Redland', 'Bishopston', 'Hotwells', 'Kingsdown'], 
    services: [' Reach and wash window cleaning technology ', 'Professional window cleaning & brushing', 'Flats, student homes, small business fronts']
    
  },
  {
    name: 'North Bristol',
    description: 'Horfield, Filton, Bishopston, Henleaze, and more.',
    subareas: ['Horfield', 'Filton', 'Bishopston', 'Henleaze', 'Stoke Gifford', 'Bradley Stoke'],
    services: ['Residential window cleaning', 'Professional fascia/gutter face cleans', 'Gutter clearing on larger semis & detached homes']
  },
];

export default function AreasSection({ areaIndex = 0, areas = defaultAreas }: AreasSectionProps) {
  const currentArea = areas[areaIndex];
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);
  const subareasRef = useRef<HTMLDivElement>(null);
  const servicesTitleRef = useRef<HTMLHeadingElement>(null);
  const servicesGridRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate left container elements with stagger
            animate(
              [
                titleRef.current,
                descriptionRef.current,
                subareasRef.current,
              ],
              {
                opacity: [0, 1],
                translateY: [30, 0],
                delay: stagger(200, { start: 200 }), // Fixed: Use anime.stagger()
                duration: 800,
                easing: 'easeOutQuad',
              }
            );

            // Animate right container elements with stagger and delay
            animate(
              [
                servicesTitleRef.current,
                servicesGridRef.current,
              ],
              {
                opacity: [0, 1],
                translateY: [30, 0],
                delay: stagger(200, { start: 500 }), // Fixed: Use stagger()
                duration: 800,
                easing: 'easeOutQuad',
              }
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  if (!currentArea) {
    return <div>Area not found</div>;
  }

  return (
    <section ref={sectionRef} className={styles.areasSection} aria-label="Service Areas">
      <div className={styles.containerLeft}>
        <h1 ref={titleRef} className={styles.areasTitle}>{currentArea.name}</h1>
        <h2 ref={descriptionRef} className={styles.areasDescription}>{currentArea.description}</h2>
        <div ref={subareasRef} className={styles.areasSubareas}>
          {currentArea.subareas && currentArea.subareas.length > 0 ? (
            <ul>
              {currentArea.subareas.map((subarea) => (
                <li key={subarea}><MapPin className={styles.areasSubareaPin} /> {subarea}</li>
              ))}
            </ul>
          ) : (
            <p>We cover all areas within {currentArea.name}.</p>
          )}
        </div>
      </div>

      <div className={styles.containerRight}>
        <h1 ref={servicesTitleRef} className={styles.serivecesTitle}>Popular Services</h1>
        <div>
          {currentArea.services && currentArea.services.length > 0 ? (
            <ul ref={servicesGridRef} className={styles.areasGrid}>
              {currentArea.services.map((service) => (
                <li className={styles.areasCard} key={service}>
                  <span className={styles.areasName}>{service}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Contact us for a full list of services.</p>
          )}
        </div>
      </div>
    </section>
  );
}

