import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "I've worked with every conceivable service provider, and Hostingmo amazing documentation, great UI/UX, and reasonable and understandable pricing scheme are unsurpassed. What's not to love?",
      name: "Walton Xavier",
      title: "UI Designer at Mamaha Studio",
      avatar: "/api/placeholder/60/60"
    },
    {
      text: "Prompt, polite, and brilliant results every time. The team is professional and always delivers exceptional service.",
      name: "Mark",
      title: "Customer from Southville",
      avatar: "/api/placeholder/60/60"
    },
    {
      text: "Gutters cleared quickly, and left no mess behind. Really impressed with the attention to detail and cleanliness.",
      name: "Liz",
      title: "Customer from Hanham",
      avatar: "/api/placeholder/60/60"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section style={{
      padding: '2.5rem 1rem', // reduced vertical padding
      background: '#fff',
      fontFamily: '"Open Sans", sans-serif',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Quote Icon */}
        <div style={{
          fontSize: '4rem',
          color: '#333',
          marginBottom: '1rem',
          fontFamily: 'serif'
        }}>
          "
        </div>

        {/* Main Heading */}
        <h2 style={{
          fontSize: '2.8rem',
          fontWeight: '700',
          color: '#003366',
          marginBottom: '2rem',
          fontFamily: '"Montserrat", sans-serif',
          lineHeight: '1.2'
        }}>
          Our People Are Saying
        </h2>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          style={{
            position: 'absolute',
            left: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = 'rgba(255, 255, 255, 1)')}
          onMouseOut={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = 'rgba(255, 255, 255, 0.8)')}
        >
          <ChevronLeft size={24} color="#666" />
        </button>

        <button
          onClick={nextTestimonial}
          style={{
            position: 'absolute',
            right: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = 'rgba(255, 255, 255, 1)')}
          onMouseOut={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = 'rgba(255, 255, 255, 0.8)')}
        >
          <ChevronRight size={24} color="#666" />
        </button>

        {/* Testimonial Content */}
        <div style={{
          marginBottom: '2rem',
          minHeight: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <p style={{
            fontSize: '1rem',
            color: '#003366',
            opacity: 0.9,
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0',
            fontWeight: 400,
            fontFamily: '"Open Sans", sans-serif'
          }}>
            {testimonials[currentTestimonial].text}
          </p>
        </div>

        {/* Avatar and Profile Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '1.2rem'
        }}>
          {/* Left Avatar */}
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e0e0e0 0%, #f0f0f0 100%)',
            opacity: '0.6'
          }}></div>

          {/* Center Avatar (Active) */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #d0d0d0 0%, #e8e8e8 100%)',
              border: '3px solid #fff',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}></div>
            <div style={{
              textAlign: 'center'
            }}>
              <div style={{
                fontWeight: 600,
                color: '#003366',
                fontSize: '1.1rem',
                marginBottom: '0.25rem',
                fontFamily: '"Montserrat", sans-serif'
              }}>
                {testimonials[currentTestimonial].name}
              </div>
              <div style={{
                fontSize: '0.95rem',
                color: '#003366',
                opacity: 0.8,
                fontFamily: '"Open Sans", sans-serif'
              }}>
                {testimonials[currentTestimonial].title}
              </div>
            </div>
          </div>

          {/* Right Avatar */}
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e0e0e0 0%, #f0f0f0 100%)',
            opacity: '0.6'
          }}></div>
        </div>

        {/* ...removed Trust & Professionalism Highlights card... */}

        {/* Dot Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '1.2rem'
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentTestimonial ? '#003366' : '#d1d5db',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Responsive Design */}
      <style>
        {`
          @media (max-width: 768px) {
            section {
              padding: 3rem 1rem !important;
            }
            
            h2 {
              font-size: 2rem !important;
            }
            
            .nav-button {
              display: none !important;
            }
            
            section > div > div:nth-child(6) {
              grid-template-columns: 1fr !important;
              text-align: center !important;
            }
          }
          
          @media (max-width: 480px) {
            h2 {
              font-size: 1.75rem !important;
            }
            
            section > div > div:nth-child(4) p {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}