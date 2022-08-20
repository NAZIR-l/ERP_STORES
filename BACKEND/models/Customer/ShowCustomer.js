const Customer = require('../../model/Customer.js')

const ins =  (result) => {
    try {
      Customer.find({}).then((results)=>{
        // console.log(res)
        result(null,results)
      })
    } catch (error) {
      console.log(error);
      result(error,null)
    }
    
    }
module.exports = { ins  } ;
    