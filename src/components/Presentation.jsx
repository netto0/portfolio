// import React from "react";
import styles from "./Presentation.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

export default function Presentation() {
  return (
    <div className={styles.presentation}>
      <p className={styles.occupation}>DESENVOLVEDOR FRONT-END</p>
      <p className={styles.salutation}>Oi, me chamo Netto</p>
      <div className={styles.iconLinks}>
        <span className={styles.iconLink}>
          <BsGithub />
        </span>
        <span className={styles.iconLink} style={{marginLeft:"10px"}}>
          <BsLinkedin />
        </span>
        <span className={styles.iconLink} style={{fontSize:65}}>
          <HiDocumentText />
        </span>
        <span className={styles.iconLink} style={{fontSize:60}}>
          <FaLaptopCode />
        </span>
      </div>
      <p className={styles.summary}>
        Tenho 23 anos e estou estudando desenvolvimento front-end com foco em
        React há 1 ano.
      </p>
    </div>
  );
}
