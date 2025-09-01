import { useEffect, useRef, useState } from 'react';
import styles from './ActionsSection.module.css';
import { animate } from 'animejs';

const actions = [
	{
		img: '/images/pexels-tima-miroshnichenko-6195953.jpg',
		alt: 'Residential Window Cleaners',
		caption: 'Residential\nWindow Cleaners',
	},
	{
		img: '/images/pexels-tima-miroshnichenko-6195956.jpg',
		alt: 'Professional Window Cleaning',
		caption: 'Professional\nWindow Cleaning',
	},
	{
		img: '/images/pexels-matilda-wormwood-4098315.jpg',
		alt: 'Cleaning your Windows, Frames, Sills & more',
		caption: 'Cleaning your Windows,\nFrames , Sills & more',
	},
];

export default function ActionsSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isVisible) {
			// Set initial hidden state for all elements
			if (titleRef.current) {
				titleRef.current.style.opacity = '0';
				titleRef.current.style.transform = 'translateY(-20px)';
			}
			if (subtitleRef.current) {
				subtitleRef.current.style.opacity = '0';
				subtitleRef.current.style.transform = 'translateY(20px)';
			}
			const cards = sectionRef.current?.querySelectorAll(`.${styles.actionCard}`);
			cards?.forEach((card) => {
				(card as HTMLElement).style.opacity = '0';
				(card as HTMLElement).style.transform = 'translateY(30px)';
			});

			// Animate title (faster duration)
			if (titleRef.current) {
				animate(titleRef.current, {
					opacity: [0, 1],
					translateY: [-20, 0],
					duration: 400, // Reduced from 800ms
					easing: 'easeOutCubic', // Snappier easing
				});
			}

			// Animate subtitle after title (reduced delay and duration)
			if (subtitleRef.current) {
				animate(subtitleRef.current, {
					opacity: [0, 1],
					translateY: [20, 0],
					duration: 400, // Reduced from 800ms
					easing: 'easeOutCubic',
					delay: 100, // Reduced from 200ms
				});
			}

			// Animate cards with reduced delays and durations
			const cardElements = sectionRef.current?.querySelectorAll(`.${styles.actionCard}`);
			if (cardElements) {
				// Middle card (index 1)
				animate(cardElements[1], {
					opacity: [0, 1],
					translateY: [30, 0],
					duration: 400, // Reduced from 800ms
					easing: 'easeOutCubic',
					delay: 300, // Reduced from 600ms
				});
				// Left card (index 0)
				animate(cardElements[0], {
					opacity: [0, 1],
					translateY: [30, 0],
					duration: 400, // Reduced from 800ms
					easing: 'easeOutCubic',
					delay: 400, // Reduced from 800ms
				});
				// Right card (index 2)
				animate(cardElements[2], {
					opacity: [0, 1],
					translateY: [30, 0],
					duration: 400, // Reduced from 800ms
					easing: 'easeOutCubic',
					delay: 500, // Reduced from 1000ms
				});
			}
		}
	}, [isVisible]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{
				threshold: 0.5, // Trigger when 50% of the section is visible
				rootMargin: '0px 0px -100px 0px', // Offset to trigger earlier
			}
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className={styles.actionsSection}
			aria-label="Our Sparkle in Action"
		>
			<h2 ref={titleRef} className={styles.actionsTitle}>
				Our{' '}
				<span className={styles.actionsAccent}>Sparkle</span> in{' '}
				<span className={styles.actionsAccent}>Action</span>
			</h2>
			<div ref={subtitleRef} className={styles.actionsSubtitle}>
				Experience the difference with our professional window cleaning service.
				We bring a
				<br />
				sparkling finish to homes and businesses alike.
			</div>
			<div className={styles.actionsGrid}>
				{actions.map((a, i) => (
					<div className={styles.actionCard} key={i}>
						<img src={a.img} alt={a.alt} className={styles.actionImg} />
						<div className={styles.actionCaption}>
							{a.caption.split('\n').map((line, idx) => (
								<div key={idx}>{line}</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
