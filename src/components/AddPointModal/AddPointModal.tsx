import styles from './AddPointModal.module.css'

type AddPointModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const AddPointModal = ({active, setActive}: AddPointModalProps) => {

  const tech = ["HTML", "CSS", "Javascript", "Typescript", "React", "Vue", "Tailwind", "SASS"]

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
        <div className={styles.timesection}>
          <div className={styles.timesection__header}>
            <span>Time to complete:</span>
            <span>No time specified</span>
          </div>
          <div className={styles.timesection__buttons}>
            <div>-1 Day</div>
            <div>Days</div>
            <div>+1 Day</div>
            <div>-1 Week</div>
            <div>Weeks</div>
            <div>+1 Week</div>
            <div>-1 Month</div>
            <div>Months</div>
            <div>+1 Month</div>
            <div>-1 Year</div>
            <div>Years</div>
            <div>+1 Year</div>
          </div>
        </div>
        <button className={styles.confirm}>Confirm roadmap point</button>
      </div>
    </div>
  )
}

export default AddPointModal



