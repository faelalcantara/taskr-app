import React, { useState } from 'react';
import { BiMessageSquareX, BiMessageSquareEdit, BiMessageSquareCheck } from "react-icons/bi";
import { TiEdit } from 'react-icons/ti'
import { TaskForm } from '../TaskForm';
import styles from './styles.module.scss'

export function TaskIncomplete({ tasks, completeTask, removeTask, updateTask }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: ''
    })
  };

  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={submitUpdate}/>;
  }

  return tasks.filter(item => item.completed == false).map((task, index) => (
    <div
      // className={task.isComplete ? 'styles.taskRow complete' : 'styles.taskRow'}
      className={styles.taskRow}
      key={index}
    >

      <div
        className={styles.taskLine}
        key={task.id}
        onClick={() => completeTask(task.id)}
      >
        {task.text}
      </div>
      
      <div className={styles.buttonsContainer}>
        {/* <button>
          <BiMessageSquareCheck
            size="1rem"
            className={styles.editIcon}
          />
        </button> */}
        {/* <button>
          <BiMessageSquareEdit
          size="1rem"
          onClick={() => setEdit({ id: task.id, value: task.text})}
          className={styles.editIcon}
        />
        </button> */}
        <button>
          <BiMessageSquareX
            size="1rem"
            onClick={() => removeTask(task.id)}
            className={styles.deleteIcon}
          />
        </button>
      </div>

    </div>
  ));
};