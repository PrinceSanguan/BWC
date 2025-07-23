import { Mail, Phone } from 'lucide-react';

export default function ContactUsSection() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #003366 0%, #004080 50%, #7ecbff 100%)',
      padding: '4rem 2rem',
      textAlign: 'center',
      fontFamily: '"Open Sans", sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'url("data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"40\" cy=\"40\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: '0.4'
      }}></div>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative',
        zIndex: '1'
      }}>
        {/* Main Heading */}
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'white',
          marginBottom: '1.5rem',
          fontFamily: 'Montserrat, sans-serif',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          letterSpacing: '0.5px'
        }}>
          Get a Free Quote Today
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.2rem',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '2rem',
          fontWeight: '400',
          lineHeight: '1.5',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}>
          We'll get back to you quickly with a no-obligation quote. You don’t need to be home for most jobs — just provide access.
        </p>

        {/* Contact Information */}
        <div style={{marginBottom: '2rem', color: 'white', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', gap: '2rem'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <Phone color="#ffd600" size={24} />
            <span>Phone: <a href="tel:1800222000" style={{color: '#ffd600', textDecoration: 'none'}}>1 800 222 000</a></span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <Mail color="#ffd600" size={24} />
            <span>Email: <a href="mailto:info@invisiblewindowcleaning.com" style={{color: '#ffd600', textDecoration: 'none'}}>info@invisiblewindowcleaning.com</a></span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <Phone color="#ffd600" size={24} />
            <span>WhatsApp: <a href="https://wa.me/1800222000" style={{color: '#ffd600', textDecoration: 'none'}}>Chat on WhatsApp</a></span>
          </div>
        </div>

        {/* Quote Request Form */}
        <form style={{background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,51,102,0.08)', marginBottom: '2rem'}}>
          <div style={{marginBottom: '1rem'}}>
            <label style={{display: 'block', color: 'white', fontWeight: 600}}>Name</label>
            <input type="text" style={{width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #7ecbff', background: 'rgba(255,255,255,0.2)', color: 'white'}} />
          </div>
          <div style={{marginBottom: '1rem'}}>
            <label style={{display: 'block', color: 'white', fontWeight: 600}}>Address / Area</label>
            <input type="text" style={{width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #7ecbff', background: 'rgba(255,255,255,0.2)', color: 'white'}} />
          </div>
          <div style={{marginBottom: '1rem'}}>
            <label style={{display: 'block', color: 'white', fontWeight: 600}}>Service(s) needed</label>
            <input type="text" style={{width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #7ecbff', background: 'rgba(255,255,255,0.2)', color: 'white'}} />
          </div>
          <div style={{marginBottom: '1rem'}}>
            <label style={{display: 'block', color: 'white', fontWeight: 600}}>Preferred contact method</label>
            <input type="text" style={{width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #7ecbff', background: 'rgba(255,255,255,0.2)', color: 'white'}} />
          </div>
          <div style={{marginBottom: '1rem'}}>
            <label style={{display: 'block', color: 'white', fontWeight: 600}}>Optional notes</label>
            <textarea style={{width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #7ecbff', background: 'rgba(255,255,255,0.2)', color: 'white'}} rows={3} />
          </div>
          <button type="submit" style={{background: '#ffd600', color: '#003366', fontWeight: 700, padding: '1rem 2rem', borderRadius: '6px', border: 'none', cursor: 'pointer'}}>
            Request Quote
          </button>
        </form>
      </div>

      {/* Responsive Design */}
      <style>
        {`
          @media (max-width: 768px) {
            section > div > div:nth-child(4) {
              flex-direction: column !important;
              gap: 1rem !important;
            }
            
            section > div > div:nth-child(4) > button {
              width: 100% !important;
            }
            
            h2 {
              font-size: 2.2rem !important;
            }
            
            section {
              padding: 3rem 1rem !important;
            }
          }
          
          @media (max-width: 480px) {
            h2 {
              font-size: 1.8rem !important;
            }
            
            section > div > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
          
          input::placeholder {
            color: rgba(255,255,255,0.7);
          }
        `}
      </style>
    </section>
  );
}