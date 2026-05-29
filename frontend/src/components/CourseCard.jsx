import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight, Monitor, Code, Globe, FileText, CheckSquare, BarChart, Layers } from 'lucide-react';
import BorderGlow from './BorderGlow';

export default function CourseCard({ course }) {
  // Select matching premium icons based on course name
  const getIcon = (id) => {
    switch (id) {
      case 'basic-computer': return <Monitor size={24} />;
      case 'dca': return <Layers size={24} />;
      case 'pgdca': return <Code size={24} />;
      case 'spoken-english': return <Globe size={24} />;
      case 'stenography': return <FileText size={24} />;
      case 'tally-gst': return <BarChart size={24} />;
      case 'typing': return <CheckSquare size={24} />;
      default: return <BookOpen size={24} />;
    }
  };

  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="190 18 60"
      backgroundColor="#FFFFFF"
      borderRadius={20}
      glowRadius={30}
      glowIntensity={1.0}
      coneSpread={25}
      animated={false}
      colors={['#BE123C', '#C29B7F', '#C5A059']}
      className="animate-fade-in course-card-container"
    >
      <div className="course-content" style={{ minHeight: '380px', display: 'flex', flexDirection: 'column', padding: '1.75rem', height: '100%', width: '100%' }}>
        {/* Visual Category Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span className="course-badge">{course.category}</span>
          <div className="feature-icon-wrapper" style={{ margin: 0, width: '2.5rem', height: '2.5rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 'var(--radius-sm)' }}>
            {getIcon(course.id)}
          </div>
        </div>

        <h3 className="course-title" style={{ marginTop: '1rem' }}>{course.title}</h3>
        <p className="course-description">{course.description}</p>

        {/* Course Core Benefits */}
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {course.benefits.slice(0, 3).map((benefit, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--secondary)', fontWeight: 800 }}>✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Metadata Footer */}
        <div className="course-meta" style={{ marginTop: 'auto' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <Clock size={16} />
            {course.duration}
          </span>
          <span className="course-price">{course.fee}</span>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <Link to="/admissions" className="btn btn-outline" style={{ width: '100%', padding: '0.6rem 0', fontSize: '0.9rem' }}>
            Enroll Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </BorderGlow>
  );
}
