import React from 'react'
import styles from './Alert.module.css'
import { AiOutlineClose } from 'react-icons/ai'

type props ={ 
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Alert = ({ visible, setVisible }: props) => {
  return (
    <div className={styles.alert}>
      <div className={styles.alert__header}>
        <h3>Delete roadmap point</h3>
        <button onClick={() => setVisible(!visible)}><AiOutlineClose size={20}/></button>
      </div>
      <div className={styles.alert__content}>
        <span>Do You want to delete this point ?</span>
        <div className={styles.buttonsection}>
          <button className={styles.no}>No</button>
          <button className={styles.yes}>Yes</button>
        </div>
      </div>
    </div>
  )
}

export default Alert

