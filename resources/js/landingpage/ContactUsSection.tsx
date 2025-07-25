import { Mail, Phone } from 'lucide-react';
import { memo, useState, useCallback } from 'react';

const ContactUsSection = memo(function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    services: '',
    contact_method: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      // Reset form or show success message
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  return (
    <section className="contact-section window-cleaning-theme">
      {/* Background image with overlay */}
      <div className="contact-background" />
      
      <div className="contact-container">
        {/* Left Column - Content */}
        <div className="contact-content">
          <h2>Get a Free Quote Today</h2>

          <p>
            We'll get back to you quickly with a no-obligation quote. You don't need to be home for most jobs — just provide access.
          </p>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-item">
              <Phone color="#fff" size={20} aria-hidden="true" />
              <span>
                Phone: <a href="tel:1800222000" className="contact-link">1 800 222 000</a>
              </span>
            </div>
            <div className="contact-item">
              <Mail color="#fff" size={20} aria-hidden="true" />
              <span>
                Email: <a href="mailto:info@invisiblewindowcleaning.com" className="contact-link">info@invisiblewindowcleaning.com</a>
              </span>
            </div>
            <div className="contact-item">
              <Phone color="#fff" size={20} aria-hidden="true" />
              <span>
                WhatsApp: <a href="https://wa.me/1800222000" className="contact-link" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="form-input"
                  value={formData.name}
                  onChange={handleInputChange}
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Address / Area
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="form-input"
                  value={formData.address}
                  onChange={handleInputChange}
                  autoComplete="address-line1"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="services" className="form-label">
                Service(s) needed
              </label>
              <input
                id="services"
                name="services"
                type="text"
                className="form-input"
                value={formData.services}
                onChange={handleInputChange}
                placeholder="e.g., Window cleaning, Gutter clearing"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact_method" className="form-label">
                Preferred contact method
              </label>
              <input
                id="contact_method"
                name="contact_method"
                type="text"
                className="form-input"
                value={formData.contact_method}
                onChange={handleInputChange}
                placeholder="e.g., Phone, Email, WhatsApp"
              />
            </div>

            <div className="form-group">
              <label htmlFor="notes" className="form-label">
                Optional notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="form-textarea"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Any additional information or special requirements..."
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default ContactUsSection;