import styles from './Footer.module.css'
import { TfiHandPointRight, TfiHandPointLeft } from 'react-icons/tfi';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/pawelrybka/CodeRoad.git" target='_blank'>
        <TfiHandPointRight size={40}/>
        Check the code here!
        <TfiHandPointLeft size={40}/>
      </a>
    </div>
  )
}

export default Footer

