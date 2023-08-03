import styles from "./Projects.module.css";
import React from "react";
import aver4ageImg from '../assets/images/aver4age.png'

import {
  SiJavascript,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiReact,
  SiVuedotjs,
} from "react-icons/si";
import Project from "./Project";

const Projects = React.forwardRef((props, ref) => {
  const aver4ageDesc =
    "Projeto pessoal feito com o intuito de facilitar no cálculo de médias e facilitar a visualização geral das notas da Universidade Paulista";
  const knowledgeDesc =
    "Projeto final do curso 'Web Moderno' da Cod3r, tem o objetivo de colocar em prática tudo o que foi aprendido no decorrer do curso, tanto do backend como frontEnd";
  const expensesDesc =
    "Projeto pessoal em andamento que tem como objetivo facilitar no controle e visualização de finanças pessoais, além de auxiliar no planejamento de futuros gastos";

  const html = <SiHtml5 style={{ fill: "url(#linear-gradient)" }} />;
  const react = <SiReact style={{ fill: "url(#linear-gradient)" }} />;
  const javascript = <SiJavascript style={{ fill: "url(#linear-gradient)" }} />;
  const postgresql = <SiPostgresql style={{ fill: "url(#linear-gradient)" }} />;
  const css = <SiCss3 style={{ fill: "url(#linear-gradient)" }} />;
  const vue = <SiVuedotjs style={{ fill: "url(#linear-gradient)" }} />;

  const aver4ageStack = [react, javascript, html, css];
  const knowledgeStack = [vue, postgresql, html, css];
  const expensesStack = [react, javascript, html, css];

  return (
    <section className={styles.container} ref={ref}>
      <Project
        name="Aver4age"
        description={aver4ageDesc}
        stack={aver4ageStack}
        image={aver4ageImg}
        link='https://aver4age.vercel.app/'
      />
      <Project
        name="Knowledge"
        description={knowledgeDesc}
        stack={knowledgeStack}
      />
      <Project
        name="Expen$es"
        description={expensesDesc}
        stack={expensesStack}
      />
    </section>
  );
});

export default Projects;
