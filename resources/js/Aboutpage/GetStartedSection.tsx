import styles from "../Aboutpage/GetStartedSection.module.css";
import { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function GetStartedSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (leftRef.current && rightRef.current) {
                            // Animate left text from left
                            animate(leftRef.current, {
                                translateX: [-100, 0],
                                opacity: [0, 1],
                                duration: 1000,
                                easing: 'easeOutQuad'
                            });
                            // Animate right image from right after text
                            animate(rightRef.current, {
                                translateX: [100, 0],
                                opacity: [0, 1],
                                duration: 1000,
                                delay: 1000, // Delay to start after text animation
                                easing: 'easeOutQuad'
                            });
                        }
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
        <section ref={sectionRef} className={styles.getStartedSection}>
            <div className={styles.content}>
                <div ref={leftRef} className={styles.contentLeft}>
                    <h1>
                        <span className={styles.getStartedTitle}>Where It All</span>
                        <span className={styles.getStartedTitle}> Started</span>
                    </h1>
                    <h2 className={styles.getStartedDescription}>
                    Invisible Window Cleaning was built on the foundations of a small round originally run by Keith,
                    a well-known window cleaner in South Bristol. For over 15 years, Keith cleaned homes around Bedminster,
                    Southville and Knowle — always with a smile and a wave.
                    </h2>
                    <h2 className={styles.getStartedDescription}>
                    Andy took over the round from Keith when he retired, gradually expanded the team, 
                    and turned the business into what it is today.
                    We still carry many of Keith’s old customers — and his high standards.
                    </h2>
                </div>
                <div ref={rightRef} className={styles.contentRight}>
                    <img src="/images/getstarted.jpg" alt="Get started image" />
                </div>
            </div>
        </section>
    )
}
