
const { response } = require('express');
var express = require('express');

const { SignUp, Show, deletesource ,SourceHome} = require('../Controller/Source/Source')

const Customer = require('../model/Customer');
const ManagOrder = require('../model/MANGOrders');

var router = express.Router();

const manger = require('../routes/manger');



router.post('/SignUp', SignUp);

router.post('/add' ,(req, res, next) => {
    const data = req.body;
    let arr = data.Product.split(',');
    console.log(arr);
    Customer.findOne({ Email: data.Customer }, (err,Customers ) => {
        if (err) {
            console.log(err);
        }
        else {
            ManagOrder.create({ EMAILCustomer: Customers.Email, Totalquantity: arr.length, Product: arr, Total_price: data.Price, State: data.State, Location: "Out Website" }, (err, OrderStatus) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(OrderStatus);
                }
            })
        }
    })


    // res.status(200).send(data)
});


router.get('/Show', Show);
router.get('/SourceHome', SourceHome);

router.get('/test',manger.sign_Source ,(req,res,next) => {
    res.status(200),send("Authenticated")
});


router.delete('/Delete/:id', deletesource);





module.exports = router;
