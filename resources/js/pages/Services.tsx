import React from 'react';
import '../../css/site.css';

export default function Services() {
  return (
    <section style={{padding: '4rem 2rem', background: '#fff', fontFamily: 'Open Sans, sans-serif'}}>
      <div style={{maxWidth: '900px', margin: '0 auto'}}>
        <h1 style={{fontSize: '2.5rem', color: '#003366', fontWeight: 700, marginBottom: '2rem', fontFamily: 'Montserrat, sans-serif'}}>Professional Exterior Cleaning – Inside & Out</h1>
        <p style={{fontSize: '1.2rem', color: '#003366', marginBottom: '2rem'}}>
          We offer a range of exterior cleaning services for homes and businesses in Bristol. Whether you need regular upkeep or a one-off spruce-up, we’ve got you covered.
        </p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem'}}>
          <a href="/services/domestic" style={{background: '#7ecbff', color: '#003366', padding: '1.2rem', borderRadius: '8px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,51,102,0.08)', transition: 'background 0.2s'}}>Domestic Window Cleaning</a>
          <a href="/services/commercial" style={{background: '#7ecbff', color: '#003366', padding: '1.2rem', borderRadius: '8px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,51,102,0.08)', transition: 'background 0.2s'}}>Commercial Window Cleaning</a>
          <a href="/services/gutter" style={{background: '#7ecbff', color: '#003366', padding: '1.2rem', borderRadius: '8px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,51,102,0.08)', transition: 'background 0.2s'}}>Gutter Clearing</a>
          <a href="/services/soffit-fascia" style={{background: '#7ecbff', color: '#003366', padding: '1.2rem', borderRadius: '8px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,51,102,0.08)', transition: 'background 0.2s'}}>Soffit, Fascia & Gutter Face Cleaning</a>
        </div>
      </div>
    </section>
  );
}
