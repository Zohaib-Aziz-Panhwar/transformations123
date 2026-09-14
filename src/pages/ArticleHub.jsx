import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import PageHero from '../components/PageHero.jsx';
import PageCta from '../components/PageCta.jsx';

export default function ArticleHub({ hub }) {
  return (
    <Layout title={hub.title}>
      <PageHero eyebrow={hub.eyebrow} title={hub.title} lead={hub.lead} back={hub.back} />

      {hub.intro && (
        <section className="page-intro"><div className="container"><p>{hub.intro}</p></div></section>
      )}
      {hub.journey && (
        <section className="page-intro"><div className="container">
          <div className="journey">
            {hub.journey.map(([n, q]) => <span key={n}><b>{n}</b> {q}</span>)}
          </div>
        </div></section>
      )}

      <section className="posts">
        <div className="container">
          {hub.articles.map((a, i) => (
            <article className="post" id={`article-${i + 1}`} key={a.title}>
              <div className="post-head">
                <span className="post-num">ARTICLE {i + 1}</span>
                {a.date && <span className="post-date">{a.date}</span>}
              </div>
              <h2>{a.title}</h2>
              {a.core && <p className="post-core">{a.core}</p>}
              <h3>Outline</h3>
              <ul>{a.outline.map(o => <li key={o}>{o}</li>)}</ul>
              {a.note && <p className="post-note">{a.note}</p>}
              {a.closing && <p className="post-closing">{a.closing}</p>}
            </article>
          ))}
        </div>
      </section>

      <PageCta />
    </Layout>
  );
}
