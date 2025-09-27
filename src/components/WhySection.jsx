import React from "react";
import "./WhySection.css";
 
function Section1() {
  return (
    <div className="Why-section-container">
  
      <div className="row-section">
        <div className="text-column">
          <h2 className="Why-section-title">Why<br />Choose<br />SMC</h2>
          <p>
            Sargodha Medical College offers an outstanding learning environment
            for our graduates to practice in the modern and ever-growing social
            care and public health sector. The medical College offers MBBS five
            years degree program with due recognition from Pakistan Medical and
            Dental Council and FCPS/MS/MD degree programs in collaboration with
            the University of Health Sciences. Our research and clinical
            practice offer us opportunities for working in partnership with
            healthcare providers in the region to provide a variety of
            high-quality health service.
          </p> 
        </div>
        <div className="image-column">
          <img
            src="/images/smcbuliding.png"
            alt="SMC Campus"
            className="responsive-image"
          />
        </div>
      </div>

      <div className="row-section">
        <div
          className="vision-bg"
          style={{ backgroundImage: "url('/images/smcbuliding.png')" }}
        >
          <div className="highlight-box">
            OUR<br />VISION<br />&<br />MISSION
          </div>
        </div>
        <div className="text-column padded">
          <h2 className="Why-section-title">Our Vision & Mission</h2>
          <p>
            Sargodha Medical College, Sargodha is committed to provide
            competency based medical education to produce socially accountable
            health professionals by fostering critical thinking, effective 
            community services, and lifelong learning, enhancing clinical and
            research skills with ethical and professional values.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
