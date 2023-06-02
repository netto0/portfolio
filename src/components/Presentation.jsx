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
      <p className={`${styles.occupation} ${lightMode ? styles.light : styles.dark}`}>DESENVOLVEDOR FRONT-END</p>
      <p className={`${styles.salutation} ${lightMode ? styles.light : styles.dark}`}>Oi, me chamo Netto</p>
      <div className={styles.iconLinks}>
        <span className={`${styles.iconLink} ${lightMode ? styles.light : styles.dark}`}>
          <BsGithub />
        </span>
        <span className={`${styles.iconLink} ${lightMode ? styles.light : styles.dark}`} style={{ marginLeft: "10px" }}>
          <BsLinkedin />
        </span>
        <span className={`${styles.iconLink} ${lightMode ? styles.light : styles.dark}`} style={{ fontSize: 65 }}>
          <HiDocumentText />
        </span>
        <span className={`${styles.iconLink} ${lightMode ? styles.light : styles.dark}`} style={{ fontSize: 60 }}>
          <FaLaptopCode />
        </span>
      </div>
      <p className={`${styles.summary} ${lightMode ? styles.light : styles.dark}`}>
        Tenho 23 anos e estou estudando desenvolvimento front-end com foco em
        React há 1 ano.
      </p>
    </div>
  );
}
