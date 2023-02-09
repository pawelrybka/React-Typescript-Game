import styles from './AddPointModal.module.css'

type AddPointModalProps = {
  visible: boolean;
}

const AddPointModal = ({visible}: AddPointModalProps) => {
  
  console.log(visible)
  return (
    <div className={`${styles.addPointModal} ${visible ? styles.visible : ''}`}>
      AddPointModal
    </div>
  )
}

export default AddPointModal

