import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

const workAreas = [
  { number: "01", title: "Digital products", text: "Clear, useful experiences that help people get things done." },
  { number: "02", title: "Frontend engineering", text: "Fast, accessible interfaces built with care and attention to detail." },
  { number: "03", title: "Creative systems", text: "A thoughtful visual language that makes good ideas easier to understand." },
  { number: "04", title: "Open collaboration", text: "Curious teams, honest communication, and work that ships." },
];

const projects = [
  { number: "01", title: "CarbonSight", text: "AR carbon footprint mapping with blockchain verification.", url: "https://github.com/alexajunior/CarbonSight" },
  { number: "02", title: "Baseline Refactor Assistant", text: "A developer tool for making codebase refactors clearer and more reliable.", url: "https://github.com/alexajunior/baseline-refactor-assistant" },
  { number: "03", title: "NurseFlow", text: "AI for busy nurses, designed around practical clinical workflows.", url: "https://github.com/alexajunior/NurseFlow" },
  { number: "04", title: "AeroHealth", text: "Mobile and web experiences for accessible health technology.", url: "https://github.com/alexajunior/AeroHealth-Mobile-App" },
];

const organizations = [
  { name: "Tableau", logo: "https://www.google.com/s2/favicons?domain=tableau.com&sz=128" },
  { name: "World Bank Group", logo: "https://www.google.com/s2/favicons?domain=worldbank.org&sz=128" },
  { name: "PyCon DE", logo: "https://www.google.com/s2/favicons?domain=pycon.de&sz=128" },
  { name: "EuroPython", logo: "https://www.google.com/s2/favicons?domain=europython.eu&sz=128" },
  { name: "NASA Space Apps", logo: "https://www.google.com/s2/favicons?domain=spaceappschallenge.org&sz=128" },
  { name: "McKinsey.org", logo: "https://www.google.com/s2/favicons?domain=mckinsey.org&sz=128" },
  { name: "Blue Ocean", logo: "https://www.google.com/s2/favicons?domain=blueoceanstrategy.com&sz=128" },
  { name: "Aspire Institute", logo: "https://www.google.com/s2/favicons?domain=aspireleaders.org&sz=128" },
  { name: "Harvard University", logo: "https://www.google.com/s2/favicons?domain=harvard.edu&sz=128" },
  { name: "Royal Commonwealth Society", logo: "https://www.google.com/s2/favicons?domain=royalcwsociety.org&sz=128" },
  { name: "Forbes BLK", logo: "https://www.google.com/s2/favicons?domain=forbes.com&sz=128" },
  { name: "Notion", logo: "https://www.google.com/s2/favicons?domain=notion.so&sz=128" },
  { name: "Major League Hacking", logo: "https://www.google.com/s2/favicons?domain=mlh.io&sz=128" },
  { name: "Hacktoberfest", logo: "https://www.google.com/s2/favicons?domain=hacktoberfest.com&sz=128" },
  { name: "Adobe", logo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128" },
];

const faqs = [
  ["What does Alex work on?", "Alex works across frontend engineering, digital products, and thoughtful design systems."],
  ["Are you available for new opportunities?", "Yes. The best way to start a conversation is by email or LinkedIn."],
  ["Where can I see more work?", "Visit GitHub for code and experiments, or review the portfolio and certifications below."],
];

function IntroVideo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    const updateProgress = () => setProgress(video.duration ? video.currentTime / video.duration : 0);
    const setVideoDuration = () => setDuration(video.duration || 0);
    const syncVolume = () => setVolume(video.muted ? 0 : video.volume);
    video.volume = 1;
    video.muted = false;
    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadedmetadata", setVideoDuration);
    video.addEventListener("volumechange", syncVolume);
    video.addEventListener("ended", () => setPlaying(false));
    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadedmetadata", setVideoDuration);
      video.removeEventListener("volumechange", syncVolume);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.muted = false;
      video.volume = volume || 1;
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const seek = (event) => {
    const video = videoRef.current;
    if (video && duration) video.currentTime = Number(event.target.value) * duration;
  };

  const changeVolume = (event) => {
    const nextVolume = Number(event.target.value);
    setVolume(nextVolume);
    if (videoRef.current) {
      videoRef.current.muted = nextVolume === 0;
      videoRef.current.volume = nextVolume;
    }
  };

  return (
    <div className="video-player">
      <video ref={videoRef} controls={false} playsInline preload="metadata" poster="/intro-poster.png" aria-label="Alex A. Junior introductory video">
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video player.
      </video>
      <div className="video-controls" aria-label="Video controls">
        <button type="button" className="video-control-button" onClick={togglePlayback} aria-label={playing ? "Pause video" : "Play video"}>{playing ? "❚❚" : "▶"}</button>
        <input className="video-progress" type="range" min="0" max="1" step="0.001" value={progress} onChange={seek} aria-label="Video progress" />
        <button type="button" className="video-control-button" onClick={() => changeVolume({ target: { value: volume ? 0 : 1 } })} aria-label={volume ? "Mute video" : "Unmute video"}>{volume ? "🔊" : "🔇"}</button>
        <input className="video-volume" type="range" min="0" max="1" step="0.01" value={volume} onChange={changeVolume} aria-label="Video volume" />
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Alex A. Junior home">
            <span className="brand-prompt">&gt;_</span><span>Alex A. Junior</span><small>Software Developer</small>
          </a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span>{menuOpen ? "Close" : "Menu"}</span><span className="menu-lines"><i /><i /></span>
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
            <a href="#work" onClick={closeMenu}>My work</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#introductory-video" onClick={closeMenu}>Introductory video</a>
            <a href="#conferences" onClick={closeMenu}>Featured conferences</a>
            <a href="#about" onClick={closeMenu}>About Alex</a>
            <a href="#speaker" onClick={closeMenu}>Public Speaking</a>
            <a href="#blog" onClick={closeMenu}>Blog</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a className="nav-button" href="#contact" onClick={closeMenu}>Let&apos;s talk <Arrow /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="terminal-line"><span className="prompt">&gt;_</span> alex_a_junior();</div>
            <h1>Turning problems<br /><span>into possibilities.</span></h1>
            <p className="hero-lede">Alex A. Junior is a software developer and young innovator who builds technology that works where internet access is limited.</p>
            <div className="hero-actions">
              <a className="button button-green" href="#work">Explore the work <Arrow /></a>
              <a className="button button-green" href="/certifications.html" target="_blank" rel="noreferrer">See certifications <Arrow /></a>
            </div>
            <div className="hero-meta"><span>Available</span><span>Scroll to explore ↓</span></div>
          </div>
          <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>
          <img className="hero-portrait" src="/alex-reference-portrait.png" alt="Alex A. Junior" />
        </section>

        <section className="signal-strip" aria-label="Areas of focus">
          <div className="signal-track"><span>Code <b>✦</b></span><span>Design <b>✦</b></span><span>Ideas <b>✦</b></span><span>Impact <b>✦</b></span><span>Code <b>✦</b></span><span>Design <b>✦</b></span><span>Ideas <b>✦</b></span><span>Impact <b>✦</b></span></div>
        </section>

        <section className="organizations-strip" aria-label="Companies and organizations Alex has worked with">
          <div className="organizations-track">
            {["Worked with", ...organizations.map((organization) => organization.name), "Worked with", ...organizations.map((organization) => organization.name)].map((name, index) => {
              const organization = organizations.find((item) => item.name === name);
              return organization ? (
                <div className="organization-logo" key={`${name}-${index}`}>
                  <img src={organization.logo} alt="" loading="lazy" />
                  <span>{name}</span>
                </div>
              ) : (
                <span className="organizations-label" key={`${name}-${index}`}>{name}</span>
              );
            })}
          </div>
        </section>

        <section id="introductory-video" className="section video-section">
          <div className="container">
            <div className="section-kicker"><span>01</span><span>introductory_video();</span></div>
            <div className="split-heading"><h2>Meet Alex<br /><em>in motion.</em></h2><p>A short introduction to Alex&apos;s work, ideas, and the problems he is building to solve.</p></div>
            <div className="video-frame"><IntroVideo /></div>
          </div>
        </section>

        <section id="conferences" className="section conferences-section">
          <div className="container">
            <div className="section-kicker"><span>02</span><span>featured_conferences();</span></div>
            <div className="split-heading"><h2>Featured<br /><em>conferences.</em></h2><p>Selected conferences and global communities where Alex has shared ideas and joined the conversation.</p></div>
            <div className="conference-list">
              <div><span>01</span><strong>AWS re:Invent 2025</strong><em>Conference</em></div>
              <div><span>02</span><strong>Adobe Education Summit 2026</strong><em>Summit</em></div>
              <div><span>03</span><strong>GitHub Universe 2026</strong><em>Conference</em></div>
            </div>
          </div>
        </section>

        <section id="work" className="section section-dark">
          <div className="container">
            <div className="section-kicker"><span>03</span><span>my_work();</span></div>
            <div className="split-heading"><h2>Making the<br /><em>complex</em> clear.</h2><p>Good digital work earns attention by being useful first. These are the places where Alex brings curiosity, craft, and momentum.</p></div>
            <div className="work-grid">{workAreas.map((area) => <article className="work-card" key={area.number}><span className="card-number">{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><span className="card-arrow">↗</span></article>)}</div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-kicker"><span>04</span><span>projects();</span></div>
            <div className="split-heading"><h2>Things I&apos;ve<br /><em>made.</em></h2><p>Selected projects from Alex&apos;s GitHub — experiments and products built around real constraints.</p></div>
            <div className="projects-grid">{projects.map((project) => <a className="project-card" href={project.url} target="_blank" rel="noreferrer" key={project.title}><span className="card-number">{project.number}</span><h3>{project.title}</h3><p>{project.text}</p><span className="card-arrow">↗</span></a>)}</div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div className="section-kicker"><span>05</span><span>about_alex();</span></div>
            <div className="about-content"><p className="terminal-line"><span className="prompt">&gt;_</span> who_is_alex?</p><h2>Building for the people <span>overlooked.</span></h2><p className="large-copy">Alex is an innovator who builds technology that works where internet access is limited</p><p className="body-copy">Primarily with offline-first tools that help underserved communities in West Africa access climate data and education without reliable connectivity.</p><p className="body-copy">As founder of CarbonSight, he&apos;s shipped a carbon footprint tracker used by 1000+ people in low-resource environments, presented at AWS re:Invent 2025 and the World Bank Summit 2026(Online), proving that constraints can drive better engineering outcomes.</p><p className="body-copy">He is a Google Cloud Innovator, Tableau Ambassador, and Silver Award winner in the Queen&apos;s Commonwealth Essay Competition.</p><p className="body-copy">Through Braveon AI, his multi-venture startup studio, he works across a global network of Leadership and Vocational Orientation centers — with one throughline: making sure builders from underserved communities aren&apos;t excluded from emerging technology.</p><p className="body-copy">Beyond his technical work, Alex mentors more than 200 young people helping them build careers in tech.</p><p className="body-copy">When he&apos;s not building, you&apos;ll find him with a paper making art.</p><div className="stats"><div><strong>1,000+</strong><span>CarbonSight users</span></div><div><strong>200+</strong><span>Young people mentored</span></div><div><strong>3</strong><span>Featured conferences</span></div></div></div>
          </div>
        </section>

        <section id="speaker" className="section speaker-section">
          <div className="container speaker-grid">
            <div className="section-kicker"><span>06</span><span>featured_speaker();</span></div>
            <div className="speaker-content"><article className="speaker-card"><div className="speaker-card-label"><i /> Featured speaker</div><span className="speaker-card-type">Session</span><h2>Lessons from building tech in a low-connectivity community</h2><p>Most software assumes fast internet, cloud sync, and always-on connectivity. Alex A. Junior shares lessons from building CarbonSight, an offline-first carbon footprint tracker for low-connectivity communities—including architecture, data sync, conflict resolution, and the UX decisions that low-connectivity forces you to make.</p><div className="speaker-card-meta"><span>Speaker · Founder, Braveon AI</span><span>Building for communities with limited connectivity</span></div><a className="speaker-card-link" href="https://reg.githubuniverse.com/flow/github/universe26/attendee-portal/page/sessioncatalog/session/1775902696655001nnFo" target="_blank" rel="noreferrer">View Alex&apos;s session <Arrow /></a><strong className="speaker-stat">200+<small>YOUNG PEOPLE MENTORED</small></strong></article></div>
          </div>
        </section>

        <section id="certifications" className="section credentials-section">
          <div className="container">
            <div className="section-kicker"><span>07</span><span>experience_and_learning();</span></div>
            <div className="split-heading"><h2>Every project<br />leaves a <em>trace.</em></h2><p>Explore Alex&apos;s professional background and review the portfolio content directly in the certifications area.</p></div>
            <div className="credential-row"><span>Experience</span><strong>Professional background</strong><a href="#contact">Ask Alex <Arrow /></a></div>
            <div className="credential-row"><span>Certifications</span><strong>Portfolio and verified learning</strong><a className="view-only-link" href="/certifications.html" target="_blank" rel="noreferrer">View certifications <Arrow /></a></div>
          </div>
        </section>

        <section id="blog" className="section blog-section">
          <div className="container">
            <div className="section-kicker"><span>08</span><span>the_blog();</span></div>
            <div className="split-heading"><h2>Notes from<br /><em>the edge.</em></h2><p>Writing on offline-first technology, climate data, education, and building from underserved communities.</p></div>
            <div className="blog-card"><span className="card-number">COMING SOON</span><h3>Stories about making technology work everywhere.</h3><p>Alex&apos;s essays and field notes will appear here.</p><a className="text-link" href="mailto:alexjuniorantwi1@gmail.com">Email <Arrow /></a></div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container faq-grid"><div><div className="section-kicker"><span>09</span><span>frequently_asked();</span></div><h2>Questions,<br /><em>answered.</em></h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div>
        </section>

        <section id="contact" className="cta-section">
          <div className="container cta-inner"><p className="terminal-line"><span className="prompt">&gt;_</span> start_a_conversation();</p><h2>Have an idea?<br /><span>Let&apos;s make it real.</span></h2><div className="cta-actions"><a className="button button-green" href="mailto:alexjuniorantwi1@gmail.com">Email <Arrow /></a><a className="button button-outline" href="https://calendly.com/alexjuniorantwi1" target="_blank" rel="noreferrer">Book a call <Arrow /></a></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><a className="brand" href="#top"><span className="brand-prompt">&gt;_</span><span>Alex A. Junior</span></a><div className="footer-links"><a href="https://www.linkedin.com/in/alexajuniorr">On LinkedIn: Alex A. Junior</a><a href="https://github.com/alexajunior" target="_blank" rel="noreferrer">GitHub</a><a href="https://x.com/alexajuniorr" target="_blank" rel="noreferrer">X / Twitter</a></div><span className="footer-status"><i /> Available</span></div><div className="container footer-bottom"><span>© 2026 Alex A. Junior</span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}

export default App;
