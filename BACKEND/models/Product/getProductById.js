
const { model } = require('mongoose')
const Products = require('../../model/Product')            




const getProductById = (id, result) => {
    Products.findById(id, function (err, results) {
        if (err) {
            console.log(err);

            result(err, null);
        } else {
console.log("in   "+ results)
            result(null, results);
        }
    })
}



module.exports = { getProductById };