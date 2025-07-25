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
    <section className="about-section window-cleaning-theme">
      <div className="about-container">
        {/* Toggle Switch */}
        <div className="toggle-switch-container">
          <span className={`toggle-label ${showTeam ? 'inactive' : ''}`}>
            About Us
          </span>
          
          <div 
            onClick={() => setShowTeam(!showTeam)}
            className={`toggle-switch ${showTeam ? 'active' : 'inactive'}`}
          >
            <div className={`toggle-knob ${showTeam ? 'active' : 'inactive'}`}></div>
          </div>
          
          <span className={`toggle-label ${showTeam ? '' : 'inactive'}`}>
            Meet the Team
          </span>
        </div>

        {/* Content based on toggle */}
        {!showTeam ? (
          // Original About Us Content
          <div className="about-content">
            {/* Left Content */}
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                Invisible Window Cleaning is a small, independent window cleaning business serving homes and businesses across the Bristol urban area.<br />
                We're not a franchise or agency — just a skilled, reliable team who believe in doing the job properly, treating customers well, and being easy to work with.
              </p>
              <h3>Our Values</h3>
              <ul>
                <li>All staff are full-time employees on well-paid contracts</li>
                <li>We never use subcontractors</li>
                <li>We believe stable jobs make for better service</li>
                <li>We value clear communication, fair pricing, and long-term relationships</li>
                <li>You'll see the same familiar faces each visit, always in uniform and driving our signwritten vans.</li>
              </ul>
            </div>
            
            {/* Right Content - Images */}
            <div className="about-images">
              <div className="about-image-card">
                <img
                  src="/images/B7E053D4-A3A6-4432-B319-DBF2C2326428_1_105_c-480x400.jpeg"
                  alt="Local, trusted, and friendly team"
                  className="about-image"
                  loading="lazy"
                />
                <div className="about-image-overlay">
                  <span style={{fontWeight: 600, fontSize: '1.15rem'}}>Local, trusted, and friendly team</span><br/>
                  <small style={{color: '#003366', opacity: '0.7', marginTop: '0.5rem', display: 'block'}}>
                    Serving Bristol since 2019
                  </small>
                </div>
              </div>
              
              <div className="about-placeholder-card">
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
            <h2 className="team-title">
              Meet Our Professional Team
            </h2>

            {/* Carousel Container */}
            <div className="carousel-container">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="carousel-slide"
                  >
                    {teamMembers.slice(slideIndex * 2, slideIndex * 2 + 2).map((member) => (
                      <div 
                        key={member.id}
                        className="team-card"
                      >
                        {/* Member Avatar */}
                        <div className="team-avatar">
                          {member.name[0]}
                        </div>
                        
                        <div className="team-info">
                          <h3 className="team-name">
                            {member.name}
                          </h3>
                          
                          <p className="team-role">
                            {member.role}
                          </p>
                          
                          <p className="team-description">
                            {member.description}
                          </p>
                          
                          <div className="team-specialties">
                            {member.specialties.map((specialty, index) => (
                              <span 
                                key={index}
                                className="specialty-tag"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="team-card-overlay">
                          <div style={{ textAlign: 'center', color: 'white' }}>
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
            <div className="carousel-navigation">
              {/* Previous Button */}
              <button onClick={prevSlide} className="nav-button">
                <ChevronLeft size={20} />
              </button>

              {/* Slide Indicators */}
              <div className="slide-indicators">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`slide-indicator ${currentSlide === index ? 'active' : 'inactive'}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button onClick={nextSlide} className="nav-button">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
  </section>
  );
}