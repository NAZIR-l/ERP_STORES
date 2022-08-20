const { models } = require('mongoose')
const Delivery = require('../../model/Delivery')


const AddDeliverys = (data, results) => {
    Delivery.create(data, (err, result) => {
        if (err) {
            results(err, null)
        }
        else {
            results(null, result)
        }
    })
}




module.exports = { AddDeliverys }