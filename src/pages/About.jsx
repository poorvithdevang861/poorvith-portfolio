import { Link } from 'react-router-dom'
import '../App.css'
import profileImage from '../../profile.png'
import cvPdf from '../../PoorvithDevang(3rd- Year).pdf'

function About() {
  const whatsappLink = `https://wa.me/918618488332?text=${encodeURIComponent(
    'Hi there, Can we talk to project',
  )}`
  const cvLink = cvPdf

  return (
    <div className="app-root bg-main">
      <div className="page-shell retro-grid">
        <header className="top-bar">
          <div className="brand-wrap">
            <div className="brand-icon">
              <span className="material-symbols-outlined icon-bold">terminal</span>
            </div>
            <h2 className="brand-title">POORVITH DEVANG</h2>
          </div>
          <nav className="top-nav">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}>HOME</Link>
            <Link to="/work" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}>WORK</Link>
            <Link to="/blog" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}>BLOG</Link>
            <Link to="/about" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}>ABOUT</Link>
            <button
              className="contact-btn"
              type="button"
              onClick={() => window.open(whatsappLink, '_blank', 'noopener,noreferrer')}
            >
              CONTACT
            </button>
          </nav>
        </header>

        <main className="content-main work-main">
          <section className="section-block work-hero">
            <div className="section-wrap">
              <div className="editorial-line" />
              <div className="about-hero-grid">
                <div className="about-portrait-wrap">
                  <img
                    src={profileImage}
                    alt="Portrait of Poorvith Devang"
                    className="about-portrait"
                  />
                </div>
                <div className="about-intro">
                  <h2>
                    ABOUT <span>ME</span>
                  </h2>
                  <p>
                    I am Poorvith Devang, a UI/UX-focused designer and frontend developer blending
                    product thinking with execution. I help teams turn rough ideas into elegant,
                    production-ready digital experiences.
                  </p>
                  <p>
                    My process is grounded in research, rapid prototyping, and clean component
                    architecture so products are not only visually strong, but also practical and
                    scalable.
                  </p>
                  <div className="about-meta">
                    <div>
                      <strong>Location</strong>
                      <span>Bangalore, India</span>
                    </div>
                    <div>
                      <strong>Primary Focus</strong>
                      <span>Product UI, UX Systems, Frontend</span>
                    </div>
                    <div>
                      <strong>Availability</strong>
                      <span>Open for freelance and collaborations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-block">
            <div className="section-wrap about-grid">
              <article className="glass-card about-card">
                <span className="work-tag">PROFILE</span>
                <h3>Designer + Developer</h3>
                <p>
                  I bridge UI/UX and frontend to ensure ideas ship exactly as intended, from concept
                  frames to production-ready interfaces.
                </p>
              </article>
              <article className="glass-card about-card">
                <span className="work-tag">EXPERIENCE</span>
                <h3>3+ Years Working on Projects</h3>
                <p>
                  Worked with a clients on design systems, conversion-focused
                  landing pages, and product UX improvements for their businesses.
                </p>
              </article>
              <article className="glass-card about-card">
                <span className="work-tag">TOOLSTACK</span>
                <h3>Figma, React, Frontend Systems</h3>
                <p>
                  Strong in structured workflows, rapid prototyping, and scalable component-driven
                  architecture for modern web experiences.
                </p>
              </article>
            </div>
          </section>

          <section className="section-block">
            <div className="section-wrap">
              <div className="section-heading">
                <div className="editorial-line" />
                <h2>
                  TECH <span>STACK</span>
                </h2>
                <p>
                  Tools and technologies I use to design, prototype, and ship high-performance web
                  products.
                </p>
              </div>
              <div className="stack-chip-wrap">
                <span>FIGMA</span>
                <span>FRAMER</span>
                <span>REACT</span>
                <span>NEXT.JS</span>
                <span>TAILWIND CSS</span>
                <span>TYPESCRIPT</span>
                <span>JAVASCRIPT</span>
                <span>GSAP</span>
                <span>THREE.JS</span>
                <span>GIT & GITHUB</span>
              </div>
            </div>
          </section>

          <section className="section-block">
            <div className="section-wrap">
              <div className="section-heading">
                <div className="editorial-line" />
                <h2>
                  CAREER <span>TIMELINE</span>
                </h2>
                <p>Snapshots of my design and development journey.</p>
              </div>
              <div className="timeline-list">
                <article className="glass-card timeline-item">
                  <span className="work-tag">2025 - PRESENT</span>
                  <h3>Freelance Product Designer & Frontend Developer</h3>
                  <p>
                    Delivering end-to-end website and product interface solutions for startups and
                    creators, from UX strategy to polished implementation.
                  </p>
                </article>
                <article className="glass-card timeline-item">
                  <span className="work-tag">2023 - 2025</span>
                  <h3>UI/UX + Frontend Projects</h3>
                  <p>
                    Built responsive landing pages, component libraries, and design systems with a
                    strong focus on conversion and performance.
                  </p>
                </article>
                <article className="glass-card timeline-item">
                  <span className="work-tag">FOUNDATION</span>
                  <h3>Computer Science + Design Background</h3>
                  <p>
                    Combined technical engineering fundamentals with design thinking to create
                    practical, user-centered digital products.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="section-block">
            <div className="section-wrap">
              <div className="section-heading">
                <div className="editorial-line" />
                <h2>
                  PROJECT <span>HIGHLIGHTS</span>
                </h2>
                <p>Explore selected design and code work from my profiles.</p>
              </div>
              <div className="about-grid">
                <article className="glass-card about-card">
                  <span className="work-tag">DESIGN WORK</span>
                  <h3>Dribbble Portfolio</h3>
                  <p>
                    UI explorations, premium landing concepts, and visual systems showcasing my
                    product design style.
                  </p>
                  <a
                    className="secondary-btn about-link-btn"
                    href="https://dribbble.com/poorvith-devang/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW DRIBBBLE
                  </a>
                </article>
                <article className="glass-card about-card">
                  <span className="work-tag">CODE WORK</span>
                  <h3>GitHub Projects</h3>
                  <p>
                    Personal and academic repositories covering web apps, C projects, and technical
                    experimentation.
                  </p>
                  <a
                    className="secondary-btn about-link-btn"
                    href="https://github.com/poorvithdevang861"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW GITHUB
                  </a>
                </article>
                <article className="glass-card about-card">
                  <span className="work-tag">NETWORK</span>
                  <h3>LinkedIn Presence</h3>
                  <p>
                    Professional profile with background, focus areas, and collaboration details for
                    projects and opportunities.
                  </p>
                  <a
                    className="secondary-btn about-link-btn"
                    href="https://www.linkedin.com/in/poorvith-devang-5832691aa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW LINKEDIN
                  </a>
                </article>
              </div>
            </div>
          </section>

          <section className="section-block">
            <div className="section-wrap cta-wrap">
              <div className="cta-pattern" />
              <h2>LET'S BUILD SOMETHING BOLD</h2>
              <p>
                If you have a product idea, redesign requirement, or frontend challenge, I can help
                shape it from concept to launch.
              </p>
              <div className="cta-actions">
                <button
                  type="button"
                  onClick={() => window.open(whatsappLink, '_blank', 'noopener,noreferrer')}
                >
                  START A CONVERSATION
                </button>
                <a
                  className="cv-btn"
                  href={cvLink}
                  download="Poorvith-Devang-CV.pdf"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer-bar">
          <div className="footer-wrap">
            <div className="footer-brand">
              <div className="brand-icon small">
                <span className="material-symbols-outlined icon-bold small-icon">terminal</span>
              </div>
              <span>POORVITH DEVANG</span>
            </div>
            <div className="footer-links">
              <a
                href="https://www.linkedin.com/in/poorvith-devang-5832691aa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
              <a
                href="https://dribbble.com/poorvith-devang/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DRIBBBLE
              </a>
              <a
                href="https://github.com/poorvithdevang861"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
            </div>
            <p>© 2025 Poorvith Devang - ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default About
