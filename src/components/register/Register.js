import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {
    
constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
        confirmPassword:'',
        error: ''
    };
    this.handleChange = this.handleChange.bind(this); //or use arrow function to bind this
    this.submitForm = this.submitForm.bind(this);
}

 handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log("value", event.target);
      console.log("this.props",this.props)
}
submitForm(e) {
    e.preventDefault()
    if(this.state.password === this.state.confirmPassword){
      let obj = { "username": this.state.username, "password":this.state.password}
      console.log("form elements", obj)
      axios.put(`/api/user/register`, obj)
      .then(res => {
        console.log(res);
        this.props.history.push('/book')
      })
    } else {
      this.setState({error:"Passwords didn't match"}, () => {
        console.log("before",this.state.error)
    });
    }
}
takeToLogin = (e) => {
  e.preventDefault();
  this.props.history.push('/')
}
  render() {
    return (
      <div className="box">
          <div id="header">
            <h1>Register</h1>
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
            <div className="group">      
              <input className="inputMaterial font-roboto" type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Confirm Password</label>
            </div>
            <button id="buttonlogintoregister" className='login-submit font-roboto' type="submit">Register</button>
          </form>
          <div className="register-line">
            <span className="text-center">Already registered? </span><a href="" className="font-quicksand text-decoration-none" onClick={this.takeToLogin}>Login here!</a>
          </div>
        </div> 
    );
  }
}

export default Login;