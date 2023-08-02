import styles from "./Projects.module.css";
import React from "react";

import serj from "../assets/images/serj.jpg";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Project from "./Project";

const Projects = React.forwardRef((props, ref) => {
  return (
    <section className={styles.container} ref={ref}>
      <Project name="Teste"/>
      <Project />
      <Project />
    </section>
  );
});

export default Projects;
