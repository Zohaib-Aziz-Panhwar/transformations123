import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { CALENDLY_URL } from '../data/content.js';

const A = import.meta.env.BASE_URL;

/* The apply page. Amy wanted people to tell her about themselves before they
   reach the calendar, so this is a real application form rather than a link.

   On submit it hands everything to Calendly, pre-filled: name and email go
   into Calendly's own fields, and the rest is written into the booking's
   question as a tidy summary, so the answers travel with the appointment.
   When Calendly says the booking is done, we send them to the /booked page. */

const HEAR = [
  'LinkedIn', 'Instagram', 'Upwork', 'Referral from a colleague or friend',
  'Google / search engine', 'Previous client or student', 'Other',
];
const DESCRIBES = [
  'Federal Government Leader', 'SES Candidate / Senior Federal Leader',
  'Military Leader / Veteran', 'Corporate Executive / Senior Leader',
  'Healthcare Leader', 'IT / Technology Leader', 'Other Senior Professional',
];
const COMPENSATION = [
  'Under $100K', '$100K–$125K', '$125K–$150K', '$150K–$175K',
  '$175K–$200K', '$200K–$250K', '$250K+', 'Not sure yet',
];
const TIMELINE = [
  'Immediately', 'Within 30 days', 'Within 1–3 months', 'Within 3–6 months',
  'Within 6–12 months', 'More than 12 months', 'I am exploring my options',
];

const BLANK = {
  firstName: '', lastName: '', email: '', phone: '',
  hear: '', describes: '', challenge: '', opportunity: '',
  compensation: '', timeline: '', goals: '', linkedin: '', invest: '',
};

export default function Book() {
  const navigate = useNavigate();
  const [f, setF] = useState(BLANK);
  const [errors, setErrors] = useState({});
  const calendlyReady = useRef(false);

  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  /* Load the Calendly widget once, and listen for the "booked" message so we
     can take people to the congratulations page afterwards. */
  useEffect(() => {
    if (!document.getElementById('calendly-css')) {
      const link = document.createElement('link');
      link.id = 'calendly-css';
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }
    if (!document.getElementById('calendly-js')) {
      const s = document.createElement('script');
      s.id = 'calendly-js';
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      s.onload = () => { calendlyReady.current = true; };
      document.body.appendChild(s);
    } else {
      calendlyReady.current = true;
    }

    const onMessage = (e) => {
      if (e.data && e.data.event === 'calendly.event_scheduled') {
        navigate('/booked');
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [navigate]);

  function validate() {
    const e = {};
    const required = ['firstName', 'lastName', 'email', 'phone', 'hear',
      'describes', 'challenge', 'opportunity', 'compensation', 'timeline',
      'goals', 'invest'];
    required.forEach((k) => { if (!f[k].trim()) e[k] = true; });
    if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = true;
    if (f.invest.trim() && f.invest.trim().toUpperCase() !== 'YES') e.invest = 'yes';
    return e;
  }

  function summary() {
    const lines = [
      ['How did you hear about me', f.hear],
      ['Which best describes you', f.describes],
      ['Biggest career challenge / frustration', f.challenge],
      ['Opportunity / direction considering', f.opportunity],
      ['Target compensation range', f.compensation],
      ['Timeline for next move', f.timeline],
      ['Goals for next career move', f.goals],
      ['LinkedIn profile', f.linkedin || '(not provided)'],
      ['Phone', f.phone],
      ['Ready to invest ($499–$1,999)', f.invest.trim().toUpperCase()],
    ];
    return lines.map(([k, v]) => `${k}: ${v}`).join('\n');
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = document.querySelector('.bk-field.is-error');
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    const prefill = {
      name: `${f.firstName.trim()} ${f.lastName.trim()}`.trim(),
      email: f.email.trim(),
      customAnswers: { a1: summary() },
    };
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL, prefill });
    } else {
      // Widget still loading -- fall back to a pre-filled scheduling link.
      const u = new URL(CALENDLY_URL);
      u.searchParams.set('name', prefill.name);
      u.searchParams.set('email', prefill.email);
      u.searchParams.set('a1', prefill.customAnswers.a1);
      window.open(u.toString(), '_blank', 'noopener');
    }
  }

  const cls = (k) => `bk-field${errors[k] ? ' is-error' : ''}`;

  return (
    <Layout title="Apply to Work With Me">
      <section className="bkf">
        <div className="bkf-inner">
          {/* Branded header, in the spirit of Amy's artwork. */}
          <header className="bkf-head">
            <div className="bkf-head-brand">
              <img src={`${A}assets/images/amy-logo.png`} alt="" className="bkf-bf" />
              <div>
                <div className="bkf-logo">Transformations<span>123</span></div>
                <div className="bkf-name">AMY SINDICIC</div>
                <div className="bkf-kicker">Career Strategy &nbsp;•&nbsp; Leadership &nbsp;•&nbsp; What&rsquo;s Next</div>
              </div>
            </div>
            <div className="bkf-head-title">
              <h1>30-Minute<br />Career Strategy Consultation</h1>
              <p>Clarity. Position. Plan. Move Forward.</p>
            </div>
          </header>

          <form className="bkf-form" onSubmit={handleSubmit} noValidate>
            <div className="bk-row">
              <label className={cls('firstName')}>
                <span>First Name <b>*</b></span>
                <input type="text" value={f.firstName} onChange={set('firstName')} placeholder="First name" />
              </label>
              <label className={cls('lastName')}>
                <span>Last Name <b>*</b></span>
                <input type="text" value={f.lastName} onChange={set('lastName')} placeholder="Last name" />
              </label>
            </div>

            <div className="bk-row">
              <label className={cls('email')}>
                <span>Email <b>*</b></span>
                <input type="email" value={f.email} onChange={set('email')} placeholder="Email address" />
              </label>
              <label className={cls('phone')}>
                <span>Phone Number <b>*</b></span>
                <input type="tel" value={f.phone} onChange={set('phone')} placeholder="Phone number" />
              </label>
            </div>

            <label className={cls('hear')}>
              <span>How did you hear about me? <b>*</b></span>
              <select value={f.hear} onChange={set('hear')}>
                <option value="" disabled>Select...</option>
                {HEAR.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </label>

            <label className={cls('describes')}>
              <span>Which best describes you? <b>*</b></span>
              <select value={f.describes} onChange={set('describes')}>
                <option value="" disabled>Select...</option>
                {DESCRIBES.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </label>

            <label className={cls('challenge')}>
              <span>What is the biggest career challenge or frustration you are facing right now? <b>*</b></span>
              <textarea rows="3" value={f.challenge} onChange={set('challenge')}
                placeholder="For example: not getting interviews, unclear direction, transition to private sector, career gap, etc." />
            </label>

            <label className={cls('opportunity')}>
              <span>What type of opportunity or career direction are you considering? <b>*</b></span>
              <textarea rows="3" value={f.opportunity} onChange={set('opportunity')}
                placeholder="For example: industry, function, leadership level, target roles, etc." />
            </label>

            <div className="bk-row">
              <label className={cls('compensation')}>
                <span>What is your target compensation range? <b>*</b></span>
                <select value={f.compensation} onChange={set('compensation')}>
                  <option value="" disabled>Select...</option>
                  {COMPENSATION.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </label>
              <label className={cls('timeline')}>
                <span>What is your timeline for your next career move? <b>*</b></span>
                <select value={f.timeline} onChange={set('timeline')}>
                  <option value="" disabled>Select...</option>
                  {TIMELINE.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </label>
            </div>

            <label className={cls('goals')}>
              <span>What are your goals for your next career move? <b>*</b></span>
              <textarea rows="3" value={f.goals} onChange={set('goals')}
                placeholder="For example: position, industry, leadership level, long-term goals, anything you think will help us." />
            </label>

            <label className={cls('linkedin')}>
              <span>Please provide your LinkedIn profile URL so we may review before our call.</span>
              <input type="url" value={f.linkedin} onChange={set('linkedin')}
                placeholder="https://www.linkedin.com/in/your-name" />
            </label>

            <label className={cls('invest')}>
              <span>Packages range from $499 to $1,999. Type &ldquo;YES&rdquo; to confirm you are ready to invest. <b>*</b></span>
              <input type="text" value={f.invest} onChange={set('invest')} placeholder="YES" />
              {errors.invest === 'yes' && (
                <em className="bk-hint">Please type YES to confirm.</em>
              )}
            </label>

            <button type="submit" className="btn btn-orange btn-wide bkf-submit">
              CHOOSE A TIME
              <svg className="arrow" viewBox="0 0 40 16" aria-hidden="true">
                <path d="M0 8h34M27 1l7 7-7 7" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <p className="bkf-foot">You&rsquo;ll pick a time on the next step. Your answers go straight to Amy.</p>
          </form>
        </div>
      </section>
    </Layout>
  );
}
