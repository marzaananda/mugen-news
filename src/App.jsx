import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./components/About.jsx";
import ArticleDetail from "./pages/ArticleDetail.jsx";
import TagPage from "./components/TagPage.jsx";

export default function App() {
  const siteName = "Mugen News";
  const siteDescription = "Portal berita anime, game, dan jejepangan terbaru";
  const baseUrl = "https://mugen-news.vercel.app/";

  return (
    <Router>
      {/* SEO Global */}
      <Helmet>
        <title>{siteName}</title>
        <meta name="description" content={siteDescription} />

        {/* Open Graph default */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content={`${baseUrl}/logo.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={`${baseUrl}/logo.png`} />
      </Helmet>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
        <Route path="/tag/:tag" element={<TagPage />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}