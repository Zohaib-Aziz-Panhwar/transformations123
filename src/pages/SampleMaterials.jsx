import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { APPLY_PATH } from '../data/content.js';

const A = import.meta.env.BASE_URL;

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="dl-icon">
      <path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Shared by the executive and SES sample pages. The cover graphic sits beside
   the heading rather than under it, so the page fills the width instead of
   running as a narrow column down the middle. */
export default function SampleMaterials({ page }) {
  return (
    <Layout title={page.title}>
      <section className="sm-hero">
        <div className="sm-hero-inner">
          <div className="sm-hero-text">
            <Link className="page-back" to="/">&larr; Back to Home</Link>
            <p className="st-eyebrow"><span>{page.eyebrow}</span></p>
            <h1>{page.title}</h1>
            <p className="sm-lead">{page.lead}</p>
            {page.intro.map(t => <p key={t} className="sm-intro">{t}</p>)}
          </div>
          {page.feature && (
            <div className="sm-hero-art">
              <img src={`${A}${page.feature}`} alt={page.title} />
            </div>
          )}
        </div>
      </section>

      <section className="sm-shows">
        <div className="container">
          <h2 className="sm-h2">{page.showsHeading}</h2>
          <ul className="sm-chips">
            {page.shows.map(x => <li key={x}>{x}</li>)}
          </ul>
        </div>
      </section>

      <section className="sm-downloads">
        <div className="container">
          <h2 className="sm-h2">{page.downloadsHeading}</h2>
          {page.downloads.length > 0 ? (
            <ul className="sm-files">
              {page.downloads.map(d => (
                <li key={d.file}>
                  {/* download, so the browser saves the file rather than
                      replacing the page with a PDF viewer. */}
                  <a href={`${A}${d.file}`} download>
                    <DownloadIcon />
                    <span className="sm-file-name">{d.title}</span>
                    <span className="sm-file-meta">{d.kind} &middot; {d.size}</span>
                    <span className="sm-file-go" aria-hidden="true">Download</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            /* Better an honest line than a heading with nothing under it. */
            <p className="sm-pending">
              These samples are being prepared and will be posted here shortly.
              In the meantime, book a call and Amy will send the ones that match
              your situation.
            </p>
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
