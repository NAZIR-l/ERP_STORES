const Employee = require('../../model/DBemployee')

const ShowEmployee =  (result) => {
    try {
      Employee.find({}).then((results)=>{
        // console.log(res)
        result(null,results)
      })
    } catch (error) {
      console.log(error);
      result(error,null)
    }
    
    }
module.exports = { ShowEmployee  } ;
    