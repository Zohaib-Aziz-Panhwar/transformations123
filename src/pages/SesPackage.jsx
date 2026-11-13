import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { SES_PACKAGE_URL } from '../data/services.js';

const A = import.meta.env.BASE_URL;

/* Three SES service tiers. An item is a string, or an object with an optional
   `pre` (plain), `b` (bold), and `rest` (plain) so a phrase can be emphasised. */
const TIERS = [
  {
    name: 'TIER 1: SES STRATEGY & REVIEW',
    tagline: 'For executives preparing their own applications.',
    price: '$499',
    items: [
      'SES resume and application assessment',
      '60-minute strategy consultation',
      { b: 'ECQ and TQ', rest: ' alignment and leadership review' },
      'Written recommendations',
      '30-minute follow-up',
      '1 revision',
    ],
  },
  {
    name: 'TIER 2: SES RESUME & CCAR NARRATIVES',
    tagline: 'For executives seeking professional application writing.',
    price: '$999',
    items: [
      'Discovery and strategy session',
      'Tailored 2-page SES resume',
      'Executive branding and positioning',
      { b: 'ECQ and TQ', rest: ' assessment and strategy' },
      'Five concise CCAR narratives',
      'Enterprise-level accomplishments',
      '3 revisions',
      'Word and PDF files',
    ],
  },
  {
    name: 'TIER 3: COMPLETE SES APPLICATION',
    featured: true,
    ribbon: 'MOST COMPREHENSIVE',
    tagline: 'Comprehensive application and interview support.',
    price: '$1,499',
    items: [
      'All Tier 2 services',
      { b: 'Expanded CCAR narratives', rest: ', when required' },
      { pre: 'Technical qualification ', b: '(TQ)', rest: ' narratives, when required' },
      'Cover letter, if needed',
      'LinkedIn profile optimization',
      'SES interview guide and coaching session',
      { b: '6 revisions' },
    ],
  },
];

const Check = () => (
  <span className="sesp-check" aria-hidden="true">
    <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </span>
);

function Item({ data }) {
  if (typeof data === 'string') return <li><Check /><span>{data}</span></li>;
  return (
    <li>
      <Check />
      <span>{data.pre}<strong>{data.b}</strong>{data.rest}</span>
    </li>
  );
}

export default function SesPackage() {
  return (
    <Layout title="SES Application Packages">
      <section className="sesp-hero">
        <img className="sesp-hero-butterfly" src={`${A}assets/images/services/executive-positioning-butterfly.png`} alt="" aria-hidden="true" />
        <div className="sesp-hero-capitol" style={{ backgroundImage: `url(${A}assets/images/samples/ses-package-capitol.jpg)` }} aria-hidden="true" />
        <div className="sesp-hero-inner">
          <Link className="sesp-back" to="/ses">&larr; Back to SES Leaders</Link>
          <p className="sesp-eyebrow"><span>SES EXECUTIVE APPLICATION SERVICES</span></p>
          <h1 className="sesp-title">SES APPLICATION PACKAGES</h1>
          <p className="sesp-sub">Strategic support for senior federal leaders pursuing SES opportunities.</p>
        </div>
      </section>

      <section className="sesp-body">
        <div className="container">
          <h2 className="sesp-lead">Three service levels to meet your needs, from expert review to a complete SES application.</h2>

          <div className="sesp-grid">
            {TIERS.map((tier) => (
              <article className={'sesp-card' + (tier.featured ? ' is-featured' : '')} key={tier.name}>
                {tier.ribbon && <span className="sesp-ribbon">{tier.ribbon}</span>}
                <div className="sesp-card-head">{tier.name}</div>
                <div className="sesp-card-body">
                  <p className="sesp-tagline">{tier.tagline}</p>
                  <div className="sesp-price">{tier.price}</div>
                  <ul className="sesp-items">
                    {tier.items.map((it, i) => <Item data={it} key={i} />)}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="sesp-upgrade">
            <span className="sesp-upgrade-ic" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 4l7 7h-4v7H9v-7H5z" fill="currentColor" /></svg>
            </span>
            <p>
              <strong className="sesp-upgrade-hd">UPGRADE &amp; SAVE:</strong> Start with the Strategy &amp; Review package and upgrade to a higher tier with <strong className="sesp-upgrade-off">$200 OFF</strong> the next tier.
            </p>
          </div>

          <div className="sesp-cta-wrap">
            <a className="sesp-cta" href={SES_PACKAGE_URL} target="_blank" rel="noopener noreferrer">
              VIEW DETAILS <span aria-hidden="true">&rsaquo;</span>
            </a>
          </div>
        </div>
      </section>

      <section className="sesp-outcome">
        <p><em>Outcome:</em> Stronger executive positioning and SES readiness.</p>
      </section>
    </Layout>
  );
}
