const Resource = require('../../model/Source')
const Employee = require('../../model/DBemployee')
const Customer = require('../../model/Customer')



const CreateSource = (data , result)=>{

    Resource.create(data,(err, results)=>{
        if(err){
            console.log(err);
            result(err,null)
        }
        else{
            console.log("models" + results);
            result(null,results)
        }
    })

}



module.exports = {  CreateSource  } ;