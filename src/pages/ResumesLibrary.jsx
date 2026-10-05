import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import PageCta from '../components/PageCta.jsx';
import { resumesLibrary } from '../data/resources.js';

const A = import.meta.env.BASE_URL;

export default function ResumesLibrary() {
  const { items } = resumesLibrary;
  return (
    <Layout title={resumesLibrary.title}>
      {/* The covers carry the hero rather than a plain band -- three of them
          fanned out beside the heading, which is the layout Amy picked. */}
      <section className="lib-hero">
        <div className="lib-hero-inner">
          <div>
            <Link className="page-back" to="/">&larr; Back to Home</Link>
            <p className="st-eyebrow"><span>{resumesLibrary.eyebrow}</span></p>
            <h1>RESUMES <span className="o">LIBRARY</span></h1>
            <p className="lib-hero-lead">{resumesLibrary.lead}</p>
            <p className="lib-hero-count">
              <b>{items.length}</b> FREE DOWNLOADS
            </p>
          </div>
          <div className="lib-fan" aria-hidden="true">
            {items.slice(1, 4).map(it => (
              <img key={it.thumb} src={`${A}${it.thumb}`} alt="" loading="eager" />
            ))}
          </div>
        </div>
      </section>

      <section className="lib">
        <div className="container">
          <div className="lib-grid">
            {items.map((it, i) => (
              <a
                className="lib-card"
                key={it.file}
                href={`${A}${it.file}`}
                download
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                <div className="lib-art">
                  <img src={`${A}${it.thumb}`} alt={it.title} loading="lazy" />
                </div>
                <div className="lib-text">
                  <h2>{it.title}</h2>
                  <p>{it.note}</p>
                  <span className="lib-get">
                    Download
                    <i aria-hidden="true">&darr;</i>
                    <em>{it.kind} &middot; {it.size}</em>
                  </span>
                </div>
              </a>
            ))}
          </div>
          <p className="lib-note">
            Free to download and use. Nothing here asks for an email address.
          </p>
        </div>
      </section>

      <PageCta />
    </Layout>
  );
}
