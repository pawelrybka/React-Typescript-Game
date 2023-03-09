import React, { useContext } from 'react'
import Context from '../Context/Context'
import styles from './Alert.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from '../Backdrop/Backdrop';

const Alert = () => {
  
  const { 
    setTodos,
    selectedTodo, setSelectedTodo,
    removeTodo, 
    alertVisible, setAlertVisible, 
    configurationVisible, setConfigurationVisible 
  } = useContext(Context);

  const handleRemove = () => {
    if(selectedTodo){
      setConfigurationVisible(!configurationVisible)
      setAlertVisible(!alertVisible)
      removeTodo(selectedTodo)
      setSelectedTodo(null)
    } else{
      setTodos([])
      setAlertVisible(!alertVisible)
    }
  }

  return (
    <div>
      <motion.div 
        className={styles.alert}
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.alert__header}>
          <h3>Delete roadmap point</h3>
          <button onClick={() => setAlertVisible(!alertVisible)}><AiOutlineClose size={20}/></button>
        </div>
        <div className={styles.alert__content}>
          <span>Do You want to delete this point ?</span>
          <div className={styles.buttonsection}>
            <button className={styles.no} onClick={() => setAlertVisible(!alertVisible)}>No</button>
            <button className={styles.yes} onClick={handleRemove}>Yes</button>
          </div>
        </div>
      </motion.div>
      <Backdrop/>
    </div>
  )
}

export default Alert

