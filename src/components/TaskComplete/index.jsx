import React, { useState } from 'react';
import { BiMessageSquareX, BiMessageSquareEdit, BiMessageSquareCheck } from "react-icons/bi";
import { TaskForm } from '../TaskForm';
import styles from './styles.module.scss'

export function TaskComplete({ tasks, completeTask, removeTask, updateTask }) {
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

  return tasks.filter(item => item.completed == true).map((task, index) => (
    <div
      className={styles.taskRow}
      key={index}
    >

      <div
        className={styles.taskLine}
        key={task.id}
        onClick={() => completeTask(task.id)}
        style={task.completed == true ? {textDecoration: 'line-through', color: '#c3c3c3'} : {}}
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