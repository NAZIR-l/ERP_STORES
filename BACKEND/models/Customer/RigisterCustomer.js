const { model } = require('mongoose')
const Customer = require('../../model/Customer.js')
 

const create = async (data,result) => {

   Customer.create([data],(err,results) => {
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

module.exports = {  create } ;
