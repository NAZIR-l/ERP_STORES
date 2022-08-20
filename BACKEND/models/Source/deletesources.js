const Resource = require('../../model/Source')

const deletesources = (id,results) =>{
    Resource.findByIdAndDelete(id,(err,result) =>{
        if(err) {
            results(err,null);
        }
        else{
            results(null,result);
        }
    })
}

module.exports = {  deletesources  } ;
