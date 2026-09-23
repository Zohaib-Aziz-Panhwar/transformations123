/* Five service categories — same list on the home page and the Services page.
   Each offering links to its Upwork project page (links from Amy, 22 Sept 2026). */

const U = 'https://www.upwork.com/services/product/';
const L = {
  coaching5h:  U + 'lifestyle-5-hours-of-career-coaching-1658702052510281728?ref=fl_profile',
  atsResume:   U + 'writing-translation-an-ats-compatible-resume-options-disc-assessment-cover-letter-linkedin-1424861678735282176?ref=fl_profile',
  execResume:  U + 'writing-translation-an-executive-resume-for-249-1842749702565552152?ref=fl_profile',
  lifeCoach:   U + 'lifestyle-life-coaching-to-help-you-through-transitions-and-transformation-1903412302920426077?ref=fl_profile',
  sesPackage:  U + 'writing-translation-ses-application-package-with-ecqs-tqs-resume-interview-coaching-2073253373044323863?ref=fl_profile',
  assess360:   U + 'lifestyle-a-360-leadership-assessment-for-career-and-executive-growth-2074937746803334428?ref=fl_profile',
  linkedin:    U + 'writing-translation-a-linkedin-profile-created-or-revamped-1657894337423900672?ref=fl_profile',
  coverLetter: U + 'writing-translation-a-cover-letter-customized-for-a-specific-job-or-purpose-1424851361213628416?ref=fl_profile',
  interview:   U + 'lifestyle-2-hr-to-5-hrs-interview-preparation-from-a-certified-interview-coach-1481068888113246208?ref=fl_profile',
  disc:        U + 'lifestyle-a-disc-assessment-for-career-management-resume-360-or-other-purpose-1633828292839587840?ref=fl_profile',
};

export const services = [
  {
    slug: 'job-search-strategy',
    name: ['JOB SEARCH', 'STRATEGY'],
    tagline: 'Target the right opportunities and build visibility.',
    hero: 'job-search.jpg', butterfly: 'job-search-butterfly.png',
    heroAlign: 'left',
    offerings: [
      { title: 'Senior Leader Strategic Clarity Intensive', href: L.coaching5h },
      { title: 'Strategic Resume and Career Positioning', href: L.atsResume },
      { title: 'Senior Executive Career Strategy and Advisory', href: L.execResume },
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
      { title: 'Strategic Leadership Advancement Intensive', href: L.coaching5h },
      { title: 'Senior Executive Career Strategy and Advisory', href: L.execResume },
      { title: 'Senior Leader Career & Work-Life Strategy Intensive', href: L.lifeCoach },
      { title: 'Complete SES Application Package', href: L.sesPackage, to: '/ses-package' },
      { title: '360° Leadership Assessment', href: L.assess360 },
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
      { title: 'Strategic Resume and Career Positioning', href: L.atsResume },
      { title: 'LinkedIn Profile Development', href: L.linkedin },
      { title: 'Customized Cover Letters', href: L.coverLetter },
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
    feature: { title: 'INTERVIEW PREPARATION AND MOCK INTERVIEWS', href: L.interview },
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
      { title: 'Senior Leader Career & Work-Life Strategy Intensive', href: L.lifeCoach },
      { title: 'DISC and Personality Insights', href: L.disc },
      { title: '360° Leadership Assessment', href: L.assess360 },
      { title: 'Strategic Leadership Advancement Intensive', href: L.coaching5h },
      { title: 'Senior Executive Career Strategy and Advisory', href: L.execResume },
    ],
    outcome: ['MOVE FORWARD WITH', 'GREATER CLARITY'],
  },
];

export const SES_PACKAGE_URL = L.sesPackage;
export const UPWORK_LABEL = 'VIEW DETAILS';
