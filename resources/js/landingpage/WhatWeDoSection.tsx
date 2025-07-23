import { ShieldCheck, Zap, Smartphone, Palette } from 'lucide-react';

export default function WhatWeDoSection() {
  const features = [
    {
      icon: <ShieldCheck color="#003366" size={40} />,
      title: "Domestic Window Cleaning",
      description: "Clean, streak-free windows every time – 6-weekly or one-off cleans, pure water pole system, internal cleaning on request, SMS reminders, no need to be home."
    },
    {
      icon: <Zap color="#003366" size={40} />,
      title: "Commercial Window Cleaning",
      description: "Safe, reliable cleaning for Bristol businesses – offices, shops, schools, up to 5 storeys, DBS-checked staff, scheduled or one-off, health & safety conscious."
    },
    {
      icon: <Smartphone color="#003366" size={40} />,
      title: "Gutter Clearing",
      description: "Manual or vacuum clearing, before/after photos on request, no mess left behind, ideal for autumn/winter/heavy rain."
    },
    {
      icon: <Palette color="#003366" size={40} />,
      title: "Soffit, Fascia & Gutter Face Cleaning",
      description: "Restore your home’s exterior – clean soffits, fascias & gutter exteriors, remove green staining, algae, grime, great as a one-off or with window cleans."
    }
  ];

  return (
    <section style={{
      padding: '4rem 2rem',
      background: '#ffffff',
      fontFamily: '"Open Sans", sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '4rem',
        alignItems: 'flex-start'
      }}>
        {/* Left Column - Header Content */}
        <div>
          <div style={{
            fontSize: '0.9rem',
            color: '#7ecbff',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '1rem',
            fontWeight: '500'
          }}>
            SERVICES
          </div>
          
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: '700',
            color: '#003366',
            lineHeight: '1.2',
            marginBottom: '2rem',
            fontFamily: '"Montserrat", sans-serif'
          }}>
            What We Do<br/>
            For Bristol Homes & Businesses
          </h2>
          
          {/* Golden underline */}
          <div style={{
            width: '60px',
            height: '3px',
            background: '#ffd600',
            marginBottom: '2rem'
          }}></div>
          
          <p style={{
            fontSize: '1rem',
            color: '#003366',
            opacity: '0.8',
            lineHeight: '1.8',
            fontWeight: '400'
          }}>
            We offer a range of exterior cleaning services for homes and businesses in Bristol. Whether you need regular upkeep or a one-off spruce-up, we’ve got you covered.
          </p>
        </div>

        {/* Right Column - Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'linear-gradient(135deg, #001a33 0%, #003366 100%)',
              padding: '2rem',
              borderRadius: '8px',
              border: '2px solid #003366',
              color: 'white',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 51, 102, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              {/* Icon */}
              <div style={{
                width: '70px',
                height: '70px',
                background: '#ffd600',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '1rem',
                fontFamily: '"Montserrat", sans-serif'
              }}>
                {feature.title}
              </h3>
              
              {/* Description */}
              <p style={{
                fontSize: '0.95rem',
                color: 'white',
                opacity: '0.9',
                lineHeight: '1.6',
                fontWeight: '400'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Design */}
      <style>
        {`
          @media (max-width: 1024px) {
            section > div {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
            
            h2 {
              font-size: 2.5rem !important;
            }
          }
          
          @media (max-width: 768px) {
            section > div > div:last-child {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
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
          }
        `}
      </style>
    </section>
  );
}