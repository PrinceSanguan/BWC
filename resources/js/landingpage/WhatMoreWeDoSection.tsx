import { Star, Target, Briefcase, Award } from 'lucide-react';

export default function WhatMoreWeDoSection() {
  const stats = [
    {
      number: "4.98",
      icon: "⭐⭐⭐⭐⭐",
      subtitle: "2,488 based rating"
    },
    {
      number: "98%",
      subtitle: "Genuine repeated happy clients."
    },
    {
      number: "200+",
      subtitle: "Satisfied customers per month."
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
        margin: '0 auto'
      }}>
        {/* Statistics Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #001a33 0%, #003366 50%, #004080 100%)',
          borderRadius: '12px',
          padding: '3rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0 8px 32px rgba(0, 51, 102, 0.3)',
          position: 'relative',
          overflow: 'hidden',
          border: '2px solid #003366'
        }}>
          {/* Background pattern */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%237ecbff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: '0.3'
          }}></div>

          {stats.map((stat, index) => (
            <div key={index} style={{
              position: 'relative',
              zIndex: '1'
            }}>
              {/* Main Number */}
              <div style={{
                fontSize: '4rem',
                fontWeight: '700',
                color: '#ffd600',
                marginBottom: '0.5rem',
                fontFamily: '"Montserrat", sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                {stat.number}
              </div>

              {/* Stars (for first stat only) */}
              {index === 0 && (
                <div style={{
                  marginBottom: '0.5rem',
                  filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.2))',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '2px'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} color="#ffd600" fill="#ffd600" size={18} />
                  ))}
                </div>
              )}

              {/* Subtitle */}
              <div style={{
                fontSize: '1rem',
                color: 'white',
                fontWeight: '500',
                lineHeight: '1.4',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                opacity: '0.9'
              }}>
                {stat.subtitle}
              </div>

              {/* Separator line (except for last item) */}
              {index < stats.length - 1 && (
                <div style={{
                  position: 'absolute',
                  right: '-1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '1px',
                  height: '80px',
                  background: 'rgba(126, 203, 255, 0.3)'
                }}></div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Content Section */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: '#003366',
            marginBottom: '2rem',
            fontFamily: '"Montserrat", sans-serif'
          }}>
            What More We Do
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {/* Additional Service 1 */}
            <div style={{
              background: 'linear-gradient(135deg, #001a33 0%, #003366 100%)',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'left',
              border: '2px solid #003366',
              color: 'white',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 51, 102, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#ffd600',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Award color="#003366" size={32} />
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '1rem'
              }}>
                Award-Winning Service
              </h3>
              <p style={{
                color: 'white',
                opacity: '0.9',
                lineHeight: '1.6'
              }}>
                Recognized excellence in barbering with multiple industry awards and certifications from professional associations.
              </p>
            </div>

            {/* Additional Service 2 */}
            <div style={{
              background: 'linear-gradient(135deg, #001a33 0%, #003366 100%)',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'left',
              border: '2px solid #003366',
              color: 'white',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 51, 102, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#ffd600',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Target color="#003366" size={32} />
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '1rem'
              }}>
                Precision Styling
              </h3>
              <p style={{
                color: 'white',
                opacity: '0.9',
                lineHeight: '1.6'
              }}>
                Specialized techniques and modern equipment ensure every cut meets our exacting standards for style and finish.
              </p>
            </div>

            {/* Additional Service 3 */}
            <div style={{
              background: 'linear-gradient(135deg, #001a33 0%, #003366 100%)',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'left',
              border: '2px solid #003366',
              color: 'white',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 51, 102, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#ffd600',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Briefcase color="#003366" size={32} />
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '1rem'
              }}>
                Corporate Packages
              </h3>
              <p style={{
                color: 'white',
                opacity: '0.9',
                lineHeight: '1.6'
              }}>
                Executive grooming services and group bookings for businesses, events, and special occasions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Design */}
      <style>
        {`
          @media (max-width: 1024px) {
            section > div > div:first-child {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
              text-align: center !important;
            }
            
            section > div > div:first-child > div > div:last-child {
              display: none !important;
            }
          }
          
          @media (max-width: 768px) {
            section > div > div:first-child {
              padding: 2rem 1rem !important;
            }
            
            section > div > div:first-child > div > div:first-child {
              font-size: 3rem !important;
            }
            
            h2 {
              font-size: 2rem !important;
            }
            
            section {
              padding: 3rem 1rem !important;
            }
          }
          
          @media (max-width: 480px) {
            section > div > div:last-child > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
}