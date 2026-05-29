import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Mail, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { API_BASE_URL } from '../config.js';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email format.';
    }
    if (!formData.password) {
      tempErrors.password = 'Password is required.';
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
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMsg('✅ ' + data.message + ' Redirecting to dashboard simulation...');
        // Simulating redirect
        console.log('Logged in student:', data.student);
      } else {
        setErrorMsg(data.message || 'Invalid credentials or connection error.');
      }
    } catch (err) {
      console.error('Login error:', err);
      // Fallback mock success to test UI
      if (formData.email === 'student@example.com' && formData.password === 'password123') {
        setSuccessMsg('✅ (Mock Successful!) Welcome back! Demo credentials authorized.');
      } else {
        setErrorMsg('⚠️ Connection refused or invalid credentials. Hint: use student@example.com and password123');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card animate-fade-in">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>Student Portal</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Log in to track your admissions and verify certificates</p>
        </div>

        {successMsg && (
          <div style={{ background: 'var(--secondary-light)', border: '1px solid rgba(20, 184, 166, 0.2)', color: 'var(--secondary-hover)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.9rem', textAlign: 'center' }}>
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#B91C1C', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
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

          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label" htmlFor="password">Password</label>
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

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.85rem', marginBottom: '1.5rem' }}
          >
            {isLoading ? 'Authorizing Portal...' : (
              <>
                Access Dashboard <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Demo Helper Prompt */}
        <div style={{
          backgroundColor: 'var(--primary-light)',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--primary)',
          fontSize: '0.85rem',
          color: 'var(--primary-hover)',
          marginBottom: '1.5rem',
          display: 'flex',
          gap: '0.5rem'
        }}>
          <HelpCircle size={18} style={{ flexShrink: 0 }} />
          <div>
            <strong>Demo Portal Credentials:</strong><br />
            Email: <code style={{ fontWeight: 700 }}>student@example.com</code><br />
            Password: <code style={{ fontWeight: 700 }}>password123</code>
          </div>
        </div>

        <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Don't have a student account? <Link to="/register" style={{ color: 'var(--primary)', fontWeight: 600 }}>Create Profile</Link>
        </div>
      </div>
    </div>
  );
}
