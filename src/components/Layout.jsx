import { useEffect } from 'react';
import Header from './Header.jsx';
import FooterBand from './FooterBand.jsx';
import SiteFooter from './SiteFooter.jsx';

/* Standard site chrome: sticky nav, page content, template footer band, full footer */
export default function Layout({ title, children }) {
  useEffect(() => {
    document.body.className = '';
    document.title = title ? `${title} | Transformations123` : 'Transformations123 | Everyone Has AI. Not Everyone Has A Strategy.';
  }, [title]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterBand />
      <SiteFooter />
    </>
  );
}
