import styles from './FAQSection.module.css';
import { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';

const faqs = [
	{
		q: 'Which areas across Bristol do you cover?',
		a: (
			<>
				Our domestic window cleaning service covers all Bristol postcodes including Clifton, Redland, Southville, Bedminster, St. Pauls, Easton, and surrounding areas. Whether you need residential window cleaners Bristol city center or commercial window cleaning services in outer Bristol, our fully insured window cleaning services reach every corner of our beautiful city.
			</>
		),
	},
	{
		q: 'Do I need to be home when you clean?',
		a: (
			<>
				Absolutely not! Our professional window cleaning services are designed for your convenience. We'll send text reminders, complete your affordable window cleaning service to perfection, and you can pay securely online. This flexible approach makes us the best window cleaning Bristol choice for busy homeowners and commercial clients alike.
			</>
		),
	},
	{
		q: 'Can you provide multiple cleaning services together?',
		a: (
			<>
				Yes! Beyond our core Bristol window cleaning services, we offer gutter cleaning and maintenance, solar panel cleaning Bristol, signage cleaning, and window frame and sill cleaning. Bundling services provides better value and ensures your entire property exterior receives our eco-friendly window cleaning solutions treatment in one convenient visit.
			</>
		),
	},
	{
		q: 'What makes your cleaning method special?',
		a: (
			<>
				We use advanced ladder-free window cleaning technology with environmentally friendly window cleaning solutions. Our reach and wash system delivers streak-free window cleaning results while prioritizing health and safety window cleaning standards. This modern approach combined with hard water stain removal expertise ensures consistently superior, spotless results.
			</>
		),
	},
	{
		q: 'How quickly can you start cleaning my windows?',
		a: (
			<>
				We offer same day window cleaning Bristol appointments when possible! Our efficient scheduling means most clients receive service within 48-72 hours. For contractual window cleaning Bristol arrangements, we provide flexible timing that works around your schedule while maintaining our reputation for reliable, professional service.
			</>
		),
	},
];

export default function FAQSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [openIdx, setOpenIdx] = useState(0);

	useEffect(() => {
		// Set initial hidden state for title, subtitle, and FAQ items
		const element = sectionRef.current;
		if (element) {
			const title = element.querySelector(`.${styles.faqTitle}`);
			const subtitle = element.querySelector(`.${styles.faqSubtitle}`);
			const faqItems = element.querySelectorAll(`.${styles.faqItem}`);

			if (title) {
				(title as HTMLElement).style.opacity = '0';
				(title as HTMLElement).style.transform = 'translateY(50px)';
			}
			if (subtitle) {
				(subtitle as HTMLElement).style.opacity = '0';
				(subtitle as HTMLElement).style.transform = 'translateY(50px)';
			}
			faqItems.forEach((item) => {
				(item as HTMLElement).style.opacity = '0';
				(item as HTMLElement).style.transform = 'translateY(50px)';
			});
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const target = entry.target as HTMLElement;
						animate(target, {
							opacity: [0, 1],
							translateY: [50, 0],
							duration: 800,
							easing: 'easeOutQuad',
						});
						observer.unobserve(target);
					}
				});
			},
			{ threshold: 0.5 }
		);

		// Observe title and subtitle
		if (sectionRef.current) {
			const title = sectionRef.current.querySelector(`.${styles.faqTitle}`);
			const subtitle = sectionRef.current.querySelector(`.${styles.faqSubtitle}`);
			if (title) observer.observe(title);
			if (subtitle) observer.observe(subtitle);
		}

		// Observe each FAQ item
		faqRefs.current.forEach((faq) => {
			if (faq) observer.observe(faq);
		});

		return () => {
			observer.disconnect();
		};
	}, []);

		return (
			<section ref={sectionRef} className={styles.faqSection} id="faq" aria-label="Frequently Asked Questions" style={{ background: '#fff' }}>
			<h2 className={styles.faqTitle}>
				Frequently Asked <span className={styles.faqAccent}>Questions</span>
			</h2>
			<div className={styles.faqSubtitle}>
				Get quick answers to the questions you might have. We’ve covered the essentials to make things simple and clear.
			</div>
			<div className={styles.faqList}>
				{faqs.map((faq, i) => (
					<div
						ref={el => { faqRefs.current[i] = el; }}
						className={styles.faqItem + ' ' + (openIdx === i ? styles.open : '')}
						key={i}
					>
						<button
							className={styles.faqSummary}
							aria-expanded={openIdx === i}
							onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
							type="button"
						>
							<span className={styles.faqChevron} aria-hidden="true">
								{openIdx === i ? (
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path
											d="M7 15l5-5 5 5"
											stroke="#256193"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								) : (
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path
											d="M7 10l5 5 5-5"
											stroke="#256193"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								)}
							</span>
							{faq.q}
						</button>
						{openIdx === i && faq.a && <div className={styles.faqAnswer}>{faq.a}</div>}
					</div>
				))}
			</div>
		</section>
	);
}
