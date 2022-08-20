
const { model } = require('mongoose')
const Customer = require('../../model/Customer')            

 const deleteUserById = (id, result) => {

    Customer.findByIdAndDelete(id, function (err, results) {
    if(err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
})     
}
      

module.exports = { deleteUserById };
