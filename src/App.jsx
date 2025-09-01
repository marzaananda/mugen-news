import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./components/About.jsx";
import ArticleDetail from "./pages/ArticleDetail.jsx";
import TagPage from "./components/TagPage.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
        <Route path="/tag/:tag" element={<TagPage />}/>
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
