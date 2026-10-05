import { Link, useParams, Navigate } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { services, UPWORK_LABEL } from '../data/services.js';
import { APPLY_PATH } from '../data/content.js';
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

      {s.kicker && <p className="sv-kicker">{s.kicker}</p>}

      <section className="sv-body">
        <div className="container">
          {s.tiers ? (
            <>
              {s.eyebrow && <p className="sv-eyebrow" data-reveal>{s.eyebrow}</p>}
              {s.heading && <h2 className="sv-heading" data-reveal>{s.heading}</h2>}
              {s.intro?.map((t, i) => (
                <p className="sv-intro" key={i} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>{t}</p>
              ))}
              <div className="sv-tiers">
                {s.tiers.map((t, i) => (
                  <article className={'sv-tier' + (i === 1 ? ' is-pick' : '')} key={t.name}
                           data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                    <h3>{t.name}</h3>
                    <p className="sv-price"><span>{t.price}</span> <em>{t.duration}</em></p>
                    <ul>{t.items.map(x => <li key={x}>{x}</li>)}</ul>
                  </article>
                ))}
              </div>
              {s.tierCta && (
                <div className="sv-tier-cta" data-reveal>
                  <a className="btn btn-orange btn-wide" href={s.tierCta}
                     target="_blank" rel="noopener noreferrer">{UPWORK_LABEL}</a>
                </div>
              )}
            </>
          ) : s.feature ? (
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
            <div className={`sv-grid count-${s.offerings.length}${s.topRow === 2 ? ' is-2-3' : ''}`}>
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
          <Link className="btn btn-orange btn-wide" to={APPLY_PATH}>DISCOVERY CALL</Link>
        </div>
      </section>
    </Layout>
  );
}
