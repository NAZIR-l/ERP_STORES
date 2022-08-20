const ManagOrder = require('../../model/MANGOrders')


const CreateOrder = (data, order) => {
    ManagOrder.create(data, (err, orders) => {
        if (err) {
            order(err, null)
        }
        else {
            order(null, orders)
        }
    })
}
module.exports = { CreateOrder };
