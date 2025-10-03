import React from "react";
import "./Footer.css";
import {Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    
    
      <footer role="contentinfo">
        <div className="footer-content">
          <div className="footer-row">
    
            <div className="footer-col">
              <div className="footer-logo">
                <i className="fas fa-eye"></i> Our Vision & Mission
              </div>
              <p className="footer-desc">
             To be among the best academic health centers in research, medical education, and excellence in patient care by using technological advancement,
innovative methodology, immense clinical experience, continuous quality improvement, gracious professionalism and long-life learning till perfection.

              </p>
            </div>

            <div className="footer-col">
              <div className="footer-title">Quick Links</div>
              <ul className="footer-links">
                <li>
                  <a href="/"><i className="fas fa-chevron-right"></i> Home</a>
                </li>
                <li>
                  <a href="/about"><i className="fas fa-chevron-right"></i> About Us</a>
                </li>
                <li>
                  <a href="/admissions"><i className="fas fa-chevron-right"></i> Admissions</a>
                </li>
                <li>
                  <a href="/campus"><i className="fas fa-chevron-right"></i> Campus Life</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <div className="footer-title">Contact Information</div>
              <div className="footer-contact">
                <p>
                  <i className="fas fa-phone-alt"></i> <strong>Phone:</strong>{" "}
                  048-3252717
                </p>
                <p>
                  <i className="fas fa-circle"></i> <strong>Whatsapp:</strong>{" "}
                  03200827294

                </p>
                <p>
                  <i className="fas fa-envelope"></i> <strong>Email:</strong>{" "}
                  principal.sihs.health@punjab.gov.pk
                </p>
                <p>
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <strong>Address:</strong> 117-C Zafar Ullah Road Satellite Town Sargodha, Pakistan
                </p>

                <div className="social-icons">
                  <Link to="https://www.facebook.com/SIHSsargodha" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="https://www.instagram.com/sihs.sargodha/#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <div className="footer-title">Send a Message</div>
              <div className="form-message" id="formMessage"></div>
              <form
                className="footer-form"
                id="footerForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message sent! (demo only)");
                  e.target.reset();
                }}
              >
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              © {new Date().getFullYear()} Sargodha Medical College. Developed by{" "}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
            <b>Zeeshan Siddiq</b>
              </a>
              .
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
