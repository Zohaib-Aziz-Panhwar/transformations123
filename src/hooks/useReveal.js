import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Fade-up elements marked with data-reveal as they scroll into view */
export default function useReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!els.length) return;

    const show = el => el.classList.add('is-in');
    const inView = el => {
      const r = el.getBoundingClientRect();
      return r.bottom > 0 && r.top < window.innerHeight * 1.05;
    };

    // Anything already on screen (first paint, scaled pages) shows at once.
    els.forEach(el => { if (inView(el)) show(el); });

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || reduce) { els.forEach(show); return; }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
    }, { threshold: 0, rootMargin: '0px 0px -20px 0px' });
    els.forEach(el => { if (!el.classList.contains('is-in')) io.observe(el); });

    // Safety net: never leave content hidden if the observer misfires.
    const onScroll = () => els.forEach(el => { if (!el.classList.contains('is-in') && inView(el)) show(el); });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    const t = setTimeout(onScroll, 600);

    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); clearTimeout(t); };
  }, [pathname]);
}
