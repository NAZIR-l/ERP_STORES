const {  CreateEmployee  } = require('../../models/Employee/CreateEmployee')
const {ShowEmployee} = require('../../models/Employee/ShowEmployee')
const Employee = require('../../model/DBemployee')
const bcrypt = require('bcrypt');
const Delivery = require('../../model/Delivery')
const {getEmployeeById} = require('../../models/Employee/GetEmployeeById')
const {deleteemployeeById}= require('../../models/Employee/deleteemployeeById')
const {UpdateEmployeeById} = require('../../models/Employee/UpdateEmployeeById')
const {AddDeliverys}= require('../../models/Employee/AddDeliverys')
const {DeleteDeliverybyid}= require('../../models/Delivery/DeleteDeliverybyid')


const ShowEmployees = (req,res)=>{
    ShowEmployee((err,results)=>{
    if(err) 
    {
        res.send(err);
    }
    else { 
        // console.log(results)
        res.json(results);
    }
    })
    }



const CreateEmployees = (req,res)=>{
    const data = req.body;
    Employee.find({ Email: data.Email }, async function (err, results) {
        if (results.length > 0) {
            res.status( ).send('the Eamil is already exist.. ')
                
        }
        else {
                const hashPassword = await bcrypt.hash(req.body.passwords, 10)
                CreateEmployee({ NAME: req.body.NAME, Phone: req.body.Phone, Address: req.body.Address, passwords: hashPassword, Salary: req.body.Salary ,Date:req.body.Date ,Email: req.body.Email}, (err, results) => {
                    if (err) {
                        res.status(200).send('the process is not done ')
                    }
                    else {
                        // res.json(results);
                        res.status(201).send('Seccess Rigister')
                    }
                })
            
           
        }
    })
}
 const showEmployeeById = (req, res) => {
    getEmployeeById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

const UpdateEmployee = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    console.log(data);
    UpdateEmployeeById(  data ,id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

 const deleteEmployee = (req, res) => {
    const id = req.params.id;
    deleteemployeeById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
const DeleteDelivery = (req, res) => {
    const id = req.params.id;
    DeleteDeliverybyid(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

 const AddDelivery = (req, res) => {    
    const data= req.body
    AddDeliverys(data, (err, results) => {
        if(err) {
            res.send(err)
        }
        else{
            res.status(200).send(results)
        }
    })
 }

const ShowDelivery = (req, res) => {
    Delivery.find({},(err, results)=>{
        if(err) res.send(err) 
        else res.status(200).send(results)
    })
}


module.exports = { CreateEmployees , ShowEmployees , showEmployeeById ,deleteEmployee ,UpdateEmployee ,AddDelivery ,ShowDelivery ,DeleteDelivery};