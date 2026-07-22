import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer" style={{ backgroundColor: '#2b303a', color: '#f8f9fa' }}>
        {/* Top Footer Section */}
        <div className="footer-top py-5" style={{ backgroundColor: '#242831', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="container">
            <div className="row g-4 justify-content-between">
              
              {/* Brand & Personal Info Column */}
              <div className="col-lg-5 col-md-6">
                <div className="footer-info">
                  <h3 className="fw-bold mb-1 fs-3" style={{ color: '#ffffff' }}>
                    Ruth <span style={{ color: '#d98a72' }}>Alonso Fox</span>
                  </h3>
                  <p className="fw-medium mb-3 small" style={{ color: '#8a9a86', letterSpacing: '1px' }}>
                    KINDER IM WANDEL
                  </p>
                  <p className="text-white-50 small mb-4 lh-lg" style={{ maxWidth: '380px' }}>
                    Begleiten. Stärken. Vertrauen geben. <br />
                    Einfühlsame pädagogische Entwicklungsbegleitung und Familienberatung in Österreich.
                  </p>
                  
                  {/* Social Links */}
                  <div className="social-links d-flex gap-2">
                    <a 
                      href="https://www.facebook.com/" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: '38px', height: '38px', backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#d98a72', transition: '0.3s' }}
                    >
                      <i className="bx bxl-facebook fs-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: '38px', height: '38px', backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#d98a72', transition: '0.3s' }}
                    >
                      <i className="bx bxl-instagram fs-5" />
                    </a>
                    <a 
                      href="https://wa.me/message/7TEJZNO3QI2RM1" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: '38px', height: '38px', backgroundColor: '#25D366', color: '#ffffff', transition: '0.3s' }}
                    >
                      <i className="bx bxl-whatsapp fs-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Navigation Links Column */}
              <div className="col-lg-3 col-md-6 footer-links">
                <h4 className="fw-semibold fs-6 mb-3 text-uppercase" style={{ color: '#d98a72', letterSpacing: '0.5px' }}>
                  Navigation
                </h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bx bx-chevron-right me-2" style={{ color: '#8a9a86' }} />
                    <Link to={"/"} className="text-white-50 text-decoration-none small hover-link">Startseite</Link>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bx bx-chevron-right me-2" style={{ color: '#8a9a86' }} />
                    <Link to={"/About"} className="text-white-50 text-decoration-none small hover-link">Über mich</Link>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bx bx-chevron-right me-2" style={{ color: '#8a9a86' }} />
                    <Link to={"/Services"} className="text-white-50 text-decoration-none small hover-link">Leistungen</Link>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bx bx-chevron-right me-2" style={{ color: '#8a9a86' }} />
                    <Link to={"/Datenschutzerklaerung"} className="text-white-50 text-decoration-none small hover-link">Datenschutz</Link>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bx bx-chevron-right me-2" style={{ color: '#8a9a86' }} />
                    <Link to={"/Impressum"} className="text-white-50 text-decoration-none small hover-link">Impressum</Link>
                  </li>
                </ul>
              </div>

              {/* Contact Direct Infos Column */}
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4 className="fw-semibold fs-6 mb-3 text-uppercase" style={{ color: '#d98a72', letterSpacing: '0.5px' }}>
                  Kontakt
                </h4>
                <p className="text-white-50 small mb-2 d-flex align-items-center gap-2">
                  <i className="bx bx-map fs-5" style={{ color: '#8a9a86' }} />
                  Wien, Österreich
                </p>
                <p className="text-white-50 small mb-2 d-flex align-items-center gap-2">
                  <i className="bx bx-phone fs-5" style={{ color: '#8a9a86' }} />
                  +43 660 123 45 67
                </p>
                <p className="text-white-50 small mb-0 d-flex align-items-center gap-2">
                  <i className="bx bx-envelope fs-5" style={{ color: '#8a9a86' }} />
                  ruth.alonsofox@gmail.com
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Copyrights & Credits Bar */}
        <div className="py-3" style={{ backgroundColor: '#1d2128' }}>
          <div className="container d-md-flex justify-content-between align-items-center text-center text-md-start small text-white-50">
            <div className="copyright mb-2 mb-md-0">
              © {currentYear} <strong><span style={{ color: '#ffffff' }}>Ruth Alonso Fox</span></strong>. Alle Rechte vorbehalten.
            </div>
            
            {/* Developer Credits Branding */}
            <div className="credits">
              Entwickelt von{' '}
              <a 
                href="https://portfolioalnabelsi.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                className="fw-semibold text-decoration-none px-2 py-1 rounded"
                style={{ 
                  color: '#d98a72', 
                  backgroundColor: 'rgba(217, 138, 114, 0.1)', 
                  transition: '0.3s' 
                }}
              >
                Hussam Alnabelsi
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}