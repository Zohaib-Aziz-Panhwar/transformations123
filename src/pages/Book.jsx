import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { BOOKING_URL } from '../data/content.js';

const A = import.meta.env.BASE_URL;

/* The step between the button and the booking form: Amy wants people to see
   what they are applying for, and the price range, before the calendar. */
export default function Book() {
  return (
    <Layout title="Apply to Work With Me">
      <section className="bk">
        <div className="bk-inner">
          <div className="bk-art" aria-hidden="true">
            <img src={`${A}assets/images/amy-cutout.png`} alt="" />
          </div>

          <div className="bk-text">
            <p className="st-eyebrow"><span>TRANSFORMATIONS &middot; AMY SINDICIC</span></p>
            <h1>APPLY TO <span className="o">WORK WITH ME.</span></h1>

            <p className="bk-lead">
              Due to a full schedule, I am only accepting a limited number of new
              clients at this time. Please use the link below to schedule an
              evaluation call and apply.
            </p>

            <p className="bk-note">
              <b>Please note:</b> my comprehensive packages range from
              <strong> $699 to $1,999</strong>.
            </p>

            <a className="btn btn-orange btn-wide bk-cta" href={BOOKING_URL}
              target="_blank" rel="noopener noreferrer">
              SCHEDULE YOUR EVALUATION CALL AND APPLY
              <svg className="arrow" viewBox="0 0 40 16" aria-hidden="true">
                <path d="M0 8h34M27 1l7 7-7 7" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <p className="bk-small">
              The form takes a few minutes. It asks about your background, what you
              are aiming for and your timeline, so the call starts from where you
              actually are.
            </p>

            <p className="bk-back"><Link to="/">&larr; Back to Home</Link></p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
