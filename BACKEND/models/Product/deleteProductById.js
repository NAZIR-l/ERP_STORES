
const { model } = require('mongoose')
const Products = require('../../model/Product')            

 const deleteProductById = (id, result) => {

    Products.findByIdAndDelete(id, function (err, results) {
    if(err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
})     
}
      

module.exports = { deleteProductById };
