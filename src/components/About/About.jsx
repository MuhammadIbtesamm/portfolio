import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.heading}>ABOUT ME</h2>
      <div className={styles.content}>
        <p>
        I'm a Computer Science undergraduate at SMIU, currently in my 7th semester, with a passion for building creative, human-centered technology. My journey blends a strong foundation in software development with years of experience in design and music production, giving me a unique perspective on crafting intuitive, impactful solutions.
        </p>
        <p>
          Currently pursuing my Bachelor's in CS, I've spent the last several years honing my skills in React, React Native, and web technologies while applying them to real-world projects. My background includes:
        </p>
        <ul className={styles.list}>
          <li>1+ years of focused on CS and Web Development</li>
          <li>3+ years as a teacher (CIT, Graphic Designing etc)</li>
        </ul>
        <p>
        I’m excited by the intersection of technology and creativity, always aiming to deliver solutions that are both powerful and visually appealing. When I’m not coding, you’ll find me designing visuals or exploring the latest trends in frontend development.
        </p>
      </div>
    </section>
  );
};