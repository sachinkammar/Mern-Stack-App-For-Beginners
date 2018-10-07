var async = require('async'); 
var User = require('./user');
var uniqid = require('uniqid');

module.exports = {
    createUser: createUser,
    authenticateUser : authenticateUser
}
var uniqid = require('uniqid');

function createUser(data,callback){
    
    var user = new User();
    user.userId=uniqid();
    user.username=data.username;
    user.password = data.password;
    user.save(function(err,data) {
        if(err){ 
            callback(err,null);
        }else {
            callback(null,data);
        }
    })
}

function authenticateUser(obj,callback){
    var password=obj.password
    var username=obj.username
    User.findOne({username:username},function(err,res){
        if(err){ 
            callback(err,null);
        }else{
            if(!res) {
                callback('Incorrect username ',null);
            }else{
                if(res.password===password){
                    var obj={};
                    obj.username=res.username;
                    obj.userId=res.userId;
                    callback(null,obj);
                }else{
                    callback('Incorrect Password ',null);
                  }
              }
          }
      }) 
  }

