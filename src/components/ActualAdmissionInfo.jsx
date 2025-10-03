import React, { useState } from "react";
import "./ActualAdmissionInfo.css";

function ActualAdmissionInfo() {
  const [activeTab, setActiveTab] = useState("policy");

  return (
    <div className="admission-container">
      <div className="criteria-card">
        {/* Tabs */}
        <ul className="nav-tabs">
          <li className="tab-item">
            <button
              className={`tab-link ${activeTab === "policy" ? "active" : ""}`}
              onClick={() => setActiveTab("policy")}
            >
              General Policy
            </button>
          </li>
          <li className="tab-item">
            <button
              className={`tab-link ${activeTab === "eligibility" ? "active" : ""}`}
              onClick={() => setActiveTab("eligibility")}
            >
              Eligibility Criteria
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "policy" && (
            <div className="tab-pane active">
              <h2 className="section3-title">General Policy (According to the Affiliated University)</h2>
              <ul>
                <li>Admission will be notified in the major Urdu / English newspapers.</li>
                <li>Admission forms are available with/without prospectus from the institute or downloadable from the website.</li>
                <li>Application form may be filled and submitted online.</li>
                <li>Selection of candidates will be on the basis of merit.</li>
                <li>Academic session will be commencing according to the Sargodha Institute of Health Sciences.</li>
              </ul>

              <h3 className="mt-4">Instructions for Admission</h3>
              <ul>
                <li>Each candidate has to submit the application on the prescribed form.</li>
                <li>Separate application is required for each category.</li>
                <li>
                  The application should be duly filled in by the candidate in his/her own handwriting in BLOCK letters with black ink or ballpoint. 
                  Fill all the columns and write "Not Applicable" if a column is irrelevant.
                </li>
                <li>
                  O/A level candidates should mention equivalent marks obtained and maximum marks in the admission form awarded by the Inter Boards Committee, Islamabad.
                </li>
                <li>
                  If a candidate is admitted on the basis of false statements, he/she will be expelled from the Institute 
                  and all fee and other dues paid shall be forfeited. Further departmental or legal action may be taken.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "eligibility" && (
            <div className="tab-pane active">
              <h2 className="section3-title">Eligibility Criteria</h2>

              <table className="eligibility-table">
                <thead>
                  <tr>
                    <th>Department</th>
                    <th>Course</th>
                    <th>Marks %</th>
                    <th>Qualification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Physiotherapy</td>
                    <td>DPT (Doctor of Physical Therapy)</td>
                    <td>60% (660)</td>
                    <td>F.Sc. Pre-medical or equivalent</td>
                  </tr>
                  <tr>
                    <td>Allied Health Sciences</td>
                    <td>BS-MLT (Medical Laboratory Technology)</td>
                    <td>60% (660)</td>
                    <td>F.Sc. Pre-medical or equivalent</td>
                  </tr>
                  <tr>
                    <td>Allied Health Sciences</td>
                    <td>BS-RIT (Radiography & Imaging Technology)</td>
                    <td>60% (660)</td>
                    <td>F.Sc. Pre-medical or equivalent</td>
                  </tr>
                  <tr>
                    <td>Allied Health Sciences</td>
                    <td>BS-OTT (Operation Theater Technology)</td>
                    <td>60% (660)</td>
                    <td>F.Sc. Pre-medical or equivalent</td>
                  </tr>
                  <tr>
                    <td>Food & Nutrition</td>
                    <td>BS-HND (Human Nutrition & Dietetics)</td>
                    <td>45% (495)</td>
                    <td>F.Sc. Pre-medical or equivalent</td>
                  </tr>
                  <tr>
                    <td>Applied Sciences</td>
                    <td>BS-Biochemistry</td>
                    <td>45% (495)</td>
                    <td>F.Sc. Pre-medical or equivalent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="criteria-disclaimer">
          <i className="fas fa-info-circle me-2"></i>
          Disclaimer: Criteria are based on affiliated university guidelines. Always confirm with
          the official prospectus.
        </p>
      </div>
    </div>
  );
}

export default ActualAdmissionInfo;
