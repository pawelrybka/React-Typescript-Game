import styles from './AddPointModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

type AddPointModalProps = {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const AddPointModal = ({active, setActive}: AddPointModalProps) => {

  const tech = ["HTML", "CSS", "Javascript", "Typescript", "React", "Vue", "Tailwind", "SASS"]

  const[value, setValue] = useState("")

  const handleChange = () => setActive(!active)

  const handleValue = (e: any) => setValue(e.target.value)
  
  return (
    <div className={`${styles.addpointmodal} ${active ? styles.visible : ''}`}>
      <div className={styles.addpointmodal__header}>
        <span>JavaScript</span>
        <button onClick={handleChange}><AiOutlineClose size={20}/></button>
      </div>
      <div className={styles.addpointmodal__content}>
        <form className={styles.form}>
          <label>Roadmap point title</label>
          <input type="text" value={value} onChange={handleValue}/>
        </form>
        <p>Suggestions:</p>
        <div className={styles.buttons}>
          {
            tech.map(tech => <input type='button' value={tech} onClick={handleValue}/>)
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



