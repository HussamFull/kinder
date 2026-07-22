import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import 'glightbox/dist/css/glightbox.css';

export default function Portfolio() {
    
    useEffect(() => {
        // 1. تشغيل الـ Lightbox للعرض الكبير
        const lightbox = GLightbox({
            selector: '.portfolio-lightbox',
            touchNavigation: true,
            loop: true,
            autoplayVideos: true
        });

        // 2. تشغيل الـ Swiper للآراء (Testimonials)
        if (window.Swiper) {
            new window.Swiper('.testimonials-slider', {
                speed: 600,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                slidesPerView: 'auto',
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                }
            });
        }

        // 3. إعداد الفلترة (Isotope)
        // نستخدم setTimeout لضمان تحميل الصور في الـ DOM أولاً
        const timer = setTimeout(() => {
            const portfolioContainer = document.querySelector('.portfolio-container');
            if (portfolioContainer) {
                const portfolioIsotope = new Isotope(portfolioContainer, {
                    itemSelector: '.portfolio-item',
                    layoutMode: 'fitRows'
                });

                const portfolioFilters = document.querySelectorAll('#portfolio-flters li');

                portfolioFilters.forEach(filterEl => {
                    filterEl.addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        // إزالة الكلاس النشط من الجميع وإضافته للعنصر المختار
                        portfolioFilters.forEach(el => el.classList.remove('filter-active'));
                        this.classList.add('filter-active');

                        // تنفيذ الفلترة
                        portfolioIsotope.arrange({
                            filter: this.getAttribute('data-filter')
                        });
                        
                        // إعادة تشغيل AOS (الأنيميشن) لتحديث العناصر الظاهرة
                        if (window.AOS) {
                            window.AOS.refresh();
                        }
                    });
                });
            }
        }, 300);

        // تنظيف المكتبات عند مغادرة الصفحة
        return () => {
            clearTimeout(timer);
            if (lightbox) lightbox.destroy();
        };
    }, []);

    // قائمة الصور الخاصة بالشقق
    const apartmentImages = [
        "Slide8","Slide1", "Slide2", "Slide3", "Slide4", "Slide5", "Slide6", 
        "Slide7",  "Slide9", "Slide10", "Slide11", "Slide12", 
        "Slide13", "Slide14", "Slide15", "Slide16", "Slide17", "Slide18"
    ];

    // مصفوفة السيارات (قم بتغيير الأسماء حسب ملفاتك)
const carImages = ["car1", "car2", "car3"]; 

// مصفوفة الخدمات
const serviceImages = ["service1", "service2"];

    return (
        <div>
            {/* ======= Portfolio Section ======= */}
            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>Schauen Sie sich unsere Portfolio an</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">Apartment</li>
                                <li data-filter=".filter-card">Car</li>
                                <li data-filter=".filter-web">Services</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        
                        {/* عرض صور الشقق ديناميكياً */}
                        {apartmentImages.map((imgName, index) => (
                            <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img 
                                        src={`/assets/img/portfolio/${imgName}.PNG`} 
                                        className="img-fluid" 
                                        alt={`Apartment ${index + 1}`} 
                                    />
                                    <div className="portfolio-info">
                                        <h4>Apartment</h4>
                                        <div className="portfolio-links">
                                            <a 
                                                href={`/assets/img/portfolio/${imgName}.PNG`} 
                                                className="portfolio-lightbox" 
                                                data-gallery="portfolioGallery"
                                                title={`Apartment ${index + 1}`}
                                            >
                                                <i className="bx bx-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
{/* 2. قسم السيارات - Car */}
    {carImages.map((imgName, index) => (
        <div key={`car-${index}`} className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
                <img src={`/assets/img/portfolio/${imgName}.PNG`} className="img-fluid" alt="Car" />
                <div className="portfolio-info">
                    <h4>Car Service</h4>
                    <div className="portfolio-links">
                        <a href={`/assets/img/portfolio/${imgName}.PNG`} className="portfolio-lightbox" data-gallery="portfolioGallery">
                            <i className="bx bx-plus"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ))}

    {/* 3. قسم الخدمات - Services */}
    {serviceImages.map((imgName, index) => (
        <div key={`ser-${index}`} className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
                <img src={`/assets/img/portfolio/${imgName}.PNG`} className="img-fluid" alt="Service" />
                <div className="portfolio-info">
                    <h4>Our Services</h4>
                    <div className="portfolio-links">
                        <a href={`/assets/img/portfolio/${imgName}.PNG`} className="portfolio-lightbox" data-gallery="portfolioGallery">
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

      {/* ======= Testimonials Section ======= */}
      <section id="testimonials" className="testimonials py-5" style={{ backgroundColor: '#faf9f6' }}>
        <div className="container" data-aos="zoom-in">
          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">
              
              <div className="swiper-slide">
                <div className="testimonial-item text-center bg-white p-4 p-md-5 rounded-4 shadow-sm border mx-auto" style={{ maxWidth: '800px' }}>
                  <img 
                    src="/assets/img/team/ruth-alonso-fox.jpg" 
                    className="testimonial-img rounded-circle mb-3 border border-3 shadow-sm" 
                    alt="Ruth Alonso Fox" 
                    style={{ width: '90px', height: '90px', objectFit: 'cover', borderColor: '#d98a72' }}
                  />
                  <h3 className="fw-bold fs-4 mb-1" style={{ color: '#2d3748' }}>Ruth Alonso Fox</h3>
                  <h4 className="fs-6 fw-normal text-muted mb-4">Kinder im Wandel | Expertin für Kinderbegleitung</h4>
                  <p className="fst-italic text-muted fs-6 lh-lg px-lg-4">
                    <i className="bx bxs-quote-alt-left quote-icon-left me-2" style={{ color: '#d98a72' }}></i>
                    Mein Ziel ist es, Kindern in Zeiten des Wandels Orientierung, Sicherheit und Vertrauen zu schenken – damit sie mit Freude und innerer Stärke ihren eigenen Weg gehen können.
                    <i className="bx bxs-quote-alt-right quote-icon-right ms-2" style={{ color: '#d98a72' }}></i>
                  </p>
                </div>
              </div>

            </div>
            <div className="swiper-pagination mt-4"></div>
          </div>
        </div>
      </section>
        </div>
    );
}