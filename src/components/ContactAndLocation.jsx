import React from "react";
import styles from "./ContactAndLocation.module.css";

function ContactAndLocation() {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.sectionTitle}>Contact Us &amp; Our Location</h2>

      <div className={styles.gridWrapper}>
        <div className={styles.contactFormCard}>
          <h3 className={styles.subTitle}>Send Us a Message</h3>
          <form action="process_contact_form.php" method="POST" className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your full name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="name@example.com" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="e.g., Admission Inquiry" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Type your message here..." required></textarea>
            </div>
            <button type="submit" className={styles.btnSendMessage}>Send Message</button>
          </form>
        </div>

        <div className={styles.contactInfoCard}>
          <h3 className={styles.subTitle}>Our Information</h3>
          <div className={styles.contactInfoItem}>
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <strong>Address</strong>
              <p>Sargodha Medical College, Faisalbad Road, Sargodha, Punjab, Pakistan</p>
            </div>
          </div>
          <div className={styles.contactInfoItem}>
            <i className="fas fa-phone-alt"></i>
            <div>
              <strong>Phone</strong>
              <p>(048) 9232004</p>
            </div>
          </div>
          <div className={styles.contactInfoItem}>
            <i className="fas fa-envelope"></i>
            <div>
              <strong>Email</strong>
              <p>Principle.smc.health@punjab.gov.pk</p>
            </div>
          </div>

          <h4 className={styles.subSubTitle}>Opening Hours</h4>
          <ul className={styles.openingHours}>
            <li><span>Monday - Friday:</span><span>9:00 AM - 5:00 PM</span></li>
            <li><span>Saturday:</span><span>9:00 AM - 1:00 PM</span></li>
            <li><span>Sunday:</span><span>Closed</span></li>
          </ul>
        </div>
      </div>

      <div className={styles.mapWrapper}>
        <h3 className={styles.sectionTitle}>Find Us on Map</h3>
        <div className={styles.mapContainer}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.4112224148685!2d72.72056577477761!3d32.003972773996345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921826576c80d67%3A0x1701a729b24f826!2sSargodha%20Medical%20College!5e0!3m2!1sen!2s!4v1752401393147!5m2!1sen!2s" allowFullScreen="" title="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactAndLocation;
