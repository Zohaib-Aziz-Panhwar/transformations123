import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';

const A = import.meta.env.BASE_URL;

/* Where SimplyBook sends people once the appointment is confirmed. */
export default function Booked() {
  return (
    <Layout title="You are booked">
      <section className="bkd">
        <div className="bkd-inner">
          <div className="bkd-photo">
            <img src={`${A}assets/images/booking/amy-booked.jpg`} alt="Amy Sindicic" />
          </div>

          <div className="bkd-text">
            <span className="bkd-tick" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor"
                  strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>

            <h1>CONGRATULATIONS!</h1>
            <p className="bkd-sub">Your appointment has been successfully booked.</p>
            <span className="bkd-rule" aria-hidden="true" />

            <p>
              I will email you the meeting details. Please check your inbox to make
              sure you have everything you need to join. My messages sometimes land
              in spam or junk folders, so do add my address to your safe sender list
              so the call details reach you.
            </p>
            <p>
              I will send a Zoom link shortly before our scheduled time, and I will
              use the phone number you provided as a backup.
            </p>
            <p>I look forward to meeting with you.</p>

            <p className="bkd-sign">Amy</p>

            <div className="bkd-links">
              <Link className="btn btn-orange" to="/resumes-library">
                BROWSE THE RESUMES LIBRARY
              </Link>
              <Link className="bkd-ghost" to="/blog">Read the blog &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
