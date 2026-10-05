import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { services } from '../data/services.js';
import { APPLY_PATH } from '../data/content.js';
const A = import.meta.env.BASE_URL;

export default function Services() {
  return (
    <Layout title="Services">
      <section className="sx-hero" style={{ backgroundImage: `url(${A}assets/images/landing/ses-package-hero.jpg)` }}>
        <div className="container sx-hero-inner">
          <Link className="sx-back" to="/">&larr; Back to Home</Link>
          <p className="sx-eyebrow">CAREER STRATEGY FOR WHAT&rsquo;S NEXT</p>
          <h1>SERVICES</h1>
          <p className="sx-lead">Five ways to translate experience into executive value. Choose where to start.</p>
        </div>
      </section>

      <section className="sx-list">
        <div className="container">
          {services.map((s, i) => (
            <Link className={'sx-card' + (i % 2 ? ' is-flip' : '')} to={`/services/${s.slug}`} key={s.slug} data-reveal>
              <div className="sx-art" style={s.hero ? { backgroundImage: `url(${A}assets/images/services/${s.hero})` } : undefined}>
                <img src={`${A}assets/images/services/${s.butterfly}`} alt="" aria-hidden="true" />
              </div>
              <div className="sx-text">
                <span className="sx-num">0{i + 1}</span>
                <h2>{s.name[0]} <span>{s.name[1]}</span></h2>
                <p>{s.tagline}</p>
                <ul className="sx-offers">
                  {/* A tiers page has neither offerings nor a feature, so fall
                      back to its tier names rather than rendering undefined. */}
                  {(s.offerings || s.tiers || [s.feature]).filter(Boolean).slice(0, 3)
                    .map(o => <li key={o.title || o.name}>{o.title || o.name}</li>)}
                  {(s.offerings || s.tiers || []).length > 3 && (
                    <li className="more">+ {(s.offerings || s.tiers).length - 3} more</li>
                  )}
                </ul>
                <span className="sx-more">Explore {s.name.join(' ').toLowerCase()} <i>&rarr;</i></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="sx-cta">
        <div className="container" data-reveal>
          <h2>NOT SURE WHERE TO START?</h2>
          <p>A short conversation about where your experience creates the most value, and which path fits.</p>
          <Link className="btn btn-orange btn-wide" to={APPLY_PATH}>BOOK A DISCOVERY CALL</Link>
        </div>
      </section>
    </Layout>
  );
}
