import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <>
  <div>
  {/* ======= Services Section ======= */}
  <section id="services" className="services">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Services</h2>
        <p>Schauen Sie sich unsere Leistungen „unser Dienst“ an"</p>
      </div>


   <div className="row">

  {/* البطاقة الأولى: الشقة */}
  <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
    <Link to="/Apartment" className="service-card-link">
      <div className="icon-box">
        <div className="icon"><i className="bx bxl-dribbble" /></div>
        <h4>Stilvolles Wohnen</h4>
        <p>
          Erleben Sie Komfort im Herzen Wiens. Unser Apartment vereint modernes Design 
          mit einer einladenden, lichtdurchfluteten Atmosphäre und einem charmanten 
          Ausblick zum Entspannen.
        </p>
      </div>
    </Link>
  </div>

  {/* البطاقة الثانية: خدمة التاكسي */}
  <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
    <Link to="/CarService" className="service-card-link">
      <div className="icon-box">
        <div className="icon"><i className="bx bx-file" /></div>
        <h4>Exklusiver Fahrservice</h4>
        <p>
          Sicher, pünktlich und komfortabel ans Ziel. Ob Flughafentransfer oder 
          Stadtrundfahrt – genießen Sie erstklassigen Service in unseren modernen 
          Fahrzeugen direkt ab Ihrer Haustür.
        </p>
      </div>
    </Link>
  </div>

  {/* البطاقة الثالثة: الهدوء والموقع */}
  <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
    <Link to="/Location" className="service-card-link">
      <div className="icon-box">
        <div className="icon"><i className="bx bx-tachometer" /></div>
        <h4>Zentrale Ruheoase</h4>
        <p>
          Die perfekte Mischung aus zentraler Lage und privater Ruhe. Erreichen Sie 
          Wiens Highlights in wenigen Minuten und genießen Sie dennoch absolute 
          Privatsphäre in Ihrem Rückzugsort.
        </p>
      </div>
    </Link>
  </div>

</div>






      
    </div>
  </section>
  {/* End Services Section */}
  {/* ======= Cta Section ======= */}
  <section id="cta" className="cta">
    <div className="container" data-aos="zoom-in">
      <div className="text-center">
        <h3>Contact us</h3>
        <p>
Wohnkomfort und Mobilität in Perfektion – Ihr exklusiver Rundum-Service in Wien.
        </p>
        <a className="cta-btn" href=" https://wa.me/message/7TEJZNO3QI2RM1">Jetzt anfragen</a>
      </div>
    </div>
  </section>
  {/* End Cta Section */}
</div>

    </>
  )
}
