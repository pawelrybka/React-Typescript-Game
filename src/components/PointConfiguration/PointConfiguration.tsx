import React from 'react';
import styles from './PointConfiguration.module.css'
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from 'react-icons/ai'
import { useContext } from 'react';
import Alert from '../Alert/Alert';
import Context from '../Context/Context'
import Backdrop from '../Backdrop/Backdrop';

const PointConfiguration = () => {
  
  const { selectedTodo, addPointModalVisible, setAddPointModalVisible, alertVisible, setAlertVisible, toggleCompleted, todos, configurationVisible, setConfigurationVisible } = useContext(Context);
  
  return (
    <>
      <motion.div 
        className={styles.pointconfiguration}
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.pointconfiguration__header}>
          <h2>{selectedTodo?.text}</h2>
          <button onClick={() => setConfigurationVisible(!configurationVisible)}><AiOutlineClose size={20}/></button>
        </div>

        <div className={styles.pointconfiguration__content}>
          <div className={styles.midpoints}>
            <p>No midpoints for this roadmap point.</p>
          </div>
          
          <div className={styles.configuration}>

            <div className={styles.configuration__edit}>
              <div className={styles.container}>
                <p>Title: {selectedTodo?.text}</p>
                <button onClick={() => setAddPointModalVisible(!addPointModalVisible)}>Edit name and time</button>
              </div>
            </div>



            <div className={`${styles.configuration__edit} ${todos.find((todo) => todo.id === selectedTodo?.id)?.completed ? styles.green : ''}`}>
              <div className={styles.container}>
                {selectedTodo?.completed ? <p>Finished</p> : <p>Not Finished</p>}
                <button onClick={() => toggleCompleted(selectedTodo?.id)}>Marked as finished</button>
              </div>
            </div>

        
            {/* <button className={styles.configuration__add}>Add midpoint</button> */}
            <button className={styles.configuration__delete} onClick={() => setAlertVisible(!alertVisible)}>Delete roadmap point</button>
            <button className={styles.configuration__close} onClick={() => setConfigurationVisible(!configurationVisible)}>Close</button>
          
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {alertVisible && <Alert/>}
      </AnimatePresence>
      <Backdrop/>
    </>
  )
}

export default PointConfiguration;
