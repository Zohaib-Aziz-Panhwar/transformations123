/* Five service categories — same list on the home page and the Services page.
   Offerings link to Amy's Upwork profile until she supplies per-project links. */
import { social } from './content.js';

const UPWORK = social.upwork;

export const services = [
  {
    slug: 'job-search-strategy',
    name: ['JOB SEARCH', 'STRATEGY'],
    tagline: 'Target the right opportunities and build visibility.',
    hero: 'job-search.jpg', butterfly: 'job-search-butterfly.png',
    heroAlign: 'left',
    offerings: [
      { title: 'Senior Leader Strategic Clarity Intensive', href: UPWORK },
      { title: 'Strategic Resume and Career Positioning', href: UPWORK },
      { title: 'Senior Executive Career Strategy and Advisory', href: UPWORK },
    ],
    outcome: ['BUILD A FOCUSED', 'SEARCH STRATEGY'],
    outcomeBg: 'job-search-outcome.jpg',
  },
  {
    slug: 'executive-positioning',
    name: ['EXECUTIVE', 'POSITIONING'],
    accent: 1,
    tagline: 'Define and communicate your executive value.',
    hero: null, butterfly: 'executive-positioning-butterfly.png',
    heroAlign: 'left',
    offerings: [
      { title: 'Strategic Leadership Advancement Intensive', href: UPWORK },
      { title: 'Senior Executive Career Strategy and Advisory', href: UPWORK },
      { title: 'Senior Leader Career & Work-Life Strategy Intensive', href: UPWORK },
      { title: 'Complete SES Application Package', to: '/ses-package' },
      { title: '360° Leadership Assessment', href: UPWORK },
    ],
    outcome: ['POSITION YOUR LEADERSHIP', 'FOR WHAT’S NEXT'],
  },
  {
    slug: 'personal-branding',
    name: ['PERSONAL', 'BRANDING'],
    accent: 1,
    tagline: 'Strengthen your resume, LinkedIn, and leadership presence.',
    hero: 'personal-branding.jpg', butterfly: 'personal-branding-butterfly.png',
    heroAlign: 'left',
    offerings: [
      { title: 'Strategic Resume and Career Positioning', href: UPWORK },
      { title: 'LinkedIn Profile Development', href: UPWORK },
      { title: 'Customized Cover Letters', href: UPWORK },
    ],
    outcome: ['EVERYONE HAS AI.', 'NOT EVERYONE HAS A STRATEGY.'],
    outcomeAccent: 1,
  },
  {
    slug: 'interview-prep',
    name: ['INTERVIEW', 'PREP'],
    tagline: 'Communicate your value with confidence.',
    hero: null, butterfly: 'interview-prep-butterfly.png',
    heroAlign: 'left',
    feature: { title: 'INTERVIEW PREPARATION AND MOCK INTERVIEWS', href: UPWORK },
    includes: [
      'Leadership Story Development',
      'Behavioral & Situational Interview Preparation',
      'Targeted or Full Mock Interview',
      'Feedback on Structure, Delivery & Presence',
      'Salary Negotiation Guidance Available',
    ],
    outcome: ['PREPARE TO COMMUNICATE', 'AT YOUR LEVEL'],
  },
  {
    slug: 'career-coaching',
    name: ['CAREER', 'COACHING'],
    tagline: 'Gain clarity and move forward with purpose.',
    hero: 'career-coaching.jpg', butterfly: 'career-coaching-butterfly.png',
    heroAlign: 'left',
    offerings: [
      { title: 'Senior Leader Career & Work-Life Strategy Intensive', href: UPWORK },
      { title: 'DISC and Personality Insights', href: UPWORK },
      { title: '360° Leadership Assessment', href: UPWORK },
      { title: 'Strategic Leadership Advancement Intensive', href: UPWORK },
      { title: 'Senior Executive Career Strategy and Advisory', href: UPWORK },
    ],
    outcome: ['MOVE FORWARD WITH', 'GREATER CLARITY'],
  },
];

export const UPWORK_LABEL = 'VISIT UPWORK';
