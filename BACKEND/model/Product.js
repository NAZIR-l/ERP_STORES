const mongoose = require('mongoose');
	const DBProducts = mongoose.Schema({
        imagePath : String,
        productName :{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        information:{
            required:true,
            type :String
        },
        name_sources:{
            required:true,
            type :String
        },
        quantity:{
            required:true,
            type :Number
        },
    });

    module.exports = mongoose.model('Products',DBProducts);