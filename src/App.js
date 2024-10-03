import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServicePage from "./Pages/ServicePage/ServicePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import BlogMain from "./Pages/BlogMain/BlogMain";
import ComingSoon from "./Components/ComingSoon/ComingSoon";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service/:sectionId" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/come" element={<ComingSoon />} />
          {/* <Route path="/blog/UNVEILING SAUDI ARABIA" element={<BlogMain />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
