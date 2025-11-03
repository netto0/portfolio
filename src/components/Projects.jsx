import styles from "./Projects.module.css";
import React from "react";
import aver4ageImg from "../assets/images/aver4age.png";
import petParadiseImg from "../assets/images/petParadise.png";
import chronosPomodoroImg from "../assets/images/pomodoroCover.png";
import Project from "./Project";

import {
  SiJavascript,
  // SiPostgresql,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

// eslint-disable-next-line react/display-name
const Projects = React.forwardRef((props, ref) => {
  const aver4ageDesc =
    "Projeto pessoal criado com o objetivo de automatizar o cálculo de médias e aprimorar a visualização geral das notas na Universidade Paulista.";
  const petParadiseDesc =
    "Landing page desenvolvida para um petshop fictício, com foco em um visual acolhedor, cores quentes e destaque para os animais e o atendimento.";
  const chronosPomodoroDesc =
    "App de produtividade com técnica Pomodoro, permitindo gerenciar tempo de foco e pausas com interface simples, personalização de ciclos e alertas visuais e sonoros.";

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
  const chronosPomodoroStack = [react, typescript, html, css];

  return (
    <section className={styles.container} ref={ref}>
      <Project
        name="Chronos Pomodoro"
        description={chronosPomodoroDesc}
        stack={chronosPomodoroStack}
        image={chronosPomodoroImg}
        link="https://chronos-pomodoro-private.vercel.app/"
      />
      <Project
        name="Pet Paradise"
        description={petParadiseDesc}
        stack={petParadiseStack}
        image={petParadiseImg}
        link="https://pet-paradise-zeta.vercel.app/"
      />
      <Project
        name="Aver4age"
        description={aver4ageDesc}
        stack={aver4ageStack}
        image={aver4ageImg}
        link="https://aver4age.vercel.app/"
      />
    </section>
  );
});

export default Projects;
