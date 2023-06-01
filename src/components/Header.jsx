import styles from './Header.module.css'
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";

export default function Header() {

  return (
    <div className={styles.container}>
        <div className="colorModeSwitch">
            <BsLightbulbFill />
            {/* <BsLightbulbOffFill /> */}
        </div>
            <MdLanguage />
    </div>
  )
}