import styles from "./Projects.module.css";
import React from "react";
import { GlobalStyleContext } from "../providers/globalStyle";

const Projects = React.forwardRef((props, ref) => {
  const { lightMode } = React.useContext(GlobalStyleContext);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.project}>
        <div className={styles.projectImages}>
          <img
            src="src\assets\imgs\Iphone14a.png"
            alt="Phone"
            className={styles.phoneImage}
          />
          <img
            src="src\assets\imgs\Ipad.png"
            alt="Tablet"
            className={styles.tabletImage}
          />
        </div>
        <h1
          className={`${styles.projectName} ${
            lightMode ? styles.light : styles.dark
          }`}
        >
          NOME DO PROJETO
        </h1>
        <h3
          className={`${styles.projectDescription} ${
            lightMode ? styles.light : styles.dark
          }`}
        >
          BREVE DESCRIÇÃO
        </h3>
      </div>
      <div className={styles.project}>
        <div className={styles.projectImages}>
          <img
            src="src\assets\imgs\Iphone14a.png"
            alt="Phone"
            className={styles.phoneImage}
          />
          <img
            src="src\assets\imgs\Ipad.png"
            alt="Tablet"
            className={styles.tabletImage}
          />
        </div>
        <h1
          className={`${styles.projectName} ${
            lightMode ? styles.light : styles.dark
          }`}
        >
          NOME DO PROJETO
        </h1>
        <h3
          className={`${styles.projectDescription} ${
            lightMode ? styles.light : styles.dark
          }`}
        >
          BREVE DESCRIÇÃO
        </h3>
      </div>
    </div>
  );
});

export default Projects;
