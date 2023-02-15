import styles from './AddPointModal.module.css'

type AddPointModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const AddPointModal = ({active, setActive}: AddPointModalProps) => {

  const tech = ["HTML", "CSS", "Javascript", "Typescript", "React", "Vue"]

  const handleChange = () => setActive(!active)

  return (
    <div className={`${styles.addpointmodal} ${active ? styles.visible : ''}`}>
      <div className={styles.addpointmodal__header}>
        <span>JavaScript</span>
        <button onClick={handleChange}>X</button>
      </div>
      <div className={styles.addpointmodal__content}>
        <form className={styles.form}>
          <label>Roadmap point title</label>
          <input type="text" />
        </form>
        <p>Suggestions:</p>
        <div className={styles.buttons}>
          {
            tech.map(tech => <button>{tech}</button>)
          }
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default AddPointModal



