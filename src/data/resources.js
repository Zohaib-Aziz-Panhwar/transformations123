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
  heroImage: 'assets/images/samples/military-hero-soldier.jpg',
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
      cover: 'assets/images/samples/mil-vance-cover.jpg',
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
      cover: 'assets/images/samples/mil-alvarado-cover.jpg',
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
      cover: 'assets/images/samples/mil-ashby-cover.jpg',
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
      cover: 'assets/images/samples/mil-whitaker-cover.jpg',
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
      cover: 'assets/images/samples/mil-thornbury-cover.jpg',
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
      cover: 'assets/images/samples/mil-okafor-cover.jpg',
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
      cover: 'assets/images/samples/mil-holloway-cover.jpg',
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
      cover: 'assets/images/samples/mil-fontaine-cover.jpg',
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
  "heroImage": "assets/images/samples/government-hero-capitol.jpg",
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
    "sub": "The resume and the cover letter, built to match.",
    "previews": [
      { "src": "assets/images/samples/gov-okonkwo-resume.jpg", "alt": "Executive resume sample" },
      { "src": "assets/images/samples/gov-okonkwo-cover.jpg", "alt": "Cover letter sample" }
    ]
  },
  "packages": [
    {
      "key": "okonkwo",
      "title": "Cybersecurity & Digital Risk Leadership",
      "subtitle": "Federal CISO (SES) → Fortune 500 CISO",
      "resume": "assets/images/samples/gov-okonkwo-resume.jpg",
      "cover": "assets/images/samples/gov-okonkwo-cover.jpg",
      "summary": "Derek’s resume and cover letter reposition a federal cyber leader as a Fortune 500 CISO — leading with executive scope and board-level results: 4.2M endpoints protected, a $340M security organization, incident response cut from 72 to 6 hours, and zero major breaches in three years.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Gov-Okonkwo-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Gov-Okonkwo-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Gov-Okonkwo-Cover-Letter.pdf" } ]
    },
    {
      "key": "marquez",
      "title": "Finance & Enterprise Performance Leadership",
      "subtitle": "Agency CFO → Corporate CFO",
      "resume": "assets/images/samples/gov-marquez-resume.jpg",
      "cover": "assets/images/samples/gov-marquez-cover.jpg",
      "summary": "Elena’s materials present a federal CFO as a corporate CFO — enterprise performance and capital discipline turned into measurable savings, faster reporting, and the investor-grade controls boards expect.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Gov-Marquez-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Gov-Marquez-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Gov-Marquez-Cover-Letter.pdf" } ]
    },
    {
      "key": "ellery",
      "title": "Science, Technology & R&D Investment Leadership",
      "subtitle": "Federal SES Executive → Chief Science & Technology Officer",
      "resume": "assets/images/samples/gov-ellery-resume.jpg",
      "cover": "assets/images/samples/gov-ellery-cover.jpg",
      "summary": "Dr. Ellery’s resume and cover letter frame a federal science executive as a Chief Science & Technology Officer who allocates research investment like capital — portfolio results, commercialization, and public-private partnerships.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Gov-Ellery-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Gov-Ellery-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Gov-Ellery-Cover-Letter.pdf" } ]
    },
    {
      "key": "raghunathan",
      "title": "Technology Transfer, IP & Commercialization",
      "subtitle": "Federal Research → Industry Licensing & Partnerships",
      "resume": "assets/images/samples/gov-raghunathan-resume.jpg",
      "cover": "assets/images/samples/gov-raghunathan-cover.jpg",
      "summary": "Dr. Raghunathan’s materials move a federal technology-transfer specialist into industry licensing and partnerships — commercialized innovation, patent strategy, and executed licenses backed by deep technical judgment.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Gov-Raghunathan-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Gov-Raghunathan-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Gov-Raghunathan-Cover-Letter.pdf" } ]
    },
    {
      "key": "hale",
      "title": "Global Government Affairs & Market Entry",
      "subtitle": "Senior Foreign Service → Global Government Affairs Leader",
      "resume": "assets/images/samples/gov-hale-resume.jpg",
      "cover": "assets/images/samples/gov-hale-cover.jpg",
      "summary": "Gregory’s resume and cover letter present a senior diplomat as a global government-affairs executive who opens markets and manages political risk — deals advanced, trade barriers removed, crises managed.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Gov-Hale-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Gov-Hale-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Gov-Hale-Cover-Letter.pdf" } ]
    },
    {
      "key": "castillo",
      "title": "Operations & Program Delivery Leadership",
      "subtitle": "Defense SES Executive → Chief Operating Officer",
      "resume": "assets/images/samples/gov-castillo-resume.jpg",
      "cover": "assets/images/samples/gov-castillo-cover.jpg",
      "summary": "Raymond’s materials reposition a defense acquisition leader as a Chief Operating Officer — portfolio scale, cost and schedule performance, and overruns avoided turned into operational results.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Gov-Castillo-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Gov-Castillo-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Gov-Castillo-Cover-Letter.pdf" } ]
    },
    {
      "key": "russo",
      "title": "Corporate Security & Investigations Leadership",
      "subtitle": "Federal Law-Enforcement Executive → Chief Security Officer",
      "resume": "assets/images/samples/gov-russo-resume.jpg",
      "cover": "assets/images/samples/gov-russo-cover.jpg",
      "summary": "Anthony’s resume and cover letter translate national-security leadership into corporate security — threat prevention, investigations, and crisis management led by the metrics boards care about.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Gov-Russo-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Gov-Russo-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Gov-Russo-Cover-Letter.pdf" } ]
    },
    {
      "key": "fontaine",
      "title": "Program & Portfolio Management Leadership",
      "subtitle": "Program Director → Enterprise PMO Leader",
      "resume": "assets/images/samples/gov-fontaine-resume.jpg",
      "cover": "assets/images/samples/gov-fontaine-cover.jpg",
      "summary": "Malik’s materials present a program and portfolio leader (PMP, PgMP) for enterprise PMO roles — portfolio governance, agile delivery, and programs delivered on cost and schedule.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Gov-Fontaine-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Gov-Fontaine-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Gov-Fontaine-Cover-Letter.pdf" } ]
    },
    {
      "key": "thornbury",
      "title": "Legal Leadership & Corporate Counsel",
      "subtitle": "Judge Advocate → Corporate Counsel",
      "resume": "assets/images/samples/gov-thornbury-resume.jpg",
      "cover": "assets/images/samples/gov-thornbury-cover.jpg",
      "summary": "Marisol’s resume and cover letter reposition a senior government attorney as corporate counsel — litigation and regulatory judgment framed as enterprise legal leadership.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Gov-Thornbury-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Gov-Thornbury-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Gov-Thornbury-Cover-Letter.pdf" } ]
    },
    {
      "key": "okafor",
      "title": "Cybersecurity & Security Operations Leadership",
      "subtitle": "Federal Cyber Commander → CISO / Director of Security Operations",
      "resume": "assets/images/samples/gov-okafor-resume.jpg",
      "cover": "assets/images/samples/gov-okafor-cover.jpg",
      "summary": "Nathaniel’s materials present a career cyber-defense leader as a CISO — 21 years defending networks under real-world attack, translated into risk reduced and resilient operations.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Gov-Okafor-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Gov-Okafor-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Gov-Okafor-Cover-Letter.pdf" } ]
    },
    {
      "key": "holloway",
      "title": "Supply Chain, Logistics & Operations",
      "subtitle": "Federal Logistics Leader → VP of Logistics",
      "resume": "assets/images/samples/gov-holloway-resume.jpg",
      "cover": "assets/images/samples/gov-holloway-cover.jpg",
      "summary": "Rebecca’s resume and cover letter move a large-scale logistics leader into supply chain and operations roles — on-time delivery, inventory and freight cost framed as business impact.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Gov-Holloway-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Gov-Holloway-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Gov-Holloway-Cover-Letter.pdf" } ]
    },
    {
      "key": "vance",
      "title": "Global Operations & Emergency-Response Leadership",
      "subtitle": "Operations & Logistics Leader → Chief Operating Officer",
      "resume": "assets/images/samples/gov-vance-resume.jpg",
      "cover": "assets/images/samples/gov-vance-cover.jpg",
      "summary": "Renata’s resume and cover letter reposition a large-scale operations and emergency-response leader as a Chief Operating Officer — dispersed global operations, humanitarian supply chain, and crisis response translated into measurable business scope and results.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Gov-Vance-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Gov-Vance-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Gov-Vance-Cover-Letter.pdf" } ]
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


export const corporateSampleGallery = {
  "slug": "corporate-executive-resume-samples",
  "eyebrow": "CORPORATE EXECUTIVE · LEADERSHIP EVIDENCE",
  "title": "CORPORATE EXECUTIVE RESUME SAMPLES",
  "subhead": "Built to move leaders into the C-suite.",
  "heroImage": "assets/images/corporate-executives.jpg",
  "intro": [
    "Start with the role you want next. These samples show how senior corporate leaders translate scope, results, and judgment into a resume and cover letter built for the step up — from division president to CEO, from VP to chief officer, from the firm to the boardroom. Explore each one to see the strategy in action.",
    "The samples on this page are fictionalized. Names, organizations, accomplishments, and figures are illustrative only and do not describe real people or real results. Use them as models for your own story, not as text to copy."
  ],
  "disclaimer": "Fictional samples. Names, organizations, and results are illustrative.",
  "summaryLabel": "The Strategy",
  "band": {
    "heading": [
      "Your next role",
      "is a bigger one."
    ],
    "sub": "The resume and the cover letter, built to match.",
    "previews": [
      { "src": "assets/images/samples/corp-raman-resume.jpg", "alt": "Executive resume sample" },
      { "src": "assets/images/samples/corp-raman-cover.jpg", "alt": "Cover letter sample" }
    ]
  },
  "packages": [
    {
      "key": "raman",
      "title": "Chief Executive Leadership",
      "subtitle": "Division President → First-Time CEO",
      "resume": "assets/images/samples/corp-raman-resume.jpg",
      "cover": "assets/images/samples/corp-raman-cover.jpg",
      "summary": "Position Priya for her first CEO role through board-facing experience and P&L ownership of a 4,200-person business. Lead with results: revenue grew from $900M to $1.4B, operating margin rose from 9% to 15%, she integrated three acquisitions, and built a $210M business in Asia. Three brief case studies show a turnaround, a major customer win, and crisis leadership. The cover letter connects those results to leading an entire company and answering to its board.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Raman-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Corp-Raman-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Raman-Cover-Letter.pdf" } ]
    },
    {
      "key": "osei",
      "title": "Operations & Turnaround Leadership",
      "subtitle": "VP of Manufacturing → Turnaround COO",
      "resume": "assets/images/samples/corp-osei-resume.jpg",
      "cover": "assets/images/samples/corp-osei-cover.jpg",
      "summary": "Position Kevin as a turnaround COO by showing how he led 9 plants, managed 3,800 people, and oversaw $1.1B in cost of goods. On-time delivery rose from 71% to 96%, annual costs fell by $84M, and safety incidents dropped 58%. Two brief case studies show how he returned struggling plants to profitability within 18 months. The cover letter connects his turnaround experience to leading company-wide operations.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Osei-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Corp-Osei-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Osei-Cover-Letter.pdf" } ]
    },
    {
      "key": "hendricks",
      "title": "Finance & IPO-Readiness Leadership",
      "subtitle": "Divisional CFO → Public-Company CFO",
      "resume": "assets/images/samples/corp-hendricks-resume.jpg",
      "cover": "assets/images/samples/corp-hendricks-cover.jpg",
      "summary": "Position Laura for a public-company CFO role by highlighting her financial leadership of a $2.2B business. She refinanced $450M in debt, saving $19M annually, shortened the close from 15 to 5 days, freed $60M in working capital, and built SOX controls ahead of an IPO. Leading due diligence on a $700M acquisition shows she can work with bankers, auditors, and investors. The cover letter connects that experience to taking a company public and telling its story to Wall Street.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Hendricks-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Corp-Hendricks-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Hendricks-Cover-Letter.pdf" } ]
    },
    {
      "key": "nakamura",
      "title": "Technology & Digital Transformation Leadership",
      "subtitle": "IT Director → CIO, Digital Transformation",
      "resume": "assets/images/samples/corp-nakamura-resume.jpg",
      "cover": "assets/images/samples/corp-nakamura-cover.jpg",
      "summary": "Position Samuel for a CIO role by highlighting his leadership of a 240-person technology organization and a $95M budget. His cloud migration cut infrastructure costs by 34%, his digital ordering platform grew online revenue from 8% to 31% of sales, and system outages fell 80%. The cover letter connects his partnerships with sales and operations leaders to how he would use technology to grow revenue across the company.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Nakamura-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Corp-Nakamura-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Nakamura-Cover-Letter.pdf" } ]
    },
    {
      "key": "reyes",
      "title": "Cybersecurity & Risk Leadership",
      "subtitle": "Director of Security Operations → CISO",
      "resume": "assets/images/samples/corp-reyes-resume.jpg",
      "cover": "assets/images/samples/corp-reyes-cover.jpg",
      "summary": "Position Natasha for her first CISO role by highlighting her leadership of cyber defense for a $6B company. She cut detection time from 9 days to 4 hours, reduced audit findings by 75%, and saved $3.2M by consolidating tools. A brief case study shows how she contained ransomware with zero downtime. The cover letter explains how she would brief the board on cyber risk and protect revenue and reputation.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Reyes-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Corp-Reyes-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Reyes-Cover-Letter.pdf" } ]
    },
    {
      "key": "whitfield",
      "title": "Revenue & Growth Leadership",
      "subtitle": "VP of Sales → Chief Revenue Officer",
      "resume": "assets/images/samples/corp-whitfield-resume.jpg",
      "cover": "assets/images/samples/corp-whitfield-cover.jpg",
      "summary": "Position Jamal as a CRO who leads growth from first contact to renewal, drawing on his leadership of 180 people across sales, marketing, and customer success. Annual recurring revenue grew from $60M to $210M, retention reached 118%, the sales cycle fell from 9 to 5 months, and he opened three markets. The cover letter connects his work aligning sales and marketing to building predictable growth at scale.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Whitfield-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Corp-Whitfield-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Whitfield-Cover-Letter.pdf" } ]
    },
    {
      "key": "santoro",
      "title": "Human Resources & Transformation Leadership",
      "subtitle": "VP of HR → CHRO, M&A and Transformation",
      "resume": "assets/images/samples/corp-santoro-resume.jpg",
      "cover": "assets/images/samples/corp-santoro-cover.jpg",
      "summary": "Position Maria for a CHRO role by highlighting her leadership of a 140-person HR team supporting 22,000 employees and her work with the board’s compensation committee. She integrated four acquisitions while retaining 92% of key talent, cut turnover from 24% to 13% and saved $38M annually, and filled 85% of senior roles internally through succession planning. The cover letter shows how she would use culture and talent to support growth and change.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Santoro-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Corp-Santoro-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Santoro-Cover-Letter.pdf" } ]
    },
    {
      "key": "lindqvist",
      "title": "Legal & Governance Leadership",
      "subtitle": "Law-Firm Partner → In-House General Counsel",
      "resume": "assets/images/samples/corp-lindqvist-resume.jpg",
      "cover": "assets/images/samples/corp-lindqvist-cover.jpg",
      "summary": "Position David for an in-house general counsel role by highlighting his work advising 40+ public and private company boards. He closed $8B in M&A deals, guided three IPOs, resolved a regulatory investigation without penalties, and cut a client’s legal spend by 30%. The cover letter connects his experience building a practice to leading an in-house legal team that manages risk and supports growth.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Lindqvist-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Corp-Lindqvist-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Lindqvist-Cover-Letter.pdf" } ]
    },
    {
      "key": "castellanos",
      "title": "Strategy & Transformation Leadership",
      "subtitle": "Management Consultant → Chief Strategy Officer",
      "resume": "assets/images/samples/corp-castellanos-resume.jpg",
      "cover": "assets/images/samples/corp-castellanos-cover.jpg",
      "summary": "Position Emily for a chief strategy officer role by highlighting her work with 30+ CEOs and her 18 months as interim head of strategy. Her strategies drove $2.4B in revenue growth and $650M in cost savings. She helped shape six acquisitions and repositioned two companies for successful exits. The cover letter connects her in-house experience to owning strategy from design through execution.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Castellanos-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Corp-Castellanos-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Castellanos-Cover-Letter.pdf" } ]
    },
    {
      "key": "hargrove",
      "title": "Board & Governance Leadership",
      "subtitle": "Retired CFO → First Public-Company Board Seat",
      "resume": "assets/images/samples/corp-hargrove-resume.jpg",
      "cover": "assets/images/samples/corp-hargrove-cover.jpg",
      "summary": "Position Linda for her first public company board seat with a concise board bio and director profile. Highlight two IPOs, oversight of $3B in acquisitions, 12 years of clean audits, and four years presenting to audit committees. A Board Qualifications section maps her experience to audit, finance, risk, and M&A oversight. The cover letter shows how her CFO experience would help a board ask informed questions of management.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Hargrove-Resume-Before.pdf" }, { "title": "Director Profile", "file": "assets/downloads/Corp-Hargrove-Director-Profile.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Hargrove-Cover-Letter.pdf" } ]
    },
    {
      "key": "mensah",
      "title": "Medical & Clinical Leadership",
      "subtitle": "Practicing Physician → Health-System Chief Medical Officer",
      "resume": "assets/images/samples/corp-mensah-resume.jpg",
      "cover": "assets/images/samples/corp-mensah-cover.jpg",
      "summary": "Position Dr. Mensah for a health system CMO role by highlighting his leadership of 420 physicians and advanced practice clinicians. He cut readmissions by 28%, raised patient satisfaction to the top 10% nationally, saved $22M annually by reducing variation in care, and halved physician turnover. The cover letter connects his MBA and work on value-based care contracts to improving care quality and financial performance across a health system.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Mensah-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Corp-Mensah-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Mensah-Cover-Letter.pdf" } ]
    },
    {
      "key": "ibarra",
      "title": "Compliance & Enterprise-Risk Leadership",
      "subtitle": "Compliance Director → Chief Compliance Officer",
      "resume": "assets/images/samples/corp-ibarra-resume.jpg",
      "cover": "assets/images/samples/corp-ibarra-cover.jpg",
      "summary": "Position Rachel for a chief compliance officer role by highlighting her leadership of a 60-person team across 28 countries and her regular reporting to the audit committee. She resolved a $40M regulatory investigation without penalties, cut audit findings by 70%, built a risk program covering 5,000 suppliers, and shortened new-market approvals from six months to six weeks. The cover letter shows how she would manage risk while helping the company expand faster.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Ibarra-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Corp-Ibarra-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Ibarra-Cover-Letter.pdf" } ]
    },
    {
      "key": "wakefield",
      "title": "Nonprofit & Mission Leadership",
      "subtitle": "Corporate Executive → Nonprofit CEO",
      "resume": "assets/images/samples/corp-wakefield-resume.jpg",
      "cover": "assets/images/samples/corp-wakefield-cover.jpg",
      "summary": "Position Thomas for a nonprofit CEO role by pairing his leadership of a $500M operation and 2,000 employees with his longtime nonprofit board service. He co-chaired a $25M capital campaign as a volunteer, tripled the number of people served at the same cost, and built partnerships with 40 community organizations. The cover letter connects his operating and fundraising experience to reaching more people and growing funding.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Wakefield-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Corp-Wakefield-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Wakefield-Cover-Letter.pdf" } ]
    },
    {
      "key": "raghavan",
      "title": "Data & AI Leadership",
      "subtitle": "Director of Analytics → Chief Data & AI Officer",
      "resume": "assets/images/samples/corp-raghavan-resume.jpg",
      "cover": "assets/images/samples/corp-raghavan-cover.jpg",
      "summary": "Position Arjun for a chief data and AI officer role by highlighting his leadership of a 90-person team and his work with the CEO and business unit leaders. His AI pricing tool added $48M in annual profit, improved forecasting cut inventory costs by $31M, and customer churn fell 22%. The cover letter connects these results and company-wide adoption of responsible AI governance to growing the business safely and profitably.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Raghavan-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Corp-Raghavan-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Raghavan-Cover-Letter.pdf" } ]
    },
    {
      "key": "delgado",
      "title": "Product & Innovation Leadership",
      "subtitle": "VP of Product → Chief Product Officer",
      "resume": "assets/images/samples/corp-delgado-resume.jpg",
      "cover": "assets/images/samples/corp-delgado-cover.jpg",
      "summary": "Position Sofia for a chief product officer role by leading with results. She launched two products that reached $180M in annual revenue, grew the user base from 2M to 11M, cut time to market by 40%, and expanded her product team from 12 to 60. Note her three-year caregiving break in one line and highlight her advisory work with four startups and recent certifications. The cover letter connects her track record to leading product strategy from vision to revenue.",
      "downloads": [ { "title": "Resume Before", "file": "assets/downloads/Corp-Delgado-Resume-Before.pdf" }, { "title": "Resume After", "file": "assets/downloads/Corp-Delgado-Resume-After.pdf" }, { "title": "Cover Letter", "file": "assets/downloads/Corp-Delgado-Cover-Letter.pdf" } ]
    }
  ],
  "closing": {
    "title": "YOUR TITLE IS NOT YOUR MARKET VALUE",
    "text": [
      "Every engagement begins by assessing your leadership scope, accomplishments, strengths, and transferable value before developing a resume and cover letter targeted to the role you want next.",
      "Schedule a complimentary consultation to discuss your goals and determine whether my services may be a good fit."
    ]
  }
};
