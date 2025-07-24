import { Mail, Phone } from 'lucide-react';

export default function ContactUsSection() {
  return (
    <section style={{
      position: 'relative',
      padding: '4rem 2rem',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Background image with overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: `linear-gradient(rgba(30, 41, 59, 0.55), rgba(30, 41, 59, 0.55)), url('/images/pexels-pixabay-34537.jpg') center/cover no-repeat`,
        backgroundAttachment: 'fixed',
        pointerEvents: 'none',
      }} />
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Left Column - Content */}
        <div>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: '#fff',
            marginBottom: '1.5rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: '1.2',
            textShadow: '0 2px 8px rgba(0,0,0,0.18)'
          }}>
            Get a Free Quote Today
          </h2>

          <p style={{
            fontSize: '1rem',
            color: '#fff',
            marginBottom: '1rem',
            lineHeight: '1.6',
            textShadow: '0 2px 8px rgba(0,0,0,0.18)'
          }}>
            We'll get back to you quickly with a no-obligation quote. You don't need to be home for most jobs — just provide access.
          </p>

          {/* Contact Information */}
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Phone color="#fff" size={20} />
              <span style={{ color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
                Phone: <a href="tel:1800222000" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 500 }}>1 800 222 000</a>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Mail color="#fff" size={20} />
              <span style={{ color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
                Email: <a href="mailto:info@invisiblewindowcleaning.com" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 500 }}>info@invisiblewindowcleaning.com</a>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Phone color="#fff" size={20} />
              <span style={{ color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
                WhatsApp: <a href="https://wa.me/1800222000" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 500 }}>Chat on WhatsApp</a>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}>
          <div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Name*
                </label>
                <input
                  type="text"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    background: '#f9fafb',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Address / Area
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    background: '#f9fafb',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Email*
              </label>
              <input
                type="email"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  background: '#f9fafb',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Service(s) needed
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  background: '#f9fafb',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Preferred contact method
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  background: '#f9fafb',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Optional notes
              </label>
              <textarea
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  background: '#f9fafb',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>

            <button
              type="submit"
              style={{
                background: '#003366',
                color: 'white',
                fontWeight: '600',
                padding: '0.75rem 2rem',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = '#001a33')}
              onMouseOut={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = '#003366')}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Design */}
      <style>
        {`
          @media (max-width: 768px) {
            section > div {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            
            section {
              padding: 2rem 1rem !important;
            }
            
            h2 {
              font-size: 2rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .form-grid {
              grid-template-columns: 1fr !important;
            }
            
            h2 {
              font-size: 1.75rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}