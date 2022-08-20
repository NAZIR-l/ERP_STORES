
const { model } = require('mongoose')
const Employee = require('../../model/DBemployee')




const getEmployeeById = (id, result) => {
    Employee.findById(id, function (err, results) {
        if (err) {
            console.log(err);

            result(err, null);
        } else {

            result(null, results);
        }
    })
}



module.exports = { getEmployeeById };