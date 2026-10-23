import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { APPLY_PATH } from '../data/content.js';

const A = import.meta.env.BASE_URL;
const PER_DESKTOP = 3;
const PER_MOBILE = 2;

/* Three samples per page on desktop, two on a phone. */
function usePageSize() {
  const [size, setSize] = useState(
    () => (typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches ? PER_MOBILE : PER_DESKTOP),
  );
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)');
    const on = () => setSize(mq.matches ? PER_MOBILE : PER_DESKTOP);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return size;
}

/* Click-to-enlarge overlay. Once open, moving the cursor over the page
   magnifies it: the view zooms to 2x and pans to follow the pointer, so a
   reader can inspect any part of the resume without leaving the page. A
   second click, the close button, the backdrop or Escape closes it. */
function Lightbox({ shot, onClose }) {
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState('center center');

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  const onMove = (e) => {
    if (!zoom) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setOrigin(`${Math.max(0, Math.min(100, x))}% ${Math.max(0, Math.min(100, y))}%`);
  };

  return (
    <div className="rg-lb" role="dialog" aria-modal="true" aria-label={shot.alt} onClick={onClose}>
      <button type="button" className="rg-lb-close" aria-label="Close" onClick={onClose}>&times;</button>
      <figure className="rg-lb-fig" onClick={(e) => e.stopPropagation()}>
        <img
          className={'rg-lb-img' + (zoom ? ' is-zoom' : '')}
          src={`${A}${shot.src}`}
          alt={shot.alt}
          style={zoom ? { transformOrigin: origin } : undefined}
          onClick={() => setZoom((z) => !z)}
          onMouseMove={onMove}
          onMouseLeave={() => setOrigin('center center')}
        />
        <figcaption className="rg-lb-cap">
          {zoom ? 'Click to zoom out' : 'Click the page to magnify · move your cursor to pan'}
        </figcaption>
      </figure>
    </div>
  );
}

/* A resume/cover preview that invites a click to enlarge. */
function Preview({ src, alt, onOpen, className = '' }) {
  return (
    <button type="button" className={'rg-shot ' + className} onClick={() => onOpen({ src, alt })}>
      <span className="rg-shot-frame">
        <img src={`${A}${src}`} alt={alt} loading="lazy" />
        <span className="rg-shot-veil" aria-hidden="true">
          <span className="rg-shot-lens">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </span>
      </span>
      <span className="rg-shot-cap">
        <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        Click to enlarge
      </span>
    </button>
  );
}

/* A richer resume-samples page than the plain SES gallery: a text hero, an
   optional feature band, then one numbered block per fictional candidate --
   small resume preview that enlarges, the strategy it follows, and the
   before/after/cover-letter files. Every preview opens the zoom lightbox. */
export default function ResumeGallery({ page }) {
  const pageSize = usePageSize();
  const [pageIndex, setPageIndex] = useState(0);
  const [shot, setShot] = useState(null);
  const listRef = useRef(null);

  const pageCount = Math.max(1, Math.ceil(page.packages.length / pageSize));
  useEffect(() => { setPageIndex((p) => Math.min(p, pageCount - 1)); }, [pageCount]);

  const openShot = useCallback((s) => setShot(s), []);
  const closeShot = useCallback(() => setShot(null), []);

  const goTo = (i) => {
    setPageIndex(i);
    if (listRef.current) listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const start = pageIndex * pageSize;
  const shown = page.packages.slice(start, start + pageSize);

  return (
    <Layout title={page.title}>
      <section className="rg-hero">
        <div className="rg-hero-inner">
          <Link className="page-back" to="/">&larr; Back to Home</Link>
          <p className="rg-eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          {page.subhead && <p className="rg-subhead">{page.subhead}</p>}
          {page.intro.map((t) => <p key={t} className="rg-intro">{t}</p>)}
          {page.disclaimer && <p className="rg-disclaimer">{page.disclaimer}</p>}
        </div>
      </section>

      {page.band && (
        <section className="rg-band">
          <div className="rg-band-inner">
            <div className="rg-band-text">
              {page.band.heading.map((line) => <span key={line}>{line}</span>)}
              {page.band.sub && <em>{page.band.sub}</em>}
            </div>
            <div className="rg-band-shots">
              {page.band.previews.map((p) => (
                <Preview key={p.src} src={p.src} alt={p.alt} onOpen={openShot} className="rg-shot--band" />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="rg-list">
        <div className="rg-list-inner" ref={listRef}>
          {shown.map((pkg, i) => {
            const num = String(start + i + 1).padStart(2, '0');
            return (
              <article className="rg-item" key={pkg.key}>
                <div className="rg-item-art">
                  <Preview src={pkg.resume} alt={`${pkg.title} — resume sample`} onOpen={openShot} />
                </div>
                <div className="rg-item-text">
                  <h2>
                    <span className="rg-num">{num}</span>
                    <span className="rg-num-bar" aria-hidden="true" />
                    {pkg.title}
                  </h2>
                  {pkg.subtitle && <p className="rg-item-sub">{pkg.subtitle}</p>}
                  {page.summaryLabel && <p className="rg-item-label">{page.summaryLabel}</p>}
                  <p className="rg-item-sum">{pkg.summary}</p>
                  <div className="rg-item-dl">
                    {pkg.downloads.map((d) => (
                      <a className="rg-dl-btn" href={`${A}${d.file}`} download key={d.file}>
                        {d.title.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}

          {pageCount > 1 && (
            <nav className="rg-pager" aria-label="Sample pages">
              <button type="button" className="rg-pager-btn" onClick={() => goTo(pageIndex - 1)} disabled={pageIndex === 0}>
                &larr; Prev
              </button>
              <ul className="rg-pager-nums">
                {Array.from({ length: pageCount }, (_, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      className={'rg-pager-num' + (i === pageIndex ? ' is-active' : '')}
                      aria-current={i === pageIndex ? 'page' : undefined}
                      onClick={() => goTo(i)}
                    >{i + 1}</button>
                  </li>
                ))}
              </ul>
              <button type="button" className="rg-pager-btn" onClick={() => goTo(pageIndex + 1)} disabled={pageIndex === pageCount - 1}>
                Next &rarr;
              </button>
            </nav>
          )}
        </div>
      </section>

      <section className="dl-closing">
        <div className="container">
          <h2>{page.closing.title}</h2>
          {page.closing.text.map((t) => <p key={t}>{t}</p>)}
          <Link className="btn btn-orange btn-wide" to={APPLY_PATH}>
            SCHEDULE A COMPLIMENTARY CONSULTATION
          </Link>
        </div>
      </section>

      {shot && <Lightbox shot={shot} onClose={closeShot} />}
    </Layout>
  );
}
