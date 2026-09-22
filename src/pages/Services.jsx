import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { services } from '../data/services.js';
import { BOOKING_URL } from '../data/content.js';
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
                  {(s.offerings || [s.feature]).slice(0, 3).map(o => <li key={o.title}>{o.title}</li>)}
                  {s.offerings && s.offerings.length > 3 && <li className="more">+ {s.offerings.length - 3} more</li>}
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
          <a className="btn btn-orange btn-wide" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">BOOK A DISCOVERY CALL</a>
        </div>
      </section>
    </Layout>
  );
}
