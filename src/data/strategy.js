/* The four career-strategy pages, one per group Amy works with.

   The headlines, the four column titles and the closing straplines are Amy's,
   from the layouts she sent. The introductions and the line under each column
   are written here to match them -- they are the part of these pages that is
   not her own wording, and are worth reading over. */

const A = 'assets/images/landing/';

export const strategies = [
  {
    key: 'government',
    slug: 'government-strategy',
    audience: 'GOVERNMENT LEADERS',
    kicker: 'CAREER STRATEGY',
    heading: ['TURN PUBLIC IMPACT INTO', 'PRIVATE-SECTOR OPPORTUNITIES'],
    hero: A + 'gov-hero.jpg',
    intro: 'Your work already carries scope, budget, risk and accountability. What it does not carry is language the private sector reads quickly. Strategy closes that gap: it decides which of your experience matters most, who it matters to, and how to say it so a hiring committee recognises the value without translation.',
    pillars: [
      { title: 'CLARITY', text: 'Know where you are going. Which directions your experience genuinely opens, and which are a poor use of it.' },
      { title: 'POSITIONING', text: 'Define your value. Programme scale, budget authority and regulatory judgement, stated in business terms.' },
      { title: 'VISIBILITY', text: 'Strengthen your presence. A resume and LinkedIn profile that reach the people who decide.' },
      { title: 'OPPORTUNITY', text: 'Move forward strategically. Target the roles that fit, and go into them able to answer for your record.' },
    ],
    strapline: ['SAME LEADERSHIP,', 'BIGGER POSSIBILITIES.'],
    back: { to: '/government', label: 'Back to Government Leaders' },
  },
  {
    key: 'ses',
    slug: 'ses-strategy',
    audience: 'SES CANDIDATES',
    kicker: 'EXECUTIVE STRATEGY',
    heading: ['POSITION YOURSELF TO LEAD', 'AT THE HIGHEST LEVEL'],
    hero: A + 'ses-package-hero.jpg',
    intro: 'An SES application is not a longer resume. It is a case, judged against the Executive Core Qualifications by people reading dozens of them. Strategy decides which of your experiences carry that case, how each narrative is built, and what a panel should remember when they put your package down.',
    pillars: [
      { title: 'CLARITY', text: 'Know where you are going. Whether the SES is the right next step, and which posts suit your record.' },
      { title: 'POSITIONING', text: 'Define your value. ECQs and TQs built on evidence rather than on the language of the vacancy.' },
      { title: 'VISIBILITY', text: 'Strengthen your presence. A package that reads as executive to the panel assessing it.' },
      { title: 'OPPORTUNITY', text: 'Move forward strategically. An interview you can hold at the level you are applying to.' },
    ],
    strapline: ['FROM EXECUTIVE EXPERIENCE', 'TO EXECUTIVE IMPACT.'],
    back: { to: '/ses', label: 'Back to SES Leaders' },
  },
  {
    key: 'military',
    slug: 'military-strategy',
    audience: 'MILITARY LEADERS',
    kicker: 'CAREER STRATEGY',
    heading: ['YOUR MISSION CONTINUES', 'IN A NEW ARENA'],
    hero: A + 'mil-hero.jpg',
    intro: 'Rank tells a civilian employer very little. What you actually did — people led, resources held, decisions made under pressure — tells them a great deal, once it is put in terms they use. Strategy is the work of finding that, not of swapping one vocabulary for another.',
    pillars: [
      { title: 'CLARITY', text: 'Know where you are going. Which civilian levels match the scope you genuinely held.' },
      { title: 'POSITIONING', text: 'Define your value. Command experience read as operations, risk, readiness and people.' },
      { title: 'VISIBILITY', text: 'Strengthen your presence. Materials free of jargon that still carry the weight of the record.' },
      { title: 'OPPORTUNITY', text: 'Move forward strategically. Interviews where the panel understands what you brought.' },
    ],
    strapline: ['DIFFERENT UNIFORM,', 'SAME LEADERSHIP IMPACT.'],
    back: { to: '/military', label: 'Back to Military Leaders' },
  },
  {
    key: 'corporate',
    slug: 'executive-strategy',
    audience: 'CORPORATE LEADERS',
    kicker: 'CAREER STRATEGY',
    heading: ['TAKE WHAT YOU’VE', 'BUILT FURTHER'],
    hero: A + 'corp-hero.jpg',
    intro: 'At this level the problem is rarely a lack of experience. It is that the experience is described the way the last role defined it, not the way the next one will be judged. Strategy decides where your record creates the most value now, and makes that the thing people see first.',
    pillars: [
      { title: 'CLARITY', text: 'Know where you are going. Where your experience is worth most, rather than simply what comes next.' },
      { title: 'POSITIONING', text: 'Define your value. Scope, P&L and organisational impact stated without hedging.' },
      { title: 'VISIBILITY', text: 'Strengthen your presence. A profile that reaches recruiters and boards, not only applicant systems.' },
      { title: 'OPPORTUNITY', text: 'Move forward strategically. Conversations that start from your value rather than your last title.' },
    ],
    strapline: ['NEXT CHAPTER,', 'GREATER IMPACT.'],
    back: { to: '/corporate', label: 'Back to Corporate Executives' },
  },
];

export const strategyBySlug = Object.fromEntries(strategies.map(s => [s.slug, s]));
