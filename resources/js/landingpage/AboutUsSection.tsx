import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutUsSection() {
  const [showTeam, setShowTeam] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Andy",
      role: "Owner",
      image: "/images/team-andy.jpg",
      description: "Started Invisible Window Cleaning after taking over a small round in South Bristol in 2019. Loves being hands-on and still works on the tools most days. Friendly, organised, and always focused on doing things right.",
      specialties: ["Business Management", "Hands-on Work", "Quality Control"]
    },
    {
      id: 2,
      name: "Simon",
      role: "Window Cleaner",
      image: "/images/team-simon.jpg", 
      description: "Reliable, tidy, and great with customers. Has a sharp eye for detail and handles many of our regular domestic rounds in South Bristol.",
      specialties: ["Domestic Rounds", "Customer Service", "Attention to Detail"]
    },
    {
      id: 3,
      name: "Craig",
      role: "Window Cleaner",
      image: "/images/team-craig.jpg",
      description: "Efficient and experienced, Craig covers a mix of commercial and domestic work across East and Central Bristol. Known for his speed and spotless finishes.",
      specialties: ["Commercial Work", "East & Central Bristol", "Efficient Service"]
    },
    {
      id: 4,
      name: "Mark",
      role: "Window Cleaner",
      image: "/images/team-mark.jpg",
      description: "Down-to-earth and hardworking. Works mainly in North Bristol and handles a lot of one-off fascia and gutter jobs.",
      specialties: ["North Bristol", "Fascia & Gutters", "One-off Jobs"]
    }
  ];

  const totalSlides = Math.ceil(teamMembers.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fcff 100%)',
      fontFamily: '"Montserrat", "Open Sans", sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Toggle Switch */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '3rem',
          gap: '1rem'
        }}>
          <span style={{
            color: '#003366',
            fontWeight: '600',
            fontSize: '1.1rem',
            opacity: showTeam ? 0.6 : 1,
            transition: 'opacity 0.3s ease'
          }}>
            About Us
          </span>
          
          <div 
            onClick={() => setShowTeam(!showTeam)}
            style={{
              width: '60px',
              height: '30px',
              background: showTeam ? '#ffd600' : '#e0e7ff',
              borderRadius: '15px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
          >
            <div style={{
              width: '22px',
              height: '22px',
              background: '#003366',
              borderRadius: '50%',
              position: 'absolute',
              top: '4px',
              left: showTeam ? '34px' : '4px',
              transition: 'left 0.3s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}></div>
          </div>
          
          <span style={{
            color: '#003366',
            fontWeight: '600',
            fontSize: '1.1rem',
            opacity: showTeam ? 1 : 0.6,
            transition: 'opacity 0.3s ease'
          }}>
            Meet the Team
          </span>
        </div>

        {/* Content based on toggle */}
        {!showTeam ? (
          // Original About Us Content
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center'
          }} className="about-content">
            {/* Left Content */}
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#003366',
                marginBottom: '1.5rem',
                fontFamily: 'Montserrat, sans-serif'
              }}>
                Who We Are
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: '#003366',
                marginBottom: '2rem',
                fontWeight: '400',
                opacity: '0.9'
              }}>
                Invisible Window Cleaning is a small, independent window cleaning business serving homes and businesses across the Bristol urban area.<br />
                We're not a franchise or agency — just a skilled, reliable team who believe in doing the job properly, treating customers well, and being easy to work with.
              </p>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: '#003366',
                marginBottom: '1rem',
                fontFamily: 'Montserrat, sans-serif'
              }}>
                Our Values
              </h3>
              <ul style={{color: '#003366', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem'}}>
                <li>All staff are full-time employees on well-paid contracts</li>
                <li>We never use subcontractors</li>
                <li>We believe stable jobs make for better service</li>
                <li>We value clear communication, fair pricing, and long-term relationships</li>
                <li>You'll see the same familiar faces each visit, always in uniform and driving our signwritten vans.</li>
              </ul>
            </div>
            
            {/* Right Content - Image Placeholder */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div 
                className="about-image-card"
                style={{
                  background: 'linear-gradient(45deg, #7ecbff, #ffffff)',
                  height: '300px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  color: '#003366',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '2px solid #7ecbff',
                  padding: 0
                }}
              >
                <img
                  src="/images/B7E053D4-A3A6-4432-B319-DBF2C2326428_1_105_c-480x400.jpeg"
                  alt="Local, trusted, and friendly team"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    filter: 'brightness(0.85)'
                  }}
                />
                <div className="about-image-overlay" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: '#003366',
                  background: 'rgba(255,255,255,0.60)',
                  fontWeight: 600,
                  padding: '1.5rem',
                  opacity: 0,
                  pointerEvents: 'none',
                  transition: 'opacity 0.3s ease'
                }}>
                  <span style={{fontWeight: 600, fontSize: '1.15rem'}}>Local, trusted, and friendly team</span><br/>
                  <small style={{color: '#003366', opacity: '0.7', marginTop: '0.5rem', display: 'block'}}>
                    Serving Bristol since 2019
                  </small>
                </div>
              </div>
              
              <div style={{
                background: 'linear-gradient(45deg, #003366, #7ecbff)',
                height: '200px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ textAlign: 'center' }}>
                  Professional window cleaning<br/>
                  <small style={{color: '#ffffff', opacity: '0.9', marginTop: '0.5rem', display: 'block'}}>
                    Real people, real results
                  </small>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Team Members Carousel
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#003366',
              marginBottom: '3rem',
              fontFamily: 'Montserrat, sans-serif',
              textAlign: 'center'
            }}>
              Meet Our Professional Team
            </h2>
            


            {/* Carousel Container */}
            <div style={{
              overflow: 'hidden',
              borderRadius: '12px',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}>
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div
                    key={slideIndex}
                    style={{
                      minWidth: '100%',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '2rem',
                      padding: '0 1rem'
                    }}
                    className="carousel-slide"
                  >
                    {teamMembers.slice(slideIndex * 2, slideIndex * 2 + 2).map((member) => (
                      <div 
                        key={member.id}
                        className="team-member-card"
                        style={{
                          background: 'linear-gradient(45deg, #003366, #7ecbff)',
                          height: '400px',
                          borderRadius: '8px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          position: 'relative',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 51, 102, 0.3)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        {/* Member Avatar */}
                        <div style={{
                          width: '100px',
                          height: '100px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.2)',
                          margin: '0 auto 1.5rem auto',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffd600',
                          fontSize: '2.5rem',
                          fontWeight: 'bold',
                          backdropFilter: 'blur(10px)'
                        }}>
                          {member.name[0]}
                        </div>
                        
                        <div style={{ textAlign: 'center', padding: '0 1.5rem' }}>
                          <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            color: 'white',
                            marginBottom: '0.5rem',
                            fontFamily: 'Montserrat, sans-serif'
                          }}>
                            {member.name}
                          </h3>
                          
                          <p style={{
                            color: '#ffd600',
                            fontWeight: '600',
                            fontSize: '1rem',
                            marginBottom: '1rem'
                          }}>
                            {member.role}
                          </p>
                          
                          <p style={{
                            color: 'white',
                            fontSize: '0.9rem',
                            lineHeight: '1.4',
                            marginBottom: '1.5rem',
                            opacity: '0.9'
                          }}>
                            {member.description}
                          </p>
                          
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.4rem',
                            justifyContent: 'center'
                          }}>
                            {member.specialties.map((specialty, index) => (
                              <span 
                                key={index}
                                style={{
                                  background: 'rgba(255, 214, 0, 0.2)',
                                  color: '#ffd600',
                                  padding: '0.2rem 0.6rem',
                                  borderRadius: '12px',
                                  fontSize: '0.75rem',
                                  fontWeight: '600',
                                  backdropFilter: 'blur(5px)'
                                }}
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div 
                          className="team-card-overlay"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(255, 214, 0, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            pointerEvents: 'none'
                          }}
                        >
                          <div style={{
                            textAlign: 'center',
                            color: 'white'
                          }}>
                            <div style={{
                              fontSize: '1.2rem',
                              fontWeight: '600',
                              marginBottom: '0.5rem'
                            }}>
                              Professional Window Cleaner
                            </div>
                            <small style={{
                              opacity: '0.8',
                              fontSize: '0.9rem'
                            }}>
                              Serving Bristol with excellence
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Combined Navigation and Indicators */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '2rem',
              gap: '1rem'
            }}>
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                style={{
                  background: '#003366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#7ecbff'}
                onMouseOut={(e) => e.currentTarget.style.background = '#003366'}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Slide Indicators */}
              <div style={{
                display: 'flex',
                gap: '0.5rem'
              }}>
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: 'none',
                      background: currentSlide === index ? '#ffd600' : '#e0e7ff',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                style={{
                  background: '#003366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#7ecbff'}
                onMouseOut={(e) => e.currentTarget.style.background = '#003366'}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Styles */}
      <style>
        {`
          .about-image-card:hover .about-image-overlay {
            opacity: 1 !important;
            pointer-events: auto !important;
          }
          
          .team-member-card:hover .team-card-overlay {
            opacity: 1 !important;
            pointer-events: auto !important;
          }
          
          @media (max-width: 768px) {
            .about-content {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            h2 {
              font-size: 2rem !important;
            }
            h3 {
              font-size: 1.3rem !important;
            }
            
            .carousel-slide {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}