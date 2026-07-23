import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_opx13gj";
    const templateId = "template_h79sk5q";
    const publicKey = "PCz6O1wcWi0MDA5uY";

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          alert("Ihre Nachricht wurde erfolgreich gesendet! Ich melde mich in Kürze bei Ihnen.");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert(
            "Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
          );
        }
      );
  };

  return (
    <>
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact py-5" style={{ backgroundColor: '#faf9f6' }}>
        <div className="container" data-aos="fade-up">
          
        <div className="section-title text-center mb-5 pb-3">
    
    {/* Badge with bottom margin */}
    <div className="mb-3">
      <span 
        className="badge px-4 py-2 shadow-sm d-inline-block" 
        style={{ 
          backgroundColor: '#fdf3f0', 
          color: '#d98a72', 
          borderRadius: '20px', 
          fontSize: '0.9rem',
          letterSpacing: '0.5px'
        }}
      >
        Lassen Sie uns sprechen
      </span>
    </div>

    {/* Heading with spacing */}
    <h2 
      className="fw-bold display-6 mb-3" 
      style={{ color: '#2d3748', letterSpacing: '-0.5px' }}
    >
      Kontakt
    </h2>

    {/* Subtitle / Paragraph with controlled width & margin */}
    <p 
      className="text-muted fs-6 mb-4 mx-auto lh-base" 
      style={{ maxWidth: '600px' }}
    >
      Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Ich bin gerne für Sie und Ihr Kind da.
    </p>

    {/* Divider Line with spacing */}
    <div 
      className="mx-auto mt-4" 
      style={{ 
        width: '70px', 
        height: '4px', 
        backgroundColor: '#d98a72', 
        borderRadius: '10px' 
      }}
    ></div>

  </div>

          {/* Map Container - Soft and Rounded */}
          <div className="mb-5 rounded-4 overflow-hidden shadow-sm border border-white" style={{ borderRadius: '20px' }}>
<iframe
  src="https://maps.google.com/maps?q=Wien,%20%C3%96sterreich&t=&z=11&ie=UTF8&iwloc=&output=embed"
  style={{ border: 0, width: "100%", height: "350px" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Wien Map"
/> </div>

          <div className="row g-5">
            {/* Contact Information Side */}
            <div className="col-lg-5">
              <div className="p-4 p-md-5 bg-white rounded-4 shadow-sm border-0 h-100">
                <h3 className="fw-bold mb-4 fs-4" style={{ color: '#2d3748' }}>Kontaktdaten</h3>
                
                {/* Location */}
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-box d-flex align-items-center justify-content-center rounded-circle me-3" style={{ width: '50px', height: '50px', backgroundColor: '#fdf3f0', color: '#d98a72' }}>
                    <i className="bx bx-map fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1 fs-6" style={{ color: '#2d3748' }}>Standort:</h5>
                    <p className="text-muted mb-0 small">Wien, Österreich</p>
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-box d-flex align-items-center justify-content-center rounded-circle me-3" style={{ width: '50px', height: '50px', backgroundColor: '#fdf3f0', color: '#d98a72' }}>
                    <i className="bx bx-envelope fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1 fs-6" style={{ color: '#2d3748' }}>E-Mail:</h5>
                    <p className="text-muted mb-0 small">ruth.alonsofox@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-box d-flex align-items-center justify-content-center rounded-circle me-3" style={{ width: '50px', height: '50px', backgroundColor: '#fdf3f0', color: '#d98a72' }}>
                    <i className="bx bx-phone-call fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1 fs-6" style={{ color: '#2d3748' }}>Telefon:</h5>
                    <p className="text-muted mb-0 small">+43 660 123 45 67</p>
                  </div>
                </div>

                {/* Website */}
                <div className="d-flex align-items-center">
                  <div className="icon-box d-flex align-items-center justify-content-center rounded-circle me-3" style={{ width: '50px', height: '50px', backgroundColor: '#fdf3f0', color: '#d98a72' }}>
                    <i className="bx bx-globe fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1 fs-6" style={{ color: '#2d3748' }}>Webseite:</h5>
                    <p className="text-muted mb-0 small">www.ruthalonsofox.at</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form Side */}
            <div className="col-lg-7">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="p-4 p-md-5 bg-white rounded-4 shadow-sm border-0 h-100"
              >
                <h3 className="fw-bold mb-4 fs-4" style={{ color: '#2d3748' }}>Schreiben Sie mir</h3>
                
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-light border-0 px-4 py-3 shadow-none"
                      id="name"
                      placeholder="Ihr Name"
                      style={{ borderRadius: '12px', fontSize: '0.95rem' }}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-light border-0 px-4 py-3 shadow-none"
                      id="email"
                      placeholder="Ihre E-Mail-Adresse"
                      style={{ borderRadius: '12px', fontSize: '0.95rem' }}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control bg-light border-0 px-4 py-3 shadow-none"
                      id="subject"
                      placeholder="Betreff"
                      style={{ borderRadius: '12px', fontSize: '0.95rem' }}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control bg-light border-0 px-4 py-3 shadow-none"
                      name="message"
                      rows="5"
                      placeholder="Ihre Nachricht an mich..."
                      style={{ borderRadius: '12px', fontSize: '0.95rem', resize: 'none' }}
                      required
                    />
                  </div>

                  <div className="col-12 mt-4 text-center">
                    <button 
                      type="submit" 
                      className="btn px-5 py-3 text-white fw-semibold w-100 shadow-sm"
                      style={{ backgroundColor: '#d98a72', borderRadius: '12px', transition: '0.3s' }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#c47963'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#d98a72'}
                    >
                      <i className="bx bx-send me-2"></i> Nachricht senden
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </>
  );
}

{/*
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_p6g7o28";
    const templateId = "template_uyv7nnj";
    const publicKey = "6RUFfnDR32bhtNhi_";

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          alert("Ihre Nachricht wurde erfolgreich gesendet!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert(
            "Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
          );
        }
      );
  };

  return (
    <>
  
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Kontaktieren Sie uns</p>
          </div>

          <div>
            <iframe
              style={{ border: 0, width: "100%", height: 270 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.5006907571783!2d16.319626423742083!3d48.21623267125237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d080c8e7fea6f%3A0x2882e0e72efa1bd0!2zV2lsaGVsbWluZW5zdHJhw59lIDMxLCAxMTYwIFdpZW4sINin2YTZhtmF2LPYpw!5e0!3m2!1sar!2sde!4v1775772328544!5m2!1sar!2sde"
              frameBorder="0"
              allowFullScreen
              title="Google Map"
            />
          </div>

          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>Wilhelminenstraße 31, 1160 Wien</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>cozyhomevienna1160@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+43 660 73 63 869</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  />
                </div>

                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
}


  */}