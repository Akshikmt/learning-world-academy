import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Award, CheckCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-grid">
        {/* Brand Information */}
        <div className="footer-brand">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
            Learning World Academy
          </h3>
          <p>
            Learn for a brighter tomorrow. Providing government-registered and ISO-certified professional career skill development.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#A0AEC0' }}>
              <Award size={16} className="text-secondary" />
              <span>Government Registered Institute</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#A0AEC0' }}>
              <CheckCircle size={16} className="text-accent" />
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/admissions">Admissions Open</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Popular Courses */}
        <div>
          <h4 className="footer-heading">Key Offerings</h4>
          <ul className="footer-links">
            <li><Link to="/courses">DCA & PGDCA</Link></li>
            <li><Link to="/courses">Tally & GST</Link></li>
            <li><Link to="/courses">Spoken English</Link></li>
            <li><Link to="/courses">Stenography & Typing</Link></li>
            <li><Link to="/courses">Office Management</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="footer-heading">Contact Details</h4>
          <div className="footer-info">
            <div className="footer-info-item">
              <MapPin size={24} style={{ flexShrink: 0 }} className="text-secondary" />
              <span>102, Royal Academy Heights, Skill Development Plaza, New Delhi, India</span>
            </div>
            <div className="footer-info-item">
              <Phone size={18} style={{ flexShrink: 0 }} className="text-secondary" />
              <span>+91 98765 43210</span>
            </div>
            <div className="footer-info-item">
              <Mail size={18} style={{ flexShrink: 0 }} className="text-secondary" />
              <span>info@learningworldacademy.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Learning World Academy. All Rights Reserved.</p>
        <p>Skills Development & Employment Generation Cell</p>
      </div>
    </footer>
  );
}
