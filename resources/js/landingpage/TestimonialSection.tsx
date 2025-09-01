import styles from './TestimonialSection.module.css';
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

const testimonials = [
	{
		img: '/images/pexels-tima-miroshnichenko-6195953.jpg',
		name: 'Mark, Southville',
		role: 'Manager',
		quote: 'Prompt, polite, and brilliant results every time.',
		stars: 5,
	},
	{
		img: '/images/pexels-tima-miroshnichenko-6195953.jpg',
		name: 'Liz, Hanham',
		role: 'Manager',
		quote: 'Gutters cleared quickly, and left no mess behind.',
		stars: 5,
	},
	{
		img: '/images/pexels-tima-miroshnichenko-6195953.jpg',
		name: 'Tom, Easton',
		role: 'Manager',
		quote: 'Really flexible when I had to change a clean last-minute.',
		stars: 5,
	},
];

export default function TestimonialSection() {
	const sectionref = useRef<HTMLElement>(null);
	const hasAnimated = useRef(false);

	useEffect(() => {
		// Set initial hidden state for title and testimonial cards
		const element = sectionref.current;
		if (element) {
			const title = element.querySelector(`.${styles.testimonialTitle}`);
			const cards = element.querySelectorAll(`.${styles.testimonialCard}`);
			if (title) {
				(title as HTMLElement).style.opacity = '0';
				(title as HTMLElement).style.transform = 'translateY(50px)';
			}
			cards.forEach(card => {
				(card as HTMLElement).style.opacity = '0';
				(card as HTMLElement).style.transform = 'translateY(50px)';
			});
		}

		const handleScroll = () => {
			if (hasAnimated.current) return;
			const element = sectionref.current;
			if (!element) return;
			const rect = element.getBoundingClientRect();
			const sectionMiddle = rect.top + rect.height / 2;
			const viewportMiddle = window.innerHeight / 2;

			// Trigger when the section's middle is within 100px of viewport center
			if (Math.abs(sectionMiddle - viewportMiddle) < 100) {
				const title = element.querySelector(`.${styles.testimonialTitle}`);
				const cards = element.querySelectorAll(`.${styles.testimonialCard}`);

				// Animate title first
				if (title) {
					animate(title, {
						opacity: [0, 1],
						translateY: [50, 0],
						duration: 800,
						easing: 'easeOutQuad',
					});
				}

				// Then animate middle card
				if (cards[1]) {
					animate(cards[1], {
						opacity: [0, 1],
						translateY: [50, 0],
						duration: 800,
						delay: 200, // delay after title
						easing: 'easeOutQuad',
					});
				}

				// Then animate side cards
				if (cards[0]) {
					animate(cards[0], {
						opacity: [0, 1],
						translateY: [50, 0],
						duration: 800,
						delay: 400, // delay after middle card
						easing: 'easeOutQuad',
					});
				}

				if (cards[2]) {
					animate(cards[2], {
						opacity: [0, 1],
						translateY: [50, 0],
						duration: 800,
						delay: 400, // delay after middle card
						easing: 'easeOutQuad',
					});
				}

				hasAnimated.current = true;
				window.removeEventListener('scroll', handleScroll);
			}
		};

		window.addEventListener('scroll', handleScroll);
		// Initial check in case section is already in view
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section
			ref={sectionref}
			className={styles.testimonialSection}
			id="testimonials"
			aria-label="Testimonials"
		>
			<h2 className={styles.testimonialTitle}>
				Built on{' '}
				<span className={styles.testimonialAccent}>Trust</span> and{' '}
				<span className={styles.testimonialAccent}>Hard Work</span>
			</h2>
			<div className={styles.testimonialGrid}>
				{testimonials.map((t, i) => (
					<div className={styles.testimonialCard} key={i}>
						<div className={styles.testimonialAvatarWrap}>
							<img
								src={t.img}
								alt={t.name}
								className={styles.testimonialAvatar}
							/>
						</div>
						<div className={styles.testimonialName}>{t.name}</div>
						<div className={styles.testimonialRole}>{t.role}</div>
						<div className={styles.testimonialQuote}>
							<span className={styles.testimonialQuoteIcon}>&#10077;</span>{' '}
							{t.quote}
						</div>
						<div className={styles.testimonialStars}>
							{'★★★★★'.slice(0, t.stars)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
