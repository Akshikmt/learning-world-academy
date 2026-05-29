import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, GraduationCap, Users, Calendar, ArrowRight, CheckCircle, ChevronRight, ChevronLeft, Briefcase, Zap, Star, Trophy } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion.jsx';
import CourseCard from '../components/CourseCard.jsx';
import SplitText from '../components/SplitText.jsx';
import SplashCursor from '../components/SplashCursor.jsx';

export default function Home() {
  // Intro Loader State tracking disabled by default for instant professional page load
  const [loadingState, setLoadingState] = React.useState('ready');
  const fullOrgName = "Learning World Academy";
  const [typedOrgName, setTypedOrgName] = React.useState('');

  React.useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullOrgName.length) {
        setTypedOrgName(fullOrgName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  // Top Performing Placements Database
  const topStudents = [
    {
      id: 1,
      name: "Rahul Sharma",
      course: "PGDCA Graduate",
      score: "98%",
      achievement: "Secured top merit list rank. Mastered advanced web app development frameworks and database system triggers.",
      placement: "Placed at Tech Mahindra",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Priya Patel",
      course: "Tally & GST Expert",
      score: "97%",
      achievement: "Exceptional ledger balance auditing and tax filing expertise. Cleared all industry practical voucher drills.",
      placement: "Placed at HDFC Bank",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Aman Verma",
      course: "DCA Graduate",
      score: "96%",
      achievement: "Pioneered automated office spreadsheet pipelines. Expert in desktop publishing systems.",
      placement: "Placed at Genpact Solutions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      course: "Stenography Expert",
      score: "95%",
      achievement: "Recorded peak stenographer shorthand transcription rates of 100 WPM with high grammatical precision.",
      placement: "Placed at District Court Office",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Vikram Singh",
      course: "Typing Mastery Specialist",
      score: "95%",
      achievement: "Sustained high typing performance speeds of 55 WPM with zero error rate on timed multi-column text mocks.",
      placement: "Placed at State Secretariat",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Divya Reddy",
      course: "Spoken English Mastery",
      score: "94%",
      achievement: "Mastered public speaking, resume drafting, corporate email etiquette, and technical project presentations.",
      placement: "Placed at Wipro Technologies",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop"
    }
  ];

  // Carousel slider responsive start indexes and card count calculations
  const [studentIndex, setStudentIndex] = React.useState(0);
  const [cardsToShow, setCardsToShow] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      let currentCards = 3;
      if (window.innerWidth < 768) {
        currentCards = 1;
      } else if (window.innerWidth < 1024) {
        currentCards = 2;
      }
      setCardsToShow(currentCards);
      setStudentIndex(prev => Math.min(prev, topStudents.length - currentCards));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextStudent = () => {
    setStudentIndex(prev => Math.min(prev + 1, topStudents.length - cardsToShow));
  };

  const prevStudent = () => {
    setStudentIndex(prev => Math.max(prev - 1, 0));
  };

  // Touch Swipe Gesture support for sliding left / right
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextStudent();
    }
    if (isRightSwipe) {
      prevStudent();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Popular Featured Courses to display in Landing
  const featuredCourses = [
    {
      id: 'pgdca',
      title: 'PGDCA (Post Graduate Diploma)',
      category: 'PG Diploma',
      duration: '1 Year',
      fee: '₹12,000',
      description: 'A comprehensive advanced postgraduate course covering object-oriented programming, DBMS, and full web technology architecture.',
      benefits: ['Advanced Programming', 'Database Systems', 'Professional Certification']
    },
    {
      id: 'tally-gst',
      title: 'Tally & GST Expert',
      category: 'Accounting',
      duration: '3 Months',
      fee: '₹4,500',
      description: 'Master practical digital ledger management, stock inventory vouchers, tax calculations, and real-time GST returns filing.',
      benefits: ['Ledgers & Bookkeeping', 'Direct GST E-Filing', 'Real-world Audits']
    },
    {
      id: 'spoken-english',
      title: 'Spoken English Mastery',
      category: 'Languages',
      duration: '3 Months',
      fee: '₹4,000',
      description: 'Enhance your voice accent, lexical vocabulary, job interview presentations, group debate drills, and public speaking posture.',
      benefits: ['Conversational Accent', 'Vocabulary Builder', 'Interactive Practice']
    }
  ];

  return (
    <div className="animate-fade-in" style={{ overflow: 'hidden' }}>
      <SplashCursor />
      {/* Dynamic Multicolor Intro Loader Backdrop disabled for premium immediate rendering */}

      {/* 1. Hero Section */}
      <section className="hero-section" style={{ perspective: '1000px' }}>
        <div className="container hero-grid" style={{ gridTemplateColumns: 'var(--grid-cols-hero)', gap: 'var(--grid-gap-lg)' }}>
          
          {/* Left Column: 3D Student Vector holding stack of colorful books */}
          <div className="student-container-3d animate-float" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="/student.jfif"
              alt="Learning World Academy Student"
              style={{
                width: '100%',
                maxWidth: '480px',
                height: 'auto',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4), 0 0 40px rgba(79, 70, 229, 0.3)',
                border: '6px solid rgba(255, 255, 255, 0.25)',
                transition: 'var(--transition)'
              }}
            />
          </div>

          {/* Right Column: Dynamic morphing 3D Org Title & Tagline details */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 className="hero-title-typing">
              {typedOrgName}
              <span className="typing-cursor"></span>
            </h2>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--secondary-hover)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
              Learn for a brighter tomorrow
            </h3>
            <p className="hero-description" style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Start your computer applications, financial accounting, and vocational career path at our globally recognized institute. Gain elite government-accredited qualifications from certified industry educators.
            </p>
            <div className="hero-ctas" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/courses" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link to="/admissions" className="btn btn-outline" style={{ padding: '0.85rem 2rem' }}>
                Admissions Open 2026
              </Link>
            </div>

            {/* Static, stationary credentials certification row (not float, below CTAs) */}
            <div>
              <div className="badge-certified-static">
                <ShieldCheck size={18} className="text-secondary" /> Government Registered & ISO 9001:2015 Certified Skill Institute
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Statistics Bar */}
      <section className="stats-section reveal">
        <div className="container stats-grid">
          <div className="stat-card">
            <h3>9+</h3>
            <p>Career-Oriented Programs</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Hands-on Lab Training</p>
          </div>
          <div className="stat-card">
            <h3>ISO</h3>
            <p>9001:2015 Certified</p>
          </div>
          <div className="stat-card">
            <h3>98%</h3>
            <p>Student Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* 3. Featured Courses Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-subtitle">Specialized Offerings</span>
            <h2 className="section-title">Explore Featured Programs</h2>
            <p className="section-desc">
              Choose from our elite collection of foundational computing, bookkeeping, stenography, and career-advancement courses designed for modern industry requirements.
            </p>
          </div>

          <div className="courses-grid">
            {featuredCourses.map((course, idx) => (
              <div key={course.id} className={`reveal reveal-delay-${idx + 1}`}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses" className="btn btn-secondary">
              View All 9 Programs <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="section-padding why-us-section">
        <div className="container why-us-grid">
          <div className="reveal">
            <span className="section-subtitle">Institute Credentials</span>
            <h2 className="section-title">Why Students Choose Learning World Academy</h2>
            <p className="section-desc" style={{ marginBottom: '2rem' }}>
              We offer government-accredited skill development pipelines designed to bridge the gap between classroom guidelines and real-world executive employment requirements.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle className="text-primary" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Government Recognized Credentials</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Secure standardized diplomas fully approved for state employment tests and applications.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle className="text-primary" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>World-Class Practical Computer Labs</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Each student is assigned a dedicated PC workstation to guarantee hands-on typing and development drills.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="why-features">
            <div className="why-feature-card reveal reveal-delay-1">
              <div className="feature-icon-wrapper">
                <Award size={20} />
              </div>
              <h3 className="feature-title">ISO Certified</h3>
              <p className="feature-desc">International standards of academic management and structured examination blueprints.</p>
            </div>
            <div className="why-feature-card reveal reveal-delay-2">
              <div className="feature-icon-wrapper">
                <Users size={20} />
              </div>
              <h3 className="feature-title">Expert Faculty</h3>
              <p className="feature-desc">Mentorship by certified computer systems professionals and typing exam specialists.</p>
            </div>
            <div className="why-feature-card reveal reveal-delay-3">
              <div className="feature-icon-wrapper">
                <Zap size={20} />
              </div>
              <h3 className="feature-title">Flexible Batches</h3>
              <p className="feature-desc">Dedicated batches in the mornings, afternoons, and weekends for customized balance.</p>
            </div>
            <div className="why-feature-card reveal reveal-delay-4">
              <div className="feature-icon-wrapper">
                <Briefcase size={20} />
              </div>
              <h3 className="feature-title">100% Placement</h3>
              <p className="feature-desc">Active recruiter coordination and corporate resume optimization classes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Admission Open Banner */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container">
          <div className="admission-banner reveal">
            <div className="admission-banner-bg"></div>
            <div className="banner-content">
              <span className="banner-badge">Admission Open - Session 2026</span>
              <h2 className="banner-title">Upgrade Your Skills & Accelerate Your Career</h2>
              <p className="banner-desc">
                Registration is currently open for DCA, PGDCA, Tally, Stenography, and Spoken English. Reserve your PC workstation today!
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/admissions" className="btn btn-accent" style={{ padding: '0.85rem 2rem' }}>
                  Apply Online Now
                </Link>
                <Link to="/contact" className="btn btn-outline" style={{ borderColor: '#FFFFFF', color: '#FFFFFF', padding: '0.85rem 2rem' }}>
                  Speak with Advisor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Job Assistance Section */}
      <section className="section-padding job-section">
        <div className="container job-grid">
          <div className="reveal">
            <span className="section-subtitle">Career Accelerator</span>
            <h2 className="section-title">Employment Assistance Pipeline</h2>
            <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
              We do not just hand you certificates. Learning World Academy operates a highly rigorous 4-step job preparation cell ensuring students are 100% corporate-ready immediately upon course graduation.
            </p>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', textAlign: 'center', flex: 1 }}>
                <h3 style={{ color: 'var(--primary)', fontSize: '2rem', fontFamily: 'var(--font-display)' }}>15+</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>TIE-UP RECRUITERS</span>
              </div>
              <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', textAlign: 'center', flex: 1 }}>
                <h3 style={{ color: 'var(--secondary)', fontSize: '2rem', fontFamily: 'var(--font-display)' }}>850+</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>PLACED GRADUATES</span>
              </div>
            </div>
          </div>

          <div className="job-steps">
            <div className="job-step-card reveal reveal-delay-1">
              <span className="job-step-num">01</span>
              <div>
                <h3 className="job-step-title">Structured Resume Designing</h3>
                <p className="job-step-desc">Our HR mentors compile your core coding, spreadsheet, and accounts competencies into high-impact corporate layouts.</p>
              </div>
            </div>
            <div className="job-step-card reveal reveal-delay-2">
              <span className="job-step-num">02</span>
              <div>
                <h3 className="job-step-title">Simulated Court/Office Typing Exams</h3>
                <p className="job-step-desc">Typing and stenography candidates undergo strict timed mockup challenges matching actual governmental exam setups.</p>
              </div>
            </div>
            <div className="job-step-card reveal reveal-delay-3">
              <span className="job-step-num">03</span>
              <div>
                <h3 className="job-step-title">Mock Technical Interviews</h3>
                <p className="job-step-desc">Reconcile accounts sheets, debug code logs, and test communication profiles with real corporate supervisors.</p>
              </div>
            </div>
            <div className="job-step-card reveal reveal-delay-4">
              <span className="job-step-num">04</span>
              <div>
                <h3 className="job-step-title">Direct Corporate Walk-Ins</h3>
                <p className="job-step-desc">Get fast-track direct interview access at our collaborated companies across information systems and logistics sectors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5. Top Students Carousel Section */}
      <section className="section-padding top-students-section reveal">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <div style={{ maxWidth: '650px', textAlign: 'left' }}>
              <span className="section-subtitle">Exemplary Achievements</span>
              <h2 className="section-title" style={{ margin: 0 }}>Meet Our Top Students</h2>
              <p className="section-desc" style={{ marginTop: '1rem', marginBottom: 0 }}>
                Direct proof of our practical worksheets and lab guidelines. Explore our high-achieving alumni placed at globally recognized corporations.
              </p>
            </div>
            
            {/* Slider Controls */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button 
                onClick={prevStudent} 
                disabled={studentIndex === 0} 
                className="slider-control-btn"
                aria-label="Previous Student"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextStudent} 
                disabled={studentIndex >= topStudents.length - cardsToShow} 
                className="slider-control-btn"
                aria-label="Next Student"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Slider Viewport */}
          <div 
            style={{ overflow: 'hidden', position: 'relative', margin: '0 -1rem' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              style={{ 
                display: 'flex', 
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)', 
                transform: `translateX(-${studentIndex * (100 / cardsToShow)}%)` 
              }}
            >
              {topStudents.map((student) => (
                <div 
                  key={student.id} 
                  style={{ 
                    width: `${100 / cardsToShow}%`, 
                    flexShrink: 0, 
                    padding: '0 1rem', 
                    boxSizing: 'border-box' 
                  }}
                >
                  <div className="student-slider-card">
                    <div className="student-card-avatar-wrapper">
                      <img 
                        src={student.image} 
                        alt={student.name} 
                        className="student-card-avatar"
                        loading="lazy"
                      />
                      <div className="student-card-badge-score">
                        <Trophy size={10} style={{ display: 'inline-block', marginRight: '2px', verticalAlign: 'middle' }} />
                        <span style={{ verticalAlign: 'middle' }}>{student.score}</span>
                      </div>
                    </div>

                    <h3 className="student-card-name">{student.name}</h3>
                    <span className="student-card-course">{student.course}</span>
                    <p className="student-card-achievement">{student.achievement}</p>

                    <div className="student-card-placement">
                      <Briefcase size={16} /> {student.placement}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="slider-dots">
            {Array.from({ length: topStudents.length - cardsToShow + 1 }).map((_, idx) => (
              <span 
                key={idx} 
                className={`slider-dot ${studentIndex === idx ? 'active' : ''}`}
                onClick={() => setStudentIndex(idx)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="section-padding testimonials-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-subtitle">Success Stories</span>
            <h2 className="section-title">What Our Alumni Say</h2>
            <p className="section-desc">
              Over 800+ students have turned their digital capabilities into full-time technical and accounting office employment.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card reveal reveal-delay-1">
              <p className="testimonial-text">
                "Learning World Academy transformed my professional status. The hands-on practice in Tally and GST was extremely thorough, and within two weeks of completing my program, I got selected as a Junior Accountant."
              </p>
              <div className="testimonial-user">
                <div className="testimonial-avatar">AK</div>
                <div className="testimonial-details">
                  <h4>Amit Kumar</h4>
                  <span>Tally Graduate • Junior Accountant</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card reveal reveal-delay-2">
              <p className="testimonial-text">
                "Doing PGDCA here was the best decision. The curriculum matches PG Diploma standards, and the coding laboratory environment is great. Highly recommended for any serious computer science career seekers."
              </p>
              <div className="testimonial-user">
                <div className="testimonial-avatar">SP</div>
                <div className="testimonial-details">
                  <h4>Sushmita Patel</h4>
                  <span>PGDCA Graduate • Software Executive</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card reveal reveal-delay-3">
              <p className="testimonial-text">
                "My typing speed increased from 20 WPM to 45 WPM thanks to the rigorous daily speed-building training and expert tips by faculty. I cleared the Stenographer State Exam on my first try!"
              </p>
              <div className="testimonial-user">
                <div className="testimonial-avatar">RD</div>
                <div className="testimonial-details">
                  <h4>Rohan Dev</h4>
                  <span>Stenography Graduate • Junior Court Clerk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-subtitle">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Get immediate answers to the most common queries about registration, ISO certificates, batches, and job referrals.
            </p>
          </div>
          <div className="reveal">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </div>
  );
}
