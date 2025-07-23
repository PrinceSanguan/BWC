export default function AboutUsSection() {
  return (
    <section style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fcff 100%)',
      fontFamily: '"Montserrat", "Open Sans", sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center'
      }}>
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
            We’re not a franchise or agency — just a skilled, reliable team who believe in doing the job properly, treating customers well, and being easy to work with.
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
            <li>You’ll see the same familiar faces each visit, always in uniform and driving our signwritten vans.</li>
          </ul>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            color: '#003366',
            marginBottom: '1rem',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            Meet the Team
          </h3>
          <ul style={{color: '#003366', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem'}}>
            <li><strong>Andy – Owner:</strong> Started Invisible Window Cleaning after taking over a small round in South Bristol in 2019. Loves being hands-on and still works on the tools most days. Friendly, organised, and always focused on doing things right.</li>
            <li><strong>Simon – Window Cleaner:</strong> Reliable, tidy, and great with customers. Has a sharp eye for detail and handles many of our regular domestic rounds in South Bristol.</li>
            <li><strong>Craig – Window Cleaner:</strong> Efficient and experienced, Craig covers a mix of commercial and domestic work across East and Central Bristol. Known for his speed and spotless finishes.</li>
            <li><strong>Mark – Window Cleaner:</strong> Down-to-earth and hardworking. Works mainly in North Bristol and handles a lot of one-off fascia and gutter jobs.</li>
          </ul>
        </div>
        
        {/* Right Content - Image Placeholder */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{
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
            border: '2px solid #7ecbff'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              right: '20px',
              bottom: '20px',
              background: 'rgba(255,255,255,0.95)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              border: '1px solid #7ecbff'
            }}>
              <span style={{fontWeight: 600}}>Local, trusted, and friendly team</span><br/>
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
            <div style={{
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#ffd600',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: '#003366'
              }}>
                {/* Icon could go here */}
                <span role="img" aria-label="window">🧼</span>
              </div>
              Professional window cleaning<br/>
              <small style={{color: '#ffffff', opacity: '0.9', marginTop: '0.5rem', display: 'block'}}>
                Real people, real results
              </small>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Responsive */}
      <style>
        {`
          @media (max-width: 768px) {
            section > div {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            h2 {
              font-size: 2rem !important;
            }
            h3 {
              font-size: 1.3rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}