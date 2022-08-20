const Products = require('../../model/Product.js')

const ShowProduct = (result) => {
  try {
    Products.find({}).then((results) => {
      result(null, results) 
    })
  } catch (error) {
    console.log(error);
    result(error, null)
  }
}
module.exports = { ShowProduct };