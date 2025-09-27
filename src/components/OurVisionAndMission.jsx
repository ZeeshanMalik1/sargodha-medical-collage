import React from "react";
import "./OurVisionAndMission.css";

function OurVisionAndMission() {
  return (
    <div className="vision-container">
      <div className="vision-mission-content-section">
        <div className="vision-left" style={{ backgroundImage: "url('/images/1755507469_47072020250714139.jpg')" }}>
          <div className="highlightvision-box">
            OUR <br />
            VISION <br />
            &amp; <br />
            MISSION
          </div>
        </div>

        <div className="vision-right" >
          <h2 className="section2-title">Our Vision &amp; Mission</h2>
          <p>
            Sargodha Medical College, Sargodha is committed to provide competency
            based medical education to produce socially accountable health
            professionals by fostering critical thinking, effective community
            services, and life long learning, enhancing clinical and research
            skills with ethical and professional values.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurVisionAndMission;
