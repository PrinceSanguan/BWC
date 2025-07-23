import React from 'react';
export default function Commercial() {
  return (
    <section style={{padding: '3rem 2rem', background: '#fff', fontFamily: 'Open Sans, sans-serif'}}>
      <div style={{maxWidth: '700px', margin: '0 auto'}}>
        <h1 style={{fontSize: '2rem', color: '#003366', fontWeight: 700, marginBottom: '1.5rem'}}>Commercial Window Cleaning</h1>
        <p style={{fontSize: '1.1rem', color: '#003366', marginBottom: '1.5rem'}}>Safe, reliable window cleaning for Bristol businesses – up to 5 storeys.</p>
        <ul style={{color: '#003366', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem'}}>
          <li>Offices, shops, cafes, schools, surgeries, and lettings</li>
          <li>Water-fed pole system up to 5 storeys</li>
          <li>DBS-checked staff</li>
          <li>Scheduled or one-off cleans</li>
          <li>Health & safety conscious</li>
        </ul>
      </div>
    </section>
  );
}
