import { Star } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section style={{
      padding: '4rem 2rem',
      background: '#ffffff',
      fontFamily: '"Open Sans", sans-serif'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#003366',
          marginBottom: '2rem',
          fontFamily: 'Montserrat, sans-serif'
        }}>
          What Our Customers Say
        </h2>
        {/* Google Review Slider Placeholder */}
        <div style={{background: '#eee', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', color: '#003366', fontWeight: 500, marginBottom: '2rem'}}>
          [Google Review Slider Placeholder]
        </div>
        {/* Written Testimonials */}
        <div style={{marginBottom: '2rem'}}>
          <blockquote style={{fontSize: '1.1rem', color: '#003366', fontStyle: 'italic', marginBottom: '1rem'}}>
            “Prompt, polite, and brilliant results every time.” – Mark, Southville
          </blockquote>
          <blockquote style={{fontSize: '1.1rem', color: '#003366', fontStyle: 'italic', marginBottom: '1rem'}}>
            “Gutters cleared quickly, and left no mess behind.” – Liz, Hanham
          </blockquote>
          <blockquote style={{fontSize: '1.1rem', color: '#003366', fontStyle: 'italic', marginBottom: '1rem'}}>
            “Really flexible when I had to change a clean last-minute.” – Tom, Easton
          </blockquote>
        </div>
        {/* Trust & Professionalism Highlights */}
        <div style={{background: '#7ecbff', borderRadius: '8px', padding: '1.5rem', color: '#003366', fontWeight: 600}}>
          <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
            <li>Fully insured for every job</li>
            <li>Uniformed, friendly staff</li>
            <li>Fair employment for all workers</li>
            <li>Serving Bristol since [established year]</li>
            <li>Hundreds of happy regular customers</li>
          </ul>
        </div>
      </div>
      {/* Responsive Design */}
      <style>
        {`
          @media (max-width: 1024px) {
            h2 {
              font-size: 2.2rem !important;
            }
          }
          @media (max-width: 768px) {
            h2 {
              font-size: 1.8rem !important;
            }
            section {
              padding: 3rem 1rem !important;
            }
          }
          @media (max-width: 480px) {
            h2 {
              font-size: 1.6rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}