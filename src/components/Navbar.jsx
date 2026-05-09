
import "./Navbar.css";
import logo from "../assets/logo5.png";
import login from "../assets/login.png";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="nav-trigger" onMouseEnter={() => setShowNav(true)}></div>

      <nav className={`navbar ${showNav ? "show" : "hide"}`}>
        {/* logo */}
        <div className="nav-left">
          <img src={logo} alt="logo" />
        </div>

        {/* center */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#procedures">Procedures</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#mission">Our Mission</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>

        {/* login */}
        <div className="nav-right">
          <button className="nav-btn" onClick={() => navigate("/login")}>
            <img src={login} alt="admin" />
          </button>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
