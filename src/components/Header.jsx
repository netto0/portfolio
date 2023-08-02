import React from "react";
import styles from "./Header.module.css";

import { GlobalStyleContext } from "../providers/globalStyle";

import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";
import { HiSun, HiMoon } from "react-icons/hi";
import { TbMoonFilled} from "react-icons/tb";
import { MdLanguage } from "react-icons/md";

export default function Header() {

  const {lightMode, setLightMode} = React.useContext(GlobalStyleContext)

  return (
    <header className={styles.headerContainer}>
      <div className={`${styles.headerButton} ${lightMode ? styles.light : styles.dark}`} onClick={() => setLightMode(!lightMode)}>
        {lightMode ? <TbMoonFilled/> : <HiSun/>}
      </div>
      <div className={`${styles.headerButton} ${lightMode ? styles.light : styles.dark}`} onClick={() => console.log("Change Language")}>
        <MdLanguage />
      </div>
    </header>
  );
}
