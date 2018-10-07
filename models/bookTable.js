var async = require('async'); 
var Book = require('./book');
var uniqid = require('uniqid');

module.exports = {
    addBook: addBook,
    getAllBooks : getAllBooks,
    deleteBook: deleteBook
}
var uniqid = require('uniqid');

function addBook(data,callback){
    var book = new Book();
    book.title=data.title;
    book.author = data.author;
    book.description = data.description;
    book.status = data.status;
    book.save(function(err,data) {
        if(err){ 
            callback(err,null);
        }else {
            callback(null,data);
        }
    })
}

function getAllBooks(callback){
    Book.find({},function(err,res){
        if(err){ 
            callback(err,null);
        }else{
            callback(null,res);
        }
      }) 
  }

  function deleteBook(data,callback){
    Book.findOneAndDelete({ _id: data._id }) 
      .exec(function(err, item) {
          if (err) {
            callback(err,null);
          }       
          if (!item) {
            callback('Book not found',null);
          }  else
          callback(null, 'Book deleted.');
      });
  }