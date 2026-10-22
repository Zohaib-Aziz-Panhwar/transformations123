import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { APPLY_PATH } from '../data/content.js';

const A = import.meta.env.BASE_URL;
const PER_DESKTOP = 3;
const PER_MOBILE = 2;

/* Three samples per page on desktop, two on a phone, with paging controls. */
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

/* The SES Samples landing page: a navy hero with the "SES Sample Materials"
   graphic, then one block per fictional candidate -- resume preview, the
   leadership story it tells, and the three files of the package -- paged. */
export default function SesSampleGallery({ page }) {
  const pageSize = usePageSize();
  const [pageIndex, setPageIndex] = useState(0);
  const listRef = useRef(null);

  const pageCount = Math.max(1, Math.ceil(page.packages.length / pageSize));
  // Keep the current page valid when the page size changes (resize / rotate).
  useEffect(() => { setPageIndex((p) => Math.min(p, pageCount - 1)); }, [pageCount]);

  const goTo = (i) => {
    setPageIndex(i);
    if (listRef.current) listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const start = pageIndex * pageSize;
  const shown = page.packages.slice(start, start + pageSize);

  return (
    <Layout title={page.title}>
      <section className="ses-hero">
        <div className="ses-hero-inner">
          <div className="ses-hero-text">
            <Link className="page-back" to="/">&larr; Back to Home</Link>
            <p className="ses-eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="ses-subhead">{page.subhead}</p>
            {page.intro.map(t => <p key={t} className="ses-intro">{t}</p>)}
          </div>
          {page.feature && (
            <div className="ses-hero-art">
              <img src={`${A}${page.feature}`} alt={`${page.title} sample materials`} />
            </div>
          )}
        </div>
      </section>

      {page.disclaimer && <p className="ses-disclaimer">{page.disclaimer}</p>}

      <section className="ses-list">
        <div className="ses-list-inner" ref={listRef}>
          {shown.map(pkg => (
            <article className="ses-item" key={pkg.key}>
              <div className="ses-item-top">
                <div className="ses-item-art">
                  <img src={`${A}${pkg.resume}`} alt={`${pkg.title} — resume sample`} loading="lazy" />
                </div>
                <div className="ses-item-text">
                  <h2>{pkg.title}</h2>
                  {pkg.subtitle && <p className="ses-item-sub">{pkg.subtitle}</p>}
                  <p>{pkg.summary}</p>
                </div>
              </div>
              <div className="ses-item-dl">
                {pkg.downloads.map(d => (
                  /* download, so the browser saves the file rather than
                     opening a PDF viewer over the page. */
                  <a className="ses-dl-btn" href={`${A}${d.file}`} download key={d.file}>
                    {d.title.toUpperCase()}
                  </a>
                ))}
              </div>
            </article>
          ))}

          {pageCount > 1 && (
            <nav className="ses-pager" aria-label="Sample pages">
              <button
                type="button" className="ses-pager-btn"
                onClick={() => goTo(pageIndex - 1)} disabled={pageIndex === 0}
              >&larr; Prev</button>
              <ul className="ses-pager-nums">
                {Array.from({ length: pageCount }, (_, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      className={'ses-pager-num' + (i === pageIndex ? ' is-active' : '')}
                      aria-current={i === pageIndex ? 'page' : undefined}
                      onClick={() => goTo(i)}
                    >{i + 1}</button>
                  </li>
                ))}
              </ul>
              <button
                type="button" className="ses-pager-btn"
                onClick={() => goTo(pageIndex + 1)} disabled={pageIndex === pageCount - 1}
              >Next &rarr;</button>
            </nav>
          )}
        </div>
      </section>

      <section className="dl-closing">
        <div className="container">
          <h2>{page.closing.title}</h2>
          {page.closing.text.map(t => <p key={t}>{t}</p>)}
          <Link className="btn btn-orange btn-wide" to={APPLY_PATH}>
            SCHEDULE A COMPLIMENTARY CONSULTATION
          </Link>
        </div>
      </section>
    </Layout>
  );
}
