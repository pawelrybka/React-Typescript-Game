import styles from './AddPointModal.module.css'
import { AiOutlineClose } from 'react-icons/ai';

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
        <button onClick={handleChange}><AiOutlineClose size={20}/></button>
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
            <button>-1 Day</button>
            <div>Days</div>
            <button>+1 Day</button>
            <button>-1 Week</button>
            <div>Weeks</div>
            <button>+1 Week</button>
            <button>-1 Month</button>
            <div>Months</div>
            <button>+1 Month</button>
            <button>-1 Year</button>
            <div>Years</div>
            <button>+1 Year</button>
          </div>
        </div>
        <button className={styles.confirm} onClick={handleChange}>Confirm roadmap point</button>
      </div>
    </div>
  )
}

export default AddPointModal



