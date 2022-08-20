const { model } = require('mongoose')
// const Customer = require('../../model/Customer.js')
const Order = require('../../model/Order')

const CreateOrder = async (data,result) => {

    Order.create(data,(err,results) => {
    if(err) {
      console.log(err)
      result(err,null)
    }
    else{
       
      result(null,results)
      
    }
  })

}
module.exports = {  CreateOrder } ;