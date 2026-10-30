import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { APPLY_PATH } from '../data/content.js';

/* Amy's "Executive Career Positioning Check": a four-question self-reflection
   that turns into a positioning profile with a consultation nudge. Each option
   carries a weight (3 = sharp positioning, 0 = no strategy yet); the total maps
   to one of four profiles. It is a reflection aid, not a prediction -- the
   disclaimer says so, as Amy asked. */

const QUESTIONS = [
  {
    q: 'If your job title disappeared tomorrow, what would make you valuable?',
    options: [
      { label: 'My leadership results and business impact', score: 3 },
      { label: 'My years of experience and seniority', score: 1 },
      { label: 'My specialized knowledge and credentials', score: 2 },
      { label: "I'm not sure how to explain it", score: 0 },
    ],
  },
  {
    q: 'How clearly have you identified your next career move?',
    options: [
      { label: 'I know my target roles and organizations', score: 3 },
      { label: 'I have several possible directions', score: 2 },
      { label: 'I know what I want to leave, not where to go', score: 1 },
      { label: "I'm exploring without a clear target", score: 0 },
    ],
  },
  {
    q: 'What happens when a recruiter reads your LinkedIn profile?',
    options: [
      { label: 'They immediately understand my executive value', score: 3 },
      { label: 'They see impressive experience but limited results', score: 2 },
      { label: 'They mostly see titles and responsibilities', score: 1 },
      { label: "I'm not sure what impression it creates", score: 0 },
    ],
  },
  {
    q: 'How are you currently creating new career opportunities?',
    options: [
      { label: 'Targeted outreach and strategic relationships', score: 3 },
      { label: 'Occasional networking and applications', score: 2 },
      { label: 'Mostly applying to advertised positions', score: 1 },
      { label: "I haven't developed a strategy yet", score: 0 },
    ],
  },
];

/* Four profiles, strongest first. `min` is the lowest total that lands here. */
const PROFILES = [
  {
    min: 10,
    name: 'Clear, Compelling Positioning',
    tagline: 'Your value is obvious — now make every touchpoint prove it.',
    body: [
      'You already think like a candidate the private sector competes for: you lead with results, you know where you are going, and your materials speak the language of impact.',
      'At this level the edge is in execution — making sure your resume, LinkedIn, and interview narrative tell one sharp, consistent story and that you are reaching the right decision-makers before roles are ever posted.',
    ],
  },
  {
    min: 7,
    name: 'Strong Experience, Emerging Strategy',
    tagline: 'The track record is there. The positioning needs sharpening.',
    body: [
      'Your experience is genuinely impressive, but it is not yet translated into a clear, market-facing value proposition. Employers see a capable leader — they do not yet see exactly where you fit or what you would deliver next.',
      'A focused positioning strategy would turn your accomplishments into measurable business outcomes and align your resume, LinkedIn, and outreach around the roles you actually want.',
    ],
  },
  {
    min: 4,
    name: 'Underleveraged Value',
    tagline: 'A strong career that the market is reading at a discount.',
    body: [
      'You have led and delivered at a high level, but your value is being communicated as titles, duties, and tenure rather than impact. That gap is why qualified leaders get overlooked.',
      'The work here is translation and direction: defining your target roles, surfacing the results that prove your worth, and rebuilding your materials so hiring decision-makers immediately understand your level.',
    ],
  },
  {
    min: 0,
    name: 'Ready for a Positioning Reset',
    tagline: 'Everything you have earned, finally made obvious.',
    body: [
      'Right now the hardest part is clarity — where you are going and how to explain the value you have built. That is not a reflection of your ability; it is the most common place accomplished leaders start.',
      'A strategy-first reset establishes your direction, identifies your differentiators, and builds the positioning, materials, and outreach plan to pursue your next move with confidence.',
    ],
  },
];

const MAX = QUESTIONS.length * 3;

function profileFor(total) {
  return PROFILES.find((p) => total >= p.min);
}

export default function CareerCheck() {
  const [stage, setStage] = useState('intro'); // 'intro' | 'quiz' | 'result'
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));

  const start = () => { setStage('quiz'); setStep(0); };
  const reset = () => { setStage('intro'); setStep(0); setAnswers(Array(QUESTIONS.length).fill(null)); };

  const choose = (score) => {
    const next = answers.slice();
    next[step] = score;
    setAnswers(next);
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else setStage('result');
  };

  const total = answers.reduce((n, s) => n + (s ?? 0), 0);
  const profile = profileFor(total);
  const pct = Math.round((total / MAX) * 100);

  return (
    <Layout title="Executive Career Positioning Check">
      <section className="cc">
        <div className="cc-inner">
          {stage === 'intro' && (
            <div className="cc-intro">
              <p className="cc-eyebrow">Executive Career Positioning Check</p>
              <h1>Would the Private Sector Hire You at Your Level?</h1>
              <p className="cc-lede">
                Your experience is impressive. But is your value obvious to the people making hiring decisions?
              </p>
              <p className="cc-promise">4 questions · 2 minutes · a fresh perspective</p>
              <button type="button" className="btn btn-orange btn-wide cc-start" onClick={start}>
                DISCOVER YOUR CAREER POSITIONING
              </button>
              <p className="cc-for">
                Built for federal executives, military leaders, and corporate executives considering their next move.
              </p>
            </div>
          )}

          {stage === 'quiz' && (
            <div className="cc-quiz">
              <div className="cc-progress" aria-hidden="true">
                {QUESTIONS.map((_, i) => (
                  <span key={i} className={'cc-dot' + (i <= step ? ' is-on' : '')} />
                ))}
              </div>
              <p className="cc-step">Question {step + 1} of {QUESTIONS.length}</p>
              <h2 className="cc-q">{QUESTIONS[step].q}</h2>
              <ul className="cc-opts">
                {QUESTIONS[step].options.map((o) => (
                  <li key={o.label}>
                    <button
                      type="button"
                      className={'cc-opt' + (answers[step] === o.score ? ' is-sel' : '')}
                      onClick={() => choose(o.score)}
                    >
                      {o.label}
                    </button>
                  </li>
                ))}
              </ul>
              {step > 0 && (
                <button type="button" className="cc-back" onClick={() => setStep(step - 1)}>
                  &larr; Previous question
                </button>
              )}
            </div>
          )}

          {stage === 'result' && profile && (
            <div className="cc-result">
              <p className="cc-eyebrow">Your career positioning profile</p>
              <div className="cc-meter" role="img" aria-label={`Positioning strength ${pct}%`}>
                <span className="cc-meter-fill" style={{ width: `${pct}%` }} />
              </div>
              <h1 className="cc-profile-name">{profile.name}</h1>
              <p className="cc-profile-tag">{profile.tagline}</p>
              {profile.body.map((t) => <p key={t} className="cc-profile-body">{t}</p>)}

              <div className="cc-cta">
                <h3>See how a strategist would position you.</h3>
                <p>
                  In a complimentary consultation, Amy maps your experience to the roles you want and shows you
                  where your value is getting lost — and how to make it obvious.
                </p>
                <Link className="btn btn-orange btn-wide" to={APPLY_PATH}>
                  SCHEDULE A COMPLIMENTARY CONSULTATION
                </Link>
                <button type="button" className="cc-retake" onClick={reset}>Retake the check</button>
              </div>

              <p className="cc-disclaimer">
                Illustrative self-reflection assessment, not a validated hiring or career-success prediction.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
