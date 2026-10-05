import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import PageCta from '../components/PageCta.jsx';
import { posts } from '../data/posts.js';

const A = import.meta.env.BASE_URL;

const monthYear = (iso) => new Date(iso + 'T00:00:00')
  .toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

/* Bodies are fetched rather than bundled: together they run to about a
   megabyte, which would otherwise load on every page of the site. */
function ReadingProgress() {
  const bar = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const el = bar.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return <div className="bp-progress" aria-hidden="true"><i ref={bar} /></div>;
}

/* Number the sections so the contents rail has something to link to.
   Done on the string before it is inserted, not on the live DOM, so the
   rail and the article cannot disagree about what is there. */
function withSections(html) {
  if (!html) return { html, toc: [] };
  const toc = [];
  let n = 0;
  const out = html.replace(/<h2>(.*?)<\/h2>/g, (whole, inner) => {
    const text = inner.replace(/<[^>]+>/g, '').trim();
    if (!text) return whole;
    const id = 'section-' + (++n);
    toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html: out, toc };
}

export default function BlogPost() {
  const { slug } = useParams();
  const meta = posts.find(p => p.slug === slug);
  const [state, setState] = useState({ status: 'loading', html: '' });

  useEffect(() => {
    if (!meta) return;
    let live = true;
    setState({ status: 'loading', html: '' });
    fetch(`${A}content/blog/${slug}.json`)
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(d => { if (live) setState({ status: 'ready', html: d.html }); })
      .catch(() => { if (live) setState({ status: 'error', html: '' }); });
    return () => { live = false; };
  }, [slug, meta]);

  if (!meta) {
    return (
      <Layout title="Article not found">
        <section className="bp-missing">
          <div className="container">
            <h1>That article is not here.</h1>
            <p>It may have been renamed. The full list is on the blog.</p>
            <Link className="btn btn-orange btn-wide" to="/blog">BACK TO THE BLOG</Link>
          </div>
        </section>
      </Layout>
    );
  }

  const article = withSections(state.html);
  const where = posts.indexOf(meta);
  const newer = posts[where - 1];
  const older = posts[where + 1];
  const more = posts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <Layout title={meta.title}>
      <ReadingProgress />

      <article className="bp">
        <header className={'bp-head' + (meta.image ? ' has-cover' : '')}>
          {meta.image && (
            <>
              {/* Blurred fill behind the cover, so a square or portrait image
                  still gives a full-width banner instead of bars beside it. */}
              <div className="bp-head-wash" aria-hidden="true"
                style={{ backgroundImage: `url(${A}assets/images/blog/${meta.image})` }} />
              <img className="bp-head-img" src={`${A}assets/images/blog/${meta.image}`}
                alt={meta.imageAlt} />
              <div className="bp-head-veil" aria-hidden="true" />
            </>
          )}
          <div className="container bp-head-text">
            <Link className="page-back" to="/blog">&larr; All articles</Link>
            <p className="bp-meta">
              <time dateTime={meta.date}>{monthYear(meta.date)}</time>
              <span className="bp-dot" aria-hidden="true" />
              {meta.minutes} min read
            </p>
            <h1>{meta.title}</h1>
          </div>
        </header>

        <div className="bp-body">
          <div className="bp-layout">
            <div className="bp-main">
              {state.status === 'loading' && <p className="bp-status">Loading the article&hellip;</p>}
              {state.status === 'error' && (
                <p className="bp-status">
                  This article could not be loaded. <Link to="/blog">Back to the blog</Link>.
                </p>
              )}
              {state.status === 'ready' && (
                /* Sanitised against an allowlist when the posts were migrated --
                   see scripts/build-blog.py. */
                <div className="bp-prose" dangerouslySetInnerHTML={{ __html: article.html }} />
              )}
            </div>

            {article.toc.length > 1 && (
              <aside className="bp-rail" aria-label="Sections in this article">
                <p className="bp-rail-head">IN THIS ARTICLE</p>
                <ol>
                  {article.toc.map(t => (
                    <li key={t.id}><a href={`#${t.id}`}>{t.text}</a></li>
                  ))}
                </ol>
              </aside>
            )}
          </div>
        </div>

        <nav className="bp-nav">
          <div className="container">
            {older
              ? <Link className="bp-nav-link is-prev" to={`/blog/${older.slug}`}>
                  <span>Previous</span><b>{older.title}</b>
                </Link>
              : <span />}
            {newer
              ? <Link className="bp-nav-link is-next" to={`/blog/${newer.slug}`}>
                  <span>Next</span><b>{newer.title}</b>
                </Link>
              : <span />}
          </div>
        </nav>

        <section className="bp-more">
          <div className="container">
            <h2 className="section-heading"><span>KEEP READING</span></h2>
            <div className="bl-grid">
              {more.map(p => (
                <Link className="bl-card" to={`/blog/${p.slug}`} key={p.slug}>
                  <div className={'bl-art' + (p.wide ? '' : ' is-whole')}>
                    {p.image
                      ? <img src={`${A}assets/images/blog/${p.image}`} alt={p.imageAlt} loading="lazy" />
                      : <span className="bl-art-blank" aria-hidden="true" />}
                  </div>
                  <div className="bl-card-text">
                    <span className="bl-meta">{monthYear(p.date)}</span>
                    <h3>{p.title}</h3>
                    <span className="bl-more">Read <i>&rarr;</i></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <PageCta />
    </Layout>
  );
}
