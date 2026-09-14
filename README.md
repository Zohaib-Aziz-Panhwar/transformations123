# Transformations123 - website (React)

Vite + React 18 + React Router. The original static HTML build is kept in `legacy-static/` for reference.

## Run locally

```
npm install
npm run dev      # http://127.0.0.1:5173
npm run build    # production build -> dist/
```

## Structure

```
src/main.jsx                app entry (loads styles)
src/App.jsx                 routes
src/components/             Header (nav), Layout, LandingShell, FooterBand, SiteFooter, PageHero, PageCta
src/pages/                  Home, Ses, Military, Government, Corporate, ArticleHub, Samples, Placeholder
src/data/content.js         contact details, article outlines, sample-page copy
src/styles/style.css        global + home + sub-page styles
src/styles/landing.css      audience landing pages
public/assets/images/       all images (cropped from the client mockups)
```

## Client feedback applied (14 Sept 2026)

- Phone hero: Amy's portrait and the big butterfly sit above the headline so her face is never covered.
- Contact: amysindicic@gmail.com, 410-441-5056; address line removed.
- Home hero matches the template (extra buttons/glow removed).

## Images

All images are currently **cropped straight out of the client's template screenshot** (`assets/images/template.jpg`, 1024px wide), so they are pixel-identical to the mockup but low resolution. Replace them with the client's originals (same filenames) when she sends them:

| File | Where it shows | Note |
|---|---|---|
| `hero-bg.jpg` | Hero background (Amy + swoosh) | headline area was erased so the live text sits on top |
| `government-leaders.jpg` | Who I Help card 1 | 225x194 - ask for a ~800px original |
| `ses-leaders.jpg` | Who I Help card 2 | " |
| `military-leaders.jpg` | Who I Help card 3 | " |
| `corporate-executives.jpg` | Who I Help card 4 | " |
| `logo-butterfly.png` | Header logo | ask for the real logo file (SVG/PNG) |
| `footer-butterfly.png` | Footer | " |
| `footer-swoosh.jpg` | Footer right side | URL text was erased; live link sits on top |

## Audience landing pages (from the client Google Doc mockups)

| Page | Links to |
|---|---|
| `ses.html` | OPM SES guidance PDF (external), `ses-samples.html`, `ses-articles.html`, `contact.html` |
| `military.html` | `military-strategy.html` (3 articles), `military-samples.html` (3 transitions), `contact.html` |
| `government.html` | `government-strategy.html` (3 articles), `government-samples.html`, `contact.html` |
| `corporate.html` | `executive-strategy.html` (3 articles), `executive-samples.html`, `contact.html` |

The four "Who I Help" cards on the home page link to these. Landing pages use `assets/css/landing.css`; their artwork lives in `assets/images/landing/` and was cropped from the mockups (butterflies keyed to transparent PNG, hero photos with baked-in text removed). Article pages carry the outlines from the doc; full article text and resume samples are still to come from the client.

## Brand colours (from template)

| Token | Hex | Use |
|---|---|---|
| `--navy` | `#000E21` | header, hero, card captions, footer |
| `--navy-text` | `#0A1230` | headings on light sections |
| `--orange` | `#F36205` | buttons, rules, dashes |
| `--orange-text` | `#E24900` | headline / accent copy |
| `--light` | `#EBEBEB` | light section background |

Fonts: **Oswald** (display/headings) and **Poppins** (body) via Google Fonts.
