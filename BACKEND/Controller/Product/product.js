const { CreateProduct } = require('../../models/Product/CreateProduct')
const Order = require('../../model/Order')
const Customer = require('../../model/Customer')
const Products = require('../../model/Product')

const { CreateOrder } = require('../../models/Order/Order')

const { ShowProduct } = require('../../models/Product/ShowProduct')

const { deleteProductById } = require('../../models/Product/deleteProductById')

const { getProductById } = require('../../models/Product/getProductById')

const { UpdateProductById } = require('../../models/Product/UpdateProduct')
const Product = require('../../model/Product')


const ShowProductes = (req, res) => {
    ShowProduct((err, results) => {
        if (err) {
            console.log('err')
            res.send(err);
        }
        else {
            // res.json(results);
            res.send(results);
        }
    })
}



const CreateProducts = (req, res) => {
    const data = req.body;
    CreateProduct(data, (err, results) => {
        if (err) {
            console.log(err.message)
            res.send(err);
        }
        else {

            res.json(results);
        }
    })
}




















const showProductById = (req, res) => {
    getProductById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        }
        else {

            try {

                res.send(results)
                console.log(req.session.passport.user + "    JDSLFJ")
                console.log( "    JDSLFJ")

                Customer.findById(req.session.passport.user, function (err, ress) {
                    if (err) {
                        console.log(err);
                        res.status(203)
                    } else {
                        console.log("Email  iud " + ress.Email)
                        console.log("Email  iud " + results)
                        console.log(results.id)
                        let quantity =0;
                        Order.find({Index: results._id } , function (err, resupdate) {
                            for (let i = 0; i < resupdate.length; i++) {
                                quantity += resupdate[i].quantity;
                            }
                            console.log()

                            console.log(results.quantity)
                            if(quantity < results.quantity){
                                Products.findById(results.id,(err,results) => {
                                    if(err){
                                        console.log(err);
                                    }
                                    else{
                                        console.log("results");
                                        results.quantity = results.quantity - 1;
                                        results.save();
                                        console.log(results);
                                    }
                                })
                                Order.findOne({Index: results._id , EMAILCustomer:ress.Email} , function (err, resupdate) {
                                    console.log(resupdate)
                                    if (resupdate ) {
                                            console.log("resupdate  " + resupdate.quantity)
                                            resupdate.quantity = resupdate.quantity + 1;
                                            console.log("resupdate 3 " + resupdate.quantity);
                                            resupdate.save();
        
                                    }
                                    else {
                             
                                        console.log("in else")
                                        CreateOrder({ Index: results.id, EMAILCustomer: ress.Email, Product: [results.productName, results.price, results.information], quantity: 1, Total_price: 0, State: "false" }, (err, results) => {
                                            if (err) {
                                                console.log(err)
                                                res.status(203)
                                            }
                                            else {
                                                console.log(results)
                                            }
                                        })
        
        
                                    }
        
                                })
                            }
                            else{
                                console.log( "the id iis onejafoilh hshdl    " +results.id)
                                Products.findByIdAndDelete(results.id ,(err,reso) => {
                                    if(err){
                                        console.log(err)
                                    }
                                    else{
                                        console.log(reso)
                                    }
                                })
                            }
                       
                        })

                       



                    }
                })

            }
            catch (err) {
                console.log("joislj")
                res.status(404)

            }


        }
    });
}



























const UpdateProduct = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    console.log(data);
    UpdateProductById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}




const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}


module.exports = { CreateProducts, ShowProductes, showProductById, deleteProduct, UpdateProduct };