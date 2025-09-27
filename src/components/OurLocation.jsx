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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.4112224148685!2d72.72056577477761!3d32.003972773996345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921826576c80d67%3A0x1701a729b24f826!2sSargodha%20Medical%20College!5e0!3m2!1sen!2s!4v1752401393147!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sargodha Medical College Map"
              ></iframe>
            </div>
          </div>

          <div className="col" style={{ flex: 1 }}>
            <div className="contact-info-compact">
              <h3 style={{ color: "#8B0000", fontWeight: 600, marginBottom: "20px" }}>Find Us</h3>

              <div className="contact-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Address</strong>
                  <p>Sargodha Medical College, Faisalabad Road, Sargodha, Punjab, Pakistan</p>
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
                  <p>principal.smc.health@punjab.gov.pk</p>
                </div>
              </div>

              <h4 style={{ color: "#8B0000", marginTop: "20px", marginBottom: "10px" }}>Opening Hours</h4>
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
