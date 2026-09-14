import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';

const audiences = [
  { to: '/government', img: 'government-leaders.jpg', alt: 'Government leaders', lines: ['GOVERNMENT', 'LEADERS'] },
  { to: '/ses', img: 'ses-leaders.jpg', alt: 'SES leaders and candidates', lines: ['SES LEADERS', 'AND CANDIDATES'] },
  { to: '/military', img: 'military-leaders.jpg', alt: 'Military leaders', lines: ['MILITARY', 'LEADERS'] },
  { to: '/corporate', img: 'corporate-executives.jpg', alt: 'Corporate executives', lines: ['CORPORATE', 'EXECUTIVES'] },
];

const services = [
  { lines: ['JOB SEARCH', 'STRATEGY'], text: 'Target the right opportunities and build visibility.' },
  { lines: ['EXECUTIVE', 'POSITIONING'], text: 'Define and communicate your executive value.' },
  { lines: ['PERSONAL', 'BRANDING'], text: 'Strengthen your resume, LinkedIn, and leadership presence.' },
  { lines: ['INTERVIEW', 'PREP'], text: 'Communicate your value with confidence.' },
  { lines: ['CAREER', 'COACHING'], text: 'Gain clarity and move forward with purpose.' },
];

export default function Home() {
  return (
    <Layout>
      {/* ===== HERO (client template) ===== */}
      <section className="hero">
        {/* Phone layout: Amy's portrait and the big butterfly sit above the headline so nothing covers her face */}
        <div className="hero-mobile" aria-hidden="true">
          <img className="hero-mobile-amy" src="/assets/images/amy-mobile.jpg" alt="" />
          <img className="hero-mobile-butterfly" src="/assets/images/landing/ses-butterfly-hero.png" alt="" />
        </div>

        <div className="container hero-inner">
          <h1 className="hero-title">
            <span className="line-white">EVERYONE HAS AI.</span>
            <span className="line-orange">NOT EVERYONE</span>
            <span className="line-orange">HAS A STRATEGY.</span>
          </h1>
          <span className="hero-rule" aria-hidden="true"></span>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="intro">
        <div className="container">
          <h2 className="intro-title">
            You&rsquo;ve built the experience. <span className="accent">Let&rsquo;s build what&rsquo;s next.</span>
          </h2>
          <p className="intro-copy">
            I help leaders and professionals translate experience into executive value,{' '}<br />
            stand out from the noise, and secure opportunities that align{' '}<br />
            with impact and achievement.
          </p>
        </div>
      </section>

      {/* ===== WHO I HELP ===== */}
      <section className="who" id="who">
        <div className="container">
          <h2 className="section-heading"><span>WHO I HELP</span></h2>
          <div className="who-grid">
            {audiences.map(a => (
              <Link className="who-card" to={a.to} key={a.to}>
                <div className="who-img"><img src={`/assets/images/${a.img}`} alt={a.alt} /></div>
                <div className="who-caption">
                  <h3>{a.lines[0]}<br />{a.lines[1]}</h3>
                  <span className="dash"></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services">
        <div className="container">
          <h2 className="section-heading"><span>SERVICES</span></h2>
          <div className="services-grid">
            {services.map(s => (
              <article className="service" key={s.lines[0] + s.lines[1]}>
                <h3>{s.lines[0]}<br />{s.lines[1]}</h3>
                <span className="dash"></span>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
          <div className="services-cta">
            <Link className="btn btn-orange btn-wide" to="/services">
              FOR A FULL LIST OF SERVICES CLICK HERE
              <svg className="arrow" viewBox="0 0 40 16" aria-hidden="true"><path d="M0 8h34M27 1l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
