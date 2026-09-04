import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Footer from "./Footer.jsx";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">🛍️</span>
        <span>Shop<span>MS</span></span>
      </Link>

      <div className="nav-links">
        <Link className={location.pathname === "/" ? "nav-link active" : "nav-link"} to="/">Home</Link>
        <Link className={location.pathname === "/about" ? "nav-link active" : "nav-link"} to="/about">Shop Manager</Link>
        <Link className="nav-cta" to="/about">Manage Products</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navigation />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
