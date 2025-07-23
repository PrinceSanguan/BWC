import React from 'react';

export default function Areas() {
  return (
    <section style={{padding: '4rem 2rem', background: '#fff', fontFamily: 'Open Sans, sans-serif'}}>
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{fontSize: '2.5rem', color: '#003366', fontWeight: 700, marginBottom: '2rem', fontFamily: 'Montserrat, sans-serif'}}>Areas We Cover</h1>
        <p style={{fontSize: '1.2rem', color: '#003366', marginBottom: '2rem'}}>
          We clean windows, gutters, and fascias across the entire Bristol urban area. Our biggest customer bases are in South and East Bristol, but we cover Central and North too.<br />
          Click on your area to learn more about our services nearby.
        </p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem'}}>
          <a href="/areas/south" style={{background: '#7ecbff', color: '#003366', padding: '1.2rem', borderRadius: '8px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,51,102,0.08)', transition: 'background 0.2s'}}>
            South Bristol
          </a>
          <a href="/areas/east" style={{background: '#7ecbff', color: '#003366', padding: '1.2rem', borderRadius: '8px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,51,102,0.08)', transition: 'background 0.2s'}}>
            East Bristol
          </a>
          <a href="/areas/central" style={{background: '#7ecbff', color: '#003366', padding: '1.2rem', borderRadius: '8px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,51,102,0.08)', transition: 'background 0.2s'}}>
            Central Bristol
          </a>
          <a href="/areas/north" style={{background: '#7ecbff', color: '#003366', padding: '1.2rem', borderRadius: '8px', textAlign: 'center', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,51,102,0.08)', transition: 'background 0.2s'}}>
            North Bristol
          </a>
        </div>
      </div>
    </section>
  );
}
