import React from 'react'

export default function About() {
  return (
    <>
      {/* ======= About Section ======= */}

    
<section id="about" className="about py-5" style={{ backgroundColor: '#faf9f6' }}>
  <div className="container" data-aos="fade-up">
    
    {/* Headings */}
    <div className="text-center mb-5">
      <span className="badge px-3 py-2 mb-2" style={{ backgroundColor: '#8a9a86', color: '#fff', borderRadius: '20px' }}>
        Über mich
      </span>
      <h2 className="fw-bold" style={{ color: '#2d3748' }}>
        Einfühlsame Begleitung für Kinder in Umbruchsphasen
      </h2>
    </div>

    <div className="row g-4 align-items-center mb-5">
      {/* Bio & Intro */}
      <div className="col-lg-7" data-aos="fade-right">
        <div className="p-4 bg-white rounded-4 shadow-sm border-start border-4" style={{ borderColor: '#8a9a86' }}>
          <p className="fs-5 fst-italic text-muted mb-0">
            "Herzlich willkommen! Mein Name ist Ruth Alonso Fox. Ich bin Mutter von zwei Kindern, diplomierte Elementarpädagogin und befinde mich in der Ausbildung zur Lebens- und Sozialberaterin (LSB) unter Supervision. Seit über sechs Jahren begleite ich Kinder unterschiedlichen Alters mit viel Herz, Einfühlungsvermögen und fachlicher Kompetenz."
          </p>
        </div>
      </div>

      {/* Profile Image with Frame */}
      <div className="col-lg-5 text-center" data-aos="fade-left">
        <div className="position-relative d-inline-block">
          <img 
            src="/assets/img/portfolio/Slide8.PNG" 
            className="img-fluid rounded-4 shadow-lg" 
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
      <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
        <div className="h-100 p-4 bg-white rounded-4 shadow-sm text-center">
          <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', backgroundColor: '#f0f4f1', color: '#8a9a86' }}>
            <i className="ri-award-line fs-3"></i>
          </div>
          <h5 className="fw-bold fs-6">Fundierte Ausbildung</h5>
          <p className="text-muted small mb-0">Diplomierte Elementarpädagogin, LSB i.A.u.S. sowie langjährige Erfahrung.</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
        <div className="h-100 p-4 bg-white rounded-4 shadow-sm text-center">
          <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', backgroundColor: '#fdf3f0', color: '#d98a72' }}>
            <i className="ri-heart-pulse-line fs-3"></i>
          </div>
          <h5 className="fw-bold fs-6">Individuelle Förderung</h5>
          <p className="text-muted small mb-0">Jedes Kind wird in seiner Einzigartigkeit wahrgenommen und gestärkt.</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
        <div className="h-100 p-4 bg-white rounded-4 shadow-sm text-center">
          <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', backgroundColor: '#f0f4f1', color: '#8a9a86' }}>
            <i className="ri-shield-user-line fs-3"></i>
          </div>
          <h5 className="fw-bold fs-6">Geschützter Raum</h5>
          <p className="text-muted small mb-0">Ein sicherer Ort zum Gefühle ausdrücken und Stärke entwickeln.</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="400">
        <div className="h-100 p-4 bg-white rounded-4 shadow-sm text-center">
          <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', backgroundColor: '#fdf3f0', color: '#d98a72' }}>
            <i className="ri-mental-health-line fs-3"></i>
          </div>
          <h5 className="fw-bold fs-6">Ganzheitlicher Ansatz</h5>
          <p className="text-muted small mb-0">Kombination aus Elementarpädagogik, Lebensberatung & Mentaltraining.</p>
        </div>
      </div>
    </div>

  </div>
</section>




<section id="features" className="features py-5" style={{ backgroundColor: '#ffffff' }}>
  <div className="container" data-aos="fade-up">
    
    {/* Header */}
    <div className="row mb-5 justify-content-center text-center">
      <div className="col-lg-8">
        <span className="badge px-3 py-2 mb-2" style={{ backgroundColor: '#d98a72', color: '#fff', borderRadius: '20px' }}>
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
        <div 
          className="h-100 rounded-4 shadow-sm" 
          style={{ 
            backgroundImage: 'url("assets/img/features.png")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            minHeight: '380px' 
          }} 
        />
      </div>

      {/* 2x2 Grid Cards */}
      <div className="col-lg-8" data-aos="fade-left">
        <div className="row g-4">
          
          <div className="col-md-6" data-aos="zoom-in" data-aos-delay={100}>
            <div className="p-4 rounded-4 h-100 shadow-sm border border-light" style={{ backgroundColor: '#faf9f6' }}>
              <div className="d-flex align-items-center mb-3">
                <div className="p-3 rounded-circle me-3" style={{ backgroundColor: '#fdf3f0', color: '#d98a72' }}>
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
            <div className="p-4 rounded-4 h-100 shadow-sm border border-light" style={{ backgroundColor: '#faf9f6' }}>
              <div className="d-flex align-items-center mb-3">
                <div className="p-3 rounded-circle me-3" style={{ backgroundColor: '#f0f4f1', color: '#8a9a86' }}>
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
            <div className="p-4 rounded-4 h-100 shadow-sm border border-light" style={{ backgroundColor: '#faf9f6' }}>
              <div className="d-flex align-items-center mb-3">
                <div className="p-3 rounded-circle me-3" style={{ backgroundColor: '#f0f4f1', color: '#8a9a86' }}>
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
            <div className="p-4 rounded-4 h-100 shadow-sm border border-light" style={{ backgroundColor: '#faf9f6' }}>
              <div className="d-flex align-items-center mb-3">
                <div className="p-3 rounded-circle me-3" style={{ backgroundColor: '#fdf3f0', color: '#d98a72' }}>
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