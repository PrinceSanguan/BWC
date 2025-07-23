import React from 'react';
export default function Central() {
  return (
    <section style={{padding: '3rem 2rem', background: '#fff', fontFamily: 'Open Sans, sans-serif'}}>
      <div style={{maxWidth: '700px', margin: '0 auto'}}>
        <h1 style={{fontSize: '2rem', color: '#003366', fontWeight: 700, marginBottom: '1.5rem'}}>Central Bristol</h1>
        <p style={{fontSize: '1.1rem', color: '#003366', marginBottom: '1.5rem'}}>Local service in: Clifton, Cotham, Redland, Bishopston, Montpelier, Hotwells, Kingsdown</p>
        <ul style={{color: '#003366', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem'}}>
          <li>Internal & external window cleaning</li>
          <li>Flats, student homes, small business fronts</li>
          <li>Parking flexibility where possible</li>
        </ul>
      </div>
    </section>
  );
}
