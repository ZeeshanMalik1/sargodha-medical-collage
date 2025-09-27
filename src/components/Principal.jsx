import React from 'react'
import "./Principal.css"
function Principal() {
  return (
    <>
    <div className="principal-hero-section">
      <div className="container">
        <div className="principal-content-wrapper">
          <div className="principal-text-content">
            <p className="principal-role">Principal/Head of Institution</p>
            <h1 className="principal-name">PROF. DR. MUHAMMAD WARIS FAROOKA</h1>
            <p className="principal-message-text">
              Sargodha Medical College (SMC) is one of the prestigious
              institutions of Punjab situated in the city of Sargodha. Since our
              inception in 2006, we are putting our utmost efforts in imparting
              standardized and quality education, and producing talented and
              proficient healthcare professionals, independent intellectuals and
              dynamic citizens. This institution has developed outstandingly
              accomplishing a stupendous success in many directions and reached
              up to present stage.
            </p>
            <a href="#full-message" className="read-more-btn">
              READ MORE
            </a>
          </div>
          <div className="principal-image-container">
            <img
              src="/images/principal_image.png"
              alt="Prof. Dr. Muhammad Waris Farooka"
              className="principal-image"
            />
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Principal