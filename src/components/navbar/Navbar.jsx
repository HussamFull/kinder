import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  // 🔥 دالة موحّدة لإغلاق النافبار والـ dropdown
  const closeMobileNav = () => {
    setMobileNavActive(false);
    setServiceOpen(false);
  };

  const handleMobileNavToggle = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <>
      <header id="header" className="fixed-top header-scrolled">
        <div className="container d-flex align-items-center justify-content-lg-between">

          {/* Logo */}
          <h1 className="logo me-auto me-lg-0">
            <Link to="/" onClick={closeMobileNav}>
              <img
                src="/assets/img/utg-logo.svg"
                alt="UTG Logo"
                className="img-fluid"
              />
            </Link>
          </h1>

          {/* Navbar */}
          <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
              mobileNavActive ? "navbar-mobile" : ""
            }`}
          >
            <ul>

              {/* Home */}
              <li>
                <Link to="/" className="nav-link scrollto" onClick={closeMobileNav}>
                  Home
                </Link>
              </li>

              {/* About */}
              <li>
                <Link to="/about" className="nav-link scrollto" onClick={closeMobileNav}>
                  About
                </Link>
              </li>
               {/* Services  */}
                <li>
                <Link to="/Services" className="nav-link scrollto" onClick={closeMobileNav}>
                  Leistungen
                </Link>
              </li>

              {/* Services Dropdown 
               {/*
              <li className="dropdown">
                <a
                  href="#!"
                  onClick={(e) => {
                    if (window.innerWidth <= 991) {
                      e.preventDefault();
                      setServiceOpen(!serviceOpen);
                    }
                  }}
                  className="nav-link scrollto"
                >
                  Services
                  <i
                    className={`bi ${
                      serviceOpen ? "bi-chevron-up" : "bi-chevron-down"
                    }`}
                    style={{ marginLeft: "8px" }}
                  />
                </a>

                <ul className={serviceOpen ? "dropdown-active" : ""}>
                  <li>
                    <Link to="/apartment" onClick={closeMobileNav}>
                      Apartment
                    </Link>
                  </li>

                  <li>
                    <Link to="/car" onClick={closeMobileNav}>
                      Car
                    </Link>
                  </li>
                </ul>
              </li>*/}

              {/* Portfolio */}
              <li>
                <Link to="/portfolio" className="nav-link scrollto" onClick={closeMobileNav}>
                  Portfolio
                </Link>
              </li>

              {/* Team */}
              <li>
                <Link to="/team" className="nav-link scrollto" onClick={closeMobileNav}>
                  Team
                </Link>
              </li>

              {/* Contact */}
              <li>
                <Link to="/contact" className="nav-link scrollto" onClick={closeMobileNav}>
                  Kontakt
                </Link>
              </li>

            </ul>

            {/* Mobile toggle */}
            <i
              className={`bi bi-list mobile-nav-toggle ${
                mobileNavActive ? "bi-x" : ""
              }`}
              onClick={handleMobileNavToggle}
            />
          </nav>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/qr/UD7U74XZS6PXN1"
            className="get-started-btn scrollto"
          >
            Kontaktieren Sie uns
          </a>

        </div>
      </header>
    </>
  );
}