import React from 'react'
import { Link } from 'react-router-dom'



export default function Hero() {
  return (
    <>
 {/* ======= Hero Section ======= */}
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
          <h3><a href="https://wa.me/qr/UD7U74XZS6PXN1" >Book now</a>
</h3>
        </div>
      </div>

      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-bar-chart-box-line" />
          <h3><Link to={"Booking"}>Booking  </Link></h3>
        </div>
      </div>



      <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-bar-chart-box-line" />
          <h3><Link to={"Apartment"}>Apartment </Link></h3>
        </div>
      </div>
        <div className="col-xl-2 col-md-4">
        <div className="icon-box">
          <i className="ri-database-2-line" />
          <h3><Link to={"Car"}>Car</Link></h3>
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
          <h3><Link to={"Contact"}>Contact</Link></h3>
        </div>
      </div>
    
    </div>
  </div>
</section>
{/* End Hero */}

    </>
  )
}
