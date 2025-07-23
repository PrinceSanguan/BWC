import React from 'react';
import '../../css/site.css';

export default function About() {
  return (
    <div>
      <div className="header">
        <h1>Meet the Team</h1>
        <p>Friendly, professional, and always ready to help!</p>
        {/* Logo placeholder */}
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact Us</a>
      </nav>
      <main style={{padding: '2rem 1rem'}}>
        <h2>About Invisible Window Cleaning</h2>
        <p>
          We’re a Bristol-based team specializing in domestic and commercial window cleaning, guttering, and signage cleaning. Our mission is simple: sparkling results, easy contact, and friendly service.
        </p>
        <p>
          <strong>No longer offering storefront/retail window cleaning.</strong>
        </p>
        <section style={{marginTop: '2rem'}}>
          <h3>Blogs</h3>
          <p>Coming soon!</p>
        </section>
      </main>
      <section style={{padding: '4rem 2rem', background: '#fff', fontFamily: 'Open Sans, sans-serif'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h1 style={{fontSize: '2.5rem', color: '#003366', fontWeight: 700, marginBottom: '2rem', fontFamily: 'Montserrat, sans-serif'}}>Who We Are</h1>
          <p style={{fontSize: '1.2rem', color: '#003366', marginBottom: '2rem'}}>
            Invisible Window Cleaning is a small, independent window cleaning business serving homes and businesses across the Bristol urban area.<br />
            We’re not a franchise or agency — just a skilled, reliable team who believe in doing the job properly, treating customers well, and being easy to work with.
          </p>
          <h2 style={{fontSize: '1.5rem', color: '#003366', fontWeight: 600, marginBottom: '1rem'}}>Our Values</h2>
          <ul style={{color: '#003366', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem'}}>
            <li>All staff are full-time employees on well-paid contracts</li>
            <li>We never use subcontractors</li>
            <li>We believe stable jobs make for better service</li>
            <li>We value clear communication, fair pricing, and long-term relationships</li>
            <li>You’ll see the same familiar faces each visit, always in uniform and driving our signwritten vans.</li>
          </ul>
          <h2 style={{fontSize: '1.5rem', color: '#003366', fontWeight: 600, marginBottom: '1rem'}}>Meet the Team</h2>
          <ul style={{color: '#003366', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem'}}>
            <li><strong>Andy – Owner:</strong> Started Invisible Window Cleaning after taking over a small round in South Bristol in 2019. Loves being hands-on and still works on the tools most days. Friendly, organised, and always focused on doing things right.</li>
            <li><strong>Simon – Window Cleaner:</strong> Reliable, tidy, and great with customers. Has a sharp eye for detail and handles many of our regular domestic rounds in South Bristol.</li>
            <li><strong>Craig – Window Cleaner:</strong> Efficient and experienced, Craig covers a mix of commercial and domestic work across East and Central Bristol. Known for his speed and spotless finishes.</li>
            <li><strong>Mark – Window Cleaner:</strong> Down-to-earth and hardworking. Works mainly in North Bristol and handles a lot of one-off fascia and gutter jobs.</li>
          </ul>
          <h2 style={{fontSize: '1.5rem', color: '#003366', fontWeight: 600, marginBottom: '1rem'}}>Where It All Started</h2>
          <p style={{fontSize: '1.1rem', color: '#003366', marginBottom: '2rem'}}>
            Invisible Window Cleaning was built on the foundations of a small round originally run by Keith, a well-known window cleaner in South Bristol. For over 15 years, Keith cleaned homes around Bedminster, Southville and Knowle — always with a smile and a wave.<br />
            Andy took over the round from Keith when he retired, gradually expanded the team, and turned the business into what it is today. We still carry many of Keith’s old customers — and his high standards.
          </p>
          <h2 style={{fontSize: '1.5rem', color: '#003366', fontWeight: 600, marginBottom: '1rem'}}>Why Choose Us?</h2>
          <ul style={{color: '#003366', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem'}}>
            <li>✅ Real people you can trust</li>
            <li>✅ Local, long-term service – not a pop-up or call centre</li>
            <li>✅ Friendly, consistent communication</li>
            <li>✅ A company that looks after its team and its customers</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
