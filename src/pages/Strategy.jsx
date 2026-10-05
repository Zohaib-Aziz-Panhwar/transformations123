import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import PageCta from '../components/PageCta.jsx';
import { strategyBySlug } from '../data/strategy.js';
import { strategyArticles } from '../data/strategy-articles.js';
import { posts } from '../data/posts.js';

const A = import.meta.env.BASE_URL;

const formatDate = (iso) => new Date(iso + 'T00:00:00')
  .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function Strategy({ slug: fixed }) {
  const params = useParams();
  const slug = fixed || params.slug;
  const s = strategyBySlug[slug];
  const [open, setOpen] = useState(false);

  if (!s) {
    return (
      <Layout title="Not found">
        <section className="bp-missing">
          <div className="container">
            <h1>That page is not here.</h1>
            <Link className="btn btn-orange btn-wide" to="/">BACK TO HOME</Link>
          </div>
        </section>
      </Layout>
    );
  }

  const slugs = strategyArticles[s.key] || [];
  const related = slugs.map(x => posts.find(p => p.slug === x)).filter(Boolean);

  return (
    <Layout title={`${s.audience} — ${s.kicker}`}>
      <section className="st-hero" style={{ backgroundImage: `url(${A}${s.hero})` }}>
        <div className="st-hero-shade" aria-hidden="true" />
        <div className="container st-hero-inner">
          <Link className="page-back" to={s.back.to}>&larr; {s.back.label}</Link>
          <p className="st-eyebrow">
            <span>{s.audience}</span>
            <i aria-hidden="true" />
            {s.kicker}
          </p>
          <h1 className="st-title">
            {s.heading[0]}<br /><span className="o">{s.heading[1]}</span>
          </h1>
          <p className="st-intro">{s.intro}</p>
        </div>
      </section>

      <section className="st-pillars">
        <div className="container st-pillar-grid">
          {s.pillars.map((p, i) => (
            <article className="st-pillar" key={p.title} data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}>
              <h2>{p.title}</h2>
              <span className="st-rule" aria-hidden="true" />
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="st-band">
        <div className="container">
          <p>{s.strapline[0]} <span className="o">{s.strapline[1]}</span></p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="st-articles">
          <div className="container">
            {/* A disclosure rather than a select: the list is links, and it has
                to stay usable with the keyboard and readable by search engines. */}
            <button
              type="button"
              className={'st-toggle' + (open ? ' is-open' : '')}
              aria-expanded={open}
              aria-controls="st-article-list"
              onClick={() => setOpen(o => !o)}
            >
              <span>RELEVANT ARTICLES</span>
              <em>{related.length}</em>
              <i aria-hidden="true">&rsaquo;</i>
            </button>

            <ul id="st-article-list" className="st-list" hidden={!open}>
              {related.map(p => (
                <li key={p.slug}>
                  <Link to={`/blog/${p.slug}`}>
                    <span className="st-list-date">{formatDate(p.date)}</span>
                    <span className="st-list-title">{p.title}</span>
                    <span className="st-list-more" aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="st-all">
              <Link to="/blog">All {posts.length} articles &rarr;</Link>
            </p>
          </div>
        </section>
      )}

      <PageCta />
    </Layout>
  );
}
