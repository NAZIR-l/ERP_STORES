const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Employee = new mongoose.Schema({
    NAME: String,
       
    Phone:  Number,
    
    Address: String,
    
    Salary:  Number,
  
    Email : String,
    
    Date : Date, 
    Email : String, 

    passwords : String
    


});


Employee.methods.hashPassword = function(passwords){
    return bcrypt.hashSync(passwords,bcrypt.genSaltSync(5),null)
      
  
}

Employee.methods.comparePassword=function(passwords){
    return bcrypt.compareSync(passwords,this.passwords);
}  

module.exports = mongoose.model('Employee', Employee);
