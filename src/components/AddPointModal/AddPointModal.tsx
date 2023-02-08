import styles from './AddPointModal.module.css'

type AddPointModalProps = {
  visible: boolean;
}

const AddPointModal = (visible: AddPointModalProps) => {
  return (
    <div className={styles.addPointModal}>
        AddPointModal
    </div>
  )
}

export default AddPointModal

