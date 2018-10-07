import React, { Component } from 'react';
import './Home.css'
import User from '../user/User.js';
class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            users: [{name: 'Sachin',city: 'Bagalkot'},{name: 'Narasappa',city: 'Ballari'},{name: 'Jon Snow',city: 'Winterfell'},{name:                     'Robert',city: 'Kings Landing'},{name: 'Danny',city: 'Dragonstone'}]
        };
        console.log("props",props)
    }
    componentDidMount = () => {
        
    }
     getNewUser = (user) => {
        console.log("got new user",user);
         let users = this.state.users;
         users.push(user);
         this.setState({users}) //since users and state.users both are same name, we can use 'user' only
    }
     deleteUser = (username) => {
        console.log("delet user",username);
         let users = this.state.users;
         users.map((user,index) => {
             if(user.name === username){
                 users.splice(index,1)
             }
         })
         this.setState({users}) //since users and state.users both are same name, we can use 'user' only
    }
    
	render() {
        return (
            <User className="list" users={this.state.users} getNewUser = {(user) => this.getNewUser(user)} deleteUser = {(username) => this.deleteUser(username)} />
        )
    }
}

export default Home;