import React from 'react';
import { Link } from 'react-router-dom';


export default function Hero() {
  return (
    <>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center justify-content-center position-relative overflow-hidden" style={{ minHeight: '100vh', padding: '120px 0 60px' }}>
        
        {/* طبقة شفافة زيتي ميرمية ناعمة جداً تبرز الصورة وتمنح راحة بصرية */}
        <div className="hero-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(44, 53, 48, 0.45)',
          backdropFilter: 'blur(1.5px)',
          zIndex: 1
        }}></div>

        <div className="container position-relative" data-aos="fade-up" style={{ zIndex: 2 }}>
          
          {/* قسم النصوص الرئيسي */}
          <div className="row justify-content-center text-center mb-5" data-aos="fade-up" data-aos-delay={150}>
            <div className="col-xl-8 col-lg-10">
              
              {/* شارة اللقب بلون ترابي دافئ متناسق */}
              <span className="d-inline-block text-uppercase mb-3 px-4 py-2 rounded-pill shadow-sm" style={{
                color: '#fff',
                backgroundColor: 'rgba(186, 128, 104, 0.9)',
                fontSize: '0.85rem',
                letterSpacing: '2.5px',
                fontWeight: '600',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                dipl. Elementarpädagogin
              </span>

              {/* الاسم بتدرج نقي وعصري */}
              <h1 className="display-3 fw-bold text-white mb-3" style={{ letterSpacing: '-0.5px' }}>
                Ruth <span style={{ color: '#F2D6BD' }}>Alonso Fox</span>
              </h1>

              {/* الشعار */}
              <p className="lead text-light mb-0 mx-auto" style={{ fontSize: '1.35rem', maxWidth: '600px', fontWeight: '400' }}>
                Ich begleite Kinder <span style={{ color: '#F2D6BD', fontWeight: '600' }}>in Umbruchsphasen.</span>
              </p>
            </div>
          </div>

          {/* الحاوية الكبرى */}
          <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay={250}>
            <div className="col-xl-10 col-lg-11 col-md-8">
              {/* تم ضبط الحاوية لتكون شفافة تماماً وبدون أي حدود خارجية في الشاشات الصغيرة والمتوسطة */}
              <div className="hero-nav-container p-0 rounded-pill d-flex flex-column flex-lg-row justify-content-center align-items-stretch align-items-lg-center gap-3" style={{ background: 'transparent', border: 'none' }}>
                
                {/* 1. Jetzt anfragen */}
                <div className="hero-nav-item flex-fill text-center px-4 py-3 py-lg-2 rounded-pill" style={{ backgroundColor: 'rgba(44, 53, 48, 0.6)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <div className="d-flex align-items-center justify-content-center gap-2 text-decoration-none position-relative">
                    <div className="mini-icon-circle d-flex align-items-center justify-content-center">
                      <i className="ri-whatsapp-line fs-5" style={{ color: '#C86D51' }} />
                    </div>
                    <a 
                      href="https://wa.me/436766423206?text=Hallo,%20ich%20möchte%20gerne%20einen%20Termin%20buchen%20und%20freue%20mich%20auf%20ihre%20Rückmeldung." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white text-decoration-none fw-semibold stretched-link" 
                      style={{ fontSize: '0.95rem' }}
                    >
                      Jetzt anfragen
                    </a>
                  </div>
                </div>

                {/* فاصل جمالي للشاشات الكبيرة جداً فقط */}
                <div className="nav-divider d-none d-lg-block"></div>

                {/* 2. Online buchen */}
                <div className="hero-nav-item flex-fill text-center px-4 py-3 py-lg-2 rounded-pill" style={{ backgroundColor: 'rgba(44, 53, 48, 0.6)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <div className="d-flex align-items-center justify-content-center gap-2 text-decoration-none position-relative">
                    <div className="mini-icon-circle d-flex align-items-center justify-content-center">
                      <i className="ri-calendar-check-line fs-5" style={{ color: '#C86D51' }} />
                    </div>
                    <Link to={"Contact"} className="text-white text-decoration-none fw-semibold stretched-link" style={{ fontSize: '0.95rem' }}>
                      Online buchen
                    </Link>
                  </div>
                </div>

                <div className="nav-divider d-none d-lg-block"></div>

                {/* 3. Leistungen */}
                <div className="hero-nav-item flex-fill text-center px-4 py-3 py-lg-2 rounded-pill" style={{ backgroundColor: 'rgba(44, 53, 48, 0.6)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <div className="d-flex align-items-center justify-content-center gap-2 text-decoration-none position-relative">
                    <div className="mini-icon-circle d-flex align-items-center justify-content-center">
                      <i className="ri-service-line fs-5" style={{ color: '#C86D51' }} />
                    </div>
                    <Link to={"Services"} className="text-white text-decoration-none fw-semibold stretched-link" style={{ fontSize: '0.95rem' }}>
                      Leistungen
                    </Link>
                  </div>
                </div>

                <div className="nav-divider d-none d-lg-block"></div>

                {/* 4. Portfolio */}
                <div className="hero-nav-item flex-fill text-center px-4 py-3 py-lg-2 rounded-pill" style={{ backgroundColor: 'rgba(44, 53, 48, 0.6)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <div className="d-flex align-items-center justify-content-center gap-2 text-decoration-none position-relative">
                    <div className="mini-icon-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-collection fs-5" style={{ color: '#C86D51' }} />
                    </div>
                    <Link to={"Portfolio"} className="text-white text-decoration-none fw-semibold stretched-link" style={{ fontSize: '0.95rem' }}>
                      Portfolio
                    </Link>
                  </div>
                </div>

                <div className="nav-divider d-none d-lg-block"></div>

                {/* 5. Kontakt */}
                <div className="hero-nav-item flex-fill text-center px-4 py-3 py-lg-2 rounded-pill" style={{ backgroundColor: 'rgba(44, 53, 48, 0.6)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <div className="d-flex align-items-center justify-content-center gap-2 text-decoder-none position-relative">
                    <div className="mini-icon-circle d-flex align-items-center justify-content-center">
                      <i className="ri-mail-send-line fs-5" style={{ color: '#C86D51' }} />
                    </div>
                    <Link to={"Contact"} className="text-white text-decoration-none fw-semibold stretched-link" style={{ fontSize: '0.95rem' }}>
                      Kontakt
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
      {/* End Hero */}
    </>
  );
}











{/* 
export default function Hero() {
  return (
    <>

<section id="hero" className="d-flex align-items-center justify-content-center">
  <div className="container" data-aos="fade-up">
    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={150}>
      <div className="col-xl-6 col-lg-8">
  <h2 style={{ textAlign: 'left', color: '#D4AF37' }}>
    <span>dipl. Elementarpädagogin</span>
  </h2>
  <h1 style={{ textAlign: 'left'}} >Ruth <span> Alonso Fox</span></h1>

  <h2 style={{ textAlign: 'left'}}  >Ich begleite Kinder <span> in Umbruchsphasen.</span></h2>
</div>
    </div>
    <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay={250}>
      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-store-line" />
          <h3><a href="https://wa.me/qr/UD7U74XZS6PXN1" >Jetzt anfragen</a>
</h3>
        </div>
      </div>

      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-bar-chart-box-line" />
          <h3><Link to={"Booking"}>Online buchen  </Link></h3>
        </div>
      </div>



      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-bar-chart-box-line" />
          <h3><Link to={"Services"}>Leistungen </Link></h3>
        </div>
      </div>
      
      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-calendar-todo-line" />
          <h3><Link to={"Portfolio"} >Portfolio </Link></h3>
        </div>
      </div>
      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-paint-brush-line" />
          <h3><Link to={"Contact"}>Kontakt</Link></h3>
        </div>
      </div>
    
    </div>
  </div>
</section>


  
  )
}
*/}