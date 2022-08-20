
const { model } = require('mongoose')
const Employee = require('../../model/DBemployee')



const UpdateEmployeeById = (data, id, result) => {
    // console.log(id);
names= data.NAME;
    console.log(names);
    Employee.findByIdAndUpdate(id,
        { NAME:data.NAME , Email:data.Email , Salary:data.Salary , Date:data.Date ,Phone:data.Phone , Address:data.Address },
        {new: true },
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {    

                result(null, results);
            }
        })
        
}
module.exports = { UpdateEmployeeById };
