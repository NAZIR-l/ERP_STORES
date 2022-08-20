const Resource = require('../../model/Source')


    

const ShowSource = (result) =>{
    Resource.find({},(err,results)=>{
        if(err){
            result(err,null)
        }
        else{
            result(err,results)
        }
    })
}





module.exports = {  ShowSource  } ;
