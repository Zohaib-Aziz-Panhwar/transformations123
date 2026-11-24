import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { SES_PACKAGE_URL } from '../data/services.js';

const A = import.meta.env.BASE_URL;

/* Three SES service tiers. An item is a string, or an object with an optional
   `pre` (plain), `b` (bold), and `rest` (plain) so a phrase can be emphasised. */
const TIERS = [
  {
    name: 'TIER 1: COMPLETE SES APPLICATION',
    tagline: 'For federal leaders who want a complete, tailored application for one SES announcement.',
    price: '$999',
    items: [
      'Strategy session to review the announcement and identify your strongest leadership examples',
      'Tailored two-page SES resume',
      { pre: 'Leadership accomplishments aligned with the ', b: 'Executive Core Qualifications (ECQs)' },
      { b: 'Technical Qualifications (TQ)', rest: ' narratives' },
    ],
  },
  {
    name: 'TIER 2: COMPREHENSIVE SES SUPPORT',
    featured: true,
    price: '$1,499',
    items: [
      { pre: 'Everything in the ', b: 'Complete SES Application', rest: ' package' },
      'Personalized SES interview coaching',
      'Refinement of your strongest leadership stories',
      'LinkedIn profile optimization to highlight your executive experience',
    ],
  },
  {
    name: 'TIER 3: SES EXECUTIVE TRANSITION',
    price: '$1,999',
    items: [
      { pre: 'Everything in the ', b: 'Comprehensive SES Support', rest: ' package' },
      'Assessment of how your federal leadership experience translates to the private sector',
      'Identification of three realistic private-sector executive roles',
      'A clear case for the value you bring to each role',
      'Three targeted resumes for the private sector',
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
    <Layout title="SES Application & Executive Transition Services">
      <section className="sesp-hero">
        <img className="sesp-hero-butterfly" src={`${A}assets/images/services/executive-positioning-butterfly.png`} alt="" aria-hidden="true" />
        <div className="sesp-hero-capitol" style={{ backgroundImage: `url(${A}assets/images/samples/ses-package-capitol.jpg)` }} aria-hidden="true" />
        <div className="sesp-hero-inner">
          <Link className="sesp-back" to="/ses">&larr; Back to SES Leaders</Link>
          <p className="sesp-eyebrow"><span>SES EXECUTIVE APPLICATION SERVICES</span></p>
          <h1 className="sesp-title">SES APPLICATION &amp; EXECUTIVE TRANSITION SERVICES</h1>
          <p className="sesp-sub">Strategic support for senior federal leaders pursuing SES opportunities.</p>
        </div>
      </section>

      <section className="sesp-body">
        <div className="container">
          <h2 className="sesp-lead">Three packages, each starting with a complete SES application, with options to add interview coaching, LinkedIn optimization, and a targeted private-sector executive transition strategy.</h2>

          <div className="sesp-grid">
            {TIERS.map((tier) => (
              <article className={'sesp-card' + (tier.featured ? ' is-featured' : '')} key={tier.name}>
                {tier.ribbon && <span className="sesp-ribbon">{tier.ribbon}</span>}
                <div className="sesp-card-head">{tier.name}</div>
                <div className="sesp-card-body">
                  <div className="sesp-price">{tier.price}</div>
                  {tier.tagline && <p className="sesp-tagline">{tier.tagline}</p>}
                  <ul className="sesp-items">
                    {tier.items.map((it, i) => <Item data={it} key={i} />)}
                  </ul>
                </div>
              </article>
            ))}
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
