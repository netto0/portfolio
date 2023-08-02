import styles from "./Projects.module.css";
import React from "react";

import serj from "../assets/images/serj.jpg";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Project from "./Project";

const texto =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. InIn ac ipsum metus. Sed pretium hendrerit vestibulum. Duis vehicula neque eget massa cursus, id aliquam dolor rhoncusIn ac ipsum metus. Sed pretium hendrerit vestibulum. Duis vehicula neque eget massa cursus, id aliquam dolor rhoncus ac ipsum metus. Sed pretium hendrerit vestibulum. Duis vehicula neque eget massa cursus, id aliquam dolor rhoncus.";

const Projects = React.forwardRef((props, ref) => {
  return (
    <section className={styles.container} ref={ref}>
      <Project name="Teste" image={serj} description={texto}/>
      <Project />
      <Project />
    </section>
  );
});

export default Projects;
