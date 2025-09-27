import React from "react";
import styles from "./FacultyOfClinicalSciences.module.css";

function FacultyOfClinicalSciences() {
  return (
    <div className={styles.facultyContent}>
      <h2 className={styles.sectionTitle}>Overview</h2>
      <p className={styles.overviewText}>
        Dedicated to advanced medical training and patient care, the Faculty of Clinical Sciences offers specialized programs and hands-on experience in diverse clinical settings.
      </p>

      <h2 className={styles.sectionTitle}>Departments</h2>
      <ul className={styles.departmentsGrid}>
        <li>
          <a href="coming_soon.php">
            <i className="fas fa-arrow-right"></i> Gynaecology
          </a>
        </li>
        <li>
          <a href="coming_soon.php">
            <i className="fas fa-arrow-right"></i>  Internal Medicine
          </a>
        </li>
        <li>
          <a href="coming_soon.php">
            <i className="fas fa-arrow-right"></i>  Pediatrics
          </a>
        </li>
        <li>
          <a href="coming_soon.php">
            <i className="fas fa-arrow-right"></i>  Surgery
          </a>
        </li>
      </ul>

      <a href="index.php" className={styles.backButton}>
        <i className="fas fa-arrow-left"></i> Back to Faculties
      </a>
    </div>
  );
}

export default FacultyOfClinicalSciences;
