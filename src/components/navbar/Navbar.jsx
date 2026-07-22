import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  // دالة موحّدة لإغلاق النافبار والـ dropdown
  const closeMobileNav = () => {
    setMobileNavActive(false);
    setServiceOpen(false);
  };

  const handleMobileNavToggle = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <>
      <header id="header" className="fixed-top header-scrolled modern-navbar-header">
        <div className="container d-flex align-items-center justify-content-between">

          {/* Logo (Image + Text Side by Side) */}
          <h1 className="logo me-auto me-lg-0 m-0">
            <Link to="/" onClick={closeMobileNav} className="d-flex align-items-center gap-2 text-decoration-none">
              <img
                src="/assets/img/utg-logo.svg"
                alt="Ruth Alonso Fox Logo"
                className="img-fluid navbar-brand-logo"
                style={{ maxHeight: '40px', width: 'auto' }}
              />
              <span className="fw-bold text-white fs-5 d-none d-sm-inline" style={{ letterSpacing: '0.5px' }}>
                Ruth <span style={{ color: '#F2D6BD' }}>Alonso Fox</span>
              </span>
            </Link>
          </h1>

          {/* Navbar */}
          <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
              mobileNavActive ? "navbar-mobile" : ""
            }`}
          >
            <ul className="d-flex align-items-center m-0 p-0 list-unstyled gap-1">

              {/* Home */}
              <li>
                <Link to="/" className="nav-link scrollto px-3 py-2 rounded-pill" onClick={closeMobileNav}>
                  Home
                </Link>
              </li>

              {/* About */}
              <li>
                <Link to="/about" className="nav-link scrollto px-3 py-2 rounded-pill" onClick={closeMobileNav}>
                  Über mich
                </Link>
              </li>

              {/* Services / Leistungen */}
              <li>
                <Link to="/Services" className="nav-link scrollto px-3 py-2 rounded-pill" onClick={closeMobileNav}>
                  Leistungen
                </Link>
              </li>

              {/* Portfolio */}
              <li>
                <Link to="/portfolio" className="nav-link scrollto px-3 py-2 rounded-pill" onClick={closeMobileNav}>
                  Portfolio
                </Link>
              </li>

              {/* Booking */}
              <li>
                <Link to="/Booking" className="nav-link scrollto px-3 py-2 rounded-pill" onClick={closeMobileNav}>
                  Buchen
                </Link>
              </li>

              {/* Contact */}
              <li>
                <Link to="/contact" className="nav-link scrollto px-3 py-2 rounded-pill" onClick={closeMobileNav}>
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

          {/* WhatsApp Button (Get Started) */}
          <a
            href="https://wa.me/qr/UD7U74XZS6PXN1"
            target="_blank"
            rel="noopener noreferrer"
            className="get-started-btn scrollto d-none d-lg-inline-flex align-items-center gap-2"
          >
            <i className="ri-whatsapp-line fs-5" />
            <span>Jetzt anfragen</span>
          </a>

        </div>
      </header>

      {/* تنسيقات الـ CSS الخاصة بالنافبار */}
      <style>{`
        .modern-navbar-header {
          background: rgba(35, 45, 40, 0.85) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(242, 214, 189, 0.15);
          padding: 15px 0;
          transition: all 0.3s ease;
        }

        #navbar ul li a.nav-link {
          color: rgba(255, 255, 255, 0.85) !important;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        #navbar ul li a.nav-link:hover,
        #navbar ul li a.nav-link.active {
          color: #F2D6BD !important;
          background: rgba(242, 214, 189, 0.12);
        }

        .get-started-btn {
          background: #BA8068 !important;
          color: #fff !important;
          border-radius: 50px;
          padding: 8px 22px;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.2);
          text-decoration: none;
        }

        .get-started-btn:hover {
          background: #C86D51 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
          color: #fff !important;
        }

        .mobile-nav-toggle {
          color: #fff !important;
          font-size: 28px;
          cursor: pointer;
          display: none;
        }

        @media (max-width: 991px) {
          .mobile-nav-toggle {
            display: block;
          }
          #navbar {
            background: rgba(35, 45, 40, 0.95);
            backdrop-filter: blur(15px);
            position: fixed;
            top: 70px;
            right: -100%;
            width: 80%;
            max-width: 300px;
            height: calc(100vh - 70px);
            transition: 0.3s;
            padding: 30px;
            box-shadow: -5px 0 25px rgba(0,0,0,0.3);
          }
          #navbar.navbar-mobile {
            right: 0;
          }
          #navbar.navbar-mobile ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start !important;
            gap: 15px !important;
          }
          #navbar ul li a.nav-link {
            font-size: 1.1rem;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}