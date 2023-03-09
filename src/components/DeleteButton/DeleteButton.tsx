import React from 'react'
import styles from './DeleteButton.module.css'
import { BsTrash } from 'react-icons/bs';
import { useContext } from 'react'
import Context from '../Context/Context'
import Alert from '../Alert/Alert';

const DeleteButton = () => {
  
  const { alertVisible, setAlertVisible } = useContext(Context);
  
  return (
    <>
      <button 
        className={styles.deletebutton}
        onClick={() => setAlertVisible(!alertVisible)}
      >
        <BsTrash size={40}/>
        Delete your plans
      </button>
      {alertVisible && <Alert/>}
    </>
    
    
  )
}

export default DeleteButton

