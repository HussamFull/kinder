import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const closeMobileNav = () => {
    setMobileNavActive(false);
  };

  const handleMobileNavToggle = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <>
      <header id="header" className="fixed-top modern-navbar-header">
        <div className="container d-flex align-items-center justify-content-between">

          {/* Logo */}
          <h1 className="logo m-0 p-0">
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

          {/* Right Side Items (Contact Button + Menu Toggle) */}
          <div className="d-flex align-items-center gap-2">
            
            {/* Desktop & Mobile Contact Button */}
           <a
  href="https://wa.me/436766423206?text=Hallo,%20ich%20möchte%20gerne%20einen%20Termin%20buchen%20und%20freue%20mich%20auf%20ihre%20Rückmeldung."
  target="_blank"
  rel="noopener noreferrer"
  className="custom-contact-btn d-inline-flex align-items-center gap-2"
>
  <i className="ri-whatsapp-line fs-5" />
  <span>Jetzt anfragen</span>
</a>

            {/* Hamburger Toggle Button (يظهر في الموبايل إجباري) */}
            <div className="mobile-nav-toggle-wrap" onClick={handleMobileNavToggle}>
              <i className={`bi ${mobileNavActive ? "bi-x-lg" : "bi-list"} mobile-nav-icon`} />
            </div>

          </div>

        </div>
      </header>

      {/* Mobile Offcanvas Menu (القائمة الجانبية التي تفتح بالموبايل) */}
      <div className={`mobile-offcanvas-menu ${mobileNavActive ? "offcanvas-active" : ""}`}>
        <div className="offcanvas-header d-flex align-items-center justify-content-between p-4 border-bottom">
          <span className="fw-bold text-white fs-5">
            Ruth <span style={{ color: '#F2D6BD' }}>Alonso Fox</span>
          </span>
          <div className="mobile-close-wrap" onClick={closeMobileNav}>
            <i className="bi bi-x-lg text-white fs-4" />
          </div>
        </div>
        <nav className="offcanvas-nav p-4">
          <ul className="m-0 p-0 list-unstyled d-flex flex-column gap-3">
            <li><Link to="/" className="offcanvas-link py-3 px-4 d-block rounded-3 text-decoration-none" onClick={closeMobileNav}>Home</Link></li>
            <li><Link to="/about" className="offcanvas-link py-3 px-4 d-block rounded-3 text-decoration-none" onClick={closeMobileNav}>Über mich</Link></li>
            <li><Link to="/Services" className="offcanvas-link py-3 px-4 d-block rounded-3 text-decoration-none" onClick={closeMobileNav}>Leistungen</Link></li>
            <li><Link to="/portfolio" className="offcanvas-link py-3 px-4 d-block rounded-3 text-decoration-none" onClick={closeMobileNav}>Portfolio</Link></li>
            <li><Link to="/contact" className="offcanvas-link py-3 px-4 d-block rounded-3 text-decoration-none" onClick={closeMobileNav}>Kontakt</Link></li>
          </ul>
        </nav>
      </div>

      {/* خلفية معتمة خفيفة عند فتح القائمة */}
      {mobileNavActive && (
        <div className="offcanvas-backdrop-custom" onClick={closeMobileNav} />
      )}

      {/* التنسيقات */}
      <style>{`
        .modern-navbar-header {
          background: rgba(35, 45, 40, 0.95) !important;
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(242, 214, 189, 0.15);
          padding: 12px 0;
          z-index: 9997;
        }

        .custom-contact-btn {
          background: #BA8068;
          color: #fff;
          border-radius: 50px;
          padding: 8px 18px;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
          border: 1px solid rgba(242, 214, 189, 0.3);
          text-decoration: none;
          white-space: nowrap;
        }

        .custom-contact-btn:hover {
          background: #C86D51;
          color: #fff;
        }

        .mobile-nav-toggle-wrap {
          display: flex;
          width: 40px;
          height: 40px;
          background: rgba(242, 214, 189, 0.1);
          border: 1px solid rgba(242, 214, 189, 0.3);
          border-radius: 10px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10002;
        }

        .mobile-nav-icon {
          color: #fff !important;
          font-size: 22px;
        }

        .mobile-offcanvas-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 85%;
          max-width: 320px;
          height: 100vh;
          background: rgba(28, 37, 33, 0.99);
          backdrop-filter: blur(20px);
          transition: right 0.4s ease-in-out;
          box-shadow: -10px 0 30px rgba(0,0,0,0.5);
          z-index: 10003;
          display: flex;
          flex-direction: column;
        }

        .offcanvas-active {
          right: 0 !important;
        }

        .offcanvas-header {
          border-color: rgba(242, 214, 189, 0.15) !important;
        }

        .offcanvas-link {
          color: rgba(255, 255, 255, 0.9) !important;
          font-weight: 600;
          font-size: 1.1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .offcanvas-link:hover {
          background: rgba(242, 214, 189, 0.15);
          color: #F2D6BD !important;
          transform: translateX(5px);
        }

        .mobile-close-wrap {
          cursor: pointer;
        }

        .offcanvas-backdrop-custom {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.6);
          z-index: 10001;
        }
      `}</style>
    </>
  );
}