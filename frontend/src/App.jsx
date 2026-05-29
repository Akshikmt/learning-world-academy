import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Pages Import
import Home from './pages/Home.jsx';
import Courses from './pages/Courses.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Admissions from './pages/Admissions.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.08 });

    const observeElements = () => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    };

    observeElements();
    const timer = setInterval(observeElements, 1000);

    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Sticky Header Navigation */}
        <Header />

        {/* Dynamic Route Viewport */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={
              <section className="auth-page text-center">
                <div className="auth-card">
                  <span style={{ fontSize: '5rem', display: 'block', marginBottom: '1rem' }}>404</span>
                  <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    The page you are looking for does not exist or has been relocated.
                  </p>
                  <a href="/" className="btn btn-primary">
                    Return to Homepage
                  </a>
                </div>
              </section>
            } />
          </Routes>
        </main>

        {/* Global Metadata Footer */}
        <Footer />
      </div>
    </Router>
  );
}
