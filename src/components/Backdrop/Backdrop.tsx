import styles from './Backdrop.module.css'
import React from 'react'
import { motion } from 'framer-motion'
import Context from '../Context/Context'
import { useState, useContext } from 'react'

type props = { 
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Backdrop = ({visible, setVisible}: props) => {

  return (
    <motion.div 
      className={styles.backdrop} 
      initial={{  opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .3 }}
      onClick={() => setVisible(!visible)}
    ></motion.div>
  )
}

export default Backdrop

