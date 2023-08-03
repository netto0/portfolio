import styles from "./Project.module.css";
import React from "react";

import { GlobalStyleContext } from "../providers/globalStyle";

import placeHolderImage from "../assets/images/placeHolderImageGray.png";

import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export default function Project({ name, image, description, stack, link }) {
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
      className={`${styles.project} ${lightMode ? styles.light : styles.dark}`}
    >
      <h1>{name || defaultName}</h1>
      <img src={image || placeHolderImage} alt="Image" />
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
