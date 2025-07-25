import React from 'react';
import '../../css/site.css';

export default function Contact() {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`@font-face { font-family: 'Montserrat'; font-style: normal; font-weight: 400; font-display: swap; src: local('Montserrat'), url('https://fonts.gstatic.com/s/montserrat/v25/JTUQjIg1_i6t8kCHKm45_QpRyS7m.woff2') format('woff2'); }`}</style>
      </head>
      <section style={{padding: '4rem 2rem', background: '#fff', fontFamily: 'Open Sans, sans-serif'}}>
        <div style={{maxWidth: '700px', margin: '0 auto'}}>
          <h1 style={{fontSize: '2.5rem', color: '#003366', fontWeight: 700, marginBottom: '2rem', fontFamily: 'Montserrat, sans-serif'}}>Get a Free Quote Today</h1>
          <div style={{marginBottom: '2rem', color: '#003366', fontSize: '1.1rem'}}>
            <p>Phone: <a href="tel:1800222000" style={{color: '#7ecbff', textDecoration: 'none'}}>1 800 222 000</a></p>
            <p>WhatsApp: <a href="https://wa.me/1800222000" style={{color: '#7ecbff', textDecoration: 'none'}}>Chat on WhatsApp</a></p>
            <p>Email: <a href="mailto:info@invisiblewindowcleaning.com" style={{color: '#7ecbff', textDecoration: 'none'}}>info@invisiblewindowcleaning.com</a></p>
          </div>
          <form style={{background: '#f9f9f9', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,51,102,0.08)'}} autoComplete="on">
            <div style={{marginBottom: '1rem'}}>
              <label htmlFor="name" style={{display: 'block', color: '#003366', fontWeight: 600}}>Name</label>
              <input id="name" name="name" type="text" style={{width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #7ecbff'}} autoComplete="name" />
            </div>
            <div style={{marginBottom: '1rem'}}>
              <label htmlFor="address" style={{display: 'block', color: '#003366', fontWeight: 600}}>Address / Area</label>
              <input id="address" name="address" type="text" style={{width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #7ecbff'}} autoComplete="address-line1" />
            </div>
            <div style={{marginBottom: '1rem'}}>
              <label htmlFor="services" style={{display: 'block', color: '#003366', fontWeight: 600}}>Service(s) needed</label>
              <input id="services" name="services" type="text" style={{width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #7ecbff'}} />
            </div>
            <div style={{marginBottom: '1rem'}}>
              <label htmlFor="contact_method" style={{display: 'block', color: '#003366', fontWeight: 600}}>Preferred contact method</label>
              <input id="contact_method" name="contact_method" type="text" style={{width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #7ecbff'}} />
            </div>
            <div style={{marginBottom: '1rem'}}>
              <label htmlFor="notes" style={{display: 'block', color: '#003366', fontWeight: 600}}>Optional notes</label>
              <textarea id="notes" name="notes" style={{width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #7ecbff'}} rows={3} />
            </div>
            <button type="submit" style={{background: '#ffd600', color: '#003366', fontWeight: 700, padding: '1rem 2rem', borderRadius: '6px', border: 'none', cursor: 'pointer'}} aria-label="Request Quote">Request Quote</button>
          </form>
          <p style={{marginTop: '2rem', color: '#003366', fontSize: '1rem'}}>
            We'll get back to you quickly with a no-obligation quote. You don’t need to be home for most jobs — just provide access.
          </p>
        </div>
      </section>
    </>
  );
}
