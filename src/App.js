import React, { useState } from "react";
import "./App.css";

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

const workAreas = [
  { number: "01", title: "Digital products", text: "Clear, useful experiences that help people get things done." },
  { number: "02", title: "Frontend engineering", text: "Fast, accessible interfaces built with care and attention to detail." },
  { number: "03", title: "Creative systems", text: "A thoughtful visual language that makes good ideas easier to understand." },
  { number: "04", title: "Open collaboration", text: "Curious teams, honest communication, and work that ships." },
];

const faqs = [
  ["What does Alex work on?", "Alex works across frontend engineering, digital products, and thoughtful design systems."],
  ["Are you available for new opportunities?", "Yes. The best way to start a conversation is by email or LinkedIn."],
  ["Where can I see more work?", "Visit GitHub for code and experiments, or review the portfolio and certifications below."],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Alex A. Junior home">
            <span className="brand-prompt">&gt;_</span><span>Alex A. Junior</span>
          </a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span>{menuOpen ? "Close" : "Menu"}</span><span className="menu-lines"><i /><i /></span>
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
            <a href="#work" onClick={closeMenu}>The work</a>
            <a href="#about" onClick={closeMenu}>About Alex</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a className="nav-button" href="#contact" onClick={closeMenu}>Let&apos;s talk <Arrow /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="terminal-line"><span className="prompt">&gt;_</span> alexajunior.me();</div>
            <h1>Build clearly.<br /><span>Be remembered.</span></h1>
            <p className="hero-lede">Alex A. Junior is a digital builder making useful products, expressive interfaces, and ambitious ideas easier to experience.</p>
            <div className="hero-actions">
              <a className="button button-green" href="#work">Explore the work <Arrow /></a>
              <a className="text-link" href="#certifications">View certifications <Arrow /></a>
            </div>
            <div className="hero-meta"><span>Based in Ghana</span><span>Open to opportunities</span><span>Scroll to explore ↓</span></div>
          </div>
          <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>
        </section>

        <section className="signal-strip" aria-label="Areas of focus">
          <div className="signal-track"><span>Code <b>✦</b></span><span>Design <b>✦</b></span><span>Ideas <b>✦</b></span><span>Impact <b>✦</b></span><span>Code <b>✦</b></span><span>Design <b>✦</b></span><span>Ideas <b>✦</b></span><span>Impact <b>✦</b></span></div>
        </section>

        <section id="work" className="section section-dark">
          <div className="container">
            <div className="section-kicker"><span>01</span><span>the_work();</span></div>
            <div className="split-heading"><h2>Make the<br /><em>complex</em> clear.</h2><p>Good digital work earns attention by being useful first. These are the places where Alex brings curiosity, craft, and momentum.</p></div>
            <div className="work-grid">{workAreas.map((area) => <article className="work-card" key={area.number}><span className="card-number">{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><span className="card-arrow">↗</span></article>)}</div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div className="section-kicker"><span>02</span><span>about_alex();</span></div>
            <div className="about-content"><p className="terminal-line"><span className="prompt">&gt;_</span> who_is_alex?</p><h2>Building for the people <span>overlooked.</span></h2><p className="large-copy">I care about the moment an idea becomes understandable. My work sits between technology, design, and communication — turning rough questions into calm, capable experiences.</p><div className="stats"><div><strong>01</strong><span>Curious mind</span></div><div><strong>∞</strong><span>Things still to learn</span></div><div><strong>24/7</strong><span>Always thinking</span></div></div></div>
          </div>
        </section>

        <section id="certifications" className="section credentials-section">
          <div className="container">
            <div className="section-kicker"><span>03</span><span>experience_and_learning();</span></div>
            <div className="split-heading"><h2>Every project<br />leaves a <em>trace.</em></h2><p>Explore Alex&apos;s professional background and review the portfolio content directly in the certifications area.</p></div>
            <div className="credential-row"><span>Experience</span><strong>Professional background</strong><a href="#contact">Ask Alex <Arrow /></a></div>
            <div className="credential-row"><span>Certifications</span><strong>Portfolio and verified learning</strong><a href="#portfolio-document">View below <Arrow /></a></div>
            <div id="portfolio-document" className="portfolio-document">
              <div className="document-heading"><span>certifications.pdf</span><span>embedded_document</span></div>
              <iframe title="Alex A. Junior portfolio and certifications" src="/Alex-A-Junior-portfolio.pdf" />
            </div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container faq-grid"><div><div className="section-kicker"><span>04</span><span>frequently_asked();</span></div><h2>Questions,<br /><em>answered.</em></h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div>
        </section>

        <section id="contact" className="cta-section">
          <div className="container cta-inner"><p className="terminal-line"><span className="prompt">&gt;_</span> start_a_conversation();</p><h2>Have an idea?<br /><span>Let&apos;s make it real.</span></h2><a className="button button-green" href="mailto:alexjuniorantwi1@gmail.com">alexjuniorantwi1@gmail.com <Arrow /></a></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><a className="brand" href="#top"><span className="brand-prompt">&gt;_</span><span>Alex A. Junior</span></a><div className="footer-links"><a href="https://www.linkedin.com/in/alexajunior" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/alexajunior" target="_blank" rel="noreferrer">GitHub</a><a href="https://x.com/alexajuniorr" target="_blank" rel="noreferrer">X / Twitter</a></div><span className="footer-status"><i /> Available for good work</span></div><div className="container footer-bottom"><span>© 2026 Alex A. Junior</span><span>alexajunior.me</span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}

export default App;
