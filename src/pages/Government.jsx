import { Link } from 'react-router-dom';
import LandingShell, { Arrow, Lines } from '../components/LandingShell.jsx';
import { BOOKING_URL } from '../data/content.js';
const A = import.meta.env.BASE_URL;

export default function Government() {
  const hero = (
    <>
      <h1 className="lp-h1">YOUR<br />GOVERNMENT<br />EXPERIENCE<br /><span className="o">HAS VALUE.</span></h1>
      <p className="lp-sub">Make the Market Understand It.</p>
      <span className="lp-rule" aria-hidden="true"></span>
    </>
  );

  const actions = (
    <div className="lp-btn-row">
      <Link className="lp-btn-blue" to="/government-strategy"><Lines items={['GOVERNMENT', 'CAREER STRATEGY']} /></Link>
      <Link className="lp-btn-blue" to="/government-samples"><Lines items={['GOVERNMENT', 'RESUME SAMPLES']} /></Link>
    </div>
  );

  const body = (
    <>
      <section className="lp-container">
        <div className="lp-divider" aria-hidden="true"></div>
        <h2 className="lp-big" data-reveal>STRATEGY TURNS<br /><span className="o">PUBLIC SERVICE</span><br />INTO WHAT&rsquo;S NEXT.</h2>
      </section>

      <div className="lp-line" aria-hidden="true"></div>

      <section className="lp-container lp-bottom" data-reveal>
        <div className="lp-quote">
          <p>YOUR EXPERIENCE<br /><span className="o">GOT YOU HERE.</span></p>
          <p>YOUR STRATEGY<br /><span className="o">DETERMINES WHAT<br />COMES NEXT.</span></p>
        </div>
        <img className="lp-mid-butterfly" src={A + "assets/images/landing/gov-butterfly-mid.png"} alt="" />
        <a className="lp-cta" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          <span>BOOK A<br />DISCOVERY CALL</span>
          <Arrow width={2.4} />
        </a>
      </section>
    </>
  );

  return (
    <LandingShell
      variant="gov"
      title="Government Leaders"
      art={A + "assets/images/landing/gov-hero.jpg"}
      artIsPhoto
      eyebrows={[{ pos: 'is-tr', lines: ['Public', 'Service.', 'Leadership.', 'Bigger', 'Opportunities.'] }]}
      footer={{
        left: ['Service.', 'Strategy.', 'What’s Next.'],
        right: ['Same', 'Purpose.', 'Bigger', 'Possibilities.'],
      }}
    >
      {{ hero, actions, body }}
    </LandingShell>
  );
}
