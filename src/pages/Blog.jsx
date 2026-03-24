import { Link } from 'react-router-dom'
import '../App.css'

function Blog() {
  const whatsappLink = `https://wa.me/918618488332?text=${encodeURIComponent(
    'Hi there, Can we talk to project',
  )}`

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
              <div className="section-heading blog-heading">
                <div className="editorial-line" />
                <h2>
                  BLOG <span>COMING SOON</span>
                </h2>
                <p>
                  I&apos;ll be publishing research-focused articles soon.
                </p>
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

export default Blog
