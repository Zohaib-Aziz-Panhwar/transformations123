import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { social, resourcePaths, APPLY_PATH } from '../data/content.js';
const A = import.meta.env.BASE_URL;

const links = [
  { to: '/', label: 'HOME', end: true },
  { to: '/about', label: 'ABOUT AMY' },
  { to: '/services', label: 'SERVICES' },
  { to: '/blog', label: 'BLOG' },
  { to: resourcePaths.resumesLibrary, label: 'RESUMES LIBRARY' },
  // Amy asked for this one in full; SES stays short so seven still fit.
  { to: resourcePaths.resumeSamples, label: 'EXECUTIVE RESUME SAMPLES' },
  { to: resourcePaths.sesSamples, label: 'SES SAMPLES' },
  // Amy keeps her reviews on Upwork, so this one leaves the site.
  { href: social.upwork, label: 'TESTIMONIALS' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" to="/" aria-label="Transformations123 home" onClick={close}>
          <span className="logo-mark" aria-hidden="true"><img src={A + "assets/images/amy-logo.png"} alt="" /></span>
          <span className="logo-text">TRANSFORMATIONS<span className="logo-num">123</span></span>
        </Link>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={'main-nav' + (open ? ' is-open' : '')}>
          <ul>
            {links.map(l => (
              <li key={l.label}>
                {l.href
                  ? <a href={l.href} target="_blank" rel="noopener noreferrer" onClick={close}>{l.label}</a>
                  : <NavLink to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'is-active' : undefined)} onClick={close}>{l.label}</NavLink>}
              </li>
            ))}
          </ul>
          <Link className="btn btn-orange nav-cta" to={APPLY_PATH} onClick={close}>BOOK A DISCOVERY CALL</Link>
        </nav>
      </div>
    </header>
  );
}
