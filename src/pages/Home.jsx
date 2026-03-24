import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import * as THREE from 'three'
import '../App.css'
import profileImage from '../../profile.png'
import cvPdf from '../../PoorvithDevang(3rd- Year).pdf'

function Home() {
  const canvasRef = useRef(null)
  const featuredWorkImage = (file) => `${import.meta.env.BASE_URL}work-images/${file}`
  const cvLink = cvPdf
  const whatsappLink = `https://wa.me/918618488332?text=${encodeURIComponent(
    'Hi there, Can we talk to project',
  )}`

  useEffect(() => {
    const container = canvasRef.current
    if (!container) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    const particlesCount = 3000
    const posArray = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i += 1) {
      posArray[i] = (Math.random() - 0.5) * 15
    }

    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.012,
      color: '#e90628',
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    })
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    const gridHelper = new THREE.GridHelper(30, 60, 0xe90628, 0x111111)
    gridHelper.position.y = -3
    gridHelper.material.transparent = true
    gridHelper.material.opacity = 0.15
    scene.add(gridHelper)

    camera.position.z = 4
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth - 0.5
      mouseY = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('mousemove', handleMouseMove)

    let scrollY = window.scrollY
    const handleScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)

    let frameId
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const time = Date.now() * 0.00015
      particlesMesh.rotation.y = time * 0.2
      gridHelper.position.z = (time * 5) % 1
      particlesMesh.position.x += (mouseX * 0.3 - particlesMesh.position.x) * 0.05
      particlesMesh.position.y += (-mouseY * 0.3 - particlesMesh.position.y) * 0.05

      const scrollTarget = scrollY * 0.002
      camera.position.y = -scrollTarget * 0.4
      camera.lookAt(0, -scrollTarget * 0.4, 0)
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="app-root bg-main">
      <div id="canvas-container" ref={canvasRef} />
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

        <main className="content-main">
          <section className="hero-section">
            <div className="hero-wrap">
              <div className="image-col">
                <div className="portrait-frame">
                  <img
                    alt="Professional portrait of Poorvith Devang"
                    className="portrait-image"
                    src={profileImage}
                  />
                  <div className="portrait-overlay" />
                  <div className="portrait-accent" />
                  <div className="portrait-tag">POORVITH DEVANG // BANGALORE, INDIA</div>
                </div>
              </div>

              <div className="text-col">
                <div className="status-pill">CORE SYSTEM: ONLINE // AVAILABLE FOR WORK</div>
                <h1 className="hero-title">
                  POORVITH
                  <br />
                  <span>DEVANG</span>
                </h1>
                <p className="hero-copy">
                  I&apos;m a UI/UX Designer and Developer who loves doing things that craft high end
                  digital experiences.
                </p>
                <div className="hero-actions">
                  <a
                    className="primary-btn"
                    href={cvLink}
                    download="Poorvith-Devang-CV.pdf"
                  >
                    <span>DOWNLOAD CV</span>
                    <span className="material-symbols-outlined">north_east</span>
                  </a>
                  <Link className="secondary-btn about-link-btn" to="/about">
                    ABOUT ME
                  </Link>
                </div>
              </div>
            </div>
            <div className="scroll-indicator">
              <div />
            </div>
          </section>

          <section className="section-block">
            <div className="section-wrap">
              <div className="section-heading">
                <div className="editorial-line" />
                <h2>
                  EXPERTISE <span>!!</span>
                </h2>
                <p>See My Skills Over the Years.</p>
              </div>
              <div className="cards-grid">
                <div className="glass-card">
                  <div className="card-icon">
                    <span className="material-symbols-outlined">grid_view</span>
                  </div>
                  <h3>UI/UX Design</h3>
                  <p>
                  User-centric interfaces that combine
aesthetics with flawless functionality.
Wireframing, prototyping, and design
systems.
                  </p>
                  <ul className="card-points">
                    <li>DESIGN SYSTEMS</li>
                    <li>PROTOTYPING</li>
                  </ul>
                </div>
                <div className="glass-card">
                  <div className="card-icon">
                    <span className="material-symbols-outlined">developer_mode_tv</span>
                  </div>
                  <h3>Web Development</h3>
                  <p>
                  Building responsive, high-performance
web applications using modern
frameworks and clean, maintainable code.
                  </p>
                  <ul className="card-points">
                    <li>REACT / NEXT.JS</li>
                    <li>TAILWIND CSS</li>
                  </ul>
                </div>
                <div className="glass-card">
                  <div className="card-icon">
                    <span className="material-symbols-outlined">token</span>
                  </div>
                  <h3>Research</h3>
                  <p>
                    Insight-driven exploration of user behavior, pain points, and product patterns to
                    guide smarter UX decisions and measurable design outcomes.
                  </p>
                  <ul className="card-points">
                    <li>USER RESEARCH</li>
                    <li>DATA ANALYSIS</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="section-block">
            <div className="section-wrap">
              <div className="featured-head">
                <div>
                  <h2>
                    FEATURED <span>WORK</span>
                  </h2>
                  <p>Selection of Projects I've Worked On.</p>
                </div>
                <Link to="/work">
                  <span>VIEW ALL</span>
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </Link>
              </div>
              <div className="projects-grid">
                <article className="project-card">
                  <a
                    href="https://dribbble.com/shots/27206981-Nexora-SaaS-Landing-Page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="project-bg"
                      style={{
                        backgroundImage:
                          `linear-gradient(to top, rgba(14,14,14,0.95), transparent), url('${featuredWorkImage('nexora.webp')}')`,
                      }}
                    >
                      <div className="dot-overlay" />
                    </div>
                    <div className="project-content">
                      <span>RECENT SHOT / 01</span>
                      <h3>NEXORA SAAS LANDING PAGE</h3>
                      <div className="underline" />
                    </div>
                  </a>
                </article>
                <article className="project-card">
                  <a
                    href="https://dribbble.com/shots/27204484-Modern-Login-UI-for-Vhigu-Web-Portal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="project-bg"
                      style={{
                        backgroundImage:
                          `linear-gradient(to top, rgba(14,14,14,0.95), transparent), url('${featuredWorkImage('modern-login-vhigu.webp')}')`,
                      }}
                    >
                      <div className="dot-overlay" />
                    </div>
                    <div className="project-content">
                      <span>RECENT SHOT / 02</span>
                      <h3>MODERN LOGIN UI FOR VHIGU WEB PORTAL</h3>
                      <div className="underline" />
                    </div>
                  </a>
                </article>
              </div>
            </div>
          </section>

          <section className="section-block">
            <div className="section-wrap cta-wrap">
              <div className="cta-pattern" />
              <h2>HAVE A PROJECT IN MIND?</h2>
              <p>
                Let&apos;s collaborate to build something extraordinary. I&apos;m currently accepting
                new projects and freelance opportunities.
              </p>
              <button
                type="button"
                onClick={() => window.open(whatsappLink, '_blank', 'noopener,noreferrer')}
              >
                START A CONVERSATION
              </button>
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

export default Home
