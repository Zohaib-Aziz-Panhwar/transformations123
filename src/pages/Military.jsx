import { Link } from 'react-router-dom';
import LandingShell, { Arrow } from '../components/LandingShell.jsx';

const pillars = [
  ['TRANSLATE', 'YOUR VALUE', 'Turn military experience into business-relevant leadership value.'],
  ['DEFINE', 'YOUR MARKET', 'Identify the roles, industries and leadership levels that fit your experience.'],
  ['POSITION', 'YOUR LEADERSHIP', 'Build a compelling civilian executive narrative around scope, impact and results.'],
  ['BUILD YOUR', 'NEXT MISSION', 'Turn your positioning into a focused job-search and networking strategy.'],
];

export default function Military() {
  const hero = (
    <section className="lp-hero">
      <div className="lp-container lp-hero-inner">
        <h1 className="lp-h1">From Military<br />Leadership to<br /><span className="o">Corporate Impact.</span></h1>
        <span className="lp-rule" aria-hidden="true"></span>
        <p className="lp-intro">I help military leaders translate the scope, leadership and impact of their service into a clear civilian career strategy.</p>
        <p className="lp-motto">EVERYONE HAS AI.<br /><span className="o">NOT EVERYONE HAS A STRATEGY.</span></p>
      </div>
    </section>
  );

  const body = (
    <>
      <section className="lp-container">
        <div className="lp-pillars">
          {pillars.map(([a, b, text]) => (
            <div className="lp-pillar" key={a + b}>
              <span className="lp-dash" aria-hidden="true"></span>
              <h3>{a}<span className="o">{b}</span></h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="lp-cards">
          <Link className="lp-card" to="/military-strategy">
            <h3>MILITARY<br />TRANSITION<br />STRATEGY</h3>
            <p>Practical insights and guidance.</p>
            <Arrow />
          </Link>
          <Link className="lp-card" to="/military-samples">
            <h3>MILITARY<br />RESUME<br />SAMPLES</h3>
            <p>Real examples.<br />Real results.</p>
            <Arrow />
          </Link>
          <Link className="lp-card is-orange" to="/contact">
            <h3>BOOK A<br />DISCOVERY CALL</h3>
            <p>Let&rsquo;s discuss your transition strategy.</p>
            <Arrow />
          </Link>
        </div>
      </section>

      <div className="lp-line lp-line-gap" aria-hidden="true"></div>
    </>
  );

  return (
    <LandingShell
      variant="mil"
      title="Military Leaders"
      art="/assets/images/landing/mil-hero.jpg"
      artIsPhoto
      eyebrows={[{ pos: 'is-tr', lines: ['Same', 'Leadership.', 'New', 'Opportunities.'] }]}
      footer={{
        left: ['Service.', 'Leadership.', 'What’s Next.'],
        butterfly: '/assets/images/landing/mil-butterfly-footer.png',
        right: ['Same', 'Purpose.', 'Bigger', 'Possibilities.'],
      }}
    >
      {{ hero, body }}
    </LandingShell>
  );
}
