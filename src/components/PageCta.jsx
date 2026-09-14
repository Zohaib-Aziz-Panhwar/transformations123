import { Link } from 'react-router-dom';

export default function PageCta() {
  return (
    <section className="page-cta">
      <div className="container">
        <p className="cta-line">
          <span>YOUR EXPERIENCE GOT YOU HERE.</span>
          <span className="accent">YOUR STRATEGY DETERMINES WHAT COMES NEXT.</span>
        </p>
        <Link className="btn btn-orange btn-wide" to="/contact">
          BOOK A DISCOVERY CALL
          <svg className="arrow" viewBox="0 0 40 16" aria-hidden="true"><path d="M0 8h34M27 1l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>
    </section>
  );
}
