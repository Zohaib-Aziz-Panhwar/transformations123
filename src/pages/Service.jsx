import { Link, useParams, Navigate } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { services, UPWORK_LABEL } from '../data/services.js';
import { BOOKING_URL } from '../data/content.js';
const A = import.meta.env.BASE_URL;

function OfferLink({ o, className }) {
  return o.to
    ? <Link className={className} to={o.to}>{UPWORK_LABEL}</Link>
    : <a className={className} href={o.href} target="_blank" rel="noopener noreferrer">{UPWORK_LABEL}</a>;
}

export default function Service() {
  const { slug } = useParams();
  const s = services.find(x => x.slug === slug);
  if (!s) return <Navigate to="/services" replace />;

  return (
    <Layout title={s.name.join(' ')}>
      <section className={`sv-hero is-${s.heroAlign}`} style={s.hero ? { backgroundImage: `url(${A}assets/images/services/${s.hero})` } : undefined}>
        <img className="sv-fly" src={`${A}assets/images/services/${s.butterfly}`} alt="" aria-hidden="true" />
        <div className="container sv-hero-inner">
          <Link className="sv-back" to="/">&larr; Back to Home</Link>
          <h1 className="sv-title">{s.name[0]}<br /><span className={s.accent ? 'o' : ''}>{s.name[1]}</span></h1>
          <p className="sv-tagline">{s.tagline}</p>
        </div>
      </section>

      <section className="sv-body">
        <div className="container">
          {s.feature ? (
            <>
              <div className="sv-feature" data-reveal>
                <h2>{s.feature.title}</h2>
                <OfferLink o={s.feature} className="btn btn-orange btn-wide" />
              </div>
              <ul className="sv-includes">
                {s.includes.map((t, i) => <li key={t} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>{t}</li>)}
              </ul>
            </>
          ) : (
            <div className={`sv-grid count-${s.offerings.length}`}>
              {s.offerings.map((o, i) => (
                <article className="sv-card" key={o.title} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                  <h2>{o.title}</h2>
                  <OfferLink o={o} className="btn btn-orange sv-btn" />
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="sv-outcome" style={s.outcomeBg ? { backgroundImage: `url(${A}assets/images/services/${s.outcomeBg})` } : undefined}>
        <div className="container" data-reveal>
          <h2>{s.outcome[0]}<br /><span className={s.outcomeAccent ? 'o' : ''}>{s.outcome[1]}</span></h2>
          <a className="btn btn-orange btn-wide" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">DISCOVERY CALL</a>
        </div>
      </section>
    </Layout>
  );
}
