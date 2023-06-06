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
        <Header />
        <Presentation executeScroll={executeScroll} />
        <Projects ref={myRef} />
    </div>
  );
}

export default App;
