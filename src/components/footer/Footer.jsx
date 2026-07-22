import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="footer-info">
            <h3>Cozy <span>Home Vienna</span></h3>
            <p>
              Wilhelminenstraße 31, <br />1160 Wien <br /> <br />
              <strong>Phone:</strong> ⁦ +43 660 73 63 869 ⁩<br />
              <strong>Email:</strong>  cozyhomevienna1160@gmail.com<br />
            </p>
            <div className="social-links mt-3">
              <a href="https://www.facebook.com/" className="facebook"><i className="bx bxl-facebook" /></a>
              <a href="https://www.instagram.com/" className="instagram"><i className="bx bxl-instagram" /></a>

              
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <i className="bx bx-chevron-right" /> <Link to={""}>Home</Link>
            </li>
            <li>
              <i className="bx bx-chevron-right" /> <Link to={"About"}>About us</Link>
            </li>
            <li>
              <i className="bx bx-chevron-right" /> <Link to={"Services"}>Services</Link>
            </li>
            <li>
              <i className="bx bx-chevron-right" />
              <Link to={"/Datenschutzerklaerung"}>Datenschutz</Link>
            </li>
            <li>
              <i className="bx bx-chevron-right" />
              <Link to={"/Impressum"} href="#">Impressum</Link>
            </li>
          </ul>
        </div>
        {/*  
      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li>
            <i class="bx bx-chevron-right"></i> <a href="#">Web Design</a>
          </li>
          <li>
            <i class="bx bx-chevron-right"></i>
            <a href="#">Web Development</a>
          </li>
          <li>
            <i class="bx bx-chevron-right"></i>
            <a href="#">Product Management</a>
          </li>
          <li>
            <i class="bx bx-chevron-right"></i> <a href="#">Marketing</a>
          </li>
          <li>
            <i class="bx bx-chevron-right"></i>
            <a href="#">Graphic Design</a>
          </li>
        </ul>
      </div>
  */}
        



      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      © Copyright <strong><span>Cozy Home Vienna.</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      Designed by <a href="https://hussamfull.github.io/iPortfolio3/">Hussam Alnabelsi.</a>
    </div>
  </div>
</footer>

    </>
  )
}
