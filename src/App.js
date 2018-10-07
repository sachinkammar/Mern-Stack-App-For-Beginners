import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Login from './components/login/Login.js';
import Home from './components/home/Home.js';
import User from './components/user/User.js';
import Register from './components/register/Register.js';
import Book from './components/book/Book.js';
import './components/login/Login.css';
import './components/home/Home.css';
import './assets/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route exact path='/home' component={Home}></Route>
                <Route exact path='/user' component={User}></Route>
                <Route exact path='/register' component={Register}></Route>
                <Route exact path='/book' component={Book}></Route>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
