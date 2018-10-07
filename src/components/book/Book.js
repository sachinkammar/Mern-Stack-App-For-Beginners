import React, { Component } from 'react';
import './Book.css'
import axios from 'axios';
class Book extends Component {
    
constructor(props) {
    super(props);
    this.state = {
        title: '',
        author: '',
        status: '',
        description: '',
        bookList: []
    };
    this.handleChange = this.handleChange.bind(this); //or use arrow function to bind this
    this.submitForm = this.submitForm.bind(this);
}
getAllBooks = () => {
    axios.get(`/api/book/all`)
    .then(res => {
        console.log("all books",res);
        this.setState({bookList:res.data.message})
    })
}
componentDidMount (){
    this.getAllBooks();
}
 handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log("value", event.target);
      console.log("this.props",this.props)
}
submitForm(e) {
    e.preventDefault()
    let obj = { "title": this.state.title, "author":this.state.author,"satus":this.state.status,"description":this.state.description}
    console.log("form elements", obj)
    axios.put(`/api/book/add`, obj)
    .then(res => {
        console.log("added book",res);
        this.setState({title: '',
        author: '',
        status: '',
        description: ''},() => {
            console.log("state",this.state);
            this.getAllBooks();
        })
        ;
    })
}
deleteBook = (id) => {
    let obj = {_id:id}
    axios.put(`/api/book/delete`, obj)
    .then(res => {
        console.log("added book",res);
        this.getAllBooks();
    })
}
takeToLogin = (e) => {
  e.preventDefault();
  this.props.history.push('/')
}
  render() {
    var bookList =  this.state.bookList.map((book,index) => { 
        return(
            <div className="col-md-3" key={index} style={{marginBottom:20}}>
                <div className="blog-card spring-fever">
                    <div className="title-content">
                        <h3>{book.title}</h3>
                        <hr />
                        <div className="intro">{book.author}</div>
                    </div>
                    <div className="card-info">
                    {book.description}
                         <br /><br />
                    <button className="material-button-raised" onClick={(_id) => this.deleteBook(book._id)}>Delete</button>
                    </div>
                    <div className="utility-info">
                        <ul className="utility-list">
                        <li className="date" title="added date">{book.created_at.substring(0,10)}</li>
                        </ul>
                    </div>
                    <div className="gradient-overlay"></div>
                    <div className="color-overlay"></div>
                </div>
            </div>
        )
    })
    return (
        <div className="book-body">
            <div className="nav">
                <div className="nav-header">
                    <div className="nav-title">
                    Book Shelf
                    </div>
                </div>
                <div className="nav-btn">
                    <label>
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                <div className="nav-links">
                <a className="hidden-xs" rel="noopener noreferrer" href="https://wattpad.com" target="_blank">Wattpad</a>
                    <a className="hidden-xs" rel="noopener noreferrer" href="//github.io/" target="_blank">Github</a>
                    <a className="hidden-xs" rel="noopener noreferrer" href="https://codepen.io/" target="_blank">Codepen</a>
                    <a href="" onClick={this.takeToLogin}>Logout</a>
                </div>
            </div>
            <div className="container">
            <div className="col-md-5 top-30">
                    <div className="blog-card spring-fever">
                        <div className="title-content">
                            <h3>HALF GIRLFRIEND</h3>
                            <hr />
                            <div className="intro">Hover on the book to delete it.</div>
                        </div>
                        <div className="card-info">
                            I loved this book personally and I am sorry I can't really think of any other book at the moment but hey!! I am sure you're not here for books ;)
                        <br /><br />
                        <button className="material-button-raised">Not this one</button>
                        </div>
                        <div className="utility-info">
                            <ul className="utility-list">
                            <li className="date" title="added date">07.10.2018</li>
                            </ul>
                        </div>
                        <div className="gradient-overlay"></div>
                        <div className="color-overlay"></div>
                    </div>
                </div>
                <div className="col-md-7 top-30">
                    <form onSubmit={this.submitForm}>
                        <div className="paper">
                            <h3>Add a new book</h3>
                            <div className="input1">
                                <input className="input__input" type="text" name="title" value={this.state.title} onChange={this.handleChange} required />
                                <label className="input__label">Title</label>
                                <div className="input__bar"></div>
                                <div className="input__hint">Title of the book!</div>
                            </div>
                            <div className="input1">
                                <input className="input__input" type="text" name="author" value={this.state.author} onChange={this.handleChange} required/>
                                <label className="input__label">Author</label>
                                <div className="input__bar"></div>
                                <div className="input__hint">Author of the book!</div>
                            </div>
                            <div className="input1">
                                <input className="input__input" type="text" name="status" value={this.state.status} onChange={this.handleChange} required/>
                                <label className="input__label">Status</label>
                                <div className="input__bar"></div>
                                <div className="input__hint">Reading, Not started, Completed etc</div>
                            </div>
                            <div className="input1">
                                <textarea className="input__input" rows="4" cols="50" value={this.state.description} defaultValue="" type="text" name="description" onChange={this.handleChange} required />
                                <label className="input__label">Description</label>
                                <div className="input__bar"></div>
                                <div className="input__hint">Some introduction would be great!</div>
                            </div>
                            <button className="material-button-raised" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container top-30">
            {bookList}
            </div>
        </div>
    )
  }
}

export default Book;