import styles from './ButtonSection.module.css'
import AddPointButton from '../AddPointButton/AddPointButton'
import ShareButton from '../ShareButton/ShareButton'

const ButtonSection = () => {
  return (
    <div className={styles.buttonSection}>
        <AddPointButton/>
        {/* <ShareButton/> */}
    </div>
  )
}

export default ButtonSection


