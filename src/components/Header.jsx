import React from "react";
import styles from "./Header.module.css";

import { GlobalStyleContext } from "../providers/globalStyle";

import { HiSun } from "react-icons/hi";
import { IoMdMoon } from "react-icons/io";
import { MdLanguage } from "react-icons/md";

export default function Header() {
  const { lightMode, setLightMode } = React.useContext(GlobalStyleContext);

  return (
    <header className={styles.headerContainer}>
      <div
        className={styles.headerButton}
        onClick={() => setLightMode(!lightMode)}
      >
        {lightMode ? (
          <IoMdMoon style={{ fill: "url(#linear-gradient)" }} />
        ) : (
          <HiSun style={{ fill: "url(#linear-gradient)" }} />
        )}
      </div>
      <div className={styles.headerButton} title="EM BREVE">
        <MdLanguage style={{ fill: "url(#linear-gradient)" }} />
      </div>
    </header>
  );
}
