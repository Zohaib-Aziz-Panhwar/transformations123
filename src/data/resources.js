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
