/* Downloadable material, carried over from the WordPress site.

   The files themselves are in public/assets/downloads and are the originals,
   byte for byte. The library's titles are written here: on the old site each
   item's name existed only inside its 255x255 thumbnail image, so there was no
   text to copy. The thumbnails come across as well, so the artwork still
   carries the name it always did.

   Their green backdrop was taken off at Amy's request -- the booklets sit on
   the card itself. They are PNGs with transparency, so the card colour can
   change without the images needing to be redone. */

const D = 'assets/downloads/';

export const resumeSamples = {
  slug: 'executive-resume-samples',
  eyebrow: 'SAMPLE MATERIALS',
  title: 'EXECUTIVE RESUME SAMPLES',
  feature: 'assets/images/samples/executive-resume-samples.jpg',
  lead: 'Examples of executive resumes developed for senior leaders pursuing leadership opportunities in the private sector, nonprofit organizations, and government.',
  intro: [
    'These materials are provided to help prospective clients understand the format, structure, branding, and level of detail commonly found in competitive executive resumes.',
  ],
  showsHeading: 'The samples demonstrate:',
  shows: [
    'Executive Branding',
    'Career Summaries',
    'Leadership Accomplishments',
    'Quantifiable Results',
    'Strategic Positioning',
    'Modern Executive Resume Design',
  ],
  downloadsHeading: 'DOWNLOAD SAMPLE MATERIALS',
  downloads: [
    { title: 'Executive Resume Sample #1', file: D + 'EXAMPLE-EXECUTIVE-RESUME-2.pdf', kind: 'PDF', size: '308 KB' },
    { title: 'Executive Resume Sample #2', file: D + 'EXECUTIVE-RESUME-SAMPLE.pdf', kind: 'PDF', size: '363 KB' },
  ],
  closing: {
    title: 'INTERESTED IN STRENGTHENING YOUR EXECUTIVE BRAND?',
    text: [
      'Whether you’re pursuing a senior leadership position, transitioning from government or military service, advancing within your organization, or exploring new executive opportunities, I help leaders develop competitive executive resumes, LinkedIn profiles, personal branding materials, and interview strategies.',
      'Schedule a complimentary consultation to discuss your career goals and determine whether my services may be a good fit.',
    ],
  },
};

export const sesSamples = {
  slug: 'ses-sample-materials',
  eyebrow: 'SAMPLE MATERIALS',
  title: 'SES RESUME SAMPLES',
  feature: 'assets/images/samples/ses-sample-materials.jpg',
  lead: 'A sample package showing an SES resume, ECQs and TQs as they appear in a competitive application.',
  intro: [
    'These materials are provided to help prospective clients understand the format, structure, and level of detail commonly found in competitive SES applications.',
  ],
  showsHeading: 'This sample package includes examples of a:',
  shows: ['SES Resume', 'ECQs', 'TQs'],
  downloadsHeading: 'DOWNLOAD SAMPLE MATERIALS',
  downloads: [
    { title: 'SES Resume Sample', file: D + 'SES-Resume-Sample-Alexandra-Chen.pdf', kind: 'PDF', size: '296 KB' },
    { title: 'SES ECQ Narratives Sample', file: D + 'SES-Sample-ECQ-Narratives-Alexandra-Chen.pdf', kind: 'PDF', size: '210 KB' },
    { title: 'SES TQ Narratives Sample', file: D + 'SES-Sample-TQ-Narratives-Alexandra-Chen.pdf', kind: 'PDF', size: '209 KB' },
  ],
  closing: {
    title: 'INTERESTED IN PURSUING AN SES OPPORTUNITY?',
    text: [
      'Whether you’re applying for your first SES position or refining an existing application, I help federal leaders develop competitive SES resumes, ECQs, TQs, executive branding materials, and interview strategies.',
      'Schedule a complimentary consultation to discuss your goals and determine whether my services may be a good fit.',
    ],
  },
};

/* Two more sample packages, added 29 Sept 2026. Amy's copy, verbatim.

   Deliberately not in the navigation or on the home page: they are reached
   from the military and government pages, where the reader has already said
   which they are. The files themselves are still to come -- downloads is
   empty and the page says so rather than showing an empty heading. */

export const militarySamples = {
  slug: 'military-transition-resume-samples',
  eyebrow: 'SAMPLE MATERIALS',
  title: 'MILITARY TRANSITION RESUME SAMPLES',
  feature: 'assets/images/samples/military-transition-resume-samples.jpg',
  lead: 'Examples of resumes developed for military leaders transitioning into private-sector leadership and executive roles.',
  intro: [
    'These materials are provided to help prospective clients understand how military experience, leadership scope, accomplishments, and specialized expertise can be translated into language that resonates with civilian employers.',
  ],
  showsHeading: 'The samples demonstrate:',
  shows: [
    'Translation of military titles, terminology, and responsibilities',
    'Clear communication of leadership scope and organizational impact',
    'Alignment with targeted private-sector roles and industries',
    'Emphasis on measurable accomplishments and transferable value',
    'Executive-level branding, positioning, and presentation',
  ],
  downloadsHeading: 'DOWNLOAD SAMPLE MATERIALS',
  downloads: [],
  closing: {
    title: 'EVERY ENGAGEMENT BEGINS WITH STRATEGY',
    text: [
      'Each client engagement begins with strategy. Your career direction, leadership value, target opportunities, and transferable strengths are clarified before your resume is developed.',
    ],
  },
};

export const governmentSamples = {
  slug: 'government-to-private-sector-resume-samples',
  eyebrow: 'SAMPLE MATERIALS',
  title: 'GOVERNMENT-TO-PRIVATE-SECTOR RESUME SAMPLES',
  feature: 'assets/images/samples/government-to-private-sector-resume-samples.jpg',
  lead: 'Examples of resumes developed for government leaders pursuing leadership and executive opportunities in the private and nonprofit sectors.',
  intro: [
    'These materials are provided to help prospective clients understand how public-sector leadership, program complexity, organizational scope, and mission-driven accomplishments can be translated into compelling business value.',
  ],
  showsHeading: 'The samples demonstrate:',
  shows: [
    'Translation of government titles and terminology',
    'Positioning of leadership scope beyond grade level or agency title',
    'Communication of budget, workforce, program, and operational impact',
    'Alignment with realistic private-sector roles and industries',
    'Emphasis on transferable capabilities and measurable results',
    'Strategic executive branding and market-focused presentation',
  ],
  downloadsHeading: 'DOWNLOAD SAMPLE MATERIALS',
  downloads: [],
  closing: {
    title: 'YOUR GOVERNMENT TITLE IS NOT YOUR MARKET VALUE',
    text: [
      'Every engagement begins by assessing your leadership scope, accomplishments, strengths, and transferable value before developing a targeted private-sector resume.',
    ],
  },
};

const T = 'assets/images/library/';

export const resumesLibrary = {
  slug: 'resumes-library',
  eyebrow: 'BY AMY SINDICIC',
  title: 'RESUMES LIBRARY',
  lead: 'Guides, checklists and templates to use on your own, free to download.',
  items: [
    {
      title: 'Resume Template',
      note: 'A Word template to build your own resume on.',
      file: D + 'Transformations-123-Resume-Template-.docx',
      thumb: T + 'resume-template-thumbnail-255-x-255-px.png',
      kind: 'DOCX', size: '21 KB',
    },
    {
      title: '5 Friendly Moves to Land Your Next Private-Sector Job Using LinkedIn',
      note: 'Using LinkedIn without cold outreach.',
      file: D + 'Master-Copy-5-Friendly-Moves-to-Land-Your-Next-Private-Sector-Job-Using-LinkedIn.pdf',
      thumb: T + '5-friendly-moves-255-x-255-px.png',
      kind: 'PDF', size: '4.2 MB',
    },
    {
      title: 'The Private Sector Pivot',
      note: 'A cover letter that translates public-sector experience.',
      file: D + 'AmySiindicic-cover-let-2-1.pdf',
      thumb: T + 'the-private-sector-pivot-square-255-x-25.png',
      kind: 'PDF', size: '4.4 MB',
    },
    {
      title: 'LinkedIn Checklist',
      note: 'What a leader’s profile needs, line by line.',
      file: D + 'linkedin-checklist.pdf',
      thumb: T + 'linkedin-checklist-255-x-255-px.png',
      kind: 'PDF', size: '4.2 MB',
    },
    {
      title: 'Beyond Buzzwords: 50 Powerful Resume Verbs',
      note: 'Stronger words for the same achievements.',
      file: D + 'Proof-Copy-Beyond-Buzzwords-50-Powerful-Resume-Verbs.pdf',
      thumb: T + 'beyond-buzzwords-square-255-x-255-px.png',
      kind: 'PDF', size: '4.6 MB',
    },
    {
      title: 'Stop Competing With Hundreds',
      note: 'Reaching the hidden job market.',
      file: D + 'stop-competing-with-hundreds.pdf',
      thumb: T + 'hidden-job-market-255-x-255-px.png',
      kind: 'PDF', size: '4.3 MB',
    },
    {
      title: 'Ten Verbs',
      note: 'Ten verbs worth building accomplishments around.',
      file: D + 'ten-verbs-amy-sindicic.pdf',
      thumb: T + '1o-verbs-square-255-x-255-px.png',
      kind: 'PDF', size: '4.2 MB',
    },
    {
      title: '25 Interview Traps',
      note: 'The questions that catch senior candidates out.',
      file: D + '25-traps.pdf',
      thumb: T + '25-interview-traps-255-x-255-px.png',
      kind: 'PDF', size: '4.2 MB',
    },
    {
      title: 'What Private-Sector Interviews Really Ask For',
      note: 'What the panel is listening for behind the question.',
      file: D + 'What-Private-Sector-Interviews-Really-Ask-For.pdf',
      thumb: T + 'what-industry-interviews-really-ask-for-.png',
      kind: 'PDF', size: '4.2 MB',
    },
  ],
};

/* The SES Samples landing page. A navy hero with the "SES Sample Materials"
   graphic, then one block per fictional candidate: a resume preview, the
   leadership story it tells, and the three files of the package. Added 14 Oct
   2026; rebuilt to Amy's landing-page design 16 Oct 2026. */
export const sesSampleGallery = {
  slug: 'ses-sample-materials',
  eyebrow: 'EXECUTIVE POSITIONING · LEADERSHIP EVIDENCE',
  title: 'SES RESUME SAMPLES',
  subhead: 'Your executive experience needs a clear leadership story.',
  feature: 'assets/images/samples/ses-sample-materials.jpg',
  intro: [
    'The samples on this page are fictionalized. Each one presents an invented senior executive candidate, with a two-page SES resume, Executive Core Qualification (ECQ) narratives, and Technical Qualification (TQ) narratives. Names, contact details, accomplishments, and figures are illustrative only and do not describe real people or real results.',
    'Every sample follows OPM’s 2025 SES guidance: a two-page resume that shows the five new ECQs and the job’s TQs, and narratives written in the Challenge, Context, Action, Result (CCAR) format to prepare for the agency and Qualifications Review Board structured interviews. Use them as models for your own story, not as text to copy.',
  ],
  disclaimer: 'Fictional sample materials. Names, contact details, accomplishments, and figures are illustrative.',
  packages: [
    {
      key: 'financial',
      title: 'Financial Management, Budget & Resource Stewardship',
      resume: 'assets/images/samples/ses-financial-resume.jpg',
      summary: 'This sample presents federal financial expertise as a clear executive leadership story. It highlights multibillion-dollar budget oversight, audit remediation, financial controls, and leadership of a large finance organization, connecting sound resource management to measurable savings, stronger accountability, and funding for mission priorities.',
      downloads: [
        { title: 'SES Resume', file: D + 'SES-Resume-Sample-Daniel-Okafor.pdf' },
        { title: 'ECQ Narratives', file: D + 'SES-ECQ-Narratives-Daniel-Okafor.pdf' },
        { title: 'TQ Narratives', file: D + 'SES-TQ-Narratives-Daniel-Okafor.pdf' },
      ],
    },
    {
      key: 'healthcare',
      title: 'Healthcare Quality, Patient Safety & Oversight',
      resume: 'assets/images/samples/ses-healthcare-resume.jpg',
      summary: 'This sample shows how a frontline clinical career can be developed into a compelling federal executive leadership story. It highlights national healthcare oversight, behavioral health expertise, and organizational reform, connecting clinical investigations and corrective actions to measurable improvements in patient safety and accountability.',
      downloads: [
        { title: 'SES Resume', file: D + 'SES-Resume-Sample-Angela-Torres.pdf' },
        { title: 'ECQ Narratives', file: D + 'SES-ECQ-Narratives-Angela-Torres.pdf' },
        { title: 'TQ Narratives', file: D + 'SES-TQ-Narratives-Angela-Torres.pdf' },
      ],
    },
    {
      key: 'humancapital',
      title: 'Human Capital Strategy & Workforce Transformation',
      resume: 'assets/images/samples/ses-humancapital-resume.jpg',
      summary: 'This sample presents a federal and military leadership career through the lens of enterprise workforce transformation. It emphasizes large-scale hiring reform, HR modernization, cross-agency coordination, and measurable improvements in efficiency, connecting complex personnel operations to executive leadership and mission results.',
      downloads: [
        { title: 'SES Resume', file: D + 'SES-Resume-Sample-Marcus-Ellison.pdf' },
        { title: 'ECQ Narratives', file: D + 'SES-ECQ-Narratives-Marcus-Ellison.pdf' },
        { title: 'TQ Narratives', file: D + 'SES-TQ-Narratives-Marcus-Ellison.pdf' },
      ],
    },
    {
      key: 'legal',
      title: 'Legal Leadership, Regulatory Strategy & Enforcement',
      resume: 'assets/images/samples/ses-legal-resume.jpg',
      summary: 'This sample demonstrates how federal legal expertise can be presented as a strong executive leadership story. It highlights litigation and regulatory oversight, leadership of multidisciplinary legal teams, and modernization of legal operations, connecting complex legal work to measurable cost savings, faster case resolution, and stronger accountability.',
      downloads: [
        { title: 'SES Resume', file: D + 'SES-Resume-Sample-Margaret-Holloway.pdf' },
        { title: 'ECQ Narratives', file: D + 'SES-ECQ-Narratives-Margaret-Holloway.pdf' },
        { title: 'TQ Narratives', file: D + 'SES-TQ-Narratives-Margaret-Holloway.pdf' },
      ],
    },
    {
      key: 'operations',
      title: 'Operations, Infrastructure & Mission Delivery',
      resume: 'assets/images/samples/ses-operations-resume.jpg',
      summary: 'This sample turns federal facilities and military logistics experience into a compelling executive leadership story built on OPM’s five 2025 Executive Core Qualifications. It highlights large-scale workforce and budget oversight, capital program recovery, and emergency response, connecting complex operations to measurable cost savings, improved service delivery, and continuity of essential government services.',
      downloads: [
        { title: 'SES Resume', file: D + 'SES-Resume-Sample-Teresa-Alvarado.pdf' },
        { title: 'ECQ Narratives', file: D + 'SES-ECQ-Narratives-Teresa-Alvarado.pdf' },
        { title: 'TQ Narratives', file: D + 'SES-TQ-Narratives-Teresa-Alvarado.pdf' },
      ],
    },
    {
      key: 'research',
      title: 'Research Commercialization, Intellectual Property & Strategic Partnerships',
      resume: 'assets/images/samples/ses-research-resume.jpg',
      summary: 'This sample presents federal research commercialization as a compelling executive leadership story. It highlights technology transfer, intellectual property management, licensing, and strategic partnerships, connecting scientific and legal expertise to faster commercialization, increased licensing revenue, and innovations that improve care for Veterans.',
      downloads: [
        { title: 'SES Resume', file: D + 'SES-Resume-Sample-Elena-Castellano.pdf' },
        { title: 'ECQ Narratives', file: D + 'SES-ECQ-Narratives-Elena-Castellano.pdf' },
        { title: 'TQ Narratives', file: D + 'SES-TQ-Narratives-Elena-Castellano.pdf' },
      ],
    },
  ],
  closing: sesSamples.closing,
};

/* The Military Transition gallery, in the same shape as the SES gallery but
   with a before/after/cover-letter package per fictional candidate. Each one
   shows how a military career is repositioned for a civilian executive role:
   the resume subtitle names that role shift (e.g. "Army command -> COO"). */
export const militarySampleGallery = {
  slug: 'military-transition-resume-samples',
  eyebrow: 'MILITARY-TO-CIVILIAN TRANSITION · LEADERSHIP EVIDENCE',
  title: 'MILITARY TRANSITION RESUME SAMPLES',
  subhead: 'A successful transition takes real strategy.',
  feature: 'assets/images/samples/military-transition-resume-samples.jpg',
  intro: [
    'Start with the role you want. Translate military experience into civilian value, select the achievements that matter, and prove your impact. Explore the before, after, and cover letter for each sample to see the strategy in action.',
    'The samples on this page are fictionalized. Names, organizations, accomplishments, and figures are illustrative only and do not describe real people or real results. Use them as models for your own story, not as text to copy.',
  ],
  disclaimer: 'Fictional samples. Names, organizations, and results are illustrative.',
  summaryLabel: 'The Strategy',
  band: {
    heading: ['You lead', 'with purpose.'],
    sub: 'Make sure your story is told with impact.',
    previews: [
      { src: 'assets/images/samples/mil-vance-resume.jpg', alt: 'Renata L. Vance — resume sample' },
      { src: 'assets/images/samples/mil-vance-cover.jpg', alt: 'Renata L. Vance — cover letter sample' },
    ],
  },
  packages: [
    {
      key: 'vance',
      title: 'Global Operations & Humanitarian Leadership',
      subtitle: 'Army command → Humanitarian COO',
      resume: 'assets/images/samples/mil-vance-resume.jpg',
      summary: 'Position Renata for a humanitarian COO role by connecting dispersed Army command, emergency response, and supply chain leadership. Replace broad claims and acronyms with clear scope and measurable results. The cover letter maps her experience to the employer’s priorities and explains her commitment to relief work.',
      downloads: [
        { title: 'Resume Before', file: D + 'Military-Resume-Before-Vance.pdf' },
        { title: 'Resume After', file: D + 'Military-Resume-After-Vance.pdf' },
        { title: 'Cover Letter', file: D + 'Military-Cover-Letter-Vance.pdf' },
      ],
    },
    {
      key: 'alvarado',
      title: 'Multi-Site Manufacturing & Business Unit Leadership',
      subtitle: 'Navy officer → Manufacturing business leader',
      resume: 'assets/images/samples/mil-alvarado-resume.jpg',
      summary: 'Position Marcus for business unit leadership by leading with P&L ownership, plant growth, and profitability. Translate Navy responsibilities into business functions and replace duties with evidence of turnaround, safety, and talent results. The cover letter connects his military leadership story to the employer’s expansion plans.',
      downloads: [
        { title: 'Resume Before', file: D + 'Military-Resume-Before-Alvarado.pdf' },
        { title: 'Resume After', file: D + 'Military-Resume-After-Alvarado.pdf' },
        { title: 'Cover Letter', file: D + 'Military-Cover-Letter-Alvarado.pdf' },
      ],
    },
    {
      key: 'ashby',
      title: 'CIO & Enterprise Technology Leadership',
      subtitle: 'Air Force Colonel → Private-sector CIO',
      resume: 'assets/images/samples/mil-ashby-resume.jpg',
      summary: 'Position Simone for a CIO role by leading with budget ownership, cost savings, and uptime. Add a “business equivalent” line to every Air Force role so rank reads as executive scope, and replace duties with proof of savings, security, and resilience results. The cover letter ties her global experience to the employer’s cloud and expansion plans.',
      downloads: [
        { title: 'Resume Before', file: D + 'Military-Resume-Before-Ashby.pdf' },
        { title: 'Resume After', file: D + 'Military-Resume-After-Ashby.pdf' },
        { title: 'Cover Letter', file: D + 'Military-Cover-Letter-Ashby.pdf' },
      ],
    },
    {
      key: 'whitaker',
      title: 'HR & People Operations Leadership',
      subtitle: 'Army jargon → HR language',
      resume: 'assets/images/samples/mil-whitaker-resume.jpg',
      summary: 'Position Darnell for senior HR leadership by translating Army jargon into private-sector HR language: Command Sergeant Major becomes HR Director, command climate scores become employee engagement, and UCMJ cases become employee relations. Lead with engagement and retention results, keep Army titles as a footnote, and let the cover letter match the employer’s needs to his results.',
      downloads: [
        { title: 'Resume Before', file: D + 'Military-Resume-Before-Whitaker.pdf' },
        { title: 'Resume After', file: D + 'Military-Resume-After-Whitaker.pdf' },
        { title: 'Cover Letter', file: D + 'Military-Cover-Letter-Whitaker.pdf' },
      ],
    },
    {
      key: 'thornbury',
      title: 'Legal Counsel & Corporate Compliance',
      subtitle: 'Judge Advocate → Corporate Counsel',
      resume: 'assets/images/samples/mil-thornbury-resume.jpg',
      summary: 'Position Marisol for in-house counsel roles by translating JAG titles into corporate legal functions: Staff Judge Advocate becomes General Counsel and courts-martial becomes litigation. Open with selected accomplishments, and give every role its scope and value added so rank reads as business impact. The cover letter is written like a legal brief, answering the employer’s biggest question with proven results.',
      downloads: [
        { title: 'Resume Before', file: D + 'Military-Resume-Before-Thornbury.pdf' },
        { title: 'Resume After', file: D + 'Military-Resume-After-Thornbury.pdf' },
        { title: 'Cover Letter', file: D + 'Military-Cover-Letter-Thornbury.pdf' },
      ],
    },
    {
      key: 'okafor',
      title: 'Cybersecurity & Information Security Leadership',
      subtitle: 'Navy Cyber Commander → CISO / Director of Security Operations',
      resume: 'assets/images/samples/mil-okafor-resume.jpg',
      summary: 'Position Nathaniel as a CISO by leading with risk reduced, not missions flown: dwell time, ransomware stopped, and dollars saved. Rename each Navy command as a security function, with scope and the military title underneath, and move education to the end. The cover letter reads like a security briefing, naming the employer’s risk and a 90-day plan to reduce it.',
      downloads: [
        { title: 'Resume Before', file: D + 'Military-Resume-Before-Okafor.pdf' },
        { title: 'Resume After', file: D + 'Military-Resume-After-Okafor.pdf' },
        { title: 'Cover Letter', file: D + 'Military-Cover-Letter-Okafor.pdf' },
      ],
    },
    {
      key: 'holloway',
      title: 'Supply Chain, Logistics & Distribution',
      subtitle: 'Marine Colonel → VP of Logistics',
      resume: 'assets/images/samples/mil-holloway-resume.jpg',
      summary: 'Position Rebecca as a supply chain executive by leading with the metrics operations leaders buy: on-time delivery, inventory dollars, and freight cost. Map her career across the full supply chain, from plan to deliver, and give every role a business title, scope, and value added. The cover letter uses a shipping-manifest theme to tie her biggest military move to the employer’s growth.',
      downloads: [
        { title: 'Resume Before', file: D + 'Military-Resume-Before-Holloway.pdf' },
        { title: 'Resume After', file: D + 'Military-Resume-After-Holloway.pdf' },
        { title: 'Cover Letter', file: D + 'Military-Cover-Letter-Holloway.pdf' },
      ],
    },
    {
      key: 'fontaine',
      title: 'Program Management & Strategic Transformation',
      subtitle: 'Army Major → Program Director',
      resume: 'assets/images/samples/mil-fontaine-resume.jpg',
      summary: 'Position Malik as a program leader by leading with portfolio results: dollars managed, milestones on time, and budgets beaten. Put PMP and PgMP beside his name, show his climb on a career roadmap, and replace duties with programs rescued and a PMO built from scratch. The cover letter is written as a project charter, answering risks before the employer raises them.',
      downloads: [
        { title: 'Resume Before', file: D + 'Military-Resume-Before-Fontaine.pdf' },
        { title: 'Resume After', file: D + 'Military-Resume-After-Fontaine.pdf' },
        { title: 'Cover Letter', file: D + 'Military-Cover-Letter-Fontaine.pdf' },
      ],
    },
  ],
  closing: {
    title: 'YOUR MILITARY EXPERIENCE DESERVES A CIVILIAN STRATEGY',
    text: [
      'Every engagement begins with strategy. Your target role, leadership value, and transferable strengths are clarified before your resume is written—so your service reads as executive impact, not a list of duties.',
      'Schedule a complimentary consultation to discuss your transition and determine whether my services may be a good fit.',
    ],
  },
};


/* Government-to-Private-Sector gallery -- same rich layout as the military
   page. Twelve fictional federal executives repositioned for the private
   sector; the resume samples are generated illustrations, not real resumes. */
export const governmentSampleGallery = {
  "slug": "government-to-private-sector-resume-samples",
  "eyebrow": "GOVERNMENT-TO-PRIVATE-SECTOR · LEADERSHIP EVIDENCE",
  "title": "GOVERNMENT-TO-PRIVATE-SECTOR RESUME SAMPLES",
  "subhead": "Your government title is not your market value.",
  "intro": [
    "Start with the opportunity you want. Translate public-sector leadership into business value, surface the results that prove your impact, and position your experience for the private and nonprofit sectors. Explore each sample to see the strategy in action.",
    "The samples on this page are fictionalized. Names, organizations, accomplishments, and figures are illustrative only and do not describe real people or real results. Use them as models for your own story, not as text to copy."
  ],
  "disclaimer": "Fictional samples. Names, organizations, and results are illustrative.",
  "summaryLabel": "The Strategy",
  "band": {
    "heading": [
      "Your title is",
      "not your value."
    ],
    "sub": "Show the private sector what you can deliver.",
    "previews": [
      {
        "src": "assets/images/samples/gov-okonkwo-resume.jpg",
        "alt": "Government-to-private-sector resume sample"
      },
      {
        "src": "assets/images/samples/gov-marchetti-resume.jpg",
        "alt": "Government-to-private-sector resume sample"
      }
    ]
  },
  "packages": [
    {
      "key": "okonkwo",
      "title": "Cybersecurity & Digital Risk Leadership",
      "subtitle": "Federal Chief Information Security Officer → Fortune 500 CISO",
      "resume": "assets/images/samples/gov-okonkwo-resume.jpg",
      "summary": "Position Derek for a Fortune 500 CISO role by translating federal cybersecurity leadership into corporate risk management and business protection. Replace agency acronyms with executive scope and measurable results: 4.2 million endpoints protected, a $340M budget, and incident response reduced from 72 to 6 hours. The cover letter connects his experience defending against sophisticated cyberattacks to protecting corporate assets, reputation, and customer trust.",
      "downloads": [
        {
          "title": "Resume Sample",
          "file": "assets/downloads/Gov-Resume-Okonkwo.pdf"
        }
      ]
    },
    {
      "key": "marchetti",
      "title": "Finance & Enterprise Performance Leadership",
      "subtitle": "Agency Chief Financial Officer → Corporate CFO",
      "resume": "assets/images/samples/gov-marchetti-resume.jpg",
      "summary": "Position Elena for a corporate CFO role by translating federal financial oversight into enterprise performance, capital allocation, and financial governance. Replace government terminology with executive scope and measurable results: a $21B budget, $410M in annual savings, seven clean audits, and financial close reduced from 45 to 12 days. The cover letter connects her financial transformation experience and congressional testimony to board accountability, operational efficiency, and investor confidence.",
      "downloads": [
        {
          "title": "Resume Sample",
          "file": "assets/downloads/Gov-Resume-Marchetti.pdf"
        }
      ]
    },
    {
      "key": "reyes",
      "title": "Science, Technology & Research Investment Leadership",
      "subtitle": "Federal SES Executive → Chief Science & Technology Officer",
      "resume": "assets/images/samples/gov-reyes-resume.jpg",
      "summary": "Position Marcus for a Chief Science & Technology Officer role by translating federal executive authority into corporate leadership, research investment, and commercialization strategy. Reframe grant oversight as capital allocation and emphasize executive reporting relationships, investment decisions, and measurable results in risk and efficiency. The cover letter connects his experience directing research funding and evaluating innovation to winning federal business, accelerating commercialization, and bringing new technologies to market.",
      "downloads": [
        {
          "title": "Resume Sample",
          "file": "assets/downloads/Gov-Resume-Reyes.pdf"
        }
      ]
    },
    {
      "key": "krishnan",
      "title": "Technology Transfer & IP Commercialization",
      "subtitle": "Ph.D. Researcher → Licensing & Partnerships Manager",
      "resume": "assets/images/samples/gov-krishnan-resume.jpg",
      "summary": "Position Meera for an industry licensing role by emphasizing patent expertise, technology commercialization, and strategic partnerships over academic research. Highlight measurable results across 12 medical centers, 140+ disclosures, 60+ patent filings, and four licenses. Reorganize her experience into an ATS-compatible format that prioritizes commercial achievements. The cover letter connects her technical judgment and intellectual property expertise to identifying marketable innovations, negotiating partnerships, and accelerating medical technology commercialization.",
      "downloads": [
        {
          "title": "Resume Sample",
          "file": "assets/downloads/Gov-Resume-Krishnan.pdf"
        }
      ]
    },
    {
      "key": "mehta",
      "title": "Healthcare Operations & Virtual Care Leadership",
      "subtitle": "Federal Physician → Medical Director, Virtual Addiction Care",
      "resume": "assets/images/samples/gov-mehta-resume.jpg",
      "summary": "Position Rohan for a virtual care medical director role by translating federal clinical leadership into scalable treatment programs, patient retention, and regulatory compliance. Replace clinical acronyms with measurable results: 1,000+ patients served, retention improved from 58% to 74%, treatment initiation reduced from nine days to under 48 hours, and zero accreditation findings. The cover letter connects his telehealth leadership to expanding access, improving treatment outcomes, and scaling safe, compliant addiction care.",
      "downloads": [
        {
          "title": "Resume Sample",
          "file": "assets/downloads/Gov-Resume-Mehta.pdf"
        }
      ]
    },
    {
      "key": "whitfield",
      "title": "Corporate Legal Leadership & Regulatory Strategy",
      "subtitle": "Acting General Counsel, U.S. DOT → Fortune 500 General Counsel",
      "resume": "assets/images/samples/gov-whitfield-resume.jpg",
      "summary": "Position Caroline for a Fortune 500 General Counsel role by translating federal legal authority into corporate governance, regulatory strategy, and enterprise risk management. Highlight leadership of a 450-person, $120M legal organization, $210M in settlements, an 85% litigation win rate, and $85M in penalties avoided. The cover letter connects her regulatory expertise, congressional experience, and crisis leadership to protecting corporate interests, managing legal exposure, and supporting business growth.",
      "downloads": [
        {
          "title": "Resume Sample",
          "file": "assets/downloads/Gov-Resume-Whitfield.pdf"
        }
      ]
    },
    {
      "key": "brooks",
      "title": "Healthcare Quality, Compliance & Patient Safety",
      "subtitle": "Federal Inspector General → VP of Quality & Patient Safety",
      "resume": "assets/images/samples/gov-brooks-resume.jpg",
      "summary": "Position Natalie for a healthcare quality executive role by translating federal inspection experience into patient safety, regulatory compliance, and operational improvement. Highlight oversight of a 9.6-million-beneficiary health system, 96% adoption of 420+ recommendations, wait times reduced from 28 to 10 days, and zero accreditation findings. The cover letter connects her regulatory insight and performance improvement experience to strengthening patient outcomes, maintaining accreditation readiness, and reducing organizational risk.",
      "downloads": [
        {
          "title": "Resume Sample",
          "file": "assets/downloads/Gov-Resume-Brooks.pdf"
        }
      ]
    },
    {
      "key": "hale",
      "title": "Global Affairs & International Market Strategy",
      "subtitle": "Senior Foreign Service Officer → VP, Global Government Affairs",
      "resume": "assets/images/samples/gov-hale-resume.jpg",
      "summary": "Position Gregory for a VP of global government affairs role by presenting him as an executive who opens markets and manages political risk, not a diplomat listing postings. “Deputy Chief of Mission” becomes the second-in-command of a 1,100-person international operation with a $95M budget, and “bilateral engagement” becomes negotiating directly with heads of government, regulators and industry leaders. Replace State Department terms with headline numbers: $3.8B in U.S. company deals advanced, 14 trade barriers removed, 3 crisis evacuations led, and operations across 9 countries in 22 years. The cover letter shows how a career spent resolving disputes with foreign governments helps a multinational enter new markets faster and avoid costly political risk.",
      "downloads": [
        {
          "title": "Resume Sample",
          "file": "assets/downloads/Gov-Resume-Hale.pdf"
        }
      ]
    },
    {
      "key": "carter",
      "title": "Defense Acquisition & Aerospace Operations",
      "subtitle": "Senior Defense Civilian (SES) → Chief Operating Officer, Defense & Aerospace",
      "resume": "assets/images/samples/gov-carter-resume.jpg",
      "summary": "Position Raymond for a defense industry COO role by translating federal acquisition leadership into operational performance, supplier management, and business growth. Highlight oversight of a $38B portfolio, 6,000 personnel, 42 major programs, and $3.1B in cost overruns avoided. The cover letter connects his knowledge of Pentagon procurement, complex program delivery, and contractor expectations to improving operational efficiency, protecting profit margins, and securing future defense contracts.",
      "downloads": [
        {
          "title": "Resume Sample",
          "file": "assets/downloads/Gov-Resume-Carter.pdf"
        }
      ]
    },
    {
      "key": "russo",
      "title": "Corporate Security & Global Investigations",
      "subtitle": "FBI Executive Assistant Director → Chief Security Officer",
      "resume": "assets/images/samples/gov-russo-resume.jpg",
      "summary": "Position Anthony for a Fortune 500 Chief Security Officer role by translating FBI leadership into corporate security, threat prevention, and crisis management. Highlight oversight of 4,500 personnel, a $1.2B budget, 2,300+ investigations, and $780M in recovered assets. The cover letter connects his experience managing complex security threats, reducing critical incident response times by 60%, and building corporate partnerships to protecting employees, safeguarding intellectual property, and strengthening global enterprise security.",
      "downloads": [
        {
          "title": "Resume Sample",
          "file": "assets/downloads/Gov-Resume-Russo.pdf"
        }
      ]
    },
    {
      "key": "pierce",
      "title": "Board Governance & Portfolio Leadership",
      "subtitle": "Deputy Secretary (Political Appointee) → Corporate Director & Private Equity Operating Partner",
      "resume": "assets/images/samples/gov-pierce-resume.jpg",
      "summary": "Position Jonathan for board and private equity roles by translating federal executive leadership into corporate governance, operational transformation, and investment value creation. Highlight oversight of an 85,000-person, $60B enterprise, $900M in annual savings, 60% revenue growth, and a 3.1x private equity exit. The cover letter connects his experience in corporate leadership, enterprise transformation, and risk oversight to strengthening portfolio performance, guiding strategic investments, and creating shareholder value.",
      "downloads": [
        {
          "title": "Resume Sample",
          "file": "assets/downloads/Gov-Resume-Pierce.pdf"
        }
      ]
    },
    {
      "key": "bello",
      "title": "Regulatory Affairs & Product Approval Strategy",
      "subtitle": "FDA Office Director → Vice President, Regulatory Affairs, Medical Devices",
      "resume": "assets/images/samples/gov-bello-resume.jpg",
      "summary": "Position Dr. Bello for a medical device regulatory executive role by translating FDA leadership into product approval strategy, regulatory compliance, and market access. Highlight oversight of 650 personnel, 1,800+ annual product submissions, review times reduced by 30%, and 40+ first-of-a-kind device approvals. The cover letter connects her insider knowledge of FDA decision-making and breakthrough device programs to accelerating approvals, minimizing regulatory delays, and bringing innovative medical technologies to patients sooner.",
      "downloads": [
        {
          "title": "Resume Sample",
          "file": "assets/downloads/Gov-Resume-Bello.pdf"
        }
      ]
    }
  ],
  "closing": {
    "title": "YOUR GOVERNMENT TITLE IS NOT YOUR MARKET VALUE",
    "text": [
      "Every engagement begins by assessing your leadership scope, accomplishments, strengths, and transferable value before developing a targeted private-sector resume.",
      "Schedule a complimentary consultation to discuss your goals and determine whether my services may be a good fit."
    ]
  }
};

