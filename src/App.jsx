import styles from './App.module.css'

import Presentation from './components/Presentation'
import Header from './components/Header'

function App() {

  return (
    <div className={styles.background}>
      <Header/>
      <Presentation/>
    </div>
  )
}

export default App
