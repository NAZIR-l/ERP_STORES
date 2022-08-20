const { create } = require('../../models/Customer/RigisterCustomer')
const { ins } = require('../../models/Customer/ShowCustomer')
const {deleteUserById}= require('../../models/Customer/deleteUserById')

const Customer = require('../../model/Customer')
const bcrypt = require('bcrypt');

const showuser = (req, res) => {
    ins((err, results) => {
        if (err) res.status(203);
        else {
            res.json(results);
        }
    })
}

const showProfile = (req, res) => {
    const id = req.session.passport.user
   Customer.findById(id,(err, results) => {
    if(err) {
        res.status(203);
    }
    else{
        res.send(results);
    }
   })
}

const createusers = async (req, res) => {
    const data = req.body;

    Customer.find({ Email: data.Email }, async function (err, results) {
        if (results.length > 0) {
            res.status(200).send('the Eamil is already exist.. ')
                
        }
        else {
            if (data.confi_password === data.passwords) {

                const hashPassword = await bcrypt.hash(req.body.passwords, 10)
                create({ First_name: req.body.First_name, Last_name: req.body.Last_name, Email: req.body.Email, passwords: hashPassword, Address: req.body.Address ,Street:req.body.Street , Phone: req.body.Phone}, (err, results) => {
                    if (err) {
                        res.status(200).send('the process is not done ')
                    }
                    else {
                        // res.json(results);
                        res.status(201).send('Seccess Rigister')
                    }
                })
            }
            else {
                        res.status(201).send("the passwords is not correct")
            }
        }
    })
}
const deleteUser = (req,res)=>{
    const id = req.params.id;
    deleteUserById(id ,(err,results)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json(results)
        }
    })

}

module.exports = { showuser, createusers  , deleteUser , showProfile};