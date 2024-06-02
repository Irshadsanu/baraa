import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServicePage from "./Pages/ServicePage/ServicePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
