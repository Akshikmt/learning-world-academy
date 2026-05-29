import React, { useState } from 'react';
import { Search, Filter, Monitor, FileText, Layers, Award } from 'lucide-react';
import CourseCard from '../components/CourseCard.jsx';

export default function Courses() {
  // Database of all 9 courses requested
  const allCourses = [
    {
      id: 'basic-computer',
      title: 'Basic Computer',
      category: 'Computing Foundations',
      duration: '3 Months',
      fee: '₹3,000',
      description: 'Master operational basics, computer parts assembly, MS Office, secure internet usage, and operating system basics.',
      benefits: ['MS Office Proficiency', 'Email & Web Navigation', 'OS Management Tools']
    },
    {
      id: 'dca',
      title: 'DCA (Diploma in Computer Applications)',
      category: 'Diploma',
      duration: '6 Months',
      fee: '₹5,500',
      description: 'A structural program covering operating systems, DBMS databases, high-end MS Office apps, HTML scripting, and simple graphics coding.',
      benefits: ['HTML & CSS Fundamentals', 'Database Management', 'Comprehensive Software Suite']
    },
    {
      id: 'pgdca',
      title: 'PGDCA (Post Graduate Diploma)',
      category: 'Diploma',
      duration: '1 Year',
      fee: '₹12,000',
      description: 'A deep post-graduate diploma covering advanced computer system design, object-oriented coding, DBMS, web technologies, and MIS analytics.',
      benefits: ['Advanced Programming', 'Software Engineering basics', 'Web Development Principles']
    },
    {
      id: 'spoken-english',
      title: 'Spoken English',
      category: 'Languages',
      duration: '3 Months',
      fee: '₹4,000',
      description: 'Enhance your voice accent, vocabulary range, body language, interview presentation performance, and group discussions.',
      benefits: ['Voice Accent Training', 'Lexical Vocabulary range', 'Mock Debates']
    },
    {
      id: 'stenography',
      title: 'Stenography',
      category: 'Vocational',
      duration: '6 Months',
      fee: '₹6,000',
      description: 'Acquire high-speed phonetic shorthand drafting capabilities, typewriter layout mechanisms, and court transcript guidelines.',
      benefits: ['Advanced Shorthand Shorthand', 'Phonetic Sound Transcripts', 'State Court Clerk prep']
    },
    {
      id: 'tally-gst',
      title: 'Tally & GST',
      category: 'Accounting',
      duration: '3 Months',
      fee: '₹4,500',
      description: 'Practical digital bookkeeping, assets ledgers, vouchers creation, stock inventory reports, and direct GST return uploads.',
      benefits: ['Vouchers & Inventory', 'Direct GST E-Filing', 'Ledger Balancing']
    },
    {
      id: 'typing',
      title: 'Typing (English/Hindi)',
      category: 'Skills',
      duration: '3 Months',
      fee: '₹2,000',
      description: 'Scientific speed-building drills targeting 40+ words per minute typing speeds in Hindi and English with high precision scores.',
      benefits: ['Keyboard Layout Mastery', 'Advanced Speed Drills', 'State Exam Layout Mockups']
    },
    {
      id: 'financial-accounting',
      title: 'Financial Accounting',
      category: 'Accounting',
      duration: '6 Months',
      fee: '₹7,000',
      description: 'Comprehensive accounting principles, balance sheet statements, depreciation tracking, corporate asset ledgers, and financial reconciliation.',
      benefits: ['Reconciliation & Balance', 'Audit preparation', 'Accounting Ledgers']
    },
    {
      id: 'office-management',
      title: 'Office Management',
      category: 'Vocational',
      duration: '6 Months',
      fee: '₹5,000',
      description: 'Organize team tasks, draft high-end letters, manage record archives, schedule office pipelines, and run team meetings.',
      benefits: ['Workflow Organization', 'Professional Drafting', 'File Archiving Systems']
    }
  ];

  const categories = ['All', 'Diploma', 'Accounting', 'Computing Foundations', 'Vocational', 'Languages', 'Skills'];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter and search courses
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate-fade-in page-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Academic Directory</span>
          <h2 className="section-title">Explore Course Programs</h2>
          <p className="section-desc">
            All programs are government registered and ISO-certified. Select the program that matches your career objectives and secure your enrollment.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem',
          marginBottom: '3rem',
          border: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          boxShadow: 'var(--shadow-sm)'
        }}>
          {/* Search */}
          <div style={{ position: 'relative', flexGrow: 1, maxWidth: '400px' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search programs (e.g., Tally, DCA)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.5rem', margin: 0 }}
            />
          </div>

          {/* Categories Filter pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--primary)' : 'var(--border)',
                  backgroundColor: selectedCategory === cat ? 'var(--primary)' : '#FFFFFF',
                  color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-muted)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ marginBottom: '0.5rem' }}>No Programs Found</h3>
            <p style={{ color: 'var(--text-muted)' }}>We couldn't find any courses matching your search constraints. Try testing different keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
}
