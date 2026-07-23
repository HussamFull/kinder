import React from 'react'

export default function Team() {
  return (
    <>
      {/* ======= Über mich / Expert Section ======= */}
      <section id="team" className="team py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" data-aos="fade-up">

          {/* Section Header with Responsive Spacing & Typography */}
          <div className="section-title text-center mb-5 pb-2">
            <div className="mb-3">
              <span 
                className="badge px-3 py-2 shadow-sm d-inline-block" 
                style={{ 
                  backgroundColor: '#fdf3f0', 
                  color: '#d98a72', 
                  borderRadius: '20px', 
                  fontSize: '0.85rem',
                  letterSpacing: '0.5px'
                }}
              >
                Lernen Sie mich kennen
              </span>
            </div>

            <h2 
              className="fw-bold fs-3 fs-md-2 mb-3 px-2" 
              style={{ 
                color: '#2d3748', 
                lineHeight: '1.4',
                wordBreak: 'break-word'
              }}
            >
              Die Expertin hinter Kinder im Wandel
            </h2>

            <div 
              className="mx-auto mt-3" 
              style={{ 
                width: '60px', 
                height: '3px', 
                backgroundColor: '#d98a72', 
                borderRadius: '10px' 
              }}
            ></div>
          </div>

          {/* Main Personal Profile Card */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div 
                className="card border-0 shadow-lg rounded-4 overflow-hidden p-4 p-md-5"
                style={{ background: 'linear-gradient(135deg, #ffffff 0%, #faf9f6 100%)' }}
              >
                <div className="row align-items-center g-4">
                  
                  {/* Image & Social Links Column */}
                  <div className="col-md-5 text-center">
                    <div className="position-relative d-inline-block mb-3">
                      <img 
                        src="assets/img/Slide9.png" 
                        className="img-fluid rounded-4 shadow" 
                        alt="Ruth Alonso Fox"
                        style={{ 
                          maxHeight: '340px', 
                          objectFit: 'cover',
                          border: '4px solid #fff'
                        }}
                      />
                      <span 
                        className="position-absolute bottom-0 start-50 translate-middle-x badge px-3 py-2 shadow-sm"
                        style={{ backgroundColor: '#8a9a86', color: '#fff', borderRadius: '15px', fontSize: '0.75rem', bottom: '-12px', whitespace: 'nowrap' }}
                      >
                        Gründerin &amp; Begleiterin
                      </span>
                    </div>

                    {/* Social Media Links */}
                    <div className="social-links d-flex justify-content-center gap-2 mt-4">
                      <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-sm rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                        style={{ width: '42px', height: '42px', backgroundColor: '#ffffff', color: '#d98a72', border: '1px solid #f0d5ce' }}
                      >
                        <i className="bx bxl-facebook fs-4"></i>
                      </a>
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-sm rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                        style={{ width: '42px', height: '42px', backgroundColor: '#ffffff', color: '#d98a72', border: '1px solid #f0d5ce' }}
                      >
                        <i className="bx bxl-instagram fs-4"></i>
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-sm rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                        style={{ width: '42px', height: '42px', backgroundColor: '#ffffff', color: '#d98a72', border: '1px solid #f0d5ce' }}
                      >
                        <i className="bx bxl-linkedin fs-4"></i>
                      </a>
                      <a 
                        href="https://wa.me/message/7TEJZNO3QI2RM1" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-sm rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                        style={{ width: '42px', height: '42px', backgroundColor: '#25D366', color: '#ffffff', border: 'none' }}
                      >
                        <i className="bx bxl-whatsapp fs-4"></i>
                      </a>
                    </div>
                  </div>

                  {/* Profile Details & Bio Column */}
                  <div className="col-md-7 ps-md-4 text-center text-md-start">
                    <h3 className="fw-bold mb-1 fs-3" style={{ color: '#2d3748' }}>
                      Ruth Alonso Fox
                    </h3>
                    <p className="fw-semibold mb-3" style={{ color: '#d98a72' }}>
                      Pädagogische Expertin &amp; Entwicklungsbegleiterin
                    </p>
                    
                    <p className="text-muted lh-lg mb-4" style={{ fontSize: '0.95rem' }}>
                      Mit langjähriger Erfahrung, fundiertem Fachwissen und vor allem mit viel Empathie begleite ich Kinder und Familien durch Zeiten der Veränderung. Mein Anliegen ist es, einen sicheren Hafen zu schaffen, in dem Vertrauen wachsen kann und jedes Kind seine eigenen Stärken entfaltet.
                    </p>

                    {/* Quick Highlights */}
                    <div className="row g-2 mb-4 text-start">
                      <div className="col-12 d-flex align-items-center gap-2 text-muted small">
                        <i className="bx bx-check-circle fs-5 flex-shrink-0" style={{ color: '#8a9a86' }}></i>
                        <span>Einfühlsame Einzel- &amp; Familienberatung</span>
                      </div>
                      <div className="col-12 d-flex align-items-center gap-2 text-muted small">
                        <i className="bx bx-check-circle fs-5 flex-shrink-0" style={{ color: '#8a9a86' }}></i>
                        <span>Spezialisiert auf Umbruchsphasen &amp; Resilienz</span>
                      </div>
                      <div className="col-12 d-flex align-items-center gap-2 text-muted small">
                        <i className="bx bx-check-circle fs-5 flex-shrink-0" style={{ color: '#8a9a86' }}></i>
                        <span>Individuelle Methoden für jedes Kind</span>
                      </div>
                    </div>

                    {/* Direct Contact Button */}
                    <a 
                      href="#contact" 
                      className="btn rounded-pill px-4 py-2 text-white shadow-sm fw-semibold"
                      style={{ backgroundColor: '#d98a72', border: 'none' }}
                    >
                      <i className="bx bx-envelope me-2"></i>
                      Kontakt aufnehmen
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* End Über mich Section */}
    </>
  )
}