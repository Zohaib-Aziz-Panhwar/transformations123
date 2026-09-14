import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Ses from './pages/Ses.jsx';
import Military from './pages/Military.jsx';
import Government from './pages/Government.jsx';
import Corporate from './pages/Corporate.jsx';
import ArticleHub from './pages/ArticleHub.jsx';
import Samples from './pages/Samples.jsx';
import Placeholder from './pages/Placeholder.jsx';
import { hubs, samples } from './data/content.js';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/ses" element={<Ses />} />
        <Route path="/military" element={<Military />} />
        <Route path="/government" element={<Government />} />
        <Route path="/corporate" element={<Corporate />} />

        <Route path="/military-strategy" element={<ArticleHub hub={hubs.military} />} />
        <Route path="/government-strategy" element={<ArticleHub hub={hubs.government} />} />
        <Route path="/executive-strategy" element={<ArticleHub hub={hubs.corporate} />} />

        <Route path="/military-samples" element={<Samples page={samples.military} />} />
        <Route path="/government-samples" element={<Samples page={samples.government} />} />
        <Route path="/executive-samples" element={<Samples page={samples.corporate} />} />
        <Route path="/ses-samples" element={<Samples page={samples.ses} />} />
        <Route path="/ses-articles" element={<Samples page={samples.sesArticles} />} />

        <Route path="/about" element={<Placeholder title="ABOUT AMY" />} />
        <Route path="/blog" element={<Placeholder title="BLOG" />} />
        <Route path="/testimonials" element={<Placeholder title="TESTIMONIALS" />} />
        <Route path="/services" element={<Placeholder title="SERVICES" />} />
        <Route path="/contact" element={<Placeholder title="BOOK A DISCOVERY CALL" contact />} />
        <Route path="*" element={<Placeholder title="PAGE NOT FOUND" />} />
      </Routes>
    </>
  );
}
