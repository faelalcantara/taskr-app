import React, { useState } from "react";
import styles from "./styles.module.scss"

export function LoginForm({ Login }) {
  const [session, setSession] = useState({
    email: "",
    password: ""
  });
  
  const handleSubmit = e => {
    e.preventDefault();

    Login(session)
  };

  return (
    <div className={styles.mainContainer}>

      <div className={styles.imgContainer}>
        <img src="task.png" alt="task" />
      </div>

      <div className={styles.formContainer}>
        <h1>Taskr.</h1>
        <h2>Organize your tasks</h2>
        <form className={styles.form} onSubmit={handleSubmit}>

          <div className={styles.formLabel}>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={e => setSession({...session, email: e.target.value})}
            />
          </div>
          <div className={styles.formLabel}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={e => setSession({...session, password: e.target.value})}
            />
          </div>
          <button type="submit">Sign in</button>
        </form>

        <p>Create an account?<span> Click here</span>.</p>

      </div>
    </div>

  );
};