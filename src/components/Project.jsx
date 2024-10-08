import styles from "./Project.module.css";
import React from "react";

import { GlobalStyleContext } from "../providers/globalStyle";

import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { SiJavascript } from "react-icons/si";

export default function Project({
  name,
  image,
  description,
  stack,
  link,
  soon,
}) {
  const defaultName = "Nome do Projeto";
  const defaultDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac ipsum metus. Sed pretium hendrerit vestibulum. Duis vehicula neque eget massa cursus, id aliquam dolor rhoncus.";

  const treatedStack = stack || [
    <FaReact style={{ fill: "url(#linear-gradient)" }} />,
    <SiJavascript style={{ fill: "url(#linear-gradient)" }} />,
    <FaHtml5 style={{ fill: "url(#linear-gradient)" }} />,
    <FaCss3Alt style={{ fill: "url(#linear-gradient)" }} />,
  ];

  const { lightMode } = React.useContext(GlobalStyleContext);

  return (
    <a
      href={link}
      target="_blank"
      className={`${styles.project} ${lightMode ? styles.light : styles.dark} ${
        soon && styles.blocked
      }`}
      title={soon ? "EM BREVE" : null}
    >
      <h1>{name || defaultName}</h1>
      <div className={styles.imageBox} style={lightMode ? {backgroundColor: "lightgray", color: "gray"} : {backgroundColor: "#19191a", color: "#0e0e0f"}}>
        {image ? <img src={image} alt="Image" /> : <MdOutlineImageNotSupported style={{fontSize: "4rem"}}/>}
      </div>
      <div className={styles.description}>
        <p>{description || defaultDescription}</p>
      </div>
      <div className={styles.stack}>
        {treatedStack.map((e, i) => (
          <span key={i}>{e}</span>
        ))}
      </div>
    </a>
  );
}
