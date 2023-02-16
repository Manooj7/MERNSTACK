const userModel=require("../models/userModel");

module.exports.getAllUsers = async function(callback){
try{
    var users= userModel.find({isDeleted:false});
callback(null,users);
}
catch(err){
callback(err,null);
}
}
module.exports.createFirstUser = async function(callback){
    try{
        var user={
            userName:"Manoj Sambari",
           // Dateofbirth:"25 10 2003",
            yearOfGraduation:2024

        };
        var newUser = new userModel (user);

        var result = await newUser.save();

    callback(null,users);
    }
    catch(err){
    callback(err,null);
    }
    }
module.exports.createUser = async function(user,callback){
        try{
           
            var newUser = new userModel (user);
    
            var result = await newUser.save();
    
        callback(null,user);
        }
        catch(err){
        callback(err,null);
        }
        }
module.exports.updateUser = async function(userName,data,callback){
        try{
            var query={
                userName: userName,
                
            };
            
            var result= await userModel.updateOne(query,data);
    
        callback(null,result);
        }
        catch(err){
        callback(err,null);
        }
        }
module.exports.deleteUser = async function(userName,callback){
            try{
                var query={
                    userName: userName,
                    
                };
               
                var result= await userModel.updateOne(query,{isDeleted:true});
        
            callback(null,result);
            }
            catch(err){
            callback(err,null);
            }
            }
module.exports.getUserByFilter = async function(filter,callback){
                try{
                 //  var user = await userModel.findOne(filter);
                    var result= await userModel.findOne(query);
            
                callback(null,result);
                }
                catch(err){
                callback(err,null);
                }
                }