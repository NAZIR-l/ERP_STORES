const { model } = require('mongoose')
const Employee = require('../../model/DBemployee')

 

const CreateEmployee = async (data,result) => {

  Employee.create([data],(err,results) => {
    if(err) {

      console.log(err)
      result(err,null)
    }
    else{
      result(null,results)
    }
  })

}
  
// const customer = new Customer ({First_name: "sijlas" ,Last_name : "joail", Address: "ajdl",Email:"nazir",passwords: 12345})
// customer.save()
// console.log( customer)

module.exports = {  CreateEmployee } ;
