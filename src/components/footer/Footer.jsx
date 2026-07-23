import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer" style={{ backgroundColor: '#232D28', color: '#f8f9fa' }}>
        {/* Top Footer Section */}
        <div className="footer-top py-5" style={{ backgroundColor: '#1C2521', borderBottom: '1px solid rgba(242, 214, 189, 0.1)' }}>
          <div className="container">
            <div className="row g-4 justify-content-between">
              
              {/* Brand & Personal Info Column */}
              <div className="col-lg-5 col-md-6">
                <div className="footer-info">
                  <h3 className="fw-bold mb-1 fs-3" style={{ color: '#ffffff' }}>
                    Ruth <span style={{ color: '#F2D6BD' }}>Alonso Fox</span>
                  </h3>
                  <p className="fw-medium mb-3 small" style={{ color: '#BA8068', letterSpacing: '1.5px' }}>
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
                      className="footer-social-btn btn btn-sm rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: '38px', height: '38px', backgroundColor: 'rgba(242, 214, 189, 0.1)', color: '#F2D6BD', transition: '0.3s' }}
                    >
                      <i className="bx bxl-facebook fs-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="footer-social-btn btn btn-sm rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: '38px', height: '38px', backgroundColor: 'rgba(242, 214, 189, 0.1)', color: '#F2D6BD', transition: '0.3s' }}
                    >
                      <i className="bx bxl-instagram fs-5" />
                    </a>
                    <a 
                     href="https://wa.me/436766423206?text=Hallo,%20ich%20möchte%20gerne%20einen%20Termin%20buchen%20und%20freue%20mich%20auf%20ihre%20Rückmeldung."
  target="_blank"
  rel="noopener noreferrer"
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
                <h4 className="fw-semibold fs-6 mb-3 text-uppercase" style={{ color: '#F2D6BD', letterSpacing: '1px' }}>
                  Navigation
                </h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bx bx-chevron-right me-2" style={{ color: '#BA8068' }} />
                    <Link to={"/"} className="text-white-50 text-decoration-none small hover-link">Startseite</Link>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bx bx-chevron-right me-2" style={{ color: '#BA8068' }} />
                    <Link to={"/About"} className="text-white-50 text-decoration-none small hover-link">Über mich</Link>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bx bx-chevron-right me-2" style={{ color: '#BA8068' }} />
                    <Link to={"/Services"} className="text-white-50 text-decoration-none small hover-link">Leistungen</Link>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bx bx-chevron-right me-2" style={{ color: '#BA8068' }} />
                    <Link to={"/Datenschutzerklaerung"} className="text-white-50 text-decoration-none small hover-link">Datenschutz</Link>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <i className="bx bx-chevron-right me-2" style={{ color: '#BA8068' }} />
                    <Link to={"/Impressum"} className="text-white-50 text-decoration-none small hover-link">Impressum</Link>
                  </li>
                </ul>
              </div>

              {/* Contact Direct Infos Column */}
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4 className="fw-semibold fs-6 mb-3 text-uppercase" style={{ color: '#F2D6BD', letterSpacing: '1px' }}>
                  Kontakt
                </h4>
                <p className="text-white-50 small mb-2 d-flex align-items-center gap-2">
                  <i className="bx bx-map fs-5" style={{ color: '#BA8068' }} />
                  Wien, Österreich
                </p>
                <p className="text-white-50 small mb-2 d-flex align-items-center gap-2">
                  <i className="bx bx-phone fs-5" style={{ color: '#BA8068' }} />
                  +43 660 123 45 67
                </p>
                <p className="text-white-50 small mb-0 d-flex align-items-center gap-2">
                  <i className="bx bx-envelope fs-5" style={{ color: '#BA8068' }} />
                  ruth.alonsofox@gmail.com
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Copyrights & Credits Bar */}
        <div className="py-3" style={{ backgroundColor: '#17201C' }}>
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
                className="fw-semibold text-decoration-none px-2 py-1 rounded developer-badge"
                style={{ 
                  color: '#F2D6BD', 
                  backgroundColor: 'rgba(242, 214, 189, 0.1)', 
                  transition: '0.3s' 
                }}
              >
                Hussam Alnabelsi
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* تنسيقات إضافية للتفاعل السلس في الفوتر */}
      <style>{`
        .footer-links .hover-link:hover {
          color: #F2D6BD !important;
          padding-left: 3px;
          transition: all 0.3s ease;
        }
        .footer-social-btn:hover {
          background-color: #BA8068 !important;
          color: #ffffff !important;
          transform: translateY(-2px);
        }
        .developer-badge:hover {
          background-color: rgba(242, 214, 189, 0.2) !important;
          color: #ffffff !important;
        }
      `}</style>
    </>
  )
}