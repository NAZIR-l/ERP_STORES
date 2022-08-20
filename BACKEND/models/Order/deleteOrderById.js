
const { model } = require('mongoose')
const Order = require('../../model/Order')
const ManagOrder = require('../../model/MANGOrders')


 const deleteOrderById = (id, result) => {

    Order.findByIdAndDelete(id, function (err, results) {
    if(err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
})     
}


const deleteOrderByIdM = (id, result) => {

    ManagOrder.findByIdAndDelete(id, function (err, results) {
    if(err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
})     
}
      
      

module.exports = { deleteOrderById ,deleteOrderByIdM };
