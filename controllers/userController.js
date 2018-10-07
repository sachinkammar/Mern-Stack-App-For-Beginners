var userCollectionHelper=require("../models/userTable")

module.exports.authenticateUser= function(req,res){
    userCollectionHelper.authenticateUser(req.body, function(err, response) {
        if(err){
            res.status(400).json({success:false,'message':err});
        }else{ 
            res.status(200).json({success:true,'message':response});
            //res.redirect(303,'/redirect/'+jobs.username)
        }
    })
}

module.exports.createUser = function(req,res){
    console.log("asdfghjkjhgfds",req)
    userCollectionHelper.createUser(req.body, function(err, response) {
        if(err){
            res.status(400).json({success:false,'message':err});
        }else{ 
            res.status(200).json({success:true,'message':response});
        }
    })
}
