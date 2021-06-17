import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';

export function TaskForm(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      completed: false
    });

    setInput('');
  };

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={input}
        name="text"
        className={styles.taskInput}
        onChange={handleChange}
        ref={inputRef}
      />
      <button className={styles.taskButton}>Add task</button>
    </form>
  );
};