import styles from './AddPointModal.module.css'

type AddPointModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const AddPointModal = ({active, setActive}: AddPointModalProps) => {
  
  const handleChange = () => setActive(!active)

  return (
    <div className={`${styles.addPointModal} ${active ? styles.visible : ''}`}>
      <button onClick={handleChange}>X</button>
    </div>
  )
}

export default AddPointModal


