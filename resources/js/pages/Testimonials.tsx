import React from 'react';

export default function Testimonials() {
  return (
    <section style={{padding: '4rem 2rem', background: '#fff', fontFamily: 'Open Sans, sans-serif'}}>
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{fontSize: '2.5rem', color: '#003366', fontWeight: 700, marginBottom: '2rem', fontFamily: 'Montserrat, sans-serif'}}>What Our Customers Say</h1>
        {/* Section 1: Google Review Slider Embed */}
        <div style={{marginBottom: '2rem'}}>
          {/* Embed your Google review slider plugin or iframe here */}
          <div style={{background: '#eee', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', color: '#003366', fontWeight: 500}}>
            [Google Review Slider Placeholder]
          </div>
        </div>
        {/* Section 2: Written Testimonials */}
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
        {/* Section 3: Trust & Professionalism Highlights */}
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
    </section>
  );
}
