import React from "react";
import styles from "./Presentation.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { GlobalStyleContext } from "../providers/globalStyle";

export default function Presentation() {
  const { lightMode } = React.useContext(GlobalStyleContext);

  return (
    <div className={styles.presentation}>
      <p
        className={`${styles.occupation} ${
          lightMode ? styles.light : styles.dark
        }`}
      >
        DESENVOLVEDOR FRONT-END
      </p>
      <p
        className={`${styles.salutation} ${
          lightMode ? styles.light : styles.dark
        }`}
      >
        Oi, me chamo Netto
      </p>
      <div className={styles.iconLinks}>
        <a
          href="https://github.com/netto0"
          onclick="window.open('https://google.com/', '_blank'); return false;"
          target="_blank"
          className={`${styles.iconLink} ${
            lightMode ? styles.light : styles.dark
          }`}
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/orlandi-netto/"
          target="_blank"
          className={`${styles.iconLink} ${
            lightMode ? styles.light : styles.dark
          }`}
          style={{ marginLeft: "10px" }}
        >
          <BsLinkedin />
        </a>
        <a
          href="src\assets\resume\curriculumVitae2023.pdf"
          download={"curriculumVitae2023.pdf"}
          className={`${styles.iconLink} ${
            lightMode ? styles.light : styles.dark
          }`}
          style={{ fontSize: 65 }}
        >
          <HiDocumentText />
        </a>
        <a
          href="/"
          className={`${styles.iconLink} ${
            lightMode ? styles.light : styles.dark
          }`}
          style={{ fontSize: 60 }}
        >
          <FaLaptopCode />
        </a>
      </div>
      <p
        className={`${styles.summary} ${
          lightMode ? styles.light : styles.dark
        }`}
      >
        Tenho 23 anos e estou estudando desenvolvimento front-end com foco em
        React há 1 ano.
      </p>
    </div>
  );
}
