import React from "react";
import styles from "./Presentation.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { GlobalStyleContext } from "../providers/globalStyle";

export default function Presentation({ executeScroll }) {
  const { lightMode, language } = React.useContext(GlobalStyleContext);
  const scrollFunction = (id) => {
    var reqId = "#" + id;
    window.scrollTo(0, $(reqId).offset().top - 85);
  };

  return (
    <div className={styles.container}>
      <div className={styles.presentation}>
        <p
          className={`${styles.occupation} ${styles.pt1} ${
            lightMode ? styles.light : styles.dark
          }`}
          >
          DESENVOLVEDOR
        </p>
        <p
          className={`${styles.occupation} ${styles.pt2} ${
            lightMode ? styles.light : styles.dark
          }`}
          >
          FRONT-END
        </p>
        <div className={styles.salutationLinks}>
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
              target="_blank"
              title="GitHub"
              className={`${styles.iconLink} ${
                lightMode ? styles.light : styles.dark
              }`}
              >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/orlandi-netto/"
              target="_blank"
              title="LinkedIn"
              className={`${styles.iconLink} ${
                lightMode ? styles.light : styles.dark
              }`}
              style={{ marginLeft: "10px" }}
              >
              <BsLinkedin />
            </a>
            <a
              href="src\assets\resume\curriculum.pdf"
              download={"Curriculum"}
              title="Currículo"
              className={`${styles.iconLink} ${
                lightMode ? styles.light : styles.dark
              }`}
              style={{ fontSize: 65 }}
              >
              <HiDocumentText />
            </a>

            <div
              onClick={() => executeScroll()}
              title="Projetos"
              className={`${styles.iconLink} ${
                lightMode ? styles.light : styles.dark
              }`}
              style={{ fontSize: 60 }}
              >
              <FaLaptopCode />
            </div>
          </div>
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
    </div>
  );
}
