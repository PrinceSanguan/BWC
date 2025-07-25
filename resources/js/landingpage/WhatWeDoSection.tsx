import { ShieldCheck, Zap, Smartphone, Palette } from 'lucide-react';
import { memo } from 'react';

const WhatWeDoSection = memo(function WhatWeDoSection() {
  const features = [
    {
      icon: <ShieldCheck color="#003366" size={40} />,
      title: "Domestic Window Cleaning",
      description: "Clean, streak-free windows every time – 6-weekly or one-off cleans, pure water pole system, internal cleaning on request, SMS reminders, no need to be home.",
      avif: "/images/pexels-matilda-wormwood-4098315.avif",
      webp: "/images/pexels-matilda-wormwood-4098315.webp",
      fallback: "/images/pexels-matilda-wormwood-4098315.jpg"
    },
    {
      icon: <Zap color="#003366" size={40} />,
      title: "Commercial Window Cleaning",
      description: "Safe, reliable cleaning for Bristol businesses – offices, shops, schools, up to 5 storeys, DBS-checked staff, scheduled or one-off, health & safety conscious.",
      avif: "/images/pexels-matilda-wormwood-4098323.avif",
      webp: "/images/pexels-matilda-wormwood-4098323.webp",
      fallback: "/images/pexels-matilda-wormwood-4098323.jpg"
    },
    {
      icon: <Smartphone color="#003366" size={40} />,
      title: "Gutter Clearing",
      description: "Manual or vacuum clearing, before/after photos on request, no mess left behind, ideal for autumn/winter/heavy rain.",
      avif: "/images/pexels-tima-miroshnichenko-6195953.avif",
      webp: "/images/pexels-tima-miroshnichenko-6195953.webp",
      fallback: "/images/pexels-tima-miroshnichenko-6195953.jpg"
    },
    {
      icon: <Palette color="#003366" size={40} />,
      title: "Soffit, Fascia & Gutter Face Cleaning",
      description: "Restore your home's exterior – clean soffits, fascias & gutter exteriors, remove green staining, algae, grime, great as a one-off or with window cleans.",
      avif: "/images/pexels-tima-miroshnichenko-6195956.avif",
      webp: "/images/pexels-tima-miroshnichenko-6195956.webp",
      fallback: "/images/pexels-tima-miroshnichenko-6195956.jpg"
    }
  ];

  return (
    <section className="services-section window-cleaning-theme">
      <div className="services-container">
        {/* Left Column - Header Content */}
        <div>
          <div className="services-header">
            SERVICES
          </div>
          
          <h2 className="services-title">
            What We Do<br/>
            For Bristol Homes & Businesses
          </h2>
          
          {/* Golden underline */}
          <div className="services-underline"></div>
          
          <p className="services-description">
            We offer a range of exterior cleaning services for homes and businesses in Bristol. Whether you need regular upkeep or a one-off spruce-up, we've got you covered.
          </p>
        </div>

        {/* Right Column - Features Grid */}
        <div className="services-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="service-card"
            >
              {/* Black Overlay */}
              <div className="service-card-overlay" />
              
              {/* Optimized Image with AVIF > WebP > JPEG fallback */}
              <picture>
                <source srcSet={feature.avif} type="image/avif" />
                <source srcSet={feature.webp} type="image/webp" />
                <img
                  src={feature.fallback}
                  alt={feature.title}
                  className="service-card-image"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              
              {/* Card Content */}
              <div className="service-card-content">
                {/* Title */}
                <h3 className="service-title">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="service-description">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default WhatWeDoSection;