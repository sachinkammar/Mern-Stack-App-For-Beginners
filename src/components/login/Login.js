import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {
    
constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    };
    this.handleChange = this.handleChange.bind(this); //use arrow function to bind this
    this.submitForm = this.submitForm.bind(this);
}

 handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log("value", event.target);
      console.log("this.props",this.props)
}
submitForm(e) {
    e.preventDefault()
    let obj = { "username": this.state.username, "password":this.state.password}
    console.log("form elements", obj)
    axios.put(`/api/user/authenticate`, obj)
    .then(res => {
    console.log(res);
    console.log(res.data);
    this.props.history.push('/book')
    })
}
takeToRegister = (e) => {
  e.preventDefault();
  this.props.history.push('/register')
}
  render() {
    return (
      <div className="box">
          <div id="header">
            <h1 id="logintoregister">Login</h1>
          </div> 
           <form onSubmit={this.submitForm}>
            <div className="group">      
              <input className="inputMaterial font-roboto" type="text" name="username" value={this.state.username} onChange={this.handleChange} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Username</label>
            </div>
            <div className="group">      
              <input className="inputMaterial font-roboto" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Password</label>
            </div>
            <button id="buttonlogintoregister" className='login-submit font-roboto' type="submit">Login</button>
          </form>
          <div className="register-line">
            <span className="text-center">Not yet registered? </span><a href="" className="font-quicksand text-decoration-none" onClick={this.takeToRegister}>Register here!</a>
          </div>
        </div> 
    );
  }
}

export default Login;