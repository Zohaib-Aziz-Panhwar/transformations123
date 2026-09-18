import Layout from '../components/Layout.jsx';
import { contact, BOOKING_URL } from '../data/content.js';

export default function Placeholder({ title, contact: isContact }) {
  return (
    <Layout title={title}>
      <section className="intro page-placeholder">
        <div className="container">
          <h2 className="section-heading"><span>{title}</span></h2>
          {isContact ? (
            <div className="contact-box">
              <p className="intro-copy">Let&rsquo;s talk about your strategy. Reach Amy directly:</p>
              <p className="contact-line"><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              <p className="contact-line"><a href={`tel:${contact.phoneTel}`}>{contact.phone}</a></p>
              <p className="contact-btn"><a className="btn btn-orange btn-wide" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">OPEN MY CALENDAR</a></p>
            </div>
          ) : (
            <p className="intro-copy">Content for this page is coming soon.</p>
          )}
        </div>
      </section>
    </Layout>
  );
}
