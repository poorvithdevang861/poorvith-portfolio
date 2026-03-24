import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const projects = [
  {
    tag: 'RECENT SHOT / 01',
    title: 'NEXORA SAAS LANDING PAGE',
    desc: 'SaaS landing exploration focused on premium UI visuals and conversion-oriented structure.',
    link: 'https://dribbble.com/shots/27206981-Nexora-SaaS-Landing-Page',
    image: '/work-images/nexora.webp',
  },
  {
    tag: 'RECENT SHOT / 02',
    title: 'MODERN LOGIN UI FOR VHIGU WEB PORTAL',
    desc: 'Modern authentication experience emphasizing clarity, trust, and polished interaction.',
    link: 'https://dribbble.com/shots/27204484-Modern-Login-UI-for-Vhigu-Web-Portal',
    image: '/work-images/modern-login-vhigu.webp',
  },
  {
    tag: 'RECENT SHOT / 03',
    title: 'PREMIUM LANDING PORTAL FOR EMPLOYEES',
    desc: 'Employee-focused landing concept balancing hierarchy, navigation, and clean readability.',
    link: 'https://dribbble.com/shots/27203406-Premium-Landing-Portal-for-Employees',
    image: '/work-images/premium-landing-employees.webp',
  },
  {
    tag: 'RECENT SHOT / 04',
    title: 'PREMIUM ALBUM DESIGN',
    desc: 'Editorial and visual composition work crafted for premium album presentation.',
    link: 'https://dribbble.com/shots/27203367-Premium-Album-Design',
    image: '/work-images/premium-album.webp',
  },
  {
    tag: 'RECENT SHOT / 05',
    title: 'PREMIUM LOGO DESIGNING',
    desc: 'Brand identity exploration with logo direction for premium-focused positioning.',
    link: 'https://dribbble.com/shots/27203103-PREMIUM-LOGO-DESIGNING',
    image: '/work-images/premium-logo.webp',
  },
  {
    tag: 'RECENT SHOT / 06',
    title: 'PREMIUM DESIGN FOR LANDING PAGE',
    desc: 'Landing page concept focused on sharp typography, spacing, and visual impact.',
    link: 'https://dribbble.com/shots/27198586-Premium-Design-for-Landing-Page',
    image: '/work-images/premium-landing-design.webp',
  },
]

function Work() {
  const whatsappLink = `https://wa.me/918618488332?text=${encodeURIComponent(
    'Hi there, Can we talk to project',
  )}`

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

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
              <div className="section-heading work-heading">
                <div className="editorial-line" />
                <h2>
                  MY <span>WORKS</span>
                </h2>
                <p>
                  A focused collection of projects where product strategy, visual craft, and frontend
                  meet.
                </p>
              </div>
            </div>
          </section>

          <section className="section-block work-cards-section">
            <div className="section-wrap work-grid">
              {projects.map((project) => (
                <article className="glass-card work-item" key={project.title}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-shot">
                    <img src={project.image} alt={project.title} />
                  </a>
                  <span className="work-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <button
                    type="button"
                    className="secondary-btn work-btn"
                    onClick={() => window.open(whatsappLink, '_blank', 'noopener,noreferrer')}
                  >
                    DISCUSS THIS PROJECT
                  </button>
                  <a
                    className="secondary-btn work-btn"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OPEN ON DRIBBBLE
                  </a>
                </article>
              ))}
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

export default Work
