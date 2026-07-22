import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
      {/* ======= Contact Section ======= */}
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
      {/* End Contact Section */}
    </>
  );
}