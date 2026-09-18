/* Client contact details (from Amy, 14 Sept 2026) */
export const contact = {
  email: 'amysindicic@gmail.com',
  phone: '410-441-5056',
  phoneTel: '+14104415056',
};

export const social = {
  linkedin: 'https://www.linkedin.com/in/amy-sindicic-career-strategist/',
  youtube: 'https://www.youtube.com/@transformations123',
  instagram: 'https://www.instagram.com/amysindicic123/',
  upwork: 'https://www.upwork.com/freelancers/amysindicic',
};

export const BOOKING_URL = 'https://amysindicic.simplybook.me/v2/#book';

export const OPM_PDF = 'https://www.opm.gov/chcoc/latest-memos/hiring-and-talent-development-for-the-senior-executive-service.pdf';

/* ---------- article hubs (outlines from the client Google Doc) ---------- */
export const hubs = {
  military: {
    title: 'MILITARY TRANSITION STRATEGY',
    eyebrow: 'MILITARY LEADERS',
    lead: 'Three highly targeted articles written specifically for military leaders moving into corporate leadership.',
    back: { to: '/military', label: 'Back to Military Leaders' },
    articles: [
      { date: 'Mon, Sept. 14', title: 'Your Military Title Is Not Your Civilian Value',
        outline: ['Why rank and military titles do not automatically communicate market value', 'Separate title from scope, complexity, leadership and results', 'Identify the business problems you have already solved', 'Translate military accomplishments without minimizing them', 'Determine which civilian leadership levels match your actual scope', 'Examples of military language translated into executive business language'],
        closing: 'Translation is not simply changing terminology. It is identifying value.' },
      { date: 'Mon, Sept. 21', title: 'What Corporate Roles Are You Actually Qualified For?',
        outline: ['Why starting with job titles is often the wrong approach', 'Assess leadership scope', 'Identify functional expertise', 'Identify transferable capabilities', 'Evaluate industries and markets', 'Determine realistic Director, VP and executive targets', 'Build a focused target-role strategy'],
        closing: 'What level am I really positioned for? This article answers that question.' },
      { date: 'Mon, Sept. 28', title: 'Before You Write Your Military Transition Resume, Build the Strategy',
        outline: ['Why the resume should not be step one', 'Define the target', 'Translate military experience into business value', 'Identify the accomplishments that support the target', 'Develop the executive value proposition', 'Then build the resume, LinkedIn profile and outreach strategy'],
        closing: 'Everyone has AI. Not everyone has a strategy.' },
    ],
  },
  government: {
    title: 'GOVERNMENT CAREER STRATEGY',
    eyebrow: 'GOVERNMENT LEADERS',
    lead: 'Your experience is valuable. The challenge is making the market understand why.',
    intro: 'I help government leaders identify where their experience creates value beyond their current role, translate public-sector leadership into market-relevant positioning, and build a strategy for what comes next.',
    back: { to: '/government', label: 'Back to Government Leaders' },
    articles: [
      { date: 'Thu, Sept. 17', title: 'Your Government Title Is Not Your Market Value',
        outline: ['Why government titles and grades don’t translate cleanly outside government', 'Scope vs. title', 'Budget, people, programs and stakeholder complexity', 'Turning public-sector accomplishments into market value', 'Examples of government language translated into business language'] },
      { date: 'Thu, Sept. 24', title: 'What Roles Are You Actually Qualified For Outside Government?',
        outline: ['Stop beginning with job titles', 'Assess functional expertise', 'Examine leadership scope and decision authority', 'Identify transferable value', 'Determine realistic Director, VP, Chief of Staff, COO and other targets', 'Narrow the market before writing the resume'] },
      { date: 'Thu, Oct. 1', title: 'Before You Rewrite Your Federal Resume, Build Your Transition Strategy',
        outline: ['Federal resume vs. private-sector resume is not simply a formatting change', 'Define the target first', 'Determine what experience matters to that target', 'Translate accomplishments', 'Build the value proposition', 'Then create resume, LinkedIn, networking and outreach materials'] },
    ],
  },
  corporate: {
    title: 'EXECUTIVE CAREER STRATEGY',
    eyebrow: 'CORPORATE EXECUTIVES',
    lead: 'Three articles that walk a corporate executive from value, to fit, to market.',
    hideOutline: true,
    journey: [['ARTICLE 1', 'What is my value?'], ['ARTICLE 2', 'Where does that value fit?'], ['ARTICLE 3', 'How do I take that value to market?']],
    back: { to: '/corporate', label: 'Back to Corporate Executives' },
    articles: [
      { title: 'Your Corporate Title Is Not Your Market Value',
        core: 'A title tells the market where you sit in one organization. It does not necessarily communicate the scale of your leadership or the value you can create elsewhere.',
        outline: ['Why Director, VP, SVP and C-suite titles mean different things across organizations', 'Separate title from actual leadership scope', 'Evaluate team size, budget, revenue influence, geography, complexity and decision authority', 'Identify the business problems you are known for solving', 'Distinguish responsibilities from measurable executive impact', 'Identify capabilities that transfer across companies and industries', 'Translate accomplishments into an executive-level value proposition', 'Position yourself based on scope + impact + market relevance, not title alone', 'Examples of repositioning the same executive experience for different target roles'],
        closing: 'Your title describes where you’ve been. Your value determines where you can go next.' },
      { title: 'What Roles Are You Actually Qualified For?',
        core: 'Don’t begin an executive transition by searching for titles. First determine where your experience creates the greatest market value.',
        outline: ['Why starting with job titles can lead executives in the wrong direction', 'Assess your functional expertise', 'Examine leadership scope and decision authority', 'Identify the problems you are equipped to solve', 'Separate industry-specific knowledge from transferable leadership capabilities', 'Determine whether your experience supports Director, VP, SVP, Chief of Staff, COO or other executive targets', 'Evaluate adjacent functions and industries', 'Identify potential gaps between your current positioning and desired level', 'Narrow the market to a manageable group of target roles', 'Build a target-company strategy', 'Develop positioning for each realistic career direction'],
        closing: 'Instead of asking “What jobs can I get?”, ask “Where does my experience create the greatest value?”' },
      { title: 'Before You Update Your Resume, Build the Strategy',
        core: 'An executive resume cannot compensate for an unclear career direction.',
        outline: ['Why the resume should not be the first step in an executive transition', 'Define what you want next before rewriting your career history', 'Identify your target roles, industries and organizations', 'Determine which parts of your experience matter to those targets', 'Identify the accomplishments that prove your value', 'Build your executive value proposition', 'Decide what should be emphasized, minimized or removed', 'Translate accomplishments into business impact', 'Develop differentiated positioning rather than generic executive language', 'Build the resume around that positioning', 'Align LinkedIn with the same executive narrative', 'Develop networking, outreach and decision-maker messaging', 'Use the strategy consistently through interviews and negotiations'],
        note: 'Everyone has AI. Not everyone has a strategy.',
        closing: 'Strategy → Positioning → Resume → Visibility → Opportunity' },
    ],
  },
};

/* ---------- sample / coming-soon pages ---------- */
export const samples = {
  military: {
    title: 'MILITARY RESUME SAMPLES', eyebrow: 'MILITARY LEADERS',
    lead: 'Selected before-and-after sections that show how military leadership translates into executive value: the headline, the executive summary and several transformed accomplishments.',
    back: { to: '/military', label: 'Back to Military Leaders' },
    cards: ['Senior Military Leader → Corporate Operations Executive', 'Military Leader → Chief of Staff / Strategic Operations', 'Military Leader → Program / Portfolio Leadership'],
  },
  government: {
    title: 'GOVERNMENT RESUME SAMPLES', eyebrow: 'GOVERNMENT LEADERS',
    lead: 'Before-and-after sections showing how public-sector leadership is repositioned for the private-sector market.',
    back: { to: '/government', label: 'Back to Government Leaders' },
    soon: { title: 'Samples are being updated.', text: 'New government-to-private-sector resume samples are being prepared. Check back soon, or book a discovery call to talk through your own transition.' },
  },
  corporate: {
    title: 'EXECUTIVE RESUME SAMPLES', eyebrow: 'CORPORATE EXECUTIVES',
    lead: 'Real examples. Real results.',
    back: { to: '/corporate', label: 'Back to Corporate Executives' },
    soon: { title: 'Samples are being updated.', text: 'New executive resume samples are being prepared. Check back soon, or book a discovery call to talk through your next strategic move.' },
  },
  ses: {
    title: 'SES RESUME AND ECQ SAMPLES', eyebrow: 'SES LEADERS AND CANDIDATES',
    lead: 'Two pages. Five new ECQs. One executive story.',
    back: { to: '/ses', label: 'Back to SES Leaders and Candidates' },
    soon: { title: 'Samples are being updated.', text: 'SES resume and ECQ samples aligned to the current OPM guidance are being prepared. Check back soon, or book a discovery call.', link: { href: OPM_PDF, label: 'Read the current OPM SES guidance →' } },
  },
  sesArticles: {
    title: 'SES STRATEGY ARTICLES', eyebrow: 'SES LEADERS AND CANDIDATES',
    lead: 'Is your strategy ready?',
    back: { to: '/ses', label: 'Back to SES Leaders and Candidates' },
    soon: { title: 'Articles coming soon.', text: 'SES strategy articles are on the way. In the meantime, book a discovery call to talk through your SES application strategy.' },
  },
};
