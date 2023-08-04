import styles from "./App.module.css";
import React, { useRef } from "react";
import Presentation from "./components/Presentation";
import Header from "./components/Header";
import { GlobalStyleContext } from "./providers/globalStyle";
import Projects from "./components/Projects";

function App() {
  const { lightMode } = React.useContext(GlobalStyleContext);
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView();
  };

  return (
    <div
      className={`${styles.background} ${
        lightMode ? styles.light : styles.dark
      }`}
    >
      <svg width="0" height="0">
        {lightMode ? (
          <linearGradient
            id="linear-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#d81dd0" offset="0%" />
            <stop stopColor="#7511f4" offset="100%" />
          </linearGradient>
        ) : (
          <linearGradient
            id="linear-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#04B3EA" offset="0%" />
            <stop stopColor="#9624EF" offset="100%" />
          </linearGradient>
        )}
      </svg>
      <Header />
      <Presentation executeScroll={executeScroll} />
      <Projects ref={myRef} />
    </div>
  );
}

export default App;
