import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
const A = import.meta.env.BASE_URL;

const links = [
  { to: '/', label: 'HOME', end: true },
  { to: '/about', label: 'ABOUT AMY' },
  { to: '/blog', label: 'BLOG' },
  { to: '/testimonials', label: 'TESTIMONIALS' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" to="/" aria-label="Transformations123 home" onClick={close}>
          <span className="logo-mark" aria-hidden="true"><img src={A + "assets/images/logo-butterfly.png"} alt="" /></span>
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
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'is-active' : undefined)} onClick={close}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link className="btn btn-orange nav-cta" to="/contact" onClick={close}>BOOK A DISCOVERY CALL</Link>
        </nav>
      </div>
    </header>
  );
}
