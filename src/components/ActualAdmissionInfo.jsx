import React, { useState } from "react";
import "./ActualAdmissionInfo.css";

function ActualAdmissionInfo() {
  const [activeTab, setActiveTab] = useState("undergraduate");

  return (
    <div className="admission-container">
      <div className="criteria-card">
        {/* Tabs */}
        <ul className="nav-tabs">
          <li className="tab-item">
            <button
              className={`tab-link ${activeTab === "undergraduate" ? "active" : ""}`}
              onClick={() => setActiveTab("undergraduate")}
            >
              Undergraduate Programs
            </button>
          </li>
          <li className="tab-item">
            <button
              className={`tab-link ${activeTab === "postgraduate" ? "active" : ""}`}
              onClick={() => setActiveTab("postgraduate")}
            >
              Postgraduate Programs
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "undergraduate" && (
            <div className="tab-pane active">
              <h2 className="section3-title">Undergraduate Programs</h2>

              <h3>B.Sc. (Hons.) Allied Health Sciences (4 years)</h3><hr />
              <p>
                Entry level for all B.Sc. Allied Health Sciences Programs should be uniform and it shall be F.Sc. Pre-Medical or F.Sc. in relevant technology from a Board of Intermediate & Secondary Education / equivalent (as determined by the Inter Board Committee of Chairmen, Islamabad), with at least 50 % unadjusted marks, w.e.f. academic year 2010.

There shall be no age restriction for admission in B.Sc. (Hons.) Allied Health Sciences courses.{" "}
                <strong>50% unadjusted marks</strong>.
              </p>
              <p>No age restriction for admission in Allied Health Sciences.</p>

              <h3 className="mt-4">B.Sc. Nursing (4 years)</h3><hr />
              <ul>
                <li>Selection purely on merit.</li>
                <li>
                  Requisite: F.Sc. Pre-medical with{" "}
                  <strong>50% unadjusted marks</strong>.
                </li>
                <li>Age limit: 17–25 years.</li>
                <li>Decision of selection board is final.</li>
              </ul>
              <h3 className="mt-4">B.Sc. Nursing (2 years)</h3><hr />
              <ul>
                <li>Diploma in General Nursing registered with Pakistan Nursing Council.</li>
                <li>Diploma in Midwifery / for male nurses 1-year specialized course registered with Pakistan Nursing Council.
</li>
                <li>
                  Minimum of<strong> 02 years’ experience.</strong>.
                </li>
                <li>Age limit & gender not applicable.</li>
                <li>Admission test, interview by the Institute concerned.</li>
              </ul>
            </div>
          )}

          {activeTab === "postgraduate" && (
            <div className="tab-pane active">
              <h2 className="section3-title">Postgraduate Programs</h2>

              <h3>MS/MD</h3><hr />
              <ul>
                <li>MBBS/equivalent registered with PMDC.</li>
                <li>Completed one year House Job, with at least six months in the particular discipline.</li>
                <li>One-year experience in particular specialty/Internal Medicine or General Surgery* /Allied medical or surgical discipline* in the given order of preference (as the case may be).</li>
                <li>Passed Entry Test conducted by the University & aptitude interview by the Institute concerned.</li>
              </ul>

              <p className="note">
                <strong>Note:</strong> 4 years for MS (General Surgery) & MD (Internal Medicine).
                                      /5 years for MS and MD in specialties.
                
              </p>

              <h3 className="mt-4">MDS</h3><hr />
              <ul>
                <li>BDS/equivalent qualification registered with PMDC.</li>
                <li>Completed one year House Job.</li>
                <li>Passed Entry Test & Interview.</li>
              </ul>

              <h3 className="mt-4">M.Phil</h3><hr />
              <ul>
                <p>
               To be eligible for admission to M. Phil., a candidate shall possess an MBBS / BDS degree. Any other higher degree e.g., M.Sc. in relevant field can be recognized by the University as equivalent, to aforementioned degrees. This shall only apply to very distinguished or outstanding candidates.</p>
                       <br />
            <strong>Admissions shall be made on the basis of merit in accordance with the following criteria:</strong><br /><br />
                <li>60% Qualifications with previous academic record & relevant experience.</li>
                <li>10% Entry Test.</li>
                <li>30% Interview.</li>
              </ul>

              <h3 className="mt-4">M.Sc. Nursing</h3><hr />
              <ul>
            <strong>Eligibility to the program:</strong><br /><br />
                <li>Bachelor of Science in Nursing, from recognized institution/affiliated to a University approved by HEC.</li>
                <li>Minimum 1 year clinical or nursing administration experience.</li>
                <li>Open domicile.</li>
                <li>Open gender.</li>
                <li>Entrance Test (English language, Mathematics, Aptitude test, General/current events).</li>
              </ul>
              <p className="note">
                <strong>Note:</strong>Only those candidates who pass the entrance test shall be eligible to appear in interview        
              </p>
              <h3 className="mt-4">M.Sc. Medical Laboratory Technology</h3><hr />
              <ul>
                <li>First or high 2nd division in B.Sc. Medical Laboratory Technology/B.Sc. (Hons.) Chemistry/Biology/ Biotechnology/MBBS.</li>
                <li>Entry Test/Interview.</li>
                </ul>
              <h2 className="section3-title">Postgraduate Clinical Diplomas (2 years)</h2>
              <p><strong>General Requirements for all Postgraduate Clinical Diplomas: </strong>MBBS/equivalent qualification registered with PMDC and fulfillment of one of the following criteria, in given order of preference:</p><br />
                            
            <h3 className="mt-4">DA (Diploma in Anesthesiology)</h3><hr />
              <ul>
                <li>Securing pass %age in the Entry Test as determined by UHS and qualifying the interview successfully.</li><br />
                <strong>Specific criteria for DA (2 years):</strong><br /><br />
                <li>Diploma in Midwifery/for male nurses 1 year specialized course registered with Pakistan Nursing Council.</li>
                <li>Minimum of 02 years’ experience.</li>
                </ul>
                <div className="programs-container">

  <h3 className="mt-4">Dip. Card. (Diploma in Cardiology)</h3><hr />
  <ul>
    <li>Securing pass %age in the Entry Test as determined by UHS and qualifying the interview successfully.</li><br />
    <strong>Specific criteria for Dip. Card. (2 years):</strong><br /><br />
    <li>One year experience in General Medicine as Medical Officer or House Officer.</li>
    <li>Six months experience in the Cardiology and six months in allied specialty as Medical Officer or House Officer.</li>
  </ul>

  <h3 className="mt-4">DCH (Diploma in Child Health)</h3><hr />
  <ul>
    <li>Securing pass %age in the Entry Test as determined by UHS and qualifying the interview successfully.</li><br />
    <strong>Specific criteria for DCH (2 years):</strong><br /><br />
    <li>One year experience in Paediatrics as Medical Officer or House Officer.</li>
    <li>Six months experience in Paediatrics and six months in allied specialty as Medical Officer or House Officer.</li>
    <li>One year experience in General Medicine as Medical Officer or House Officer.</li>
  </ul>

  <h3 className="mt-4">DCP (Diploma in Clinical Pathology)</h3><hr />
  <ul>
    <li>Securing pass %age in the Entry Test as determined by UHS and qualifying the interview successfully.</li><br />
    <strong>Specific criteria for DCP (2 years):</strong><br /><br />
    <li>One year experience in Pathology as a Demonstrator in a recognized teaching institution.</li>
    <li>Six months experience in Pathology as a Demonstrator and six months house job in one of the major clinical disciplines (Medicine / Surgery / Gynae. & Obst.).</li>
    <li>Two years experience of working in a reputable accredited Pathology lab with all 4 pathology disciplines, belonging to non-teaching institution.</li>
  </ul>

  <h3 className="mt-4">DGO (Diploma in Gynaecology & Obstetrics)</h3><hr />
  <ul>
    <li>Securing pass %age in the Entry Test as determined by UHS and qualifying the interview successfully.</li><br />
    <strong>Specific criteria for DGO (2 years):</strong><br /><br />
    <li>One year experience in Gynecology & Obstetrics as Medical Officer or House Officer.</li>
    <li>Six months experience in Gynecology & Obstetrics and six months in allied specialty as Medical Officer or House Officer.</li>
  </ul>

  <h3 className="mt-4">DLO (Diploma in Laryngology & Otology - ENT)</h3><hr />
  <ul>
    <li>Securing pass %age in the Entry Test as determined by UHS and qualifying the interview successfully.</li><br />
    <strong>Specific criteria for DLO (2 years):</strong><br /><br />
    <li>One year experience in ENT as Medical Officer or House Officer.</li>
    <li>Six months experience in ENT and six months in allied specialty as Medical Officer or House Officer.</li>
    <li>One year experience in Surgery as Medical Officer or House Officer.</li>
  </ul>

  <h3 className="mt-4">DMJ (Diploma in Medical Jurisprudence)</h3><hr />
  <ul>
    <li>Securing pass %age in the Entry Test as determined by UHS and qualifying the interview successfully.</li><br />
    <strong>Specific criteria for DMJ (2 years):</strong><br /><br />
    <li>Two years experience as Demonstrator in the Department of Forensic Medicine & Toxicology of a Medical College recognized by PMDC.</li>
    <li>Four years experience as Casualty Medical Officer in a Govt. DHQ/THQ Hospital allied specialty as Medical Officer or House Officer.</li>
  </ul>

  <h3 className="mt-4">DMRD (Diploma in Medical Radiodiagnosis)</h3><hr />
  <ul>
    <li>Securing pass %age in the Entry Test as determined by UHS and qualifying the interview successfully.</li><br />
    <strong>Specific criteria for DMRD (2 years):</strong><br /><br />
    <li>One year experience in Radiology as Medical Officer or House Officer from a recognized institution.</li>
    <li>Six months experience in Radiology and six months in General Medicine/Surgery as Medical Officer or House Officer.</li>
  </ul>

  <h3 className="mt-4">DMRT (Diploma in Medical Radiotherapy)</h3><hr />
  <ul>
    <li>Securing pass %age in the Entry Test as determined by UHS and qualifying the interview successfully.</li><br />
    <strong>Specific criteria for DMRT (2 years):</strong><br /><br />
    <li>One year experience in Radiotherapy as Medical Officer or House Officer from a recognized institution.</li>
    <li>Six months experience in Radiotherapy and six months in General Medicine/Surgery as Medical Officer or House Officer.</li>
  </ul>

  <h3 className="mt-4">DOMS (Diploma in Ophthalmic Medicine & Surgery)</h3><hr />
  <ul>
    <li>Securing pass %age in the Entry Test as determined by UHS and qualifying the interview successfully.</li><br />
    <strong>Specific criteria for DOMS (2 years):</strong><br /><br />
    <li>One year experience in Ophthalmology as Medical Officer or House Officer from a recognized institution.</li>
    <li>Six months experience in Ophthalmology and six months in General Medicine/Surgery as Medical Officer or House Officer.</li>
  </ul>

  <h3 className="mt-4">DPM (Diploma in Psychological Medicine)</h3><hr />
  <ul>
    <li>Securing pass %age in the Entry Test as determined by UHS and qualifying the interview successfully.</li><br />
    <strong>Specific criteria for DPM (2 years):</strong><br /><br />
    <li>One year experience in Psychiatry as Medical Officer or House Officer from a recognized institution.</li>
    <li>Six months experience in Psychiatry and six months in General Medicine as Medical Officer or House Officer.</li>
    <li>One year experience in General Medicine as Medical Officer or House Officer.</li>
  </ul>

  <h3 className="mt-4">DTCD (Diploma in Tuberculosis & Chest Diseases)</h3><hr />
  <ul>
    <li>Securing pass %age in the Entry Test as determined by UHS and qualifying the interview successfully.</li><br />
    <strong>Specific criteria for DTCD (2 years):</strong><br /><br />
    <li>One year experience in TB & Chest Diseases as Medical Officer or House Officer from a recognized institution.</li>
    <li>Six months experience in TB & Chest Diseases and six months in General Medicine as Medical Officer or House Officer.</li>
    <li>One year experience in General Medicine as Medical Officer or House Officer.</li>
  </ul>

</div>

            </div>
          )}
        </div>
        {/* Disclaimer */}
        <p className="criteria-disclaimer">
          <i className="fas fa-info-circle me-2"></i> 
          Disclaimer: Criteria are based on UHS guidelines. Always confirm with
          the official prospectus.
        </p>
      </div>
    </div>
  );
}

export default ActualAdmissionInfo;
