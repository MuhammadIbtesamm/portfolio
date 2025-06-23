import React from 'react';
import styles from './Education.module.css';

export const Education = () => {
  return (
    <section id="edu" className={styles.educationSection}>
      <h2 className={styles.title}>EDUCATION</h2>
      <div className={styles.timeline}>
        <div className={styles.line}></div>

        <div className={`${styles.item} ${styles.left}`}>
          <span className={styles.year}>2018 - 2019</span>
          <div className={styles.card}>
            <h3>Matriculation</h3>
            <p>Al Riaz High School, Karachi</p>
          </div>
        </div>

        <div className={`${styles.item} ${styles.right}`}>
          <span className={styles.year}>2020 - 2021</span>
          <div className={styles.card}>
            <h3>HSC (Intermediate in Pre Engineering)</h3>
            <p>Jamia Millia Govt College</p>
          </div>
        </div>

        <div className={`${styles.item} ${styles.left}`}>
          <span className={styles.year}>2022 - Present</span>
          <div className={styles.card}>
            <h3>BS Computer Science</h3>
            <p>SMIU (Sindh Madresatul Islam University)</p>
            <p>Currently in 8th semester</p>
          </div>
        </div>
      </div>
    </section>
  );
};
