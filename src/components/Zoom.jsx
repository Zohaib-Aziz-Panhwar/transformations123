import { useState, useEffect } from 'react';

const A = import.meta.env.BASE_URL;

/* Click-to-enlarge overlay shared by the resume-sample galleries. Once open,
   moving the cursor over the page magnifies it: the view zooms to 2x and pans
   to follow the pointer. A second click, the close button, the backdrop, or
   Escape closes it. */
export function Lightbox({ shot, onClose }) {
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

/* A preview image that invites a click to enlarge, with a hover magnifier cue
   and a "Click to enlarge" caption. */
export function ZoomPreview({ src, alt, onOpen, className = '' }) {
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
