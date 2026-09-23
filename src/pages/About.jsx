import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { about } from '../data/about.js';
import { BOOKING_URL, social } from '../data/content.js';
const A = import.meta.env.BASE_URL;

export default function About() {
  return (
    <Layout title="About Amy">
      {/* ===== HERO ===== */}
      <section className="ab-hero">
        <div className="container ab-hero-grid">
          <div className="ab-hero-text" data-reveal>
            <p className="ab-eyebrow">ABOUT AMY</p>
            <h1 className="ab-title">STRATEGY BEHIND<br /><span className="o">EVERY TRANSITION.</span></h1>
            <p className="ab-lead">{about.bio}</p>
            <p className="ab-sig">Amy Sindicic, <small>BCC</small></p>
            <p className="ab-role">Executive Career Strategist</p>
            <div className="ab-actions">
              <a className="btn btn-orange btn-wide" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">BOOK A DISCOVERY CALL</a>
              <Link className="ab-link" to="/services">Explore services <i>&rarr;</i></Link>
            </div>
          </div>
          <div className="ab-hero-art" aria-hidden="true">
            <span className="ab-glow"></span>
            <img className="ab-portrait" src={A + 'assets/images/amy-cutout.png'} alt="" />
            <img className="ab-fly" src={A + 'assets/images/services/executive-positioning-butterfly.png'} alt="" />
          </div>
        </div>
      </section>

      {/* ===== WHY LEADERS TRUST AMY ===== */}
      <section className="ab-why">
        <div className="container">
          <h2 className="section-heading" data-reveal><span>WHY LEADERS TRUST AMY</span></h2>
          <p className="ab-intro" data-reveal>{about.intro}</p>
          <p className="ab-clarity" data-reveal>{about.clarity}</p>
          <p className="ab-approach" data-reveal>{about.approach}</p>

          <div className="ab-pillars">
            {about.pillars.map((p, i) => (
              <article className="ab-pillar" key={p.title} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="ab-pillar-num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU CAN EXPECT ===== */}
      <section className="ab-expect">
        <div className="container ab-expect-grid">
          <div data-reveal>
            <p className="ab-eyebrow">WORKING TOGETHER</p>
            <h2>WHAT YOU CAN EXPECT</h2>
            <p className="ab-expect-copy">Clear positioning, honest feedback, and a plan you can act on.</p>
          </div>
          <ul className="ab-expect-list">
            {about.expect.map((t, i) => (
              <li key={t} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="pk-check" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="ab-testimonials">
        <div className="container">
          <h2 className="section-heading" data-reveal><span>WHAT CLIENTS SAY</span></h2>
          <div className="ab-quotes">
            {about.testimonials.map((t, i) => (
              <figure className="ab-quote" key={t.name} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="ab-quote-mark" aria-hidden="true">&ldquo;</span>
                <blockquote>{t.quote}</blockquote>
                <figcaption>{t.name}</figcaption>
              </figure>
            ))}
          </div>
          <div className="ab-more" data-reveal>
            <a className="btn btn-orange btn-wide" href={social.upwork} target="_blank" rel="noopener noreferrer">MORE TESTIMONIALS</a>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="ab-cta">
        <div className="container" data-reveal>
          <h2>YOUR EXPERIENCE GOT YOU HERE.<br /><span className="o">YOUR STRATEGY DETERMINES WHAT COMES NEXT.</span></h2>
          <a className="btn btn-orange btn-wide" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">BOOK A DISCOVERY CALL</a>
        </div>
      </section>
    </Layout>
  );
}
