import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { BOOKING_URL, OPM_PDF } from '../data/content.js';
import { SES_PACKAGE_URL } from '../data/services.js';
const A = import.meta.env.BASE_URL;

const items = [
  'Executive Discovery & Strategy Session',
  'SES Resume Tailored to the Target Announcement',
  'Executive Leadership Branding & Positioning',
  'ECQ Assessment & Strategy',
  'Five ECQ-Based CCAR Leadership Narratives, When Required',
  'Technical Qualification Narratives, When Required',
  'Executive Cover Letter',
  'LinkedIn Profile Optimization',
  'Enterprise-Level Accomplishment Development',
  'SES Interview Preparation Guide',
  'Executive Interview Coaching Session',
  'Three Rounds of Revisions',
  'Final Word & PDF Documents',
];

const Check = () => (
  <span className="pk-check" aria-hidden="true">
    <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </span>
);

export default function SesPackage() {
  return (
    <Layout title="Complete SES Application Package">
      <section className="pk-hero" style={{ backgroundImage: `url(${A}assets/images/landing/ses-package-hero.jpg)` }}>
        <div className="container pk-hero-inner">
          <Link className="pk-back" to="/ses">&larr; Back to SES Leaders</Link>
          <h1 className="pk-title">COMPLETE SES<br />APPLICATION PACKAGE</h1>
          <p className="pk-sub">Strategy, positioning, and comprehensive application support for Senior Executive Service candidates.</p>
          <span className="pk-price">$1,499</span>
        </div>
      </section>

      <section className="pk-intro">
        <div className="container" data-reveal>
          <p className="pk-lead">For senior federal leaders pursuing Senior Executive Service opportunities.</p>
          <p className="pk-copy">A comprehensive package designed to translate your leadership experience into a compelling, strategically positioned SES candidacy.</p>
        </div>
      </section>

      <section className="pk-list-wrap">
        <div className="container">
          <div className="pk-list" data-reveal>
            <h2>YOUR COMPLETE SES PACKAGE</h2>
            <ul>
              {items.map(t => <li key={t}><Check />{t}</li>)}
            </ul>
            <a className="btn btn-orange btn-wide pk-upwork" href={SES_PACKAGE_URL} target="_blank" rel="noopener noreferrer">VIEW DETAILS</a>
          </div>
        </div>
      </section>

      <section className="pk-outcome">
        <div className="container" data-reveal>
          <h2>THE OUTCOME</h2>
          <p>Present your executive leadership experience with the strategic depth, enterprise impact, and executive-level positioning expected of an SES candidate.</p>
          <div className="pk-links">
            <a className="pk-ghost" href={OPM_PDF} target="_blank" rel="noopener noreferrer">2025 OPM GUIDANCE</a>
            <Link className="pk-ghost" to="/ses-samples">SES RESUME AND ECQ SAMPLES</Link>
          </div>
          <a className="btn btn-orange btn-wide" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">DISCOVERY CALL</a>
        </div>
      </section>
    </Layout>
  );
}
