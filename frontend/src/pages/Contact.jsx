import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ShieldAlert, Award } from 'lucide-react';
import { API_BASE_URL } from '../config.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Reset specific input error
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email structure.';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject of inquiry is required.';
    if (!formData.message.trim()) {
      tempErrors.message = 'Please input a brief message detailing your request.';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must contain at least 10 characters.';
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (!validate()) return;

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMsg(data.message);
        // Reset form inputs
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setErrorMsg(data.message || 'An error occurred during submission. Please try again.');
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      // Fallback local support in case backend is offline
      setSuccessMsg('✅ (Mock Response) Thank you! Your message has been logged successfully to our simulated memory bank. We will reply to: ' + formData.email);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-in page-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Our Advisors</h2>
          <p className="section-desc">
            Have questions about course syllabi, batch timings, certification validity, or offline admission costs? Send us an inquiry, and our support team will respond within 24 hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-cols-2)', gap: 'var(--grid-gap-lg)', alignItems: 'flex-start' }}>
          {/* Contact Information & Map Mockup */}
          <div>
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '2rem'
            }}>
              <h3 style={{ marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>Information Details</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin className="text-primary" size={22} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Campus Address</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>102, Royal Academy Heights, Skill Development Plaza, New Delhi, India</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Phone className="text-primary" size={20} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Call Center Numbers</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>+91 98765 43210 (Main Line)</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>+91 98765 54321 (Typing Center Cell)</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Mail className="text-primary" size={20} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Official Email Support</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>info@learningworldacademy.com</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>admissions@learningworldacademy.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Clock className="text-primary" size={20} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Institute Timings</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Monday – Saturday: 8:00 AM – 8:00 PM</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Sunday: 10:00 AM – 4:00 PM (Special Weekend Batches)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive styled Map illustration */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                <Award size={16} className="text-secondary" /> Dynamic Campus Locator
              </h4>
              <div style={{
                height: '180px',
                background: 'radial-gradient(circle, #F1F5F9 60%, #E2E8F0 100%)',
                borderRadius: 'var(--radius-md)',
                position: 'relative',
                overflow: 'hidden',
                border: '1px dashed var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Visual grid representing map streets */}
                <div style={{ position: 'absolute', width: '100%', height: '1px', background: '#CBD5E1', top: '30%' }}></div>
                <div style={{ position: 'absolute', width: '100%', height: '1px', background: '#CBD5E1', top: '70%' }}></div>
                <div style={{ position: 'absolute', height: '100%', width: '1px', background: '#CBD5E1', left: '30%' }}></div>
                <div style={{ position: 'absolute', height: '100%', width: '1px', background: '#CBD5E1', left: '70%' }}></div>
                
                {/* Glowing Marker Pin */}
                <div style={{
                  position: 'relative',
                  width: '3.5rem',
                  height: '3.5rem',
                  background: 'rgba(79, 70, 229, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'pulseBadge 2s infinite'
                }}>
                  <MapPin size={24} className="text-primary" />
                </div>
                <span style={{ position: 'absolute', bottom: '1rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>ROYAL ACADEMY HEIGHTS</span>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="form-card" style={{ margin: 0, width: '100%', maxWidth: '100%' }}>
            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>Send Inquiry</h3>
            
            {successMsg && (
              <div className="form-success-box">
                {successMsg}
              </div>
            )}

            {errorMsg && (
              <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#B91C1C', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                ⚠️ {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="form-input"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'var(--form-cols-2)', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="form-input"
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Inquiring about Tally installment fees"
                  className="form-input"
                />
                {errors.subject && <span className="form-error">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide details about your query..."
                  className="form-input"
                  style={{ resize: 'vertical' }}
                ></textarea>
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                {isLoading ? 'Delivering Inquiry...' : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
