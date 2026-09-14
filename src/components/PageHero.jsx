import { Link } from 'react-router-dom';

export default function PageHero({ eyebrow, title, lead, back }) {
  return (
    <section className="page-hero">
      <div className="container">
        {back && <Link className="page-back" to={back.to}>&larr; {back.label}</Link>}
        <p className="page-eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        {lead && <p className="page-lead">{lead}</p>}
      </div>
    </section>
  );
}
