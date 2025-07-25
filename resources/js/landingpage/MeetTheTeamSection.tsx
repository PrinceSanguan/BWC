import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, memo, useCallback } from 'react';

const TestimonialsSection = memo(function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: "I've worked with every conceivable service provider, and Hostingmo amazing documentation, great UI/UX, and reasonable and understandable pricing scheme are unsurpassed. What's not to love?",
      name: "Walton Xavier",
      title: "UI Designer at Mamaha Studio",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 2,
      text: "Prompt, polite, and brilliant results every time. The team is professional and always delivers exceptional service.",
      name: "Mark",
      title: "Customer from Southville",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 3,
      text: "Gutters cleared quickly, and left no mess behind. Really impressed with the attention to detail and cleanliness.",
      name: "Liz",
      title: "Customer from Hanham",
      avatar: "/api/placeholder/60/60"
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentTestimonial(index);
  }, []);

  return (
    <section className="testimonials-section window-cleaning-theme">
      <div className="testimonials-container">
        {/* Quote Icon */}
        <div className="testimonials-quote" aria-hidden="true">
          "
        </div>

        {/* Main Heading */}
        <h2 className="testimonials-title">
          Our People Are Saying
        </h2>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="testimonial-navigation testimonial-nav-prev"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} color="#666" />
        </button>

        <button
          onClick={nextTestimonial}
          className="testimonial-navigation testimonial-nav-next"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} color="#666" />
        </button>

        {/* Testimonial Content */}
        <div className="testimonial-content">
          <p className="testimonial-text">
            {testimonials[currentTestimonial].text}
          </p>
        </div>

        {/* Avatar and Profile Section */}
        <div className="testimonial-profile">
          {/* Left Avatar */}
          <div className="testimonial-avatar" aria-hidden="true"></div>

          {/* Center Avatar (Active) */}
          <div className="testimonial-avatar-main">
            <div className="testimonial-avatar-active" aria-hidden="true"></div>
            <div style={{ textAlign: 'center' }}>
              <div className="testimonial-name">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="testimonial-title">
                {testimonials[currentTestimonial].title}
              </div>
            </div>
          </div>

          {/* Right Avatar */}
          <div className="testimonial-avatar" aria-hidden="true"></div>
        </div>

        {/* Dot Indicators */}
        <div className="testimonial-indicators" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`testimonial-dot ${index === currentTestimonial ? 'active' : 'inactive'}`}
              role="tab"
              aria-selected={index === currentTestimonial}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default TestimonialsSection;