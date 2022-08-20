
const { model } = require('mongoose')
const Delivery = require('../../model/Delivery')

 const DeleteDeliverybyid = (id, result) => {

    Delivery.findByIdAndDelete(id, function (err, results) {
    if(err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
})     
}
      

module.exports = { DeleteDeliverybyid };
