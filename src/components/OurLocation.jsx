import React from "react";
import "./OurLocation.css";

function OurLocation() {
  return (
    <section className="our-location-section">
      <div className="container"> 
        <h2 className="section-title">Our Location</h2>

        <div className="contact-section-card">
          <div className="col" style={{ flex: 1 }}>
            <div className="map-container-compact">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.514669951652!2d72.67886211039271!3d32.08237311905389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392177c78290fa5f%3A0x565020a87a5cbf2!2sSargodha%20Institute%20of%20Health%20Sciences!5e0!3m2!1sen!2s!4v1759162833384!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sargodha Medical College Map"
              ></iframe>
            </div>
          </div>

          <div className="col" style={{ flex: 1 }}>
            <div className="contact-info-compact">
              <h3 style={{ color: "#003366", fontWeight: 600, marginBottom: "20px" }}>Find Us</h3>

              <div className="contact-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Address</strong>
                  <p>Sargodha Institute Of Health Science, 117-C Zafar Ullah Road Satellite Town Sargodha , Punjab, Pakistan</p>
                </div>
              </div>

              <div className="contact-info-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <strong>Phone</strong>
                  <p>(048) 9232004</p>
                </div>
              </div>

              <div className="contact-info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <p>principal.sihs.health@punjab.gov.pk</p>
                </div>
              </div>

              <h4 style={{ color: "#003366", marginTop: "20px", marginBottom: "10px" }}>Opening Hours</h4>
              <ul className="opening-hours">
                <li><span>Monday - Friday:</span> <span>9:00 AM - 5:00 PM</span></li>
                <li><span>Saturday:</span> <span>9:00 AM - 1:00 PM</span></li>
                <li><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurLocation;
