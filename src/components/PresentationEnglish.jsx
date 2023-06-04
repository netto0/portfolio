import React from "react";
import styles from "./PresentationEnglish.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { GlobalStyleContext } from "../providers/globalStyle";

export default function PresentationEnglish({ executeScroll }) {
  const { lightMode, language } = React.useContext(GlobalStyleContext);
  const scrollFunction = (id) => {
    var reqId = "#" + id;
    window.scrollTo(0, $(reqId).offset().top - 85);
  };

  return (
    <div className={styles.container}>
      <div className={`${language === "en" ? styles.presentationEN : styles.presentationPT}`}>
        <div className={`${styles.occupationPt1} ${lightMode ? styles.light : styles.dark}`}>
          <p className={`${styles.occupationText} ${lightMode ? styles.light : styles.dark}`}>{language === "en" ? "FRONT-END" : "PROGRAMADOR"}</p>
        </div>
        <div className={`${styles.occupationPt2} ${lightMode ? styles.light : styles.dark}`}>
          <p className={`${styles.occupationText} ${styles.right} ${lightMode ? styles.light : styles.dark}`}>{language === "en" ? "DEVELOPER" : "FRONT-END"}</p>
        </div>
        <div className={styles.salutationLinks}>
          <p className={`${styles.salutation} ${lightMode ? styles.light : styles.dark}`}>
          {language === "en" ? "Hi, my name is Netto" : "Oi, me chamo Netto"}
          </p>
          <div className={styles.iconLinks}>
            <a href="https://github.com/netto0" target="_blank" title="GitHub" className={`${styles.iconLink} ${lightMode ? styles.light : styles.dark}`}>
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/orlandi-netto/" target="_blank" title="LinkedIn" className={`${styles.iconLink} ${lightMode ? styles.light : styles.dark}`}style={{ marginLeft: "10px" }}>
              <BsLinkedin />
            </a>
            <a href="src\assets\resume\curriculum.pdf" download={"Curriculum"} title={language === "en" ? "Resume" : "Currículo"} className={`${styles.iconLink} ${lightMode ? styles.light : styles.dark}`} style={{ fontSize: 65 }}>
              <HiDocumentText />
            </a>
            <div onClick={() => executeScroll()} title={language === "en" ? "Projects" : "Projetos"} className={`${styles.iconLink} ${lightMode ? styles.light : styles.dark}`} style={{ fontSize: 60 }}>
              <FaLaptopCode />
            </div>
          </div>
        </div>
        <div className={`${styles.summary} ${lightMode ? styles.light : styles.dark}`}>
          <p className={styles.summaryText}>
          {language === "en" ? "I'm 23 years old and I've been studying front-end development with a focus on React for 1 year." : "Tenho 23 anos e estou estudando desenvolvimento front-end com foco em React há 1 ano."}
            
          </p>
        </div>
      </div>
    </div>
  );
}
