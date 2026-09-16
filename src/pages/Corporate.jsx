import { Link } from 'react-router-dom';
import LandingShell, { Arrow } from '../components/LandingShell.jsx';

const pillars = [
  ['CLARIFY', 'YOUR VALUE', 'Articulate the leadership, results and expertise that set you apart.'],
  ['DEFINE', 'YOUR NEXT LEVEL', 'Identify the right roles, industries and organizational fit for your goals.'],
  ['POSITION', 'YOUR LEADERSHIP', 'Build a compelling executive narrative that communicates your impact.'],
  ['ACTIVATE', 'YOUR MARKET', 'Develop a focused job-search and networking strategy to access the right opportunities.'],
];

export default function Corporate() {
  const hero = (
    <>
      <h1 className="lp-h1">YOU&rsquo;VE BUILT<br />THE EXPERIENCE.<br /><span className="o">WHAT&rsquo;S YOUR<br />NEXT STRATEGIC<br />MOVE?</span></h1>
      <span className="lp-rule" aria-hidden="true"></span>
      <p className="lp-intro">I help corporate leaders clarify their value, position their leadership and navigate what&rsquo;s next with a focused, strategic career plan.</p>
      <p className="lp-motto">EVERYONE HAS AI.<br /><span className="o">NOT EVERYONE HAS A STRATEGY.</span></p>
    </>
  );

  const actions = (
    <div className="lp-cards">
      <Link className="lp-card" to="/executive-strategy">
        <h3>EXECUTIVE<br />CAREER STRATEGY</h3>
        <p>Insights, resources and guidance.</p>
        <Arrow />
      </Link>
      <Link className="lp-card" to="/executive-samples">
        <h3>EXECUTIVE<br />RESUME SAMPLES</h3>
        <p>Real examples.<br />Real results.</p>
        <Arrow />
      </Link>
      <Link className="lp-card is-orange" to="/contact">
        <h3>BOOK A<br />DISCOVERY CALL</h3>
        <p>Let&rsquo;s discuss your next strategic move.</p>
        <Arrow />
      </Link>
    </div>
  );

  const body = (
    <>
      <section className="lp-container">
        <div className="lp-pillars" data-reveal>
          {pillars.map(([a, b, text]) => (
            <div className="lp-pillar" key={a + b}>
              <span className="lp-dash" aria-hidden="true"></span>
              <h3>{a}<span className="o">{b}</span></h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="lp-line lp-line-gap" aria-hidden="true"></div>
    </>
  );

  return (
    <LandingShell
      variant="corp"
      title="Corporate Executives"
      art="/assets/images/landing/corp-hero.jpg"
      artIsPhoto
      eyebrows={[
        { pos: 'is-tr', lines: ['Leadership.', 'Experience.', 'Impact.', 'What’s Next.'] },
        { pos: 'is-br', lines: ['New', 'Markets.', 'Greater', 'Impact.', 'Bigger', 'Opportunities.'] },
      ]}
      footer={{
        left: ['Experience.', 'Strategy.', 'What’s Next.'],
        butterfly: '/assets/images/landing/corp-butterfly-footer.png',
        right: ['Same', 'Purpose.', 'Bigger', 'Possibilities.'],
      }}
    >
      {{ hero, actions, body }}
    </LandingShell>
  );
}
