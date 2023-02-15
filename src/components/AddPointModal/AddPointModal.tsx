import styles from './AddPointModal.module.css'

type AddPointModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const AddPointModal = ({active, setActive}: AddPointModalProps) => {
  
  const handleChange = () => setActive(!active)

  return (
    <div className={`${styles.addPointModal} ${active ? styles.visible : ''}`}>
      <div className={styles.addPointModal__container}>
        <div className={styles.header}>
          <span>JavaScript</span>
          <button onClick={handleChange}>X</button>
        </div>
        <div className={styles.container}>
          <form className={styles.form}>
            <span>Add point</span>
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddPointModal



