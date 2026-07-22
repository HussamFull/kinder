import React from 'react'

export default function Service() {
  return (
    <>
      {/* ======= Custom Hover & Styling ======= */}
      <style>{`
        .service-card-modern {
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                      box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                      border-color 0.35s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
          cursor: pointer;
        }

        .service-card-modern:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08) !important;
          border-color: #8a9a86 !important;
        }

        .service-card-modern-alt:hover {
          border-color: #d98a72 !important;
          box-shadow: 0 15px 30px rgba(217, 138, 114, 0.12) !important;
        }

        .service-icon-box {
          width: 65px;
          height: 65px;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .service-card-modern:hover .service-icon-box {
          transform: scale(1.1) rotate(4deg);
        }

        .cta-section-bg {
          background: linear-gradient(135deg, #8a9a86 0%, #6e7e6a 100%);
        }

        .cta-btn-custom {
          background-color: #d98a72;
          color: #ffffff;
          padding: 12px 32px;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .cta-btn-custom:hover {
          background-color: #c5765e;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(217, 138, 114, 0.4);
        }
      `}</style>

      <div>
        {/* ======= Services Section ======= */}
        <section id="services" className="services py-5" style={{ backgroundColor: '#faf9f6' }}>
          <div className="container" data-aos="fade-up">
            
            {/* Header */}
            <div className="text-center mb-5">
              <span className="badge px-3 py-2 mb-2 shadow-sm" style={{ backgroundColor: '#d98a72', color: '#fff', borderRadius: '20px' }}>
                Meine Angebot
              </span>
              <h2 className="fw-bold" style={{ color: '#2d3748' }}>
                Begleitung &amp; Unterstützung für Ihr Kind
              </h2>
              <p className="text-muted fs-6 mt-3 mx-auto" style={{ maxWidth: '750px' }}>
                Jedes Kind erlebt Umbrüche auf seine ganz eigene Weise. Mit fachlicher Expertise, Herz und individuellen Methoden biete ich Kindern und Eltern Orientierung und Halt in herausfordernden Zeiten.
              </p>
            </div>

            {/* Services Grid */}
            <div className="row g-4">

              {/* Service 1: Kinderbegleitung */}
              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                <div className="service-card-modern p-4 bg-white rounded-4 h-100 shadow-sm d-flex flex-column justify-content-between">
                  <div>
                    <div className="service-icon-box mb-4 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fdf3f0', color: '#d98a72' }}>
                      <i className="ri-heart-pulse-line fs-2"></i>
                    </div>
                    <h4 className="fw-bold mb-3 fs-5" style={{ color: '#2d3748' }}>Einfühlsame Kinderbegleitung</h4>
                    <p className="text-muted small lh-lg">
                      Gezielte Unterstützung für Kinder in Krisen und Umbruchsphasen. Wir verarbeiten Gefühle, bauen Ängste ab und stärken das Selbstvertrauen für einen stabilen Alltag.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2: Elternberatung */}
              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                <div className="service-card-modern service-card-modern-alt p-4 bg-white rounded-4 h-100 shadow-sm d-flex flex-column justify-content-between">
                  <div>
                    <div className="service-icon-box mb-4 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f0f4f1', color: '#8a9a86' }}>
                      <i className="ri-parent-line fs-2"></i>
                    </div>
                    <h4 className="fw-bold mb-3 fs-5" style={{ color: '#2d3748' }}>Lösungsorientierte Elternberatung</h4>
                    <p className="text-muted small lh-lg">
                      Beratung für Eltern, um ihr Kind in schwierigen Phase (wie Trennung oder Verlust) besser zu verstehen und als gestärkte Familie neue Wege zu gehen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3: Pädagogische Übergänge */}
              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                <div className="service-card-modern p-4 bg-white rounded-4 h-100 shadow-sm d-flex flex-column justify-content-between">
                  <div>
                    <div className="service-icon-box mb-4 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fdf3f0', color: '#d98a72' }}>
                      <i className="ri-building-line fs-2"></i>
                    </div>
                    <h4 className="fw-bold mb-3 fs-5" style={{ color: '#2d3748' }}>Begleitung bei Übergängen</h4>
                    <p className="text-muted small lh-lg">
                      Sanfte Vorbereitung und Begleitung beim Start in den Kindergarten, beim Wechsel in die Volksschule oder bei einem Umzug in ein neues Umfeld.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 4: Trauer & Abschiedsarbeit */}
              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                <div className="service-card-modern service-card-modern-alt p-4 bg-white rounded-4 h-100 shadow-sm d-flex flex-column justify-content-between">
                  <div>
                    <div className="service-icon-box mb-4 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f0f4f1', color: '#8a9a86' }}>
                      <i className="bx bx-sun fs-1"></i>
                    </div>
                    <h4 className="fw-bold mb-3 fs-5" style={{ color: '#2d3748' }}>Trauer- &amp; Abschiedsarbeit</h4>
                    <p className="text-muted small lh-lg">
                      Ein achtsamer Raum für Kinder beim Verlust eines Familienmitglieds oder eines Haustieres. Wir geben der Trauer Raum und finden Wege der Heilung.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 5: Mentaltraining & NLP */}
              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
                <div className="service-card-modern p-4 bg-white rounded-4 h-100 shadow-sm d-flex flex-column justify-content-between">
                  <div>
                    <div className="service-icon-box mb-4 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fdf3f0', color: '#d98a72' }}>
                      <i className="ri-mental-health-line fs-2"></i>
                    </div>
                    <h4 className="fw-bold mb-3 fs-5" style={{ color: '#2d3748' }}>Mentaltraining für Kinder</h4>
                    <p className="text-muted small lh-lg">
                      Spielerisches Mentaltraining und NLP-Techniken zur Stärkung der Resilienz, des Selbstwertgefühls und zum Umgang mit eigenen Emotionen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 6: Geschützter Einzelsetting */}
              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="600">
                <div className="service-card-modern service-card-modern-alt p-4 bg-white rounded-4 h-100 shadow-sm d-flex flex-column justify-content-between">
                  <div>
                    <div className="service-icon-box mb-4 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f0f4f1', color: '#8a9a86' }}>
                      <i className="ri-shield-star-line fs-2"></i>
                    </div>
                    <h4 className="fw-bold mb-3 fs-5" style={{ color: '#2d3748' }}>Geschützter Raum (Einzelsetting)</h4>
                    <p className="text-muted small lh-lg">
                      Individuelle Einzelsitzungen in einer vertrauensvollen, ruhigen Atmosphäre, in der sich das Kind ohne Druck öffnen und entfalten kann.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* End Services Section */}

        {/* ======= Cta Section ======= */}
        <section id="cta" className="cta cta-section-bg py-5 text-white">
          <div className="container" data-aos="zoom-in">
            <div className="text-center py-4">
              <h3 className="fw-bold mb-3 fs-2">Möchten Sie Ihr Kind liebevoll begleiten lassen?</h3>
              <p className="lead opacity-90 mb-4 mx-auto" style={{ maxWidth: '700px' }}>
                Nehmen Sie unverbindlich Kontakt mit mir auf. Gemeinsam finden wir den besten Weg für Ihr Kind und Ihre Familie.
              </p>
              <a 
                className="cta-btn-custom shadow-lg" 
                href="https://wa.me/message/7TEJZNO3QI2RM1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="ri-whatsapp-line me-2 fs-5 align-middle"></i>
                Jetzt unverbindlich anfragen
              </a>
            </div>
          </div>
        </section>
        {/* End Cta Section */}
      </div>
    </>
  )
}