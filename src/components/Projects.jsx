import styles from "./Projects.module.css";
import React from "react";
import aver4ageImg from "../assets/images/aver4age.png";
import petParadiseImg from "../assets/images/petParadise.png";
import Project from "./Project";

import {
  SiJavascript,
  // SiPostgresql,
  SiHtml5,
  SiCss3,
  SiReact,
  // SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

// eslint-disable-next-line react/display-name
const Projects = React.forwardRef((props, ref) => {
  const aver4ageDesc =
    "Projeto pessoal feito com o intuito de facilitar no cálculo de médias e facilitar a visualização geral das notas da Universidade Paulista";
  const petParadiseDesc =
    "Landing page desenvolvida com o objetivo de por em prática conceitos de design e responsividade";
  const expensesDesc =
    "Projeto pessoal em andamento que tem como objetivo facilitar no controle e visualização de finanças pessoais, além de auxiliar no planejamento de futuros gastos";

  const html = <SiHtml5 style={{ fill: "url(#linear-gradient)" }} />;
  const react = <SiReact style={{ fill: "url(#linear-gradient)" }} />;
  const javascript = <SiJavascript style={{ fill: "url(#linear-gradient)" }} />;
  const typescript = <SiTypescript style={{ fill: "url(#linear-gradient)" }} />;
  // const postgresql = <SiPostgresql style={{ fill: "url(#linear-gradient)" }} />;
  const css = <SiCss3 style={{ fill: "url(#linear-gradient)" }} />;
  // const vue = <SiVuedotjs style={{ fill: "url(#linear-gradient)" }} />;
  const tailwind = <SiTailwindcss style={{ fill: "url(#linear-gradient)" }} />;
  const mongodb = <SiMongodb style={{ fill: "url(#linear-gradient)" }} />;

  const aver4ageStack = [react, typescript, mongodb, tailwind];
  const petParadiseStack = [react, javascript, html, tailwind];
  const expensesStack = [react, javascript, html, css];

  return (
    <section className={styles.container} ref={ref}>
      <Project
        name="Aver4age"
        description={aver4ageDesc}
        stack={aver4ageStack}
        image={aver4ageImg}
        link="https://aver4age.vercel.app/"
      />
      <Project
        name="Pet Paradise"
        description={petParadiseDesc}
        stack={petParadiseStack}
        image={petParadiseImg}
        link="https://pet-paradise-zeta.vercel.app/"
      />
      <Project
        name="Expen$es"
        description={expensesDesc}
        stack={expensesStack}
        soon={true}
      />
    </section>
  );
});

export default Projects;
