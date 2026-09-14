import Layout from '../components/Layout.jsx';
import PageHero from '../components/PageHero.jsx';
import PageCta from '../components/PageCta.jsx';

export default function Samples({ page }) {
  return (
    <Layout title={page.title}>
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} back={page.back} />

      <section className="posts">
        <div className="container">
          {page.cards ? (
            <div className="sample-grid">
              {page.cards.map((c, i) => (
                <article className="sample" key={c}>
                  <span className="sample-num">{String(i + 1).padStart(2, '0')}</span>
                  <h2>{c}</h2>
                  <p>Headline, executive summary and transformed accomplishments.</p>
                  <span className="sample-soon">Sample coming soon</span>
                </article>
              ))}
            </div>
          ) : (
            <div className="soon-box">
              <h2>{page.soon.title}</h2>
              <p>{page.soon.text}</p>
              {page.soon.link && (
                <a className="soon-link" href={page.soon.link.href} target="_blank" rel="noopener noreferrer">{page.soon.link.label}</a>
              )}
            </div>
          )}
        </div>
      </section>

      <PageCta />
    </Layout>
  );
}
