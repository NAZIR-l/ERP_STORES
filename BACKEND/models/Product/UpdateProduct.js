
const { model } = require('mongoose')
const Products = require('../../model/Product')            



const UpdateProductById = (data, id, result) => {
names= data.productName;
    console.log(names);
    Products.findByIdAndUpdate(id,
        { productName:data.productName , EmaimagePathil:data.imagePath , price:data.price , information:data.information ,name_sources:data.name_sources , quantity:data.quantity },
        {new: true },
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {    

                result(null, results);
            }
        })
        
}
module.exports = { UpdateProductById };