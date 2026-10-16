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
  // The two sample pages now sit under one menu.
  { label: 'RESUME SAMPLES', children: [
    { to: resourcePaths.sesSamples, label: 'SES Resume Samples' },
    { to: resourcePaths.resumeSamples, label: 'Executive Resume Samples' },
  ] },
  // Amy keeps her reviews on Upwork, so this one leaves the site.
  { href: social.upwork, label: 'TESTIMONIALS' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const close = () => { setOpen(false); setSub(false); };

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
              l.children ? (
                <li key={l.label} className={'has-sub' + (sub ? ' is-open' : '')}>
                  <button
                    type="button"
                    className="nav-sub-toggle"
                    aria-expanded={sub}
                    onClick={() => setSub(s => !s)}
                  >
                    {l.label}
                    <svg className="nav-caret" viewBox="0 0 10 6" aria-hidden="true">
                      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <ul className="nav-sub">
                    {l.children.map(c => (
                      <li key={c.label}>
                        <NavLink to={c.to} className={({ isActive }) => (isActive ? 'is-active' : undefined)} onClick={close}>{c.label}</NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={l.label}>
                  {l.href
                    ? <a href={l.href} target="_blank" rel="noopener noreferrer" onClick={close}>{l.label}</a>
                    : <NavLink to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'is-active' : undefined)} onClick={close}>{l.label}</NavLink>}
                </li>
              )
            ))}
          </ul>
          <Link className="btn btn-orange nav-cta" to={APPLY_PATH} onClick={close}>BOOK A DISCOVERY CALL</Link>
        </nav>
      </div>
    </header>
  );
}
