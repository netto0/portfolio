import React from "react";
import styles from "./Presentation.module.css";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { MdPictureAsPdf } from "react-icons/md";
import { FaLinkedinIn, FaGithubAlt, FaRegFilePdf } from "react-icons/fa";
import { FaCode, FaFile } from "react-icons/fa";

import { GlobalStyleContext } from "../providers/globalStyle";

export default function Presentation({ executeScroll }) {
  const { lightMode, language } = React.useContext(GlobalStyleContext);
  const scrollFunction = (id) => {
    var reqId = "#" + id;
    window.scrollTo(0, $(reqId).offset().top - 85);
  };

  return (
    <main className={styles.presentationContainer}>
      <div className={styles.presentationGrid}>
        <div className={`${styles.occupation1} ${styles.dark}`}>
          <h1 className={`${styles.occupationText} ${styles.dark}`}>
            DESENVOLVEDOR
          </h1>
        </div>
        <div className={`${styles.occupation2} ${styles.dark}`}>
          <h1 className={`${styles.occupationText} ${styles.dark}`}>FRONT-END</h1>
        </div>
          <p className={`${styles.salutation} ${styles.dark}`}>
            Oi, me chamo Netto
          </p>
          <div className={styles.iconLinks}>
            <a
              href="https://github.com/netto0"
              target="_blank"
              title="GitHub"
              className={`${styles.iconLink} ${lightMode ? styles.light : styles.dark}`}
            >
              <BsGithub style={{ fill: "url(#linear-gradient)" }}/>
            </a>
            <a
              href="https://www.linkedin.com/in/orlandi-netto/"
              target="_blank"
              title="LinkedIn"
              className={`${styles.iconLink} ${lightMode ? styles.light : styles.dark}`}
            >
              <FaLinkedinIn style={{ fill: "url(#linear-gradient)" }}/>
            </a>
            <a
              href="src\assets\resume\curriculum.pdf"
              download={"Curriculum"}
              title={language === "en" ? "Resume" : "Currículo"}
              className={`${styles.iconLink} ${lightMode ? styles.light : styles.dark}`}
            >
              <HiDocumentText style={{ fill: "url(#linear-gradient)" }}/>
            </a>
            <a
              onClick={() => executeScroll()}
              title="Projetos"
              className={`${styles.iconLink} ${lightMode ? styles.light : styles.dark}`}
            >
              <FaCode style={{ fill: "url(#linear-gradient)" }}/>
            </a>
          </div>
        <div className={`${styles.summary} ${styles.dark}`}>
          <p>
            Tenho 23 anos e estou estudando desenvolvimento front-end com foco
            em React há 1 ano.
          </p>
        </div>
      </div>
    </main>
  );
}
