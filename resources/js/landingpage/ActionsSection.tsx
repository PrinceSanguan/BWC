import { useEffect, useRef, useState } from 'react';
import styles from './ActionsSection.module.css';

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
	const [isVisible, setIsVisible] = useState(false);

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
			<h2 className={`${styles.actionsTitle} ${isVisible ? styles.titleVisible : ''}`}>
				Our{' '}
				<span className={styles.actionsAccent}>Sparkle</span> in{' '}
				<span className={styles.actionsAccent}>Action</span>
			</h2>
			<div className={`${styles.actionsSubtitle} ${isVisible ? styles.subtitleVisible : ''}`}>
				Experience the difference with our professional window cleaning service.
				We bring a
				<br />
				sparkling finish to homes and businesses alike.
			</div>
			<div className={styles.actionsGrid}>
				{actions.map((a, i) => (
					<div
						className={`${styles.actionCard} ${
							isVisible ? styles.visible : ''
						}`}
						key={i}
						style={{
							'--delay':
								i === 1
									? '600ms' // Middle card after text
									: i === 0
									? '800ms' // Left card
									: '1000ms', // Right card
						} as React.CSSProperties}
					>
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
