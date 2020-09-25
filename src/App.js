import React from 'react';
import './App.scss';
import ToDo from './components/ToDo.js';
import { Route, Link } from 'react-router-dom';
import Login from './components/auth/login.js';
import Auth from './components/auth/auth.js';
import LoginProvider from './components/auth/context.js';


function App(props) {

  return (
    <LoginProvider>
      <ToDo/>
    </LoginProvider>

  );
}

export default App;
