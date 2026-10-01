import React, { useState } from "react";
import "./App.css";

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="utility-bar">
        <div className="container utility-content">
          <span className="utility-mark" aria-hidden="true">✦</span>
          <span>A personal space for thoughtful work</span>
          <a href="#contact">Say hello <Arrow /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu}>
            <span className="brand-mark">AAJ</span>
            <span>Alex A. Junior</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span className="menu-lines" aria-hidden="true"><i /><i /></span>
          </button>
          <nav id="main-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#certifications" onClick={closeMenu}>Certifications</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <Arrow /></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">Engineer &amp; digital builder</p>
            <h1>I make useful things <em>feel obvious.</em></h1>
            <p className="hero-intro">
              I&apos;m Alex A. Junior, a digital builder focused on clear ideas, warm
              interfaces, and work that leaves people better off.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#experience">View experience <Arrow /></a>
              <a className="portfolio-download" href="/Alex-A-Junior-portfolio.pdf" target="_blank" rel="noreferrer">Download portfolio <Arrow /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration">
            <div className="sun-shape" />
            <div className="arch-shape" />
            <div className="hero-stamp">GOOD<br />WORK<br /><span>↓</span></div>
            <div className="hero-caption">alexajunior.me<br />Open to opportunities</div>
          </div>
        </section>

        <div className="ticker" aria-label="Areas of focus">
          <div className="ticker-track">
            <span>Research <b>✦</b></span><span>Strategy <b>✦</b></span><span>Design <b>✦</b></span><span>Development <b>✦</b></span>
            <span>Research <b>✦</b></span><span>Strategy <b>✦</b></span><span>Design <b>✦</b></span><span>Development <b>✦</b></span>
          </div>
        </div>

        <section id="experience" className="profile-section container section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Professional background</p>
              <h2>Experience</h2>
            </div>
            <p className="section-aside">A timeline of roles, responsibilities,<br />and practical experience.</p>
          </div>
          <div className="empty-profile-section">
            <span className="empty-profile-number">01</span>
            <p>Experience details will be added here.</p>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container about-layout section-pad">
            <div className="about-label"><span>02</span><span>About me</span></div>
            <div className="about-copy">
              <p className="eyebrow">A little context</p>
              <h2>Curious by nature.<br /><em>Useful by design.</em></h2>
              <p className="large-copy">I believe the best work starts with listening. I bring together strategy, design, and technology to turn good questions into clear, considered experiences.</p>
              <div className="about-details">
                <div><strong>Currently</strong><span>Making digital products kinder</span></div>
                <div><strong>Previously</strong><span>Helping ambitious teams grow</span></div>
                <div><strong>Always</strong><span>Learning something new</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="certifications-section container section-pad">
          <div className="section-heading notes-heading">
            <div><p className="eyebrow">Professional credentials</p><h2>Certifications</h2></div>
            <p className="section-aside">Verified learning, qualifications,<br />and credentials.</p>
          </div>
          <div className="empty-profile-section">
            <span className="empty-profile-number">02</span>
            <p>Certification details will be added here.</p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-inner">
            <p className="eyebrow">Have a good question?</p>
            <h2>Let&apos;s make something<br /><em>worth remembering.</em></h2>
            <a className="button button-light" href="mailto:alexjuniorantwi1@gmail.com">alexjuniorantwi1@gmail.com <Arrow /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <a className="brand brand-light" href="#top"><span className="brand-mark">AAJ</span><span>Alex A. Junior</span></a>
          <div className="footer-links"><a href="#experience">Experience</a><a href="#certifications">Certifications</a><a href="#contact">Contact</a></div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/alexajunior" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/alexajunior" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://x.com/alexajuniorr" target="_blank" rel="noreferrer">X / Twitter</a>
          </div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Alex A. Junior</span><span>alexajunior.me</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

export default App;
