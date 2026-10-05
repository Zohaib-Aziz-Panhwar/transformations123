import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import PageHero from '../components/PageHero.jsx';
import PageCta from '../components/PageCta.jsx';
import { posts } from '../data/posts.js';
import { articleCategories } from '../data/strategy-articles.js';

const A = import.meta.env.BASE_URL;

/* The four groups Amy works with. A post can sit in more than one -- plenty of
   the government articles are just as relevant to a military reader. */
const CATEGORIES = [
  { key: 'government', label: 'GOVERNMENT' },
  { key: 'ses', label: 'SES' },
  { key: 'military', label: 'MILITARY' },
  { key: 'corporate', label: 'CORPORATE' },
];

const formatDate = (iso) => new Date(iso + 'T00:00:00')
  .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

/** How many page numbers to show on a phone before the "+". */
const VISIBLE_ON_NARROW = 4;

/** Nine posts a page on a laptop, four on a phone. */
function usePerPage() {
  const query = '(max-width: 700px)';
  const [n, setN] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(query).matches ? 4 : 9);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setN(mq.matches ? 4 : 9);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return n;
}

function Card({ post }) {
  return (
    <Link className="bl-card" to={`/blog/${post.slug}`}>
      <div className={'bl-art' + (post.wide ? '' : ' is-whole')}>
        {post.image
          ? <img src={`${A}assets/images/blog/${post.image}`} alt={post.imageAlt} loading="lazy" />
          : <span className="bl-art-blank" aria-hidden="true" />}
      </div>
      <div className="bl-card-text">
        <span className="bl-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time> &middot; {post.minutes} min read
        </span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="bl-more">Read more <i>&rarr;</i></span>
      </div>
    </Link>
  );
}

export default function Blog() {
  const [params, setParams] = useSearchParams();
  const perPage = usePerPage();
  const topRef = useRef(null);

  const query = params.get('q') || '';
  const cat = params.get('cat') || '';

  const matches = useMemo(() => {
    let list = posts;
    if (cat && articleCategories[cat]) {
      const inCat = new Set(articleCategories[cat]);
      list = list.filter(p => inCat.has(p.slug));
    }
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter(p =>
      p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
  }, [query, cat]);

  const pageCount = Math.max(1, Math.ceil(matches.length / perPage));
  // Clamped, so a deep page stays valid when the count changes on resize
  // or when a search narrows the list.
  const page = Math.min(Math.max(1, Number(params.get('page')) || 1), pageCount);
  const start = (page - 1) * perPage;
  const shown = matches.slice(start, start + perPage);

  const isNarrow = perPage === 4;
  const [expanded, setExpanded] = useState(false);
  const collapsed = isNarrow && !expanded && pageCount > VISIBLE_ON_NARROW && page <= VISIBLE_ON_NARROW;
  const numbers = Array.from({ length: pageCount }, (_, i) => i + 1);
  const visibleNumbers = collapsed ? numbers.slice(0, VISIBLE_ON_NARROW) : numbers;

  const setAll = (next) => {
    const out = {};
    if (next.cat) out.cat = next.cat;
    if (next.q) out.q = next.q;
    if (next.page && next.page !== 1) out.page = String(next.page);
    setParams(out);
  };

  const goTo = (n) => {
    setAll({ cat, q: query, page: n });
    // The route itself has not changed, so scroll back to the list by hand.
    const top = topRef.current;
    if (top) window.scrollTo({ top: top.offsetTop - 90, behavior: 'smooth' });
  };

  return (
    <Layout title="Blog">
      <PageHero
        eyebrow="CAREER STRATEGY, WRITTEN DOWN"
        title="BLOG"
        lead={`${posts.length} articles on positioning, transition, and how senior careers actually move.`}
        back={{ to: '/', label: 'Back to Home' }}
      />

      <section className="bl-list" ref={topRef}>
        <div className="container">
          <div className="bl-search">
            <label className="sr-only" htmlFor="bl-q">Search articles</label>
            <input
              id="bl-q"
              type="search"
              placeholder="Search articles"
              value={query}
              onChange={(e) => setAll({ cat, q: e.target.value, page: 1 })}
            />
            <span className="bl-count">
              {query || cat
                ? `${matches.length} of ${posts.length}`
                : `${posts.length} articles`}
            </span>
          </div>

          <div className="bl-cats" role="group" aria-label="Filter by group">
            <button
              type="button"
              className={'bl-cat' + (cat ? '' : ' is-on')}
              aria-pressed={!cat}
              onClick={() => setAll({ q: query, page: 1 })}
            >
              ALL<em>{posts.length}</em>
            </button>
            {CATEGORIES.map(c => {
              const n = (articleCategories[c.key] || []).length;
              return (
                <button
                  type="button"
                  key={c.key}
                  className={'bl-cat' + (cat === c.key ? ' is-on' : '')}
                  aria-pressed={cat === c.key}
                  onClick={() => setAll({ cat: cat === c.key ? '' : c.key, q: query, page: 1 })}
                >
                  {c.label}<em>{n}</em>
                </button>
              );
            })}
          </div>

          {matches.length === 0 ? (
            <p className="bl-empty">
              {query
                ? <>Nothing matches &ldquo;{query}&rdquo;{cat ? ' in this group' : ''}. Try a different word.</>
                : <>No articles in this group yet.</>}
            </p>
          ) : (
            <div className="bl-grid">
              {shown.map(p => <Card key={p.slug} post={p} />)}
            </div>
          )}

          {pageCount > 1 && (
            <nav className="pager" aria-label="Blog pages">
              <button
                type="button"
                className="pager__step"
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
              >
                <span aria-hidden="true">&larr;</span> Prev
              </button>

              <span className="pager__nums">
                {visibleNumbers.map(n => (
                  <button
                    key={n}
                    type="button"
                    className={`pager__num ${n === page ? 'is-current' : ''}`}
                    aria-current={n === page ? 'page' : undefined}
                    aria-label={`Page ${n}`}
                    onClick={() => goTo(n)}
                  >
                    {n}
                  </button>
                ))}
                {collapsed && (
                  <button
                    type="button"
                    className="pager__num pager__more"
                    onClick={() => setExpanded(true)}
                    aria-label={`Show the remaining ${pageCount - VISIBLE_ON_NARROW} pages`}
                  >
                    +
                  </button>
                )}
              </span>

              <button
                type="button"
                className="pager__step"
                onClick={() => goTo(page + 1)}
                disabled={page === pageCount}
              >
                Next <span aria-hidden="true">&rarr;</span>
              </button>
            </nav>
          )}

          {matches.length > 0 && (
            <p className="pager__count">
              Showing {start + 1}&ndash;{Math.min(start + perPage, matches.length)} of {matches.length} posts
            </p>
          )}
        </div>
      </section>

      <PageCta />
    </Layout>
  );
}
