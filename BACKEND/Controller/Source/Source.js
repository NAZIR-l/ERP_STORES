const { CreateSource } = require('../../models/Source/SignUp')
const { ShowSource } = require('../../models/Source/ShowSource')
const {deletesources} = require('../../models/Source/deletesources')

const Resource = require('../../model/Source')
const SignUp = (req, res) => {
    let data = req.body;
    CreateSource(data, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log("controller"+result);
            res.send(result);
        }
    })
}

const Show = (req, res) => {
    ShowSource((err, results) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(results);
            res.send(results);
        }
    })
}


const SourceHome = (req, res) => {

if(req.session.passport === undefined){
    res.status(203).send("err");
}
else{
    Resource.findById(req.session.passport.user, (err, results) => {
        if(err){
            res.status(203).send("err");
        }
        else{
            res.send(results);
        }
      })

}

  
}




const deletesource = (req, res) => {
    const id = req.params.id;
    console.log(id);
    deletesources(id ,(err, result) => {
            if(err){
                res.send(err);
            }
            else{
                res.send(result);
            }
    })
}





module.exports = { SignUp, Show ,deletesource, SourceHome };
