
const Order = require('../../model/Order')
const Customer = require('../../model/Customer');
const ManagOrder = require('../../model/MANGOrders')
const Delivery = require('../../model/Delivery');

const { CreateOrder  } = require('../../models/Order/ManageOrders');





const MAnageOrder = (req, res) => {
    const data = req.body;
    CreateOrder(data,(err, order) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.json(order) 
        }
    })
}


const UpdateState = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    console.log(data)
    console.log(id)
 
    ManagOrder.findByIdAndUpdate(id,{State:data.State},(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.status(200).send(result);
        }
    })

}



const UpdateStateReady = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    console.log(data)
    console.log(id)
    // res.send(data)
    console.log(req.session)


    Delivery.findById(req.session.passport.user,(err,Delivery)  => {  
        ManagOrder.findByIdAndUpdate(id,{State:data.State , DeliveryEmail:Delivery.Email},(err,result)=>{
            if(err){
                res.send(err);
            }
            else{
                res.status(200).send(result);
            }
        })
    
    })

 
}







module.exports = { MAnageOrder ,UpdateState , UpdateStateReady};