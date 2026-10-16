import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { APPLY_PATH } from '../data/content.js';

const A = import.meta.env.BASE_URL;

/* The SES Samples landing page. A navy hero with the "SES Sample Materials"
   graphic, then one block per fictional candidate: a resume preview, the
   leadership story it tells, and the three files of the package. */
export default function SesSampleGallery({ page }) {
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
              <img src={`${A}${page.feature}`} alt="SES sample materials: resume, ECQs and TQs" />
            </div>
          )}
        </div>
      </section>

      {page.disclaimer && (
        <p className="ses-disclaimer">{page.disclaimer}</p>
      )}

      <section className="ses-list">
        <div className="ses-list-inner">
          {page.packages.map(pkg => (
            <article className="ses-item" key={pkg.key}>
              <div className="ses-item-top">
                <div className="ses-item-art">
                  <img src={`${A}${pkg.resume}`} alt={`${pkg.title} — SES resume sample`} />
                </div>
                <div className="ses-item-text">
                  <h2>{pkg.title}</h2>
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
