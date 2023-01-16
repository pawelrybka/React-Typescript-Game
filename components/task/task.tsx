import React from 'react';
import { ITask } from '../../pages/interfaces'
import styles from "./task.module.scss"

interface Props {
  task: ITask;
}

const TodoTask = ({ task }: Props) => {
  return (
    
    <div className={styles.task}>
      <div className={styles.task__content}>
        <span>{task.nameTask}</span>
        <span>{task.deadline}</span>
      </div> 
      <button>X</button>
    </div>
    
  )
}

export default TodoTask

