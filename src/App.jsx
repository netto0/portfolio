import styles from './App.module.css'
import React from 'react';
import Presentation from './components/Presentation'
import Header from './components/Header'
import { GlobalStyleContext } from './providers/globalStyle';

function App() {
  const { lightMode} = React.useContext(GlobalStyleContext);

  return (
    <div className={`${styles.background} ${lightMode ? styles.light : styles.dark}`}>
      <Header/>
      <Presentation/>
    </div>
  )
}

export default App
