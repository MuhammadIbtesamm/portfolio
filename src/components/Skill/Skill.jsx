import React from "react";

import styles from "./Skill.module.css";

export const Skill = () => {
  return (
    <section className={styles.container} id="skill">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <ul className={styles.skillItems}>
          <li className={styles.skillItem}>
            <div className={styles.skillItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites (React, JavaScript, Tailwind CSS).
              </p>
            </div>
          </li>
          
          <li className={styles.skillItem}>
            <div className={styles.skillItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and APIs (Node.js, Express, REST APIs).
              </p>
            </div>
          </li>

          <li className={styles.skillItem}>
            <div className={styles.skillItemText}>
              <h3>Database Management</h3>
              <p>
                I have a solid understanding of databases for smooth data flow and reliable storage (MongoDB, Mongoose, SQL, MySQL).
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
