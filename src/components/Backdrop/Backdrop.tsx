import React, { useContext } from 'react'
import styles from './Backdrop.module.css'
import Context from '../Context/Context'
import { motion } from 'framer-motion'

const Backdrop = () => {

  const{ alertVisible } = useContext(Context)

  return (
    <motion.div 
      className={`${styles.backdrop} ${alertVisible ? styles.up : ''}`} 
      initial={{  opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .3 }}
    ></motion.div>
  )
}

export default Backdrop

