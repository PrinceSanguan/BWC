import { MapPin, MousePointerClick } from 'lucide-react';
import styles from './HeroSection.module.css';
import Img from '/public/images/map.png';
import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';

export default function HeroSection() {
  const titleFirstRef = useRef<HTMLSpanElement>(null);
  const titleSecondRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const captionRef = useRef<HTMLHeadingElement>(null);
  const captionContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const pinsRef = useRef<HTMLDivElement[]>([]);
  const clickIconRef = useRef<HTMLDivElement>(null);
  const [scrollAnimationActive, setScrollAnimationActive] = useState(false);

  const scrollToArea = (areaIndex: number) => {
    const element = document.getElementById(`area-${areaIndex}`);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePinClick = (areaIndex: number) => {
    animate(`#pin-${areaIndex}`, {
      scale: [1, 1.2, 1],
      duration: 300,
      easing: 'easeOutQuad'
    });
    setScrollAnimationActive(true); // Enable scroll animation after pin click
    scrollToArea(areaIndex);
  };

  useEffect(() => {
    // Animation sequence
    const animateSequence = async () => {
      // 1. "Cover" appears first
      if (titleSecondRef.current) {
        animate(titleSecondRef.current, {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
          easing: 'easeOutQuad'
        });
      }

      // 2. "Areas We" appears after 400ms
      setTimeout(() => {
        if (titleFirstRef.current) {
          animate(titleFirstRef.current, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: 'easeOutQuad'
          });
        }
      }, 400);

      // 3. Subtitle text appears after 1000ms
      setTimeout(() => {
        if (subtitleRef.current) {
          animate(subtitleRef.current, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: 'easeOutQuad'
          });
        }
      }, 1000);

      // 4. "Click on your area" caption appears after 1600ms
      setTimeout(() => {
        if (captionContainerRef.current) {
          animate(captionContainerRef.current, {
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
            easing: 'easeOutQuad'
          });
        }
        if (captionRef.current) {
          animate(captionRef.current, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: 'easeOutQuad'
          });
        }
      }, 1600);

      // 5. Image appears after 2200ms
      setTimeout(() => {
        if (imageRef.current) {
          animate(imageRef.current, {
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 800,
            easing: 'easeOutQuad'
          });
        }
      }, 2200);

      // 6. Pins drop from top after 2600ms
      setTimeout(() => {
        animate(pinsRef.current, {
          opacity: [0, 1],
          translateY: [-100, 0],
          delay: stagger(200),
          duration: 1000,
          easing: 'easeOutBounce'
        });
      }, 2600);

      // 7. Click icon clicking effect after 3400ms
      setTimeout(() => {
        if (clickIconRef.current) {
          animate(clickIconRef.current, {
            opacity: [0, 1],
            scale: [0.5, 1],
            duration: 300,
            easing: 'easeOutQuad',
            complete: () => {
              // Continuous clicking animation
              if (clickIconRef.current) {
                animate(clickIconRef.current, {
                  scale: [1, 0.8, 1],
                  duration: 800,
                  loop: true,
                  easing: 'easeInOutQuad'
                });
              }
            }
          });
        }
      }, 3400);
    };

    animateSequence();
  }, []);

  useEffect(() => {
    if (scrollAnimationActive) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        // Animate pins based on scroll position (parallax effect)
        animate(pinsRef.current, {
          translateY: ((el: Element, i: number) => -scrollY * 0.05 + (i * 10)) as any, // Suppress TS error, allow animation
          duration: 0
        });
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollAnimationActive]);

  return (
    <section className={styles.areasHeroSection} aria-label="Areas Hero">
      <div className={styles.areasHeroContent}>
        <div className={styles.areasHeroLeftContainer}>
          <h1>
            <span ref={titleFirstRef} className={styles.areasHeroTitle} style={{ opacity: 0 }}>Areas We </span>
            <span ref={titleSecondRef} className={styles.areasHeroTitle} style={{ opacity: 0 }}>Cover</span>
          </h1>
          <div ref={subtitleRef} style={{ opacity: 0 }}>
            <h2 className={styles.areasHeroSubtitle}>
              We deliver professional window cleaning services across the entire Bristol urban area with unmatched reliability and expertise.
              Our experienced window cleaners bristol team ensures crystal-clear results for both residential and commercial window cleaning properties throughout the city.
            </h2>
            <h2 className={styles.areasHeroSubtitle}>
              Our biggest customer bases are in South and East Bristol,
              but we provide trusted window cleaning bristol coverage across Central <br /> and North areas too.
            </h2>
          </div>
        </div>
        <div className={styles.areasHeroRightContainer}>
          <div ref={captionContainerRef} className={styles.areasHeroImageCaptionContainer} style={{ opacity: 0, marginLeft: 'auto' }}>
            <div ref={clickIconRef} style={{ opacity: 0 }}>
              <MousePointerClick className={styles.areasHeroMousePointer} />
            </div>
            <h2 ref={captionRef} className={styles.areasHeroImageCaption} style={{ opacity: 0 }}>
              Click on your area to discover local window cleaners near me prices.
            </h2>
          </div>
          <img ref={imageRef} className={styles.areasHeroImage} src={Img} alt="Map of Bristol" style={{ opacity: 0 }} />
      
          <div 
            id="pin-3"
            ref={el => { if (el) pinsRef.current[0] = el; }}
            className={styles.pinWrapper} 
            style={{ top: '10%', left: '25%', opacity: 0 }} 
            onClick={() => handlePinClick(3)}
          >
            <MapPin className={styles.areasHeroPin} />
            <span className={styles.pinTooltip}>North Bristol</span>
          </div>
          <div 
            id="pin-2"
            ref={el => { if (el) pinsRef.current[1] = el; }}
            className={styles.pinWrapper} 
            style={{ top: '25%', left: '55%', opacity: 0 }} 
            onClick={() => handlePinClick(2)}
          >
            <MapPin className={styles.areasHeroPin} />
            <span className={styles.pinTooltip}>Central Bristol</span>
          </div>
          <div 
            id="pin-0"
            ref={el => { if (el) pinsRef.current[2] = el; }}
            className={styles.pinWrapper} 
            style={{ top: '52%', left: '60%', opacity: 0 }} 
            onClick={() => handlePinClick(0)}
          >
            <MapPin className={styles.areasHeroPin} />
            <span className={styles.pinTooltip}>South Bristol</span>
          </div>
          <div 
            id="pin-1"
            ref={el => { if (el) pinsRef.current[3] = el; }}
            className={styles.pinWrapper} 
            style={{ top: '38%', left: '78%', opacity: 0 }} 
            onClick={() => handlePinClick(1)}
          >
            <MapPin className={styles.areasHeroPin} />
            <span className={styles.pinTooltip}>East Bristol</span>
          </div>
      
        </div>
      </div>
    </section>
  );
}
