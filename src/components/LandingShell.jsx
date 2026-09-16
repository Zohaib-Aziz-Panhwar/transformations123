import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import SiteFooter from './SiteFooter.jsx';

export const Arrow = ({ className = 'lp-arrow', width = 2 }) => (
  <svg className={className} viewBox="0 0 40 16" aria-hidden="true">
    <path d="M0 8h34M27 1l7 7-7 7" fill="none" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Multi-line text where each item becomes a line (mockups use hard breaks) */
export const Lines = ({ items }) => (
  <span>
    {items.map((t, i) => (
      <Fragment key={i}>{t}{i < items.length - 1 && <br />}</Fragment>
    ))}
  </span>
);

/**
 * Shared chrome for the four audience landing pages:
 * site nav, mockup logo lock-up, hero artwork, signature footer, full site footer.
 */
export default function LandingShell({ variant, title, art, artIsPhoto, eyebrows = [], footer, children }) {
  useEffect(() => {
    document.body.className = `landing landing-${variant}`;
    document.title = `${title} | Transformations123`;
    return () => { document.body.className = ''; };
  }, [variant, title]);

  return (
    <>
      <Header />

      <div className="lp-page">
      <div className="lp-top">
        <div className={'lp-art' + (artIsPhoto ? ' is-photo' : '')} aria-hidden="true"><img src={art} alt="" /></div>
        {eyebrows.map((e, i) => (
          <p key={i} className={`lp-eyebrow ${e.pos}`}><Lines items={e.lines} /></p>
        ))}

        <header className="lp-header">
          <div className="lp-container">
            <Link className="lp-logo" to="/" aria-label="Transformations123 home">
              <span className="lp-logo-text">TRANSFORMATIONS<span>123</span></span>
              <span className="lp-logo-rule"></span>
              <span className="lp-tagline">CAREER STRATEGY FOR WHAT&rsquo;S NEXT</span>
            </Link>
            <img className="lp-logo-butterfly" src={`/assets/images/landing/${variant}-butterfly-logo.png`} alt="" />
          </div>
        </header>

        {children.hero}
      </div>

      {children.body}

      <footer className="lp-footer">
        <div className="lp-container">
          {footer.left ? <p className="lp-footer-side is-left"><Lines items={footer.left} /></p> : <div></div>}
          <div className="lp-footer-center">
            <p className="lp-sig">Amy Sindicic, <small>BCC</small></p>
            <p className="lp-role">Executive Career Strategist</p>
            <span className="lp-rule" aria-hidden="true"></span>
            <Link className="lp-url" to="/">transformations123.com</Link>
          </div>
          <div className="lp-footer-side is-right">
            {footer.butterfly && <img className="lp-footer-butterfly" src={footer.butterfly} alt="" />}
            {footer.right && <span><Lines items={footer.right} /></span>}
          </div>
        </div>
      </footer>
      </div>

      <SiteFooter />
    </>
  );
}
