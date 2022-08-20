
const { deleteOrderById ,deleteOrderByIdM} = require('../../models/Order/deleteOrderById')
const Order = require('../../model/Order')
const Customer = require('../../model/Customer')
const ManagOrder = require('../../model/MANGOrders')





const GetAllOrder = (req, res) => {
    try {
        let id = req.session.passport.user
        Customer.findById(id, function (err, results) {
            console.log(results)
            ManagOrder.find({ EMAILCustomer : results.Email}).then((result) => {
                console.log(result)
                res.send(result);
            })
        })
       
    } catch (error) {
        // console.log(error)
        res.status(203).send("error")
    }
}
const ALLOrdersManageOK = (req, res) => {
    try {
            ManagOrder.find({State:"OK"}).then((result) => {
                res.send(result);
            })
    } catch (error) {
        // console.log(error)
        res.status(203).send("error")
    }
}


const ALLOrdersManage = (req, res) => {
    try {
            ManagOrder.find({State:"false"}).then((result) => {
                res.send(result);
            })
    } catch (error) {
        // console.log(error)
        res.status(203).send("error")
    }
}

const ALLOrdersByState = (req, res) => {
    try {
            ManagOrder.find({State:'ready'}).then((result) => {
                console.log(result)
                res.send(result);
            })
    } catch (error) {
        // console.log(error)
        res.status(203).send("error")
    }
}






const GetOrder = (req, res) => {

    try {
        const  id = req.session.passport.user
        Customer.findById(id, function (err, results) {
            if (err) {

                console.log(err)

            } else {
                Order.find({ EMAILCustomer: results.Email }).then((result) => {
                    console.log(result)
                    res.send(result);
                })

            }
        })
    } catch (error) {
        console.log(error);
        console.log("jisdjojf")
        res.status(203).send("jisdjojf");
    }

}



const deleteOrder = (req, res) => {
    const id = req.params.id;
    deleteOrderById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

const deleteOrderm = (req, res) => {
    const id = req.params.id;
    deleteOrderByIdM(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}










module.exports = { GetOrder ,deleteOrder,ALLOrdersManage  , GetAllOrder ,deleteOrderm ,ALLOrdersByState , ALLOrdersManageOK};