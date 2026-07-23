import React from 'react'

export default function About() {
  return (
    <>
      {/* ======= CSS Hover Effects ======= */}
      <style>{`
        /* Hover على بطاقات الميزات والـ Schwerpunkte */
        .custom-hover-card {
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                      box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                      border-color 0.35s ease;
          cursor: pointer;
        }
        .custom-hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08) !important;
          border-color: #8a9a86 !important;
        }

        /* Hover خاص ببطاقات Schwerpunkte بتظليل وردي دافئ */
        .custom-hover-card-alt {
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                      box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                      border-color 0.35s ease;
          cursor: pointer;
        }
        .custom-hover-card-alt:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(217, 138, 114, 0.15) !important;
          border-color: #d98a72 !important;
        }

        /* Hover وتكبير الأيقونات داخل البطاقات */
        .custom-hover-card:hover .icon-wrapper,
        .custom-hover-card-alt:hover .icon-wrapper {
          transform: scale(1.1) rotate(3deg);
        }
        .icon-wrapper {
          transition: transform 0.3s ease;
        }

        /* Hover وتكبير الصور الشخصية والجانبية */
        .img-hover-zoom {
          overflow: hidden;
          border-radius: 1rem;
        }
        .img-hover-zoom img, .img-hover-bg {
          transition: transform 0.5s ease;
        }
        .img-hover-zoom:hover img, .img-hover-zoom:hover .img-hover-bg {
          transform: scale(1.04);
        }

        /* Hover على مربع المقولة / Intro Quote */
        .quote-box-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .quote-box-hover:hover {
          transform: translateX(5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.06) !important;
        }
      `}</style>

      {/* ======= About Section ======= */}
      <section id="about" className="about py-5" style={{ backgroundColor: '#faf9f6' }}>
        <div className="container" data-aos="fade-up">
          
          {/* Headings */}
          <div className="text-center mb-5">
            <span className="badge px-3 py-2 mb-2 shadow-sm" style={{ backgroundColor: '#8a9a86', color: '#fff', borderRadius: '20px' }}>
              Über mich
            </span>
            <h2 className="fw-bold" style={{ color: '#2d3748' }}>
              Einfühlsame Begleitung für Kinder in Umbruchsphasen
            </h2>
          </div>

          <div className="row g-4 align-items-center mb-5">
            {/* Bio & Intro */}
            <div className="col-lg-7" data-aos="fade-right">
              <div className="quote-box-hover p-4 bg-white rounded-4 shadow-sm border-start border-4" style={{ borderColor: '#8a9a86' }}>
                <p className="fs-5 fst-italic text-muted mb-0">
                  "Herzlich willkommen! Mein Name ist Ruth Alonso Fox. Ich bin Mutter von zwei Kindern, diplomierte Elementarpädagogin und befinde mich in der Ausbildung zur Lebens- und Sozialberaterin (LSB) unter Supervision. Seit über sechs Jahren begleite ich Kinder unterschiedlichen Alters mit viel Herz, Einfühlungsvermögen und fachlicher Kompetenz."
                </p>
              </div>
            </div>

            {/* Profile Image with Frame */}
            <div className="col-lg-5 text-center" data-aos="fade-left">
              <div className="position-relative d-inline-block img-hover-zoom shadow-lg rounded-4">
                <img 
                  src="/assets/img/Slide8.png" 
                  className="img-fluid rounded-4" 
                  alt="Ruth Alonso Fox" 
                  style={{ maxHeight: '350px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Section Subtitle */}
          <h4 className="fw-bold mb-4 text-center" style={{ color: '#4a5568' }}>
            Was mich und meine Arbeit auszeichnet:
          </h4>

          {/* Cards Grid replacing the old bullet list */}
          <div className="row g-4">
            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={100}>
              <div className="custom-hover-card h-100 p-4 bg-white rounded-4 shadow-sm text-center border border-transparent">
                <div className="icon-wrapper mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', backgroundColor: '#f0f4f1', color: '#8a9a86' }}>
                  <i className="ri-award-line fs-3"></i>
                </div>
                <h5 className="fw-bold fs-6">Fundierte Ausbildung</h5>
                <p className="text-muted small mb-0">Diplomierte Elementarpädagogin, LSB i.A.u.S. sowie langjährige Erfahrung.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={200}>
              <div className="custom-hover-card h-100 p-4 bg-white rounded-4 shadow-sm text-center border border-transparent">
                <div className="icon-wrapper mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', backgroundColor: '#fdf3f0', color: '#d98a72' }}>
                  <i className="ri-heart-pulse-line fs-3"></i>
                </div>
                <h5 className="fw-bold fs-6">Individuelle Förderung</h5>
                <p className="text-muted small mb-0">Jedes Kind wird in seiner Einzigartigkeit wahrgenommen und gestärkt.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={300}>
              <div className="custom-hover-card h-100 p-4 bg-white rounded-4 shadow-sm text-center border border-transparent">
                <div className="icon-wrapper mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', backgroundColor: '#f0f4f1', color: '#8a9a86' }}>
                  <i className="ri-shield-user-line fs-3"></i>
                </div>
                <h5 className="fw-bold fs-6">Geschützter Raum</h5>
                <p className="text-muted small mb-0">Ein sicherer Ort zum Gefühle ausdrücken und Stärke entwickeln.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={400}>
              <div className="custom-hover-card h-100 p-4 bg-white rounded-4 shadow-sm text-center border border-transparent">
                <div className="icon-wrapper mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', backgroundColor: '#fdf3f0', color: '#d98a72' }}>
                  <i className="ri-mental-health-line fs-3"></i>
                </div>
                <h5 className="fw-bold fs-6">Ganzheitlicher Ansatz</h5>
                <p className="text-muted small mb-0">Kombination aus Elementarpädagogik, Lebensberatung &amp; Mentaltraining.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======= Features / Schwerpunkte Section ======= */}
      <section id="features" className="features py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" data-aos="fade-up">
          
          {/* Header */}
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-lg-8">
              <span className="badge px-3 py-2 mb-2 shadow-sm" style={{ backgroundColor: '#d98a72', color: '#fff', borderRadius: '20px' }}>
                Schwerpunkte
              </span>
              <h2 className="fw-bold" style={{ color: '#2d3748' }}>
                Unterstützung bei Verwandlungen und Neuanfängen
              </h2>
              <p className="text-muted fs-6 mt-3">
                Veränderungen gehören zum Leben – manche sind freudig, andere können belastend oder verunsichernd sein. Durch meine Erfahrung begleite ich Kinder einfühlsam durch schwierige Lebensphasen und schenke ihnen Halt, wenn sich ihre Welt verändert.
              </p>
            </div>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Side Image */}
            <div className="col-lg-4" data-aos="fade-right">
              <div className="img-hover-zoom h-100 rounded-4 shadow-sm">
                <div 
                  className="img-hover-bg h-100" 
                  style={{ 
                    backgroundImage: 'url("assets/img/features.png")', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    minHeight: '380px' 
                  }} 
                />
              </div>
            </div>

            {/* 2x2 Grid Cards */}
            <div className="col-lg-8" data-aos="fade-left">
              <div className="row g-4">
                
                <div className="col-md-6" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="custom-hover-card-alt p-4 rounded-4 h-100 shadow-sm border border-light" style={{ backgroundColor: '#faf9f6' }}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-wrapper p-3 rounded-circle me-3" style={{ backgroundColor: '#fdf3f0', color: '#d98a72' }}>
                        <i className="ri-heart-line fs-3"></i>
                      </div>
                      <h5 className="fw-bold mb-0" style={{ color: '#2d3748' }}>Trennung der Eltern</h5>
                    </div>
                    <p className="text-muted small mb-0">
                      Einfühlsame Begleitung, um Verlustängste abzubauen, Gefühle zu ordnen und neue Stabilität im veränderten Alltag zu finden.
                    </p>
                  </div>
                </div>

                <div className="col-md-6" data-aos="zoom-in" data-aos-delay={200}>
                  <div className="custom-hover-card-alt p-4 rounded-4 h-100 shadow-sm border border-light" style={{ backgroundColor: '#faf9f6' }}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-wrapper p-3 rounded-circle me-3" style={{ backgroundColor: '#f0f4f1', color: '#8a9a86' }}>
                        <i className="ri-candle-line fs-3"></i>
                      </div>
                      <h5 className="fw-bold mb-0" style={{ color: '#2d3748' }}>Abschied &amp; Trauer</h5>
                    </div>
                    <p className="text-muted small mb-0">
                      Liebevoller Beistand beim Verlust eines geliebten Menschen oder eines Haustieres sowie in anderen schmerzhaften Abschiedssituationen.
                    </p>
                  </div>
                </div>

                <div className="col-md-6" data-aos="zoom-in" data-aos-delay={300}>
                  <div className="custom-hover-card-alt p-4 rounded-4 h-100 shadow-sm border border-light" style={{ backgroundColor: '#faf9f6' }}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-wrapper p-3 rounded-circle me-3" style={{ backgroundColor: '#f0f4f1', color: '#8a9a86' }}>
                        <i className="ri-building-line fs-3"></i>
                      </div>
                      <h5 className="fw-bold mb-0" style={{ color: '#2d3748' }}>Pädagogische Übergänge</h5>
                    </div>
                    <p className="text-muted small mb-0">
                      Sanfte Unterstützung und Stärkung beim Einstieg in den Kindergarten oder beim Wechsel in die Volksschule.
                    </p>
                  </div>
                </div>

                <div className="col-md-6" data-aos="zoom-in" data-aos-delay={400}>
                  <div className="custom-hover-card-alt p-4 rounded-4 h-100 shadow-sm border border-light" style={{ backgroundColor: '#faf9f6' }}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-wrapper p-3 rounded-circle me-3" style={{ backgroundColor: '#fdf3f0', color: '#d98a72' }}>
                        <i className="ri-home-4-line fs-3"></i>
                      </div>
                      <h5 className="fw-bold mb-0" style={{ color: '#2d3748' }}>Neue Lebensräume</h5>
                    </div>
                    <p className="text-muted small mb-0">
                      Orientierung und Sicherheit bei Umzug, Hauswechsel oder weiteren einschneidenden familiären Veränderungen.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}