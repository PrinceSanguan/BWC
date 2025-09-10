import React from 'react';
export default function North() {
  return (
    <section style={{padding: '3rem 2rem', background: '#fff', fontFamily: 'Open Sans, sans-serif'}}>
      <div style={{maxWidth: '700px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2rem', color: '#003366', fontWeight: 700, marginBottom: '1.5rem'}}>North Bristol</h2>
        <p style={{fontSize: '1.1rem', color: '#003366', marginBottom: '1.5rem'}}>Serving: Henleaze, Horfield, Southmead, Filton, Stoke Gifford, Bradley Stoke</p>
        <ul style={{color: '#003366', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem'}}>
          <li>Residential window cleaning</li>
          <li>Gutter clearing on larger semis & detached homes</li>
          <li>Professional fascia/gutter face cleans</li>
        </ul>
      </div>
    </section>
  );
}
