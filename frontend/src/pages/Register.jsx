import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { API_BASE_URL } from '../config.js';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
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
      tempErrors.email = 'Invalid email structure format.';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else if (formData.phone.trim().length < 10) {
      tempErrors.phone = 'Phone number must contain at least 10 digits.';
    }
    if (!formData.password) {
      tempErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters.';
    }
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match.';
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
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMsg(data.message || 'Registration successful! You can now log in.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: ''
        });
      } else {
        setErrorMsg(data.message || 'An error occurred during registration.');
      }
    } catch (err) {
      console.error('Registration API error:', err);
      // Mock local success fallback
      setSuccessMsg('✅ (Mock Account Created!) Registered profile: ' + formData.name + '. You can now access the demo portal!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card animate-fade-in" style={{ maxWidth: '500px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>Create Account</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Join Learning World Academy portal to audit your application</p>
        </div>

        {successMsg && (
          <div style={{ background: 'var(--secondary-light)', border: '1px solid rgba(20, 184, 166, 0.2)', color: 'var(--secondary-hover)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.9rem', textAlign: 'center' }}>
            {successMsg}
            <div style={{ marginTop: '0.75rem' }}>
              <Link to="/login" className="btn btn-secondary" style={{ padding: '0.4rem 1.25rem', fontSize: '0.8rem' }}>
                Go to Login
              </Link>
            </div>
          </div>
        )}

        {errorMsg && (
          <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#B91C1C', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            {errorMsg}
          </div>
        )}

        {!successMsg && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name *</label>
              <div style={{ position: 'relative' }}>
                <User size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First and last name"
                  className="form-input"
                  style={{ paddingLeft: '2.5rem' }}
                />
              </div>
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'var(--form-cols-2)', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="student@example.com"
                    className="form-input"
                    style={{ paddingLeft: '2.5rem' }}
                  />
                </div>
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number *</label>
                <div style={{ position: 'relative' }}>
                  <Phone size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className="form-input"
                    style={{ paddingLeft: '2.5rem' }}
                  />
                </div>
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'var(--form-cols-2)', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="password">Password *</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="form-input"
                    style={{ paddingLeft: '2.5rem' }}
                  />
                </div>
                {errors.password && <span className="form-error">{errors.password}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="confirmPassword">Confirm Password *</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="form-input"
                    style={{ paddingLeft: '2.5rem' }}
                  />
                </div>
                {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem', marginTop: '1rem', marginBottom: '1.5rem' }}
            >
              {isLoading ? 'Creating Profile...' : (
                <>
                  Register Student Account <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        )}

        <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Already have a student portal account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 600 }}>Login here</Link>
        </div>
      </div>
    </div>
  );
}
