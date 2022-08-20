const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const CustomerProduct = mongoose.Schema({
    First_name: String
    ,
    Last_name: String,
    Street:String,
    Phone:Number,

    Address: {
        type: String,
        immutable: true
    },
    Email: {
        type: String,
        required: true,
        lowercase: true,
    },
    passwords: {
        type: String,
        required: true,
    }


});



CustomerProduct.methods.hashPassword = function(passwords){
    return bcrypt.hashSync(passwords,bcrypt.genSaltSync(5),null)
      
  
}

CustomerProduct.methods.comparePassword=function(passwords){
    return bcrypt.compareSync(passwords,this.passwords);
} 

module.exports = mongoose.model('Customer', CustomerProduct);

// mean we can not change the value = > immutable: true

