
const { model } = require('mongoose')
const Employee = require('../../model/DBemployee')

 const deleteemployeeById = (id, result) => {

Employee.findByIdAndDelete(id, function (err, results) {
    if(err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
})     
}
      

module.exports = { deleteemployeeById };
