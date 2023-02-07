import styles from './AddPointButton.module.css'
import AddPointModal from '../AddPointModal/AddPointModal'


const AddPointButton = () => {
  return (
    <>
      <button className={styles.addPointButton}>
        <span>Add new point</span>
      </button>
      <AddPointModal />
    </>
    
  )
}

export default AddPointButton

