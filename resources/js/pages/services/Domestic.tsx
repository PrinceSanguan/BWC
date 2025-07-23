import React from 'react';
export default function Domestic() {
  return (
    <section style={{padding: '3rem 2rem', background: '#fff', fontFamily: 'Open Sans, sans-serif'}}>
      <div style={{maxWidth: '700px', margin: '0 auto'}}>
        <h1 style={{fontSize: '2rem', color: '#003366', fontWeight: 700, marginBottom: '1.5rem'}}>Domestic Window Cleaning</h1>
        <p style={{fontSize: '1.1rem', color: '#003366', marginBottom: '1.5rem'}}>Clean, streak-free windows every time – from trusted local cleaners.</p>
        <ul style={{color: '#003366', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem'}}>
          <li>6-weekly schedule or one-off cleans</li>
          <li>Pure water pole system (safe, ladder-free)</li>
          <li>Internal window cleaning on request</li>
          <li>SMS reminders before every visit</li>
          <li>No need to be home – access only required</li>
        </ul>
      </div>
    </section>
  );
}
