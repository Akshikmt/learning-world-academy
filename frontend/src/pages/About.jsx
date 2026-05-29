import React from 'react';
import { Award, Compass, Eye, ShieldCheck, CheckSquare, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="animate-fade-in" style={{ padding: '5rem 0' }}>
      {/* Introduction Hero */}
      <section className="container" style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="section-subtitle">Our Institution</span>
          <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Learning World Academy</h2>
          <p className="hero-description" style={{ fontSize: '1.2rem', margin: '1.5rem auto' }}>
            A premier Skills Development and Career-Oriented Training Institute dedicated to delivering government-registered and ISO-certified digital literacy.
          </p>
        </div>
      </section>

      {/* ISO and Government Registration detailed Grid */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '5rem 0', marginBottom: '5rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'var(--grid-cols-2)', gap: 'var(--grid-gap-lg)', alignItems: 'center' }}>
          <div>
            <span className="section-subtitle">Valid Credibility</span>
            <h2 className="section-title">Fully Registered & Globally Certified</h2>
            <p className="section-desc" style={{ marginBottom: '2rem' }}>
              We understand that true qualification requires legitimate validation. Our credentials are valid for government registration boards, court employment lists, and corporate requirements.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="feature-icon-wrapper" style={{ flexShrink: 0 }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Government Registered Institute</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Registered under the Skills Development and Vocational Training Acts to ensure standardized academic delivery.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="feature-icon-wrapper" style={{ flexShrink: 0 }}>
                  <Award size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>ISO 9001:2015 Certified Organization</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Affords high quality systems across student support centers, typing metrics testing, curriculum audit pathways, and certifications.</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>Quality Statement</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              "Learning World Academy strives to nurture digital proficiency through structured, affordable, and practical education frameworks. We are committed to fostering technical literacy that translates into job placement."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>LWA</div>
              <div>
                <h4 style={{ fontSize: '1rem' }}>Academic Audit Council</h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quality Assurance Board</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="container" style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-cols-3)', gap: 'var(--grid-gap-md)' }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div className="feature-icon-wrapper" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)', marginBottom: '1.5rem' }}>
              <Compass size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>
              To deliver highly accessible, practical, and standard computer applications and vocational training programs that empower students to secure reliable employment in public and private institutions.
            </p>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div className="feature-icon-wrapper" style={{ backgroundColor: 'var(--secondary-light)', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
              <Eye size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Our Vision</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>
              To be recognized as a leading technical institute in skill development, fostering advanced digital integration and raising employment readiness across student generations.
            </p>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div className="feature-icon-wrapper" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)', marginBottom: '1.5rem' }}>
              <Target size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Core Principles</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>
              Ethics, transparency in academic auditing, relentless focus on computer laboratory practice, structured study notes, and active mentoring for employment interviews.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities and Infrastructure */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '5rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'var(--grid-cols-2)', gap: 'var(--grid-gap-lg)', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <span className="section-subtitle">Campus Amenities</span>
            <h2 className="section-title">Advanced Lab Facilities</h2>
            <p className="section-desc">
              We focus highly on learning-by-doing, which is why our facilities are configured with top-tier technology components to enhance typing and programming output.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'var(--grid-cols-2)', gap: 'var(--grid-gap-md)' }}>
            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckSquare size={16} className="text-secondary" /> 1:1 Computer Ratio
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Each candidate owns a private desktop workstation for the complete duration of their batch session.</p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckSquare size={16} className="text-secondary" /> TIMED Mock testing
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Dedicated typing metrics tools testing accuracy, key-stroke velocity, and speed performance.</p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckSquare size={16} className="text-secondary" /> Library Access
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Complete collection of DCA, PGDCA study books, Tally sample problems, and English vocab reference manuals.</p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckSquare size={16} className="text-secondary" /> Standard Exams
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Transparent exam protocols resulting in legitimate, verifiable QR-coded completion certificates.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
