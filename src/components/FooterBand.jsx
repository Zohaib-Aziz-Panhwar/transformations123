import { Link } from 'react-router-dom';
const A = import.meta.env.BASE_URL;

/* The "STAND OUT FROM THE AI NOISE" band from the client template */
export default function FooterBand() {
  return (
    <footer className="footer-band">
      <div className="footer-swoosh" aria-hidden="true"><img src={A + "assets/images/footer-swoosh.jpg"} alt="" /></div>
      <div className="container footer-inner">
        <span className="footer-butterfly" aria-hidden="true"><img src={A + "assets/images/landing/ses-butterfly-hero.png"} alt="" /></span>
        <p className="footer-tagline">
          <span className="ft-1">STAND OUT</span>
          <span className="ft-2">FROM THE <span className="accent">AI NOISE.</span></span>
        </p>
        <Link className="footer-url" to="/">transformations123.com</Link>
      </div>
    </footer>
  );
}
