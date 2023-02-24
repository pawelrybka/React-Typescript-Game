import React from 'react'
import styles from './AddPointModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import TodosContext from '../Context/Context'
import { useState, useContext, ChangeEvent } from 'react'

type AddPointModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const AddPointModal = ({ visible, setVisible }: AddPointModalProps) => {

  const handleClose = () => setVisible(!visible)

  const [inputValue, setInputValue] = useState("");
 
  const { addTodo } = useContext(TodosContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(inputValue === '') return;
    addTodo(inputValue);
    setInputValue("");
    setVisible(!visible)
  };

  const tech = ["HTML", "CSS", "Javascript", "Typescript", "React", "Vue", "Tailwind", "SASS"]

  return (
    <div className={`${styles.addpointmodal} ${visible ? styles.visible : ''}`}>
      <div className={styles.addpointmodal__header}>
        <span>JavaScript</span>
        <button onClick={handleClose}><AiOutlineClose size={20}/></button>
      </div>
      <div className={styles.addpointmodal__content}>
        <form className={styles.form}>
          <label>Roadmap point title</label>
          <input type="text" value={inputValue} onChange={handleInputChange}/>
        </form>
        <p>Suggestions:</p>
        <div className={styles.buttons}>
          {
            tech.map(tech => <input type='button' value={tech} onClick={() => setInputValue(tech)}/>)
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
        <button className={styles.confirm} onClick={handleAddTodo}>Confirm roadmap point</button>
      </div>
    </div>
  )
}

export default AddPointModal



