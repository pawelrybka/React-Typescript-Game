import React from 'react';
import { ITask } from '../pages/interfaces'

interface Props {
    task: ITask;
}

const TodoTask = ({ task }: Props) => {
  return <div>{task.nameTask} {task.deadline}</div>
}

export default TodoTask
