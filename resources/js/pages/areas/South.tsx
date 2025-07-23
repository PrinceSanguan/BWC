import React from 'react';
export default function South() {
  return (
    <section style={{padding: '3rem 2rem', background: '#fff', fontFamily: 'Open Sans, sans-serif'}}>
      <div style={{maxWidth: '700px', margin: '0 auto'}}>
        <h1 style={{fontSize: '2rem', color: '#003366', fontWeight: 700, marginBottom: '1.5rem'}}>South Bristol</h1>
        <p style={{fontSize: '1.1rem', color: '#003366', marginBottom: '1.5rem'}}>We serve homes and businesses in: Bedminster, Southville, Knowle, Totterdown, Brislington, Bishopsworth, Bedminster Down</p>
        <ul style={{color: '#003366', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem'}}>
          <li>Regular 6-weekly window cleaning</li>
          <li>One-off cleans before house sales</li>
          <li>Gutter clearing in older properties</li>
          <li>External fascia/gutter face cleaning</li>
        </ul>
      </div>
    </section>
  );
}
