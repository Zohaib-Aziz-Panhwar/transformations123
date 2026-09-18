import { Link } from 'react-router-dom';
import LandingShell, { Lines } from '../components/LandingShell.jsx';
import { OPM_PDF, BOOKING_URL } from '../data/content.js';
const A = import.meta.env.BASE_URL;

export default function Ses() {
  const hero = (
    <>
      <h1 className="lp-h1">THE SES<br />RULES HAVE<br /><span className="o">CHANGED.</span></h1>
      <p className="lp-sub">Is Your Strategy Ready?</p>
      <span className="lp-rule" aria-hidden="true"></span>
    </>
  );

  const actions = (
    <div className="lp-btn-row">
      <a className="lp-btn-blue" href={OPM_PDF} target="_blank" rel="noopener noreferrer"><Lines items={['CURRENT OPM', 'SES GUIDANCE']} /></a>
      <Link className="lp-btn-blue" to="/ses-samples"><Lines items={['SES RESUME', 'AND ECQ SAMPLES']} /></Link>
      <Link className="lp-btn-blue" to="/ses-articles"><Lines items={['EXPLORE SES', 'STRATEGY ARTICLES']} /></Link>
    </div>
  );

  const body = (
    <>
      <section className="lp-container">
        <div className="lp-divider" aria-hidden="true"></div>
        <h2 className="lp-big" data-reveal>TWO PAGES.<br /><span className="o">FIVE NEW ECQs.</span><br />ONE EXECUTIVE STORY.</h2>
      </section>

      <div className="lp-line" aria-hidden="true"></div>

      <section className="lp-container lp-bottom" data-reveal>
        <div className="lp-quote">
          <p>YOUR EXPERIENCE<br /><span className="o">GOT YOU HERE.</span></p>
          <p>YOUR STRATEGY<br /><span className="o">DETERMINES WHAT<br />COMES NEXT.</span></p>
        </div>
        <img className="lp-mid-butterfly" src={A + "assets/images/landing/ses-butterfly-mid.png"} alt="" />
        <a className="lp-cta" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">BOOK A<br />DISCOVERY CALL</a>
      </section>

      <div className="lp-line" aria-hidden="true"></div>
    </>
  );

  return (
    <LandingShell
      variant="ses"
      title="SES Leaders and Candidates"
      art={A + "assets/images/landing/ses-butterfly-hero.png"}
      footer={{ butterfly: A + 'assets/images/landing/ses-butterfly-footer.png' }}
    >
      {{ hero, actions, body }}
    </LandingShell>
  );
}
