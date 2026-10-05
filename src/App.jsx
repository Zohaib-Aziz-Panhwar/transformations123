import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Ses from './pages/Ses.jsx';
import Military from './pages/Military.jsx';
import Government from './pages/Government.jsx';
import Corporate from './pages/Corporate.jsx';
import ArticleHub from './pages/ArticleHub.jsx';
import Samples from './pages/Samples.jsx';
import Placeholder from './pages/Placeholder.jsx';
import SesPackage from './pages/SesPackage.jsx';
import Services from './pages/Services.jsx';
import Blog from './pages/Blog.jsx';
import SampleMaterials from './pages/SampleMaterials.jsx';
import ResumesLibrary from './pages/ResumesLibrary.jsx';
import Strategy from './pages/Strategy.jsx';
import Book from './pages/Book.jsx';
import Booked from './pages/Booked.jsx';
import { resumeSamples, sesSamples, militarySamples, governmentSamples } from './data/resources.js';
import BlogPost from './pages/BlogPost.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
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

        <Route path="/government-strategy" element={<Strategy slug="government-strategy" />} />
        <Route path="/ses-strategy" element={<Strategy slug="ses-strategy" />} />
        <Route path="/military-strategy" element={<Strategy slug="military-strategy" />} />
        <Route path="/executive-strategy" element={<Strategy slug="executive-strategy" />} />

        <Route path="/executive-resume-samples" element={<SampleMaterials page={resumeSamples} />} />
        {/* The address it was published at for a few days. */}
        <Route path="/resume-samples" element={<Navigate to="/executive-resume-samples" replace />} />
        <Route path="/ses-sample-materials" element={<SampleMaterials page={sesSamples} />} />
        <Route path="/military-transition-resume-samples" element={<SampleMaterials page={militarySamples} />} />
        <Route path="/government-to-private-sector-resume-samples" element={<SampleMaterials page={governmentSamples} />} />
        <Route path="/resumes-library" element={<ResumesLibrary />} />
        {/* The placeholder pages these replace, kept so older links still land. */}
        <Route path="/military-samples" element={<Navigate to="/executive-resume-samples" replace />} />
        <Route path="/government-samples" element={<Navigate to="/executive-resume-samples" replace />} />
        <Route path="/executive-samples" element={<Navigate to="/executive-resume-samples" replace />} />
        <Route path="/ses-package" element={<SesPackage />} />
        <Route path="/ses-samples" element={<Navigate to="/ses-sample-materials" replace />} />
        <Route path="/ses-articles" element={<Navigate to="/ses-strategy" replace />} />

        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/testimonials" element={<Placeholder title="TESTIMONIALS" />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<Service />} />
        <Route path="/book" element={<Book />} />
        {/* Where SimplyBook returns people after they confirm. */}
        <Route path="/booked" element={<Booked />} />
        <Route path="/contact" element={<Navigate to="/book" replace />} />
        <Route path="*" element={<Placeholder title="PAGE NOT FOUND" />} />
      </Routes>
    </>
  );
}
