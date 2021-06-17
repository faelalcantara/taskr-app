import React, { useState } from 'react';
import { TaskForm } from '../TaskForm';
import { Task } from '../Task';
import { TaskIncomplete } from '../TaskIncomplete';
import { TaskComplete } from '../TaskComplete';

import styles from './styles.module.scss'

export function TaskList( { chosenPage, displayInput } ) {
  const [tasks, setTasks] = useState([]);
  console.log(tasks)
  
  console.log(chosenPage)
  
  const addTask = task => {
    if(!task.text || /^\s*$/.test(task.text)) {
      return;
    };
    
    const newTasks = [task, ...tasks];

    setTasks(newTasks);
  };

  const updateTask = (taskId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    };

    setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)))
  };

  const removeTask = id => {
    const removeArr = [...tasks].filter(task => task.id !== id);

    setTasks(removeArr);
  };

  const completeTask = id => {
    let updatedTasks = tasks.map(task =>{
      if (task.id === id) {
        task.completed = !task.completed
      };

      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className={styles.mainContainer}>
      <div style={displayInput == true ? {display: 'block'} : {display: 'none'}}>
        <TaskForm onSubmit={addTask} />
      </div>
      <div style={chosenPage == 'all' ? {display: 'block'} : {display: 'none'}}>
        <h1>All Tasks</h1>
        <Task
          tasks={tasks}
          completeTask={completeTask}
          removeTask={removeTask}
          updateTask={updateTask}
        />
        <div className={styles.empty} style={tasks == '' ? {display: 'block'} : {display: 'none'}}>You don't have any tasks.</div>

      </div>
      <div style={chosenPage == 'incomplete' ? {display: 'block'} : {display: 'none'}}>
        <h1>Incomplete</h1>
        <TaskIncomplete
          tasks={tasks}
          completeTask={completeTask}
          removeTask={removeTask}
          updateTask={updateTask}
        />
        <div className={styles.empty} style={tasks == '' ? {display: 'block'} : {display: 'none'}}>This list is empty.</div>

      </div>
      <div style={chosenPage == 'complete' ? {display: 'block'} : {display: 'none'}}>
        <h1>Complete</h1>
        <TaskComplete
          tasks={tasks}
          completeTask={completeTask}
          removeTask={removeTask}
          updateTask={updateTask}
        />
        <div className={styles.empty} style={tasks == '' ? {display: 'block'} : {display: 'none'}}>This list is empty.</div>
      </div>
    </div>
  );
};