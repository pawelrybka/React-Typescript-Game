import React from 'react'
import styles from './AddPointModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import Context from '../Context/Context'
import { useState, useContext } from 'react'
import { motion } from "framer-motion"

type AddPointModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const AddPointModal = ({ visible, setVisible }: AddPointModalProps) => {

  const { addTodo } = useContext(Context);

  const [inputValue, setInputValue] = useState("");
 
  const handleAddTodo = () => {
    if(inputValue === '') return;
    addTodo({
      id: new Date().getTime(),
      text: inputValue,
      completed: false,
    });
    setInputValue("");
    setVisible(!visible)
  };

  const tech = ["HTML", "CSS", "Javascript", "Typescript", "React", "Vue", "Tailwind", "SASS"]

  return (
    <motion.div 
      className={styles.addpointmodal}
      initial={{  opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .3 }}
    >
      <div className={styles.addpointmodal__header}>
        <h3>Add roadmap point</h3>
        <button onClick={() => setVisible(!visible)}><AiOutlineClose size={20}/></button>
      </div>
      <div className={styles.addpointmodal__content}>
        <div className={styles.panel}>
          <form className={styles.form}>
            <label>Roadmap point title</label>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
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
        </div>
        <button className={styles.confirm} onClick={handleAddTodo}>Confirm roadmap point</button>
      </div>
    </motion.div>
  )
}

export default AddPointModal



