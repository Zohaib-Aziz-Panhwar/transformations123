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

/* The SES Samples page: a gallery of full sample packages. Each card is Amy's
   artwork -- a resume preview with the package title and summary -- and the
   three files of the package sit beneath it as downloads. */
export default function SesSampleGallery({ page }) {
  return (
    <Layout title={page.title}>
      <section className="sm-hero">
        <div className="sm-hero-inner sm-hero-inner--center">
          <div className="sm-hero-text">
            <Link className="page-back" to="/">&larr; Back to Home</Link>
            <p className="st-eyebrow"><span>{page.eyebrow}</span></p>
            <h1>{page.title}</h1>
            <p className="sm-lead">{page.lead}</p>
            {page.intro.map(t => <p key={t} className="sm-intro">{t}</p>)}
          </div>
        </div>
      </section>

      <section className="sg">
        <div className="sg-inner">
          {page.packages.map(pkg => (
            <article className="sg-card" key={pkg.key}>
              <img className="sg-art" src={`${A}${pkg.image}`} alt={pkg.alt} />
              <div className="sg-dl">
                {pkg.downloads.map(d => (
                  /* download, so the browser saves the file rather than
                     opening a PDF viewer over the page. */
                  <a className="sg-file" href={`${A}${d.file}`} download key={d.file}>
                    <DownloadIcon />
                    <span className="sg-file-name">{d.title}</span>
                    <span className="sg-file-meta">{d.kind} &middot; {d.size}</span>
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
