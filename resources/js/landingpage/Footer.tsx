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
    <footer className="main-footer window-cleaning-theme">
      <div className="footer-container">
        {/* Copyright Text */}
        <div className="footer-copyright">
          © Copyright Premium Choros.io | Crafted by John Louise Jiz De Ortega
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="footer-social-link"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
          
          {/* Up Arrow */}
          <button
            className="scroll-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Scroll to top"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}