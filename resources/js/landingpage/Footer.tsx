import { Facebook, Twitter, Instagram, MessageCircle, Linkedin } from 'lucide-react';

export default function Footer() {
  const socialIcons = [
    { icon: <Facebook size={18} />, name: "Facebook", url: "#" },
    { icon: <Twitter size={18} />, name: "Twitter", url: "#" },
    { icon: <Instagram size={18} />, name: "Instagram", url: "#" },
    { icon: <MessageCircle size={18} />, name: "Chat", url: "#" },
    { icon: <Linkedin size={18} />, name: "LinkedIn", url: "#" }
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #001a33 0%, #003366 100%)',
      color: 'rgba(255,255,255,0.8)',
      padding: '1.5rem 2rem',
      fontSize: '0.85rem',
      fontFamily: '"Open Sans", sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem'
      }}>
        {/* Copyright Text */}
        <div style={{
          color: 'white'
        }}>
          © Copyright Premium Choros.io | Crafted by John Louise Jiz De Ortega
        </div>

        {/* Social Media Icons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center'
        }}>
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.url}
              style={{
                color: '#7ecbff',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                padding: '0.5rem',
                borderRadius: '50%',
                border: '1px solid transparent'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#003366';
                e.currentTarget.style.background = '#ffd600';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 214, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#7ecbff';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
          
          {/* Up Arrow */}
          <button
            style={{
              background: 'transparent',
              border: '2px solid #7ecbff',
              color: '#7ecbff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              marginLeft: '0.5rem',
              borderRadius: '50%',
              padding: '0.5rem',
              width: '36px',
              height: '36px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#003366';
              e.currentTarget.style.background = '#ffd600';
              e.currentTarget.style.borderColor = '#ffd600';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 214, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#7ecbff';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = '#7ecbff';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Scroll to top"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive Design */}
      <style>
        {`
          @media (max-width: 768px) {
            footer > div {
              flex-direction: column !important;
              text-align: center !important;
              gap: 1rem !important;
            }
            
            footer {
              padding: 1.5rem 1rem !important;
            }
          }
        `}
      </style>
    </footer>
  );
}