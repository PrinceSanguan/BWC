import React from 'react';
import '../../css/site.css';

export default function Services() {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`@font-face { font-family: 'Montserrat'; font-style: normal; font-weight: 400; font-display: swap; src: local('Montserrat'), url('https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm45_QpRyS7m.woff2') format('woff2'); }`}</style>
      </head>
      <section style={{padding: '4rem 2rem', background: '#fff', fontFamily: 'Open Sans, sans-serif'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h1 style={{fontSize: '2.5rem', color: '#003366', fontWeight: 700, marginBottom: '2rem', fontFamily: 'Montserrat, sans-serif'}}>Professional Exterior Cleaning – Inside & Out</h1>
          <p style={{fontSize: '1.2rem', color: '#003366', marginBottom: '2rem'}}>
            We offer a range of exterior cleaning services for homes and businesses in Bristol. Whether you need regular upkeep or a one-off spruce-up, we’ve got you covered.
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem'}}>
            <a href="/services/domestic" style={{background: '#7ecbff', color: '#003366', padding: '1.2rem', borderRadius: '8px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,51,102,0.08)', transition: 'background 0.2s'}} tabIndex={0} aria-label="Domestic Window Cleaning">Domestic Window Cleaning</a>
            <a href="/services/commercial" style={{background: '#7ecbff', color: '#003366', padding: '1.2rem', borderRadius: '8px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,51,102,0.08)', transition: 'background 0.2s'}} tabIndex={0} aria-label="Commercial Window Cleaning">Commercial Window Cleaning</a>
            <a href="/services/gutter" style={{background: '#7ecbff', color: '#003366', padding: '1.2rem', borderRadius: '8px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,51,102,0.08)', transition: 'background 0.2s'}} tabIndex={0} aria-label="Gutter Clearing">Gutter Clearing</a>
            <a href="/services/soffit-fascia" style={{background: '#7ecbff', color: '#003366', padding: '1.2rem', borderRadius: '8px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,51,102,0.08)', transition: 'background 0.2s'}} tabIndex={0} aria-label="Soffit, Fascia & Gutter Face Cleaning">Soffit, Fascia & Gutter Face Cleaning</a>
          </div>
        </div>
      </section>
    </>
  );
}
