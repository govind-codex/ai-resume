import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import './landing.scss';

const Landing = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="landing-page">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-container">
          <Link to="/" className="brand-logo">
            <div className="logo-icon">
              <span className="logo-spark">✨</span>
            </div>
            <span className="brand-name">AI InterviewPrep</span>
          </Link>

          {/* <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About us</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#use-cases" onClick={() => setMobileMenuOpen(false)}>Use Cases</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#blog" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          </nav> */}

          <div className="nav-actions">
            <button className="quote-btn" onClick={() => navigate('/login')}>
              Get Started <span className="btn-arrow">↗</span>
            </button>

            <button
              className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="badge">PREPERATION SOULMATE</span>
            <h1 className="hero-title">
              Ace your <br />
              Next Interview <br />
              <span className="highlight-text">with confidence</span>
            </h1>
            <p className="hero-description">
              Our AI-powered interview prep platform helps job seekers and professionals succeed through mock interviews, real-time feedback, resume analysis, and personalized preparation tailored to your target role.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('/register')}>
                See how it works <span className="circle-arrow">›</span>
              </button>
              {/* <button className="btn-secondary" onClick={() => navigate('/login')}>
                View Our Services <span className="play-icon">▶</span>
              </button> */}
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-graphic">
              {/* Central Megaphone Graphic representation */}
              <div className="graphic-orbit">
                <div className="orbit-ring"></div>
                <div className="megaphone-3d">
                  <div className="megaphone-head"></div>
                  <div className="megaphone-body"></div>
                  <div className="megaphone-handle"></div>
                </div>

                {/* Floating Badge Cards */}
                <div className="floating-badge badge-share">
                  <div className="badge-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                    </svg>
                  </div>
                  <span>Practice</span>
                </div>

                <div className="floating-badge badge-growth">
                  <div className="badge-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                    </svg>
                  </div>
                  <span>Improve</span>
                </div>

                <div className="floating-badge badge-engage">
                  <div className="badge-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span>Feedback</span>
                </div>

                <div className="floating-badge badge-reach">
                  <div className="badge-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <span>Hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos Banner */}
      {/* <section className="partners-banner">
        <div className="partners-container">
          <span className="partner-logo">amazon</span>
          <span className="partner-logo font-script">dribbble</span>
          <span className="partner-logo">HubSpot</span>
          <span className="partner-logo logo-notion">
            <span className="notion-box">N</span> Notion
          </span>
          <span className="partner-logo logo-netflix">NETFLIX</span>
          <span className="partner-logo font-bold">zoom</span>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="services-container">
          <div className="section-header">
            <span className="badge">OUR SERVICES</span>
            <h2>Everything You Need to Land the Offer</h2>
            <p>We offer AI-powered tools to help candidates and professionals prepare, practice, and succeed in every interview.</p>
          </div>

          <div className="services-grid">
            {/* Service Card 1 */}
            <div className="service-card light-green">
              <div className="card-top">
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
              <div className="card-body">
                <h3>Resume Analysis</h3>
                <p>Get instant AI feedback on your resume, with keyword optimization and ATS-readiness scoring.</p>
              </div>
              <div className="card-footer">
                <Link to="/login" className="learn-more">
                  Learn more <span className="arrow-circle">➔</span>
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="service-card light-green">
              <div className="card-top">
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
              </div>
              <div className="card-body">
                <h3>Mock Interviews</h3>
                <p>Practice real interview questions with AI-driven simulations tailored to your target role.</p>
              </div>
              <div className="card-footer">
                <Link to="/login" className="learn-more">
                  Learn more <span className="arrow-circle">➔</span>
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="service-card light-green">
              <div className="card-top">
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
              </div>
              <div className="card-body">
                <h3>Skill Gap Analysis</h3>
                <p>Identify where you stand against job requirements and get a tailored roadmap to close the gaps.</p>
              </div>
              <div className="card-footer">
                <Link to="/login" className="learn-more">
                  Learn more <span className="arrow-circle">➔</span>
                </Link>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="service-card light-green">
              <div className="card-top">
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
              </div>
              <div className="card-body">
                <h3>Interview Coaching</h3>
                <p>Receive real-time coaching on tone, clarity, and confidence to nail your next interview.</p>
              </div>
              <div className="card-footer">
                <Link to="/login" className="learn-more">
                  Learn more <span className="arrow-circle">➔</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner-section">
        <div className="cta-banner-container">
          <div className="cta-content">
            <h2>Let's Get You Interview Ready</h2>
            <p>Start practicing today with AI-powered mock interviews, resume analysis, and a personalized roadmap to land your next role.</p>
            <button className="cta-btn" onClick={() => navigate('/register')}>
              Try it free <span className="arrow-circle">➔</span>
            </button>
          </div>
          <div className="cta-visual">
            <div className="lightbulb-graphic">
              <div className="lightbulb-glow"></div>
              <div className="lightbulb-icon">💡</div>
              <div className="gear-icon gear-1">⚙️</div>
              <div className="gear-icon gear-2">⚙️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {/* <section className="case-studies-section" id="use-cases">
        <div className="case-studies-container">
          <div className="section-header-inline">
            <div>
              <span className="badge">CASE STUDY</span>
              <h2>Real Results from Real Clients</h2>
            </div>
            <p className="section-desc">Explore how we've helped candidates & businesses achieve measurable growth.</p>
          </div>

          <div className="case-cards-wrapper">
            <div className="case-card">
              <div className="card-header-row">
                <span className="case-icon">🛒</span>
                <h4>E-commerce Brand</h4>
              </div>
              <div className="case-stat">+180%</div>
              <p className="case-detail">Increase in organic profile traffic within 6 months.</p>
              <Link to="/login" className="case-link">
                Learn more <span className="green-arrow">➔</span>
              </Link>
            </div>

            <div className="case-card">
              <div className="card-header-row">
                <span className="case-icon">☁️</span>
                <h4>SaaS Company</h4>
              </div>
              <div className="case-stat">+250%</div>
              <p className="case-detail">Boost in qualified interview calls through optimized profile.</p>
              <Link to="/login" className="case-link">
                Learn more <span className="green-arrow">➔</span>
              </Link>
            </div>

            <div className="case-card">
              <div className="card-header-row">
                <span className="case-icon">🏬</span>
                <h4>Retail Business</h4>
              </div>
              <div className="case-stat">+120%</div>
              <p className="case-detail">Revenue growth with automated career roadmap planning.</p>
              <Link to="/login" className="case-link">
                Learn more <span className="green-arrow">➔</span>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Bottom CTA bar */}
      {/* <section className="bottom-cta-section">
        <div className="bottom-cta-container">
          <div className="bottom-cta-info">
            <div className="icon-box">🚀</div>
            <div>
              <h4>Ready to take your digital presence to the next level?</h4>
              <p>Partner with WizardZ and unlock your career potential.</p>
            </div>
          </div>
          <button className="btn-dark" onClick={() => navigate('/login')}>
            Let's Talk <span className="green-arrow">➔</span>
          </button>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="footer" id="about">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo-icon">
              <span className="logo-spark">✨</span>
            </div>
            <span className="brand-name">AI InterviewPrep</span>
          </div>

          {/* <div className="footer-links">
            <a href="#about">About us</a>
            <a href="#services">Services</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
          </div> */}

          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="x(Twitter)">X</a>
            <a href="#" aria-label="Github">G</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
