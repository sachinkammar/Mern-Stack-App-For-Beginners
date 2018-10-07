var bookCollectionHelper=require("../models/bookTable")

module.exports.getAllBooks = function(req,res){
    bookCollectionHelper.getAllBooks(function(err, response) {
        if(err){
            res.status(400).json({success:false,'message':err});
        }else{ 
            res.status(200).json({success:true,'message':response});
            //res.redirect(303,'/redirect/'+jobs.username)
        }
    })
}

module.exports.addBook = function(req,res){
    console.log("asdfghjkjhgfds",req)
    bookCollectionHelper.addBook(req.body, function(err, response) {
        if(err){
            res.status(400).json({success:false,'message':err});
        }else{ 
            res.status(200).json({success:true,'message':response});
        }
    })
}
module.exports.deleteBook = function(req,res){
    console.log("asdfghjkjhgfds",req)
    bookCollectionHelper.deleteBook(req.body, function(err, response) {
        if(err){
            res.status(400).json({success:false,'message':err});
        }else{ 
            res.status(200).json({success:true,'message':response});
        }
    })
}