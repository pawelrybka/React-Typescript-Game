import React from 'react';
import styles from './PointConfiguration.module.css'
import { motion } from "framer-motion";
import { AiOutlineClose } from 'react-icons/ai'

type props = {
  todo: {
    id: number
    text: string
  }
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const PointConfiguration = ({ visible, setVisible, todo}: props) => {
  return (
    <motion.div 
      className={styles.pointconfiguration}
      initial={{  opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
    <div className={styles.pointconfiguration__header}>
      <h2>{todo.text}</h2>
      <button onClick={() => setVisible(!visible)}><AiOutlineClose size={20}/></button>
    </div>

    <div className={styles.pointconfiguration__content}>
      <div className={styles.midpoints}>
        <p>No midpoints for this roadmap point.</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.add}>Add midpoint</button>
        <button className={styles.delete}>Delete roadmap point</button>
        <button className={styles.close} onClick={() => setVisible(!visible)}>Close</button>
      </div>
    </div>

    </motion.div>
  )
}

export default PointConfiguration

