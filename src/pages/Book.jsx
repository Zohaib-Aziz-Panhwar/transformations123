import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { BOOKING_URL } from '../data/content.js';

const A = import.meta.env.BASE_URL;

/* The step between the button and the booking form. Amy designed this panel
   herself, so the page is her artwork rather than a rebuild of it.

   Everything on it is baked into the image, which has two consequences: the
   whole panel is the link, so a click anywhere -- including on the button she
   drew -- reaches the form; and the wording is repeated in the alt text and in
   the plain block underneath, because a screen reader cannot read a picture
   and the lettering is too small to follow on a phone. */
export default function Book() {
  return (
    <Layout title="Apply to Work With Me">
      <section className="bk">
        <div className="bk-inner">
          <a className="bk-panel" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <img
              src={`${A}assets/images/booking/apply-to-work-with-me.jpg`}
              alt="Apply to work with me. Due to a full schedule, I am only accepting a
                   limited number of new clients at this time. Please use the link below
                   to schedule an evaluation call and apply. Please note: my comprehensive
                   packages range from $499 to $1,999. Schedule your evaluation call and apply."
            />
          </a>

          {/* Below the panel on a phone, where the drawn button is about 20px tall. */}
          <div className="bk-fallback">
            <a className="btn btn-orange btn-wide" href={BOOKING_URL}
              target="_blank" rel="noopener noreferrer">
              SCHEDULE YOUR EVALUATION CALL AND APPLY
              <svg className="arrow" viewBox="0 0 40 16" aria-hidden="true">
                <path d="M0 8h34M27 1l7 7-7 7" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p>
              Due to a full schedule, Amy is accepting a limited number of new clients.
              Professional packages range from <strong>$499 to $1,999</strong>.
            </p>
          </div>

          <p className="bk-back"><Link to="/">&larr; Back to Home</Link></p>
        </div>
      </section>
    </Layout>
  );
}
