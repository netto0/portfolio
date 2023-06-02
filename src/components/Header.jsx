import React from "react";
import styles from "./Header.module.css";
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { GlobalStyleContext } from "../providers/globalStyle";

export default function Header() {
  const { lightMode, setLightMode, language, setLanguage } =
    React.useContext(GlobalStyleContext);

  return (
    <header className={`${styles.container} ${lightMode ? styles.light : styles.dark}`}>
      <div className="colorModeSwitch" onClick={() => setLightMode(!lightMode)}>
        {lightMode ? <BsLightbulbFill /> : <BsLightbulbOffFill />}
      </div>
      <div>
        <MdLanguage />
      </div>
    </header>
  );
}
