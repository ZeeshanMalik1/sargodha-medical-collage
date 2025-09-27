import React from "react";
import styles from "./FacultyOfBasicSciences.module.css";

function FacultyOfBasicSciences() {
  return (
    <div className={styles.facultyContent}>
      <h2 className={styles.sectionTitle}>Overview</h2>
      <p className={styles.overviewText}>
        The Faculty of Basic Sciences provides foundational knowledge in core
        scientific disciplines, preparing students for advanced studies and
        research in various fields of medicine and allied health sciences.
      </p>

      <h2 className={styles.sectionTitle}>Departments</h2>
      <ul className={styles.departmentsGrid}>
        <li> 
          <a href="coming_soon.php">
            <i className="fas fa-arrow-right"></i> Anatomy
          </a>
        </li>
        <li>
          <a href="coming_soon.php">
            <i className="fas fa-arrow-right"></i> Biochemistry
          </a>
        </li>
        <li>
          <a href="coming_soon.php">
            <i className="fas fa-arrow-right"></i> Pharmacology
          </a>
        </li>
        <li>
          <a href="coming_soon.php">
            <i className="fas fa-arrow-right"></i> Physiology
          </a>
        </li>
      </ul>

      <a href="index.php" className={styles.backButton}>
        <i className="fas fa-arrow-left"></i> Back to Faculties
      </a>
    </div>
  );
}

export default FacultyOfBasicSciences;
