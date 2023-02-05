import styles from './ButtonSection.module.css'
import AddPointButton from '../AddPointButton/AddPointButton'


const ButtonSection = () => {
  return (
    <div className={styles.buttonSection}>
        <AddPointButton/>
    </div>
  )
}

export default ButtonSection


