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

            {/* ======= Counts Section ======= */}
            <section id="counts" className="counts">
                <div className="container" data-aos="fade-up">
                    <div className="row no-gutters">
                        <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay="100" />
                        <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
                            <div className="content d-flex flex-column justify-content-center">
                                <h3>Exklusiver Aufenthalt & Erstklassige Mobilität: Ihr Rundum-Service in Wien!</h3>
                                <p>Planen Sie eine Reise nach Wien? Wir machen Ihren Aufenthalt unvergesslich!</p>
                                <div className="row">
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-emoji-smile"></i>
                                            <p><strong>🛒 Stilvolles Apartment:</strong> Ein Zuhause mit Wohlfühlfaktor.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-journal-richtext"></i>
                                            <p><strong>🚗 Exklusiver Fahrservice:</strong> Sichere und pünktliche Fahrten.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ======= Testimonials Section ======= */}
            <section id="testimonials" className="testimonials">
                <div className="container" data-aos="zoom-in">
                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="/assets/img/team/team-1.png" className="testimonial-img" alt="Herr Alnablsi" />
                                    <h3>Herr Alnablsi</h3>
                                    <h4>Inhaber & Ihr Gastgeber in Wien</h4>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Mein Ziel ist es, Ihnen nicht nur eine Unterkunft, sondern ein erstklassiges Erlebnis in Wien zu bieten.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}