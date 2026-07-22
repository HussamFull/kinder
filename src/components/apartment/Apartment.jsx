import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import 'glightbox/dist/css/glightbox.css';

export default function Apartment() {
 
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
                            
                                <li data-filter=".filter-app">Apartment</li>
                               
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

                    </div>
                </div>
            </section>

      

         
        </div>
    );
}