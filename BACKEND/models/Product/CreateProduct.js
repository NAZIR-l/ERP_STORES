const { model } = require('mongoose')
const Products = require('../../model/Product.js')
 

const CreateProduct =  (data,result) => {

    Products.create([data],(err,results) => {
    if(err) {
      console.log("not ok ")
      console.log(err.message)
      result(err,null)
    }
    else{
       console.log("is ok ")
      result(null,results)
    }
  })

}


// const customer = new Customer ({First_name: "sijlas" ,Last_name : "joail", Address: "ajdl",Email:"nazir",passwords: 12345})
// customer.save()
// console.log( customer)

module.exports = {  CreateProduct  } ;
