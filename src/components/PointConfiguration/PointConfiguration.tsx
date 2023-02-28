import React from 'react';
import styles from './PointConfiguration.module.css'
import { motion } from "framer-motion";

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
      <button onClick={() => setVisible(!visible)}>X</button>
      <div>
        <h2>{todo.text}</h2>
      </div>
    </motion.div>
  );
};

export default PointConfiguration

