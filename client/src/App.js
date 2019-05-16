import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import './App.css';
import Users from './users/Users';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to='/signin'>Sign in here</NavLink>
          &nbsp; | &nbsp;
          <NavLink to='/signup'>Sign up here</NavLink>
        </nav>
      </header>

      <main>
        <Route path='/signin' component = {SignIn} />
        <Route path='/users' component = {Users} />
        <Route path='/signup' component = {SignUp} />
      </main>
    </div>
  );
}

export default App;
