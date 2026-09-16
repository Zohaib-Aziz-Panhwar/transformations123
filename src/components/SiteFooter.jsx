import { Link } from 'react-router-dom';
import { contact } from '../data/content.js';
const A = import.meta.env.BASE_URL;

const Icon = {
  linkedin: <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />,
  instagram: <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />,
  youtube: <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />,
  upwork: <path d="M18.56 13.98c-1.13 0-2.19-.48-3.15-1.26l.24-1.1v-.04c.21-1.18.87-3.15 2.91-3.15 1.53 0 2.77 1.24 2.77 2.77 0 1.54-1.24 2.78-2.77 2.78zm0-8.36c-2.61 0-4.63 1.7-5.45 4.48-1.26-1.88-2.2-4.14-2.76-6.04H7.57v7.29c0 1.44-1.17 2.61-2.6 2.61-1.44 0-2.61-1.17-2.61-2.61V4.06H0v7.29c0 2.99 2.43 5.44 5.42 5.44s5.42-2.45 5.42-5.44V10.1c.54 1.14 1.21 2.28 2.02 3.3l-1.72 8.06h2.86l1.24-5.83c1.09.7 2.34 1.14 3.78 1.14 3.07 0 5.57-2.51 5.57-5.58 0-3.08-2.5-5.57-5.57-5.57z" />,
};

const social = [
  ['LinkedIn', 'linkedin'], ['Instagram', 'instagram'], ['YouTube', 'youtube'], ['Upwork', 'upwork'],
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="sf-grid">
          <div className="sf-brand">
            <Link className="sf-logo" to="/">
              <img src={A + "assets/images/logo-butterfly.png"} alt="" />
              <span>TRANSFORMATIONS<b>123</b></span>
            </Link>
            <p className="sf-tagline">Career Strategy for What&rsquo;s Next</p>
            <p className="sf-blurb">Helping government, SES, military and corporate leaders translate experience into executive value and secure what comes next.</p>
            <ul className="sf-social" aria-label="Social media">
              {social.map(([label, key]) => (
                <li key={key}><a href="#" aria-label={label} title={label} onClick={e => e.preventDefault()}><svg viewBox="0 0 24 24">{Icon[key]}</svg></a></li>
              ))}
            </ul>
          </div>

          <div className="sf-col">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Amy</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
            </ul>
          </div>

          <div className="sf-col">
            <h4>Who I Help</h4>
            <ul>
              <li><Link to="/government">Government Leaders</Link></li>
              <li><Link to="/ses">SES Leaders &amp; Candidates</Link></li>
              <li><Link to="/military">Military Leaders</Link></li>
              <li><Link to="/corporate">Corporate Executives</Link></li>
            </ul>
          </div>

          <div className="sf-col sf-contact">
            <h4>Contact</h4>
            <p className="sf-name">Amy Sindicic, <small>BCC</small></p>
            <p className="sf-role">Executive Career Strategist</p>
            <ul className="sf-contact-list">
              <li>
                <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8z" /></svg>
                <a href={`tel:${contact.phoneTel}`}>{contact.phone}</a>
              </li>
            </ul>
            <Link className="btn btn-orange sf-cta" to="/contact">BOOK A DISCOVERY CALL</Link>
          </div>
        </div>
      </div>

      <div className="sf-bottom">
        <div className="container sf-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Transformations123. All rights reserved.</p>
          <p className="sf-motto">Everyone has AI. <span>Not everyone has a strategy.</span></p>
          <ul className="sf-legal">
            <li><a href="#" onClick={e => e.preventDefault()}>Privacy Policy</a></li>
            <li><a href="#" onClick={e => e.preventDefault()}>Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
