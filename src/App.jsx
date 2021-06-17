import React, { useState } from 'react';
import { BiCalendarCheck, BiCalendarExclamation, BiCalendarPlus, BiCalendar } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import './App.scss';
import { LoginForm } from './components/LoginForm';
import { TaskList } from './components/TaskList';

function App() {

  const userAdm = {
    name: "Rafael",
    email: "admin@admin.com",
    password: "admin123"
  };
  
  const [user, setUser] = useState({
    name: "",
    logged: false
  });

  const [page, setPage] = useState('all');

  const [addInput, setAddInput] = useState(false);

  const handlePageSelection = page => {
    setAddInput(false);
    setPage(page);
  };

  const handleAddInputExhibition = answer => {
    setPage('all')
    setAddInput(answer);
  };
  
  const chosenPage = page;
  const displayInput = addInput;

  const Login = session => {
    (session.email == userAdm.email && session.password == userAdm.password)
      ?
    setUser({name: userAdm.name, logged: true})
      :
    setUser({...user, logged: false})
  };

  const Logout = () => {
    setUser({...user, logged: false})
  }

  return (
    <div className="main">

      {(user.logged == true) ? (
        <div className="mainContainer">
          <nav className="navContainer">
            <ul>
              <li className="logo">Taskr.</li>
              <li style={page == 'new' ? {color: 'yellow'} : {}} onClick={() => handleAddInputExhibition(!addInput)}><span><BiCalendarPlus size="1.5rem" /></span>New Task</li>
              <li style={page == 'all' ? {color: 'yellow'} : {}} onClick={() => handlePageSelection('all')}><span><BiCalendar size="1.5rem" /></span>All Tasks</li>
              <li style={page == 'incomplete' ? {color: 'yellow'} : {}} onClick={() => handlePageSelection('incomplete')}><span><BiCalendarExclamation size="1.5rem" /></span>Incomplete</li>
              <li style={page == 'complete' ? {color: 'yellow'} : {}} onClick={() => handlePageSelection('complete')}><span><BiCalendarCheck size="1.5rem" /></span>Complete</li>
            </ul>
          </nav>
          <div className="contentContainer">
            <div className="statusBar">
              <h2>Hello <span>{user.name}</span>, what's up for today?</h2>
              <button onClick={Logout}>Log Out<span><FiLogOut size="1rem"/></span></button>
            </div>
            <div className="mainContent">
              <TaskList chosenPage={chosenPage} displayInput={displayInput}  />
            </div>
          </div>
        </div>
      ) : (
        <LoginForm Login={Login} />
      )}
    </div>
  );
};

export default App;
