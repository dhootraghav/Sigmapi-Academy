import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();

  // determine active nav item by pathname
  const path = location.pathname || "/";
  const isActive = (p) => (p === "/" ? path === "/" : path.startsWith(p));

  return (
    <>
      <div className="header-container">
        {/* Left: Logo + Text */}
        <div className="header-left">
          <div className="logo-section">
            <Link to="/">
              <img src="/pictures/SigmaPi Logo.png" alt="Logo" className="logo" />
            </Link>
            <span className="logo-text">SigmaPi Academy</span>
          </div>
        </div>

        {/* Right: Nav + Hamburger */}
        <div className="header-right">
          <nav className="nav-links">
            <ul>
              <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                <NavLink to="/" end>Home</NavLink>
              </li>

              <li className={`nav-item dropdown ${isActive('/school') || isActive('/college') ? 'active' : ''}`}>
                <span className="dropbtn" style={{ cursor: "default" }}>Courses</span>
                <ul className="dropdown-menu">
                  <div>
                    <li><NavLink to="/school" className="base">School Based</NavLink></li>
                    <li><NavLink to="/college" className="base">College Based</NavLink></li>
                  </div>
                </ul>
              </li>


              <li className={`nav-item ${isActive('/testimonials') ? 'active' : ''}`}><NavLink to="/testimonials">Testimonials</NavLink></li>
              <li className={`nav-item ${isActive('/contact') ? 'active' : ''}`}><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>

          <div className="hamburger" id="hamburger" onClick={() => setMobileOpen(true)}>
            &#9776;
          </div>
        </div>
      </div>

      {/* Mobile overlay/menu (uses your exact class names) */}
      {mobileOpen && (
        <div className="mobile-overlay" id="mobileOverlay" onClick={() => setMobileOpen(false)}>
          <div className="mobile-menu" id="mobileMenu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="mobile-logo">
                <img src="/pictures/SigmaPi Logo.png" alt="Logo" className="mobile-logo-img" />
                <span className="mobile-logo-text">SigmaPi Academy</span>
              </div>
              <button className="close-btn" id="closeMenu" onClick={() => setMobileOpen(false)}>
                close
              </button>
            </div>

            <ul className="mobile-nav">
              <li className="nav-item">
                <NavLink to="/" end onClick={() => setMobileOpen(false)}>Home</NavLink>
              </li>

              <li className="nav-item has-submenu" id="coursesToggle">
                <span className="nav-link" onClick={() => setCoursesOpen(v => !v)}>Courses</span>
                <ul className={`submenu ${coursesOpen ? "" : "hidden"}`} id="coursesSubmenu">
                  <li><NavLink to="/school" onClick={() => setMobileOpen(false)}>School-Based</NavLink></li>
                  <li><NavLink to="/college" onClick={() => setMobileOpen(false)}>College-Based</NavLink></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="/testimonials" onClick={() => setMobileOpen(false)}>Testimonials</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
