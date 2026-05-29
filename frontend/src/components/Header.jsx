import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, GraduationCap } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header-wrapper">
      <div className="container header-container">
        {/* Branding Logo */}
        <Link to="/" className="logo-link" onClick={() => setIsOpen(false)}>
          <div className="feature-icon-wrapper" style={{ margin: 0, width: '2.5rem', height: '2.5rem', backgroundColor: 'var(--primary-light)' }}>
            <GraduationCap size={22} className="text-primary" />
          </div>
          <div>
            <h1 className="logo-title" style={{ letterSpacing: '-0.02em' }}>Learning World Academy</h1>
          </div>
        </Link>

        {/* Navigation Menu (Desktop) */}
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={`nav-link ${isActive(link.path)}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions Button / User Profile */}
        <div className="header-actions">
          <Link to="/login" className="btn btn-outline desktop-only" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
            Login
          </Link>
          <Link to="/register" className="btn btn-primary desktop-only" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
            Register
          </Link>
          
          {/* Mobile Menu Icon */}
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean Responsive Design) */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '4.5rem',
          left: 0,
          right: 0,
          background: '#FFFFFF',
          borderBottom: '1px solid var(--border)',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          zIndex: 99
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                fontWeight: 600,
                color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-muted)'
              }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
            <Link to="/login" onClick={() => setIsOpen(false)} className="btn btn-outline" style={{ flex: 1, padding: '0.5rem 0' }}>
              Login
            </Link>
            <Link to="/register" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ flex: 1, padding: '0.5rem 0' }}>
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
