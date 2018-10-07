import React, { Component } from 'react';
class User extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            city:'',
            users: [],
            newUser: {"name":'',"city":''}
        };
    }
    
    getUsers = () => {
        this.setState((state,props) => {
            return ({
                users: props.users
            })
        })
    }
    
     componentDidMount() {
        this.getUsers();
         console.log("pele",this.state.newUser)
     }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    addUsers = () => {
        if(this.state.name!=='' && this.state.city!==''){
            this.setState((state,props) => {
                return ({newUser:{"name":state.name,"city":state.city}})
            });
            var temp = {"name":this.state.name,"city":this.state.city}
            this.props.getNewUser(temp)
            this.setState({name:'', city:''}) 
        }
    }
    deleteUser = (username) => {
        this.props.deleteUser(username)
    }
	render() {
        var userList =  this.state.users.map((user,index) => { 
                            return(
                                <ul key={index} onClick={(name) => this.deleteUser(user.name)} style={{cursor:'pointer'}}>
                                    <li>{user.name}</li>
                                    <li>{user.city}</li>
                                </ul>
                            )
                        })
        return (
            <div className="list" newuser={this.state.newUser}>
              <ul>
                <li>Name</li>
                <li>City</li>
              </ul>
                {userList}
                <ul>
                <li><input type="text" className="form-control" name="name" onChange={this.handleChange} value={this.state.name} required /></li>
                <li><input type="text" className="form-control" name="city" onChange={this.handleChange} value={this.state.city} required /></li>
              </ul> 
              <ul><li><button className="btn btn-info" type="submit" onClick={this.addUsers}>Add User</button></li><li></li></ul>
            </div>
        )
    }
}

export default User;