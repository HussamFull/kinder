import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import 'glightbox/dist/css/glightbox.css';

export default function Portfolio() {
    
useEffect(() => {
        // تشغيل مكتبة GLightbox للصور المكبرة والملاحة السريعة
        const lightbox = GLightbox({
            selector: '.portfolio-lightbox',
            touchNavigation: true,
            loop: true,
            autoplayVideos: true
        });

        // تنظيف المكتبة عند مغادرة الصفحة
        return () => {
            if (lightbox) lightbox.destroy();
        };
    }, []);

    // قائمة الصور الخاصة بجميع الخدمات والأقسام
    const portfolioImages = [
        { name: "Slide8", ext: "png", title: "Einfühlsame Kinderbegleitung" },
        { name: "Slide1", ext: "png", title: "Pädagogische Materialien" },
        { name: "Slide2", ext: "png", title: "Mentaltraining für Kinder" },
        { name: "Slide3", ext: "png", title: "Trauer- & Abschiedsarbeit" },
        { name: "Slide4", ext: "png", title: "Begleitung bei Übergängen" },
        { name: "Slide5", ext: "png", title: "Geschützter Raum (Einzelsetting)" },
        { name: "Slide6", ext: "png", title: "Impressionen & Einblicke" },
        { name: "Slide7", ext: "png", title: "Unsere Räumlichkeiten" },
        { name: "Slide9", ext: "png", title: "Beratung & Unterstützung" },
        { name: "Slide10", ext: "jpeg", title: "Lösungsorientierte Elternberatung " }, // تم ضبط الامتداد هنا بناءً على المجلد
        { name: "Slide11", ext: "png", title: "Entspannungsbereich" },
        { name: "Slide12", ext: "png", title: "Spielecke für Kinder" },
        
    ];

    return (
        <div>
            {/* ======= Portfolio Section ======= */}
            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">
                    
                    {/* عنوان السكشن */}
                    <div className="section-title text-center mb-5">
                        <h2>Portfolio</h2>
                        <p>Einblick in unsere Arbeit & Räumlichkeiten</p>
                    </div>

                    {/* شبكة الصور الموحدة والنقية */}
                    <div className="row g-4 portfolio-container" data-aos="fade-up" data-aos-delay="100">
                        {portfolioImages.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 portfolio-item">
                                <div className="portfolio-wrap rounded shadow-sm overflow-hidden">
                                   <img 
    src={`/assets/img/${item.name}.${item.ext}`} 
    className="img-fluid w-100" 
    alt={item.title} 
    style={{ height: '260px', objectFit: 'cover' }}
/>
                                    <div className="portfolio-info">
                                        <h4>{item.title}</h4>
                                        <div className="portfolio-links">
                                           <a 
    href={`/assets/img/${item.name}.${item.ext}`} 
    className="portfolio-lightbox" 
    data-gallery="portfolioGallery"
    title={item.title}
>
    <i className="bx bx-plus"></i>
</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>











          {/* ======= About / Value Proposition Section ======= */}
      <section id="counts" className="counts py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" data-aos="fade-up">
          <div className="row g-4 align-items-center">
            
            {/* Image Column */}
            <div 
              className="col-xl-5 d-flex align-items-stretch justify-content-center" 
              data-aos="fade-right" 
              data-aos-delay="100"
            >
              <div 
                className="image-container w-100 rounded-4 overflow-hidden shadow-sm border" 
                style={{ 
                  minHeight: '325px', 
                  backgroundImage: `url('/assets/img/ruth-alonso-fox-about.png')`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
              >
                {/* سيتم وضع الصورة المصممة هنا */}
              </div>
            </div>

            {/* Content Column */}
            <div 
              className="col-xl-7 ps-0 ps-lg-5 d-flex align-items-stretch" 
              data-aos="fade-left" 
              data-aos-delay="100"
            >
              <div className="content d-flex flex-column justify-content-center">
                <span className="badge px-3 py-2 mb-3 shadow-sm align-self-start" style={{ backgroundColor: '#d98a72', color: '#fff', borderRadius: '20px', fontSize: '0.85rem' }}>
                  Achtsamkeit &amp; Vertrauen
                </span>
                <h3 className="fw-bold mb-3" style={{ color: '#2d3748', lineHeight: '1.3' }}>
                  Einfühlsame Begleitung &amp; Neue Perspektiven für Ihr Kind
                </h3>
                <p className="text-muted fs-6 mb-4 lh-lg">
                  Veränderungen im Leben eines Kindes erfordern Feingefühl und eine sichere Umgebung. Gemeinsam stärken wir das Selbstvertrauen Ihres Kindes und begleiten Sie als Familie Schritt für Schritt durch jede Umbruchsphase.
                </p>

                <div className="row g-3">
                  {/* Feature 1 */}
                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box p-3 rounded-3 bg-light border w-100 d-flex align-items-start">
                      <div className="icon me-3 p-2 rounded-circle text-center" style={{ backgroundColor: '#fdf3f0', color: '#d98a72', minWidth: '45px', height: '45px' }}>
                        <i className="bx bx-heart fs-3"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1" style={{ color: '#2d3748' }}>Geschützter Raum</h6>
                        <p className="text-muted small mb-0 lh-base">Vertrauensvolle Atmosphäre, in der sich Ihr Kind geborgen fühlt.</p>
                      </div>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box p-3 rounded-3 bg-light border w-100 d-flex align-items-start">
                      <div className="icon me-3 p-2 rounded-circle text-center" style={{ backgroundColor: '#f0f4f1', color: '#8a9a86', minWidth: '45px', height: '45px' }}>
                        <i className="bx bx-smile fs-3"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1" style={{ color: '#2d3748' }}>Stärkung &amp; Wachstum</h6>
                        <p className="text-muted small mb-0 lh-base">Ressourcen aktivieren und gestärkt in die Zukunft blicken.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

  
        </div>
    );
}