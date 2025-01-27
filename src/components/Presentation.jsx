import React from "react";
import styles from "./Presentation.module.css";

import { BsGithub } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { FaLinkedinIn, FaCode } from "react-icons/fa";

export default function Presentation({ executeScroll }) {
  return (
    <main className={styles.presentationContainer}>
      <div className={styles.presentationGrid}>
        <div className={`${styles.occupation1}`}>
          <h1 className={`${styles.occupationText}`}>DESENVOLVEDOR</h1>
        </div>
        <div className={`${styles.occupation2}`}>
          <h1 className={`${styles.occupationText}`}>FRONT-END</h1>
        </div>
        <p className={`${styles.salutation}`}>Oi, me chamo Netto</p>
        <div className={styles.iconLinks}>
          <a
            href="https://github.com/netto0"
            target="_blank"
            title="GitHub"
            className={styles.iconLink}
          >
            <BsGithub style={{ fill: "url(#linear-gradient)" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/orlandi-netto/"
            target="_blank"
            title="LinkedIn"
            className={styles.iconLink}
          >
            <FaLinkedinIn style={{ fill: "url(#linear-gradient)" }} />
          </a>
          <a
            href="/curriculo.pdf"
            download="Currículo"
            title="Currículo"
            className={styles.iconLink}
          >
            <HiDocumentText style={{ fill: "url(#linear-gradient)" }} />
          </a>
          <a
            onClick={() => executeScroll()}
            title="Projetos"
            className={styles.iconLink}
          >
            <FaCode style={{ fill: "url(#linear-gradient)" }} />
          </a>
        </div>
        <div className={styles.summary}>
          <p>
            Tenho 25 anos e estou estudando desenvolvimento front-end com foco
            em React há 3 anos.
          </p>
        </div>
      </div>
    </main>
  );
}
